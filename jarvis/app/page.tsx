"use client";
import Image from "next/image";
import { useState } from "react";
import SkillBadge from "../components/SkillBadge";
import AIInput from "../components/AIInput";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-centerflex flex-col items-center justify-center min-h-screen">
        
        <p className= "mb-4 text-sm uppercase tracking-[0.3em] text-gray-400" >
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

          <AIInput
            question={question}
            setQuestion={setQuestion}
            onAsk={() => setSubmittedQuestion(question)}
          />

          {submittedQuestion && (
            <p className="mt-6 text-gray-300">
              You asked: {submittedQuestion}
            </p>
          )}
        

        <p className="mt-5 text-sm text-gray-500">
          Try asking: "Why should I shortlist Ashutosh?"
        </p>

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
