export type MatchItem = {
    requirement: string;
    status: "STRONG" | "PARTIAL";
    evidence: string;
}

export type GapItem = {
    requirement: string;
    status: "INSUFFICIENT_EVIDENCE";
    evidence: string;
}

export type JobMatchReport = {
  summary: string;
  matches: MatchItem[];
  gaps: GapItem[];
};