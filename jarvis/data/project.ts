export type Project = {
    name: string;
  type: "Professional" | "Personal";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    name: "Shopify to BigQuery Connector",
    type: "Professional",
    description:
      "Built a data transfer connector that transfers data from Shopify to Google BigQuery.",
    responsibilities: [
      "Designed and developed the connector using Java and Spring Boot.",
      "Worked across design, development, testing and deployment.",
      "Provided production support and resolved production issues.",
      "Performed root cause analysis and improved performance and stability."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Google Pub/Sub",
      "REST APIs"
    ]
  },
  {
    name: "CAPE Healthcare Platform",
    type: "Professional",
    description:
      "Healthcare platform that calculates monthly provider payments based on the plans selected by members.",
    responsibilities: [
      "Developed backend APIs using Java and Spring Boot.",
      "Worked with microservices architecture and Kafka-based communication.",
      "Led migration from on-premise Kafka to Confluent Cloud.",
      "Implemented OAuth 2.0 for third-party APIs.",
      "Optimized MongoDB and PostgreSQL bulk inserts by 30%.",
      "Migrated microservices to Spring Boot 3.3.4."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    name: "Splitwise Clone",
    type: "Personal",
    description:
      "Bill-splitting application that allows users to create groups and manage shared expenses.",
    responsibilities: [
      "Built backend services using Java and Spring Boot.",
      "Implemented microservice-based architecture.",
      "Used Kafka for asynchronous communication.",
      "Built the frontend using React."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Kafka",
      "Microservices",
      "Cache"
    ]
  },
  {
    name: "OwnIt",
    type: "Personal",
    description:
      "QR-based asset ownership tracking application. Scanning an asset's QR code provides information needed to contact its owner.",
    responsibilities: [
      "Built the backend using Java and Spring Boot.",
      "Implemented QR generation and asset ownership tracking.",
      "Designed APIs for asset and owner management.",
      "Used microservices and Kafka-based communication."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Kafka",
      "Microservices",
      "Cache"
    ]
  }
];