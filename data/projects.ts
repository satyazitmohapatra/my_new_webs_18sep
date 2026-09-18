export type Project = {
  id: string;
  title: string;
  description: string;
  status: "DEPLOYED" | "IN_PROGRESS" | "ARCHIVED";
  stack: string[];
  problem: string;
  solution: string;
  architecture?: string;
  ai?: string;
  results?: string;
  deployment?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "PROJECT_001",
    title: "SWACHHLENS",
    description: "AI-powered civic decision support system.",
    status: "DEPLOYED",
    stack: ["Python", "AI/ML", "React", "Docker", "Cloud"],
    problem: "Inefficient waste management and lack of data-driven civic decision making in urban areas.",
    solution: "A computer vision platform that analyzes CCTV footage to detect civic anomalies and predict maintenance requirements.",
    architecture: "Edge inference using optimized PyTorch models, reporting to a centralized FastAPI backend, with a Next.js frontend for municipal authorities.",
    ai: "YOLOv8 fine-tuned on custom datasets for civic issue detection. Forecasting models for anomaly prediction.",
    results: "Reduced response time by 40% in pilot deployments.",
    deployment: "Containerized with Docker, orchestrated via Kubernetes on AWS.",
    github: "https://github.com/kunal/swachhlens",
    demo: "https://swachhlens.demo"
  },
  {
    id: "PROJECT_002",
    title: "CITYZEN",
    description: "Urban planning data intelligence platform.",
    status: "DEPLOYED",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "FastAPI"],
    problem: "Disjointed urban data preventing cohesive city planning.",
    solution: "Aggregated dashboard bringing together traffic, pollution, and population density data.",
    architecture: "Microservices architecture ingesting public data APIs, stored in a spatial database (PostGIS).",
    github: "https://github.com/kunal/cityzen"
  },
  {
    id: "PROJECT_003",
    title: "CHATAPP",
    description: "High-performance real-time messaging system.",
    status: "IN_PROGRESS",
    stack: ["Go", "Redis", "WebSockets", "React"],
    problem: "Existing solutions have high latency at scale.",
    solution: "Custom WebSocket router utilizing Redis Pub/Sub for horizontal scalability.",
    github: "https://github.com/kunal/chatapp"
  }
];
