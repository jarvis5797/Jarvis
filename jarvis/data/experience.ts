export type Experience = {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export const experiences: Experience[] = [{
    company: "CloudSufi",
    role: "Software Engineer",
    duration: "Jan 2026 - Present",
    location: "Noida",
    description:
        "Built the Shopify to BigQuery Data Transfer Connector using Java, Spring Boot, Google Pub/Sub and REST APIs.",
    responsibilities: [
        "Designed, developed, tested and deployed the Shopify to BigQuery connector.",
        "Provided production support and resolved critical issues within SLOs.",
        "Performed root cause analysis and implemented performance and stability improvements.",
        "Addressed security vulnerabilities and production issues."
    ],
    technologies: [
        "Java",
        "Spring Boot",
        "Google Pub/Sub",
        "REST APIs"
    ]
},
{
    company: "Innova Solutions",
    role: "Software Engineer",
    duration: "Mar 2024 - Dec 2025",
    location: "Noida",
    description:
        "Worked on the CAPE healthcare platform responsible for calculating monthly provider payments based on member plans.",
    responsibilities: [
        "Developed backend APIs using Java and Spring Boot.",
        "Worked with microservices architecture and Kafka-based communication.",
        "Led migration of Kafka from on-premises to Confluent Cloud.",
        "Implemented OAuth 2.0 for third-party APIs.",
        "Optimized MongoDB and PostgreSQL bulk inserts by 30%.",
        "Migrated microservices to Spring Boot 3.3.4.",
        "Developed React pages and supported production issues."
    ],
    technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "MongoDB",
        "PostgreSQL",
        "React"
    ]
},
{
    company: "Innova Solutions",
    role: "Associate Software Engineer",
    duration: "Jun 2022 - Mar 2024",
    location: "Noida",
    description:
        "Worked on backend development and production support for enterprise applications.",
    responsibilities: [
        "Developed and maintained backend APIs.",
        "Resolved production issues and performed root cause analysis.",
        "Worked with Java, Spring Boot and database technologies."
    ],
    technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL"
    ]
}
];