package com.jarvis.portfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jarvis.portfolio.dto.ChatRequest;
import com.jarvis.portfolio.dto.ChatResponse;
import com.jarvis.portfolio.model.JobMatchReport;
import com.jarvis.portfolio.model.QueryIntent;
import com.jarvis.portfolio.service.AiService;
import com.jarvis.portfolio.service.KnowledgeRetrievalService;
import com.jarvis.portfolio.service.KnowledgeService;
import com.jarvis.portfolio.service.QueryAnalyzer;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {
	
	private final KnowledgeRetrievalService knowledgeRetrievalService;
	
	private final QueryAnalyzer queryAnalyzer;
	
	private final AiService aiService;
	
	
	@PostMapping
	public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
		
		String jobDescription = request.getJobDescription();
		String question = request.getQuestion();
		QueryIntent intent;
		if(jobDescription != null && !jobDescription.isBlank()) {
			intent = QueryIntent.JOB_DESCRIPTION_ANALYSIS;
		} else {
			intent = queryAnalyzer.analyze(question);
		}
		String knowledge = knowledgeRetrievalService.retrieve(intent);
		
		if(intent == QueryIntent.JOB_DESCRIPTION_ANALYSIS) {
			
			JobMatchReport answer  = aiService.generateJobMatchReport(question, knowledge, jobDescription);
			
			return new ResponseEntity<>(new ChatResponse(null, answer), 
					HttpStatus.OK);
		} else {
			String answer = aiService.generateAnswer(question, knowledge, jobDescription, intent);
			
			return new ResponseEntity<>(new ChatResponse(answer, null), 
					HttpStatus.OK);
		}
	}

}
