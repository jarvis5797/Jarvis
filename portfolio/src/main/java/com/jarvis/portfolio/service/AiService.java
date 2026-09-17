package com.jarvis.portfolio.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.jarvis.portfolio.exception.AiServiceException;
import com.jarvis.portfolio.model.JobMatchReport;
import com.jarvis.portfolio.model.QueryIntent;

@Service
public class AiService {

	private final Client client;

	private final ObjectMapper objectMapper;

	public AiService() {
		client = Client.builder().apiKey(System.getenv("GEMINI_API_KEY")).build();
		objectMapper = new ObjectMapper();
	}

	public String generateAnswer(String question, String knowledge, String jobDescription, QueryIntent intent) {

		String prompt = buildPrompt(question, knowledge, jobDescription, intent);

		try {
			GenerateContentResponse response = client.models.generateContent("gemini-3.6-flash", prompt, null);

			return response.text();
		} catch (Exception e) {
			throw new AiServiceException("AI Service is currently unavailable", e);
		}

	}

	private String buildPrompt(String question, String knowledge, String jobDescription, QueryIntent intent) {

		String formatInstruction = "";

		if (intent == QueryIntent.JOB_DESCRIPTION_ANALYSIS) {

			formatInstruction = """
					Return ONLY valid JSON using exactly this structure:

					{
					  "summary": "short overall assessment",
					  "matches": [
					    {
					      "requirement": "requirement from job description",
					      "status": "STRONG | PARTIAL",
					      "evidence": "specific candidate evidence"
					    }
					  ],
					  "gaps": [
					    {
					      "requirement": "requirement from job description",
					      "status": "INSUFFICIENT_EVIDENCE",
					      "evidence": "what is known or unknown"
					    }
					  ]
					}

					Do not use markdown.
					Do not add ```json.
					Do not add text outside the JSON.
					""";

		} else {

			formatInstruction = """
					Answer naturally using concise,
					recruiter-friendly text.
					""";
		}
		// Build prompt
		String prompt = """
				 You are Ashutosh AI, a professional recruiter-facing
				assistant representing Ashutosh Raj Baranwal.

				Answer the recruiter's question using ONLY the
				candidate knowledge provided below.

				Rules:
				1. Never invent experience, skills, projects,
				   responsibilities or achievements.
				2. Clearly distinguish professional experience
				   from personal projects.
				3. If the information is not available,
				   clearly say that it is not available.
				4. Keep the answer concise, professional,
				   and easy to scan.
				5. Start with a direct answer when appropriate.
				6. Use bullet points when they improve readability.
				7. Mention specific technologies and real experience
				   as evidence when relevant.
				8. Do not repeat the recruiter's question.
				9. Do not mention that you are an AI.
				10. Do not mention internal systems or implementation details.
				11. Do not claim that a candidate matches job requirements
				    unless a job description was actually provided.
				12. For candidate-fit questions without a job description,
				    evaluate the candidate based on the requested role
				    and the available candidate evidence.
				13. Prefer concrete evidence from professional experience
				    over generic skill statements.
				14. For candidate assessment questions, prioritize concrete
								professional evidence, measurable improvements, migrations,
								production responsibilities, and system design experience
								instead of simply listing technologies.
				15. Do not repeat the same information in multiple bullet points.
				16. When assessing fit, explain WHY the evidence supports the
								assessment.
				17. Do not calculate or estimate years of experience yourself.
				    Use the employment dates provided in the candidate knowledge,
				    but do not perform date arithmetic.

				18. Do not describe a skill as "hands-on", "production-tested",
				    "deep expertise", or "qualified" unless the candidate knowledge
				    explicitly provides evidence supporting that description.

				19. A technology listed in the skills section alone should be
				    described as "listed as a skill" rather than proof of
				    professional or production experience.

				20. Do not claim that every job requirement is satisfied simply
				    because related technologies appear in the candidate profile.

				21. When evidence is insufficient, explicitly classify it as
				    "Insufficient evidence" rather than assuming experience.

				 Candidate Knowledge:
				 %s

				 Job Description:
				 %s

				 Recruiter's Question:
				 %s

				 Format Instruction:
				 %s

				 """.formatted(knowledge, jobDescription == null ? "No job description provided." : jobDescription,
				question, formatInstruction);
		return prompt;
	}

	public JobMatchReport generateJobMatchReport(String question, String knowledge, String jobDescription) {

		String prompt = buildPrompt(question, knowledge, jobDescription, QueryIntent.JOB_DESCRIPTION_ANALYSIS);
		GenerateContentResponse response;
		try {
			response = client.models.generateContent("gemini-3.6-flash", prompt, null);
		} catch (Exception e) {
			throw new AiServiceException("AI Service is currently unavailable", e);
		}

		try {
			return objectMapper.readValue(response.text(), JobMatchReport.class);
		} catch (Exception e) {
			throw new AiServiceException("Failed to process AI response.", e);
		}
	}

}
