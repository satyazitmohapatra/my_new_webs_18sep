export const battleLogs = [
  {
    id: "BATTLE_001",
    title: "KUBERNETES AUTHENTICATION ISSUE",
    problem: "Unauthorized requests randomly failing in microservices due to missing authentication token during high load.",
    investigation: "Checked backend logs, traced API requests, and inspected JWT handling. Discovered race condition in token refresh logic before sending to downstream services.",
    resolution: "Implemented a robust token caching mechanism with pre-emptive refresh 5 minutes before expiry. Corrected authentication flow across the ingress controller.",
    lesson: "Distributed systems debugging requires tracing the entire request path. Always assume tokens will expire at the worst possible time."
  },
  {
    id: "BATTLE_002",
    title: "DATABASE CONNECTION POOL EXHAUSTION",
    problem: "Application crashing during peak hours with 'FATAL: sorry, too many clients already' PostgreSQL errors.",
    investigation: "Analyzed database connections. Found that idle connections were not being closed properly by the ORM, and serverless functions were spinning up too many connections.",
    resolution: "Introduced PgBouncer as a connection pooler and optimized ORM lifecycle hooks to explicitly release connections.",
    lesson: "Connection pooling is not optional in a serverless/microservices architecture."
  },
  {
    id: "BATTLE_003",
    title: "MEMORY LEAK IN ML INFERENCE SERVICE",
    problem: "Docker container running PyTorch inference OOM crashing after 48 hours of continuous operation.",
    investigation: "Used memory profiling tools (memory_profiler) on the Python service. Noticed tensors were not being detached from the computational graph during inference.",
    resolution: "Wrapped inference blocks with `torch.no_grad()` and explicitly deleted large tensors after processing.",
    lesson: "Always disable gradient calculation during inference to save memory and compute."
  }
];
