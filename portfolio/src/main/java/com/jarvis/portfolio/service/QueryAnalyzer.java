package com.jarvis.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jarvis.portfolio.model.QueryIntent;

@Service
public class QueryAnalyzer {
	
	public QueryIntent analyze(String question) {
		
		String normalizedQuestion = question.toLowerCase().trim();
		
		if(containsAny(normalizedQuestion, List.of( "current role",
                "currently",
                "current company",
                "working now",
                "what is he working on"))) {
			return QueryIntent.CURRENT_ROLE;
		}
		
		if(containsAny(normalizedQuestion, List.of( "project",
                "projects",
                "built"))) {
			return QueryIntent.PROJECTS;
		}
		
		if(containsAny(normalizedQuestion, List.of( "experience",
                "worked",
                "company",
                "career"))) {
			return QueryIntent.EXPERIENCE;
		}
		
		if(containsAny(normalizedQuestion, List.of( "award",
                "achievement",
                "recognition"))) {
			return QueryIntent.ACHIEVEMENTS;
		}
		
		if(containsAny(normalizedQuestion, List.of( "degree",
                "education",
                "university",
                "college"))) {
			return QueryIntent.EDUCATION;
		}
		
		if(containsAny(normalizedQuestion, List.of( "system design",
                "payment system",
                "notification system",
                "architecture"))) {
			return QueryIntent.SYSTEM_DESIGN;
		}
		
		if (containsAny(normalizedQuestion, List.of("job description",
		        "job description analysis",
		        "analyze this job",
		        "analyze the job",
		        "match this job",
		        "match this role",
		        "job requirements"))) {

		    return QueryIntent.JOB_DESCRIPTION_ANALYSIS;
		}
		
		if(containsAny(normalizedQuestion, List.of( "shortlist",
                "good fit",
                "fit for",
                "hire",
                "candidate"))) {
			 return QueryIntent.CANDIDATE_ASSESSMENT;
		}
		
		if(containsAny(normalizedQuestion, List.of( "kafka",
                "java",
                "spring boot",
                "react",
                "docker",
                "kubernetes",
                "mongodb",
                "postgresql"))) {
			return QueryIntent.SKILLS;
		}
		
		return QueryIntent.GENERAL;
	} 
	
	public boolean containsAny(String question, List<String> keywords) {
		return keywords.stream().anyMatch(keyword -> question.contains(keyword));
	}

}
