package com.jarvis.portfolio.model;

import java.util.List;

import lombok.Data;

@Data
public class JobMatchReport {
	
	private String summary;
	
	private List<MatchItem> matches;
	
	private List<GapItem> gaps;

}
