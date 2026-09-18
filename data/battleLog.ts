export const battleLogs = [
  {
    id: "LOG_001",
    title: "KUBERNETES AUTO-HEALING",
    problem: "Production pods were randomly crashing during memory-intensive ML inferences, causing cascading service failures.",
    investigation: "Monitored cluster health and identified that the services lacked proper liveness and readiness probes, meaning the orchestrator was unaware of the crashes and traffic was still routing to dead containers.",
    resolution: "Configured aggressive liveness and readiness probes, leveraging Kubernetes auto-healing with ReplicaSets to instantly detect and spin up new pods upon failure.",
    lesson: "Never trust a container to stay alive. Always architect for failure and let the orchestrator handle the recovery automatically."
  },
  {
    id: "LOG_002",
    title: "CONTAINERIZATION & DEPENDENCY MANAGEMENT",
    problem: "An application worked perfectly on the local development machine but failed with mismatched library errors when deployed to the cloud environment.",
    investigation: "Traced the root cause to differing Python minor versions and conflicting system-level packages on the host Virtual Machine.",
    resolution: "Fully containerized the application using Docker. Engineered a multi-stage Dockerfile that isolated the environment, strictly locked all dependencies, and minimized the final deployment image size.",
    lesson: "Containerization is mandatory for predictable, consistent deployments. 'It works on my machine' is solved by shipping the machine."
  }
];
