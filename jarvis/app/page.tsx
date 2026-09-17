"use client";

import { useState } from "react";
import SkillBadge from "../components/SkillBadge";
import AIInput from "../components/AIInput";
import ChatMessage from "../components/ChatMessage";
import { JobMatchReport as JobMatchReportType } from "@/types/jobMatch";
import JobMatchReport from "@/components/JobMatchReport";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectsSection";

type Message = {
  role: "user" | "jarvis";
  content: string;
};

export default function Home() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [jobMatchReport, setJobMatchReport] =
    useState<JobMatchReportType | null>(null);

  const [jobDescription, setJobDescription] = useState("");
  const [isJobAnalysis, setIsJobAnalysis] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk() {
    if (isLoading) {
      return;
    }

    if (isJobAnalysis && !jobDescription.trim()) {
      return;
    }

    if (!isJobAnalysis && !question.trim()) {
      return;
    }

    if (!isJobAnalysis) {
      const userMessage: Message = {
        role: "user",
        content: question,
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
      ]);
    }

    setError("");
    setQuestion("");
    setIsLoading(true);
    setJobMatchReport(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            question: isJobAnalysis
              ? "Analyze Ashutosh's fit for this role"
              : question,

            jobDescription: isJobAnalysis
              ? jobDescription
              : "",
          }),
        }
      );

      if (!response.ok) {

        const errorData = await response.json();

        throw new Error( errorData.error || "Backend request failed");
      }

      const data = await response.json();

      if (data.report) {
        setJobMatchReport(data.report);
        setJobDescription("");
      }

      else if (data.answer) {
        const assistantMessage: Message = {
          role: "jarvis",
          content: data.answer,
        };

        setMessages((previousMessages) => [
          ...previousMessages,
          assistantMessage,
        ]);
      }
    } catch (error) {
      console.error(error);

      setError(error instanceof Error ? error.message : "An error occurred while processing your request. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Java Full Stack Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Ashutosh Raj Baranwal
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Backend-focused software engineer building scalable applications
          with Java, Spring Boot, microservices, Kafka and modern web
          technologies.
        </p>

        <div className="mt-12 w-full max-w-2xl">

          <div className="mb-4 text-left">
            <p className="text-sm font-medium text-gray-400">
              Ask Jarvis
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Explore experience, projects, skills and career fit.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">

            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {jobMatchReport && (
              <JobMatchReport report={jobMatchReport} />
            )}

          </div>

          {isLoading && (
            <div className="mt-4 flex justify-start">
              <div className="w-full rounded-2xl border border-gray-800 bg-gray-950 p-5 text-left">

                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:300ms]" />
                  </div>

                  <p className="text-sm text-gray-400">
                    {isJobAnalysis
                      ? "Analyzing job requirements against Ashutosh's experience..."
                      : "Jarvis is thinking..."}
                  </p>
                </div>

              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-xl border border-red-900 bg-red-950/30 p-4 text-left">
              <p className="text-sm text-red-400">
                {error}
              </p>
            </div>
          )}

          <div className="mb-4 mt-8 flex gap-2">

            <button
              onClick={() => {
                setIsJobAnalysis(false);
                setJobDescription("");
                setJobMatchReport(null);
                setError("");
              }}
              className={`rounded-lg px-4 py-2 text-sm ${!isJobAnalysis
                ? "bg-white text-black"
                : "border border-gray-800 text-gray-400"
                }`}
            >
              Ask About Me
            </button>

            <button
              onClick={() => {
                setIsJobAnalysis(true);
                setJobMatchReport(null);
                setError("");
              }}
              className={`rounded-lg px-4 py-2 text-sm ${isJobAnalysis
                ? "bg-white text-black"
                : "border border-gray-800 text-gray-400"
                }`}
            >
              Analyze Job Description
            </button>

          </div>

          {isJobAnalysis && (
            <div className="flex flex-col gap-4">
              <div className="relative">
                <textarea
                  value={jobDescription}
                  onChange={(e) =>
                    setJobDescription(e.target.value)
                  }
                  placeholder="Paste the job description here..."
                  rows={8}
                  maxLength={10000}
                  className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-600"
                />
                <div className="absolute bottom-3 right-4 text-xs text-gray-600">
                  {jobDescription.length}/10000
                </div>
              </div>
              {jobDescription && (
                <button
                  onClick={() => {
                    setJobDescription("");
                    setJobMatchReport(null);
                  }}
                  className="self-end text-xs text-gray-500 hover:text-gray-300"
                >
                  Clear
                </button>
              )}

              <button
                onClick={handleAsk}
                disabled={
                  isLoading ||
                  !jobDescription.trim()
                }
                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading
                  ? "Analyzing..."
                  : "Analyze Ashutosh's Fit"}
              </button>

            </div>
          )}

          {!isJobAnalysis && (
            <AIInput
              question={question}
              setQuestion={setQuestion}
              onAsk={handleAsk}
              isLoading={isLoading}
            />
          )}

        </div>

        <ExperienceSection />

        <ProjectSection />

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          <SkillBadge name="4+ years of experience" />
          <SkillBadge name="Java" />
          <SkillBadge name="Spring Boot" />
          <SkillBadge name="Microservices" />
          <SkillBadge name="System Design" />

        </div>

      </section>

    </main>
  );
}