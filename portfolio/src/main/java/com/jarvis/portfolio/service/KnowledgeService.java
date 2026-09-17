package com.jarvis.portfolio.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service
public class KnowledgeService {

	private String readJsonFile(String fileName) {

		try {
			ClassPathResource resource = new ClassPathResource(fileName);

			InputStream inputStream = resource.getInputStream();

			return new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);

		} catch (IOException e) {
			throw new RuntimeException("Could not read knowled file: " + fileName, e);
		}
	}

	public String getProfileKnowledge() {
		return readJsonFile("data/profile.json");
	}

	public String getSkillsKnowledge() {
		return readJsonFile("data/skills.json");
	}

	public String getExperienceKnowledge() {
		return readJsonFile("data/experience.json");
	}

	public String getCurrentRoleKnowledge() {
		return readJsonFile("data/experience.json");
	}

	public String getProjectsKnowledge() {
		return readJsonFile("data/projects.json");
	}

	public String getAchievementsKnowledge() {
		return readJsonFile("data/achivements.json");
	}

	public String getEducationKnowledge() {
		return readJsonFile("data/education.json");
	}

	public String getSystemDesignKnowledge() {
		return readJsonFile("data/profile.json");
	}

	public String getCandidateAssessmentKnowledge() {
		return readJsonFile("data/profile.json");
	}
	
	public String getJobDescriptionKnowledge() {
		return  getProfileKnowledge()
	            + "\n\n"
	            + getSkillsKnowledge()
	            + "\n\n"
	            + getExperienceKnowledge()
	            + "\n\n"
	            + getProjectsKnowledge()
	            + "\n\n"
	            + getAchievementsKnowledge()
	            + "\n\n"
	            + getSystemDesignKnowledge();
	}

	public String getGeneralKnowledge() {
		return readJsonFile("data/profile.json");
	}

}
