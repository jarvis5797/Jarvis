package com.jarvis.portfolio.service;

import org.springframework.stereotype.Service;

import com.jarvis.portfolio.model.QueryIntent;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class KnowledgeRetrievalService {

	private final KnowledgeService knowledgeService;

	public String retrieve(QueryIntent intent) {

		return switch (intent) {

		case SKILLS -> knowledgeService.getSkillsKnowledge();

		case EXPERIENCE -> knowledgeService.getExperienceKnowledge();

		case CURRENT_ROLE -> knowledgeService.getCurrentRoleKnowledge();

		case PROJECTS -> knowledgeService.getProjectsKnowledge();

		case ACHIEVEMENTS -> knowledgeService.getAchievementsKnowledge();

		case EDUCATION -> knowledgeService.getEducationKnowledge();

		case SYSTEM_DESIGN -> knowledgeService.getSystemDesignKnowledge();

		case PROFILE -> knowledgeService.getProfileKnowledge();

		case JOB_DESCRIPTION_ANALYSIS -> knowledgeService.getJobDescriptionKnowledge();

		case CANDIDATE_ASSESSMENT -> knowledgeService.getCandidateAssessmentKnowledge();

		case GENERAL -> knowledgeService.getGeneralKnowledge();
		};

	}

}
