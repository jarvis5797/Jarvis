package com.jarvis.portfolio.dto;

import com.jarvis.portfolio.model.JobMatchReport;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChatResponse {
	
	private String answer;
	
	private JobMatchReport report;

}
