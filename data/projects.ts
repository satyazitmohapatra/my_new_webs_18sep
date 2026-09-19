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
  image?: string;
};

export const projects: Project[] = [
  {
    id: "PROJECT_001",
    image: "/projects/food_delivery.png",
    title: "FOOD DELIVERY PLATFORM",
    description: "Full-stack food delivery application with secure management and automated deployment.",
    status: "DEPLOYED",
    stack: ["Docker", "Azure", "CI/CD", "RESTful APIs", "SQL"],
    problem: "Managing scalable end-to-end food delivery including authentication, menus, and order tracking.",
    solution: "Developed a full-stack platform with RESTful APIs, containerized via Docker, and deployed via Azure CI/CD pipelines.",
    architecture: "Frontend communicating with backend services via REST APIs, backed by a relational database and orchestrated on Microsoft Azure.",
    deployment: "Containerized with Docker, deployed on Microsoft Azure using CI/CD pipelines.",
    github: "https://github.com/satyazitmohapatra"
  },
  {
    id: "PROJECT_002",
    image: "/projects/heart_disease.png",
    title: "HEART DISEASE PREDICTOR",
    description: "Centralized web application hosting multiple ML models for disease prediction.",
    status: "DEPLOYED",
    stack: ["Python", "Machine Learning", "Web", "Model Optimization"],
    problem: "Scattered diagnostic tools make real-time multi-disease prediction difficult.",
    solution: "Developed a centralized hub hosting multiple ML models for real-time diagnostic insights.",
    ai: "Implemented and optimized predictive algorithms to analyze health parameters.",
    github: "https://github.com/satyazitmohapatra/heart_disease_predictor"
  },
  {
    id: "PROJECT_003",
    image: "/projects/citizen_grievance.png",
    title: "CITYZEN - CIVIC GRAVIENCE APP",
    description: "Crowd-sourced civic issue reporting and tracking platform.",
    status: "DEPLOYED",
    stack: ["Flask", "MySQL", "Web", "Data Visualization"],
    problem: "Lack of a centralized, tracked platform for community members to report civic anomalies.",
    solution: "Engineered a web platform utilizing Flask and MySQL for backend integration and community data visualization.",
    architecture: "Flask backend processing reports and storing them in a MySQL database for visualization.",
    github: "https://github.com/satyazitmohapatra/Citizen-Gravience-System"
  },
  {
    id: "PROJECT_004",
    image: "/projects/laptop_price.png",
    title: "LAPTOP PRICE PREDICTOR",
    description: "Predictive ML model to estimate laptop prices based on hardware configurations.",
    status: "DEPLOYED",
    stack: ["Python", "Machine Learning", "Data Preprocessing"],
    problem: "Estimating accurate tech hardware prices based on mixed categorical and numerical specs.",
    solution: "Built a predictive model utilizing advanced preprocessing techniques for mixed datasets.",
    ai: "Regression modeling with extensive feature engineering and preprocessing.",
    github: "https://github.com/satyazitmohapatra/laptop_price_predictor"
  },
  {
    id: "PROJECT_005",
    image: "/projects/bangalore_real_estate.png",
    title: "BANGALORE HOUSE PRICE PREDICTOR",
    description: "Regression-based model integrated with a user-friendly frontend for real-time property estimates.",
    status: "DEPLOYED",
    stack: ["Python", "Machine Learning", "Web", "Regression"],
    problem: "Users needed a real-time, interactive way to estimate real estate prices in Bangalore.",
    solution: "Designed a regression model and integrated its backend logic with a frontend interface for real-time estimation.",
    ai: "Regression-based predictive algorithms.",
    github: "https://github.com/satyazitmohapatra/Bangalore-HousePrice-Prediction-Model"
  },
  {
    id: "PROJECT_006",
    image: "/projects/olympic_data.png",
    title: "OLYMPIC DATA ANALYSIS",
    description: "Interactive data visualization of 120 years of Olympic athlete performance.",
    status: "DEPLOYED",
    stack: ["Python", "Pandas", "Seaborn", "Data Visualization"],
    problem: "Extracting meaningful trends from over a century of complex athletic data.",
    solution: "Conducted extensive EDA using Pandas and Seaborn to identify trends in medal counts and participation.",
    architecture: "Data pipelines transforming raw historical data into interactive visualizations.",
    github: "https://github.com/satyazitmohapatra"
  }
];
