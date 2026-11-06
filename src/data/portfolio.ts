export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  category: "Distributed Systems" | "FinTech" | "Full Stack" | "AI & Cloud";
  techStack: string[];
  metrics: string[];
  highlights: string[];
  folderName: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tags?: string[];
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Vicky Kumar",
    nickname: "Vicky",
    title: "Senior Software Engineer & Distributed Systems Architect",
    badge: "Open to Senior & Staff Engineering Opportunities",
    location: "Gurgaon, India",
    email: "vicky.kumar.engg@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com/in",
    resumeUrl: "#contact",
    heroHeading: "Architecting Scalable Systems & Leading High-Velocity Teams",
    heroSubheading:
      "Accomplished Senior Software Engineer with 5+ years of experience engineering high-concurrency platforms, real-time distributed backends (scaling from 2k to 50k+ CCU), and enterprise FinTech microservices. Passionate about system design, low latency, and modern web architectures.",
    stats: [
      { label: "Years Experience", value: "5+", detail: "Enterprise & Scale-up engineering" },
      { label: "Concurrent Users", value: "50K+", detail: "Real-time socket scaling" },
      { label: "Production Uptime", value: "99.99%", detail: "Mission-critical FinTech systems" },
      { label: "Architected Services", value: "25+", detail: "Distributed microservices & APIs" },
    ],
  },
  about: {
    headline: "Engineered for Reliability, Built for Scale",
    bio: [
      "I am a Senior Software Engineer and Team Lead with over 5 years of professional experience turning complex engineering bottlenecks into robust, self-healing, high-throughput architectures. My sweet spot lies at the intersection of low-latency backend engineering, distributed event pipelines, and modern full-stack web applications.",
      "Currently at RUPYY (CarDekho Group), I lead engineering initiatives building mission-critical FinTech microservices, shaping API standards, mentoring high-performing engineering squads, and enforcing clean code practices (SOLID, DDD). Prior to this, at Passion Gaming, I redesigned real-time multiplayer systems, successfully boosting concurrent player handling by 25x (from 2,000 to over 50,000 concurrent users) while maintaining sub-30ms latency.",
      "When I am not scaling backends or tuning database execution plans, I explore AI integrations, craft intuitive developer experiences, and build modern interactive frontends using Next.js and TypeScript.",
    ],
    principles: [
      {
        title: "High Concurrency & Low Latency",
        desc: "Deep expertise in WebSockets, Redis pub/sub, non-blocking I/O, and event-driven background queues.",
      },
      {
        title: "Clean Architecture & SOLID",
        desc: "Writing modular, testable, and self-documenting code that stands the test of rapid business scale.",
      },
      {
        title: "Engineering Leadership",
        desc: "Fostering psychological safety, mentoring engineers, driving design reviews, and zero-downtime releases.",
      },
      {
        title: "Database Performance & Indexing",
        desc: "Relational and NoSQL query optimization, stored procedures, indexing strategies, and multi-layer caching.",
      },
    ],
  },
  experiences: [
    {
      id: "rupyy",
      company: "RUPYY (CarDekho Group)",
      location: "Gurgaon, India",
      role: "Senior Software Engineer & Team Lead",
      period: "Jan 2025 – Present",
      type: "Full-time",
      summary:
        "Leading high-throughput FinTech engineering teams delivering digital lending and financing infrastructure.",
      bullets: [
        "Leading a team of software engineers in designing and developing scalable FinTech applications based on Microservices architecture.",
        "Owning end-to-end delivery of mission-critical business features, including technical design, implementation, code review, and zero-downtime deployment.",
        "Driving engineering excellence through technical mentoring, code quality gates, and adoption of SOLID/clean code patterns.",
        "Leading root cause analysis (RCA) and production incident management to sustain 99.99% system availability.",
        "Advising and mentoring developers on backend system design principles and proactively addressing technical debt.",
      ],
      technologies: ["Node.js", "Nest.js", "TypeScript", "Microservices", "PostgreSQL", "Kafka", "Docker", "AWS", "Redis"],
    },
    {
      id: "passion-gaming",
      company: "PASSION GAMING PVT LTD",
      location: "Gurgaon, India",
      role: "Software Engineer",
      period: "Mar 2023 – Jan 2025",
      type: "Full-time",
      summary:
        "Architected and maintained high-concurrency real-time multiplayer gaming backends serving millions of players.",
      bullets: [
        "Architected and optimized the gaming platform to scale concurrent user handling capacity from 2,000 to over 50,000 concurrent users.",
        "Designed and implemented low-latency game socket clusters using Socket.IO and Redis with event-driven background processing (Bull Queue).",
        "Migrated legacy JavaScript codebases to structured, strongly-typed TypeScript Nest.js applications, accelerating feature development velocity.",
        "Optimized database performance by designing MySQL Stored Procedures, query tuning, and index strategies, reducing query latency by 60%.",
        "Implemented real-time telemetry, reconnection recovery, and fraud-detection event handlers.",
      ],
      technologies: ["Node.js", "Nest.js", "TypeScript", "Socket.IO", "Redis Pub/Sub", "BullMQ", "MySQL", "AWS EC2/ECS"],
    },
    {
      id: "sparx-it",
      company: "SPARX IT SOLUTION PVT LTD",
      location: "Noida, India",
      role: "Software Engineer",
      period: "Dec 2020 – Mar 2023",
      type: "Full-time",
      summary:
        "Delivered end-to-end full stack web applications across E-Commerce, Job Portal, HRMS, and Social Networking domains.",
      bullets: [
        "Delivered end-to-end full stack web applications across E-Commerce, Job Portal, HRMS, and Social Networking domains using the MERN stack.",
        "Designed applications from scratch, including DB modeling, security validation, secure authentication, and payment integrations.",
        "Collaborated directly with international clients to map out requirements and build production-ready solutions.",
        "Optimized app performance through index tuning, reusable components, and API caching strategies.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "REST APIs", "Docker", "Stripe/Razorpay"],
    },
  ] as Experience[],
  projects: [
    {
      id: "gaming-scale-engine",
      title: "Real-Time Multiplayer Concurrency Engine",
      tagline: "Scaled active multiplayer game platform from 2k to 50k+ simultaneous WebSockets with sub-25ms latency.",
      description:
        "High-performance distributed WebSocket cluster engineered to handle real-time state synchronization, matchmaking, and atomic player actions. Solved cross-node communication using Redis Pub/Sub, eliminated race conditions via distributed mutex locks, and implemented an immutable tokenized reconnection protocol enabling dropped players to seamlessly rehydrate session state in <1 second.",
      role: "Lead Systems Architect",
      category: "Distributed Systems",
      folderName: "realtime-gaming-engine",
      techStack: ["Node.js", "TypeScript", "WebSocket (ws)", "Redis Pub/Sub", "Distributed Locks", "Async Batch Worker"],
      metrics: ["50k+ Concurrent Users", "<25ms Tick Latency", "100% Reconnect Success"],
      highlights: [
        "Decoupled stateless gateway nodes synchronized across cluster via Redis Pub/Sub adapter",
        "30-second tokenized session rehydration protocol recovering dropped connections with zero match forfeiture",
        "Asynchronous batch persistence worker offloading ledger writes to prevent event loop blocking",
      ],
      liveUrl: "#case-study",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "fintech-microservices",
      title: "Idempotent FinTech Payment & Loan Disbursement Pipeline",
      tagline: "Enterprise lending pipeline with zero duplicate billing, Transactional Outbox pattern, and Saga rollback compensation.",
      description:
        "Mission-critical financial pipeline built for digital lending and automated bank disbursement. Solves duplicate debit vulnerabilities through SHA-256 idempotency fingerprinting with distributed mutex locks, eliminates dual-write message broker losses via the Transactional Outbox pattern, and coordinates multi-step interbank settlements using a Saga Orchestrator with automated compensating rollbacks.",
      role: "Tech Lead & FinTech Architect",
      category: "FinTech",
      folderName: "fintech-disbursement-pipeline",
      techStack: ["TypeScript", "Node.js", "Saga Pattern", "Transactional Outbox", "Double-Entry Ledger", "SHA-256 Idempotency"],
      metrics: ["Zero Duplicate Debits", "10M+ Daily API Events", "100% Audit Reconciliation"],
      highlights: [
        "Idempotency engine with SHA-256 payload fingerprinting and 24h replay caching",
        "Saga Orchestrator executing automated reverse compensating rollbacks upon interbank gateway rejections",
        "Strict double-entry bookkeeping ledger asserting Total Debits === Total Credits with chained SHA-256 cryptographic hashes",
        "Transactional Outbox relay worker guaranteeing at-least-once domain event delivery to message brokers",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "distributed-rate-limiter",
      title: "Distributed Sliding-Window Rate Limiter & Circuit Breaker Gateway",
      tagline: "High-throughput API Gateway resilience engine with atomic Redis Lua sliding windows and 3-state Circuit Breaker.",
      description:
        "Production-grade resilience layer engineered to protect downstream microservices from thundering herds, noisy neighbors, and cascade outages. Features a mathematically precise sliding-window counter implemented via atomic Redis Lua scripts (completely eliminating boundary burst vulnerabilities), multi-tier API key quotas, and a self-healing 3-state Circuit Breaker (CLOSED -> OPEN -> HALF-OPEN) with fast-fail fallback responses.",
      role: "Infrastructure Architect",
      category: "Distributed Systems",
      folderName: "distributed-rate-limiter",
      techStack: ["TypeScript", "Redis Lua Scripting", "Sliding Window", "Circuit Breaker", "API Gateway", "RFC RateLimit Headers"],
      metrics: ["100% Burst Immune", "<1ms Lua Overhead", "30% Trip Threshold"],
      highlights: [
        "Atomic Redis Lua script executing sliding-log calculations in sub-millisecond time without distributed locks",
        "Multi-tiered quota management enforcing separate limits for Anonymous IPs, Free, Pro, and Enterprise tiers",
        "3-state Circuit Breaker preventing downstream thread pool exhaustion and cascading system crashes",
        "Injects standard RFC headers (X-RateLimit-Limit, Remaining, Reset, and Retry-After)",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "distributed-task-broker",
      title: "Resilient Distributed Task Broker & Worker Engine",
      tagline: "Fault-tolerant background job orchestrator with priority scheduling, Full Jitter backoff, and OOM worker crash recovery.",
      description:
        "Distributed asynchronous worker engine designed to execute high-volume background jobs without task loss during container preemption. Solves priority inversion through multi-tier priority scheduling (CRITICAL -> HIGH -> DEFAULT -> LOW), prevents downstream retry spikes using exponential backoff with Full Jitter, quarantines poison pill tasks into a Dead Letter Queue (DLQ), and utilizes a Stalled Job Watchdog to automatically re-enqueue abandoned jobs when worker pods crash.",
      role: "Creator & Maintainer",
      category: "Distributed Systems",
      folderName: "distributed-task-broker",
      techStack: ["TypeScript", "Priority Queues", "Exponential Backoff", "Full Jitter", "DLQ", "Crash Recovery Watchdog"],
      metrics: ["Zero Task Loss on OOM", "O(1) Priority Dispatch", "Full Jitter Spreading"],
      highlights: [
        "Multi-level priority scheduler preventing low-priority batch starvation of critical transactions",
        "Full Jitter exponential backoff algorithm spreading retries to eliminate downstream thundering herds",
        "Heartbeat-driven Stalled Job Watchdog detecting worker process crashes and seamlessly re-enqueuing active tasks",
        "Dead Letter Queue (DLQ) with historical error traces for operator diagnosis upon retry exhaustion",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true,
    },
  ] as Project[],
  skillsCategories: [
    {
      title: "Backend & Distributed Systems",
      icon: "Server",
      description: "Building scalable, fault-tolerant, and high-performance server architectures.",
      skills: [
        { name: "Node.js", level: "Expert", tags: ["Runtime", "Async I/O"] },
        { name: "Nest.js", level: "Expert", tags: ["Framework", "DI", "Architecture"] },
        { name: "TypeScript", level: "Expert", tags: ["Type Safety", "Modern JS"] },
        { name: "Microservices", level: "Advanced", tags: ["Distributed", "Sagas", "Decoupled"] },
        { name: "Socket.IO & WebSockets", level: "Expert", tags: ["Real-time", "Low Latency"] },
        { name: "BullMQ & Event Queues", level: "Expert", tags: ["Async Jobs", "Workers"] },
        { name: "Express.js", level: "Expert", tags: ["REST APIs"] },
        { name: "GraphQL & gRPC", level: "Advanced", tags: ["API Protocols"] },
      ],
    },
    {
      title: "Databases, Caching & Data Stores",
      icon: "Database",
      description: "Optimizing relational schema design, caching strategies, and indexing.",
      skills: [
        { name: "PostgreSQL", level: "Advanced", tags: ["ACID", "Relational", "Indexing"] },
        { name: "MySQL", level: "Expert", tags: ["Stored Procedures", "Query Tuning"] },
        { name: "Redis", level: "Expert", tags: ["Pub/Sub", "In-Memory Cache", "Sessions"] },
        { name: "MongoDB", level: "Advanced", tags: ["NoSQL", "Document Store"] },
        { name: "Prisma & TypeORM", level: "Advanced", tags: ["ORM", "Migrations"] },
      ],
    },
    {
      title: "DevOps, Cloud & Infrastructure",
      icon: "Cloud",
      description: "Containerization, cloud infrastructure, and continuous automated delivery.",
      skills: [
        { name: "Docker", level: "Advanced", tags: ["Containers", "Multi-stage Builds"] },
        { name: "AWS (EC2, S3, RDS, ECS)", level: "Advanced", tags: ["Cloud Services"] },
        { name: "CI/CD (GitHub Actions)", level: "Advanced", tags: ["Automation", "Testing"] },
        { name: "Kubernetes Basics", level: "Intermediate", tags: ["Orchestration"] },
        { name: "Nginx & Load Balancing", level: "Advanced", tags: ["Reverse Proxy", "SSL"] },
      ],
    },
    {
      title: "Frontend & Modern Web",
      icon: "Layout",
      description: "Designing fast, accessible, and responsive user interfaces.",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", tags: ["SSR", "React Server Components"] },
        { name: "React 19 / 18", level: "Expert", tags: ["Hooks", "Context", "Performance"] },
        { name: "Tailwind CSS", level: "Expert", tags: ["Utility-First", "Responsive"] },
        { name: "Framer Motion", level: "Advanced", tags: ["Micro-interactions", "Animations"] },
        { name: "State Management (Zustand, Redux)", level: "Advanced", tags: ["Global State"] },
      ],
    },
    {
      title: "Architecture & Engineering Practices",
      icon: "Cpu",
      description: "Foundational software principles and team excellence.",
      skills: [
        { name: "High Concurrency & Scaling", level: "Expert", tags: ["50k+ CCU", "Throughput"] },
        { name: "Low-Level & High-Level Design (LLD/HLD)", level: "Expert", tags: ["System Design"] },
        { name: "SOLID & Clean Architecture", level: "Expert", tags: ["Maintainability"] },
        { name: "Incident Management & RCA", level: "Advanced", tags: ["Observability", "SLAs"] },
        { name: "Technical Team Leadership", level: "Advanced", tags: ["Mentoring", "Code Reviews"] },
      ],
    },
  ] as SkillCategory[],
  caseStudy: {
    title: "Case Study: Scaling Real-Time Multiplayer Gaming from 2k to 50k+ Concurrent Users",
    subtitle: "How architectural restructuring, Redis Pub/Sub, and async worker queues solved severe latency and dropped connections under peak load.",
    challenge:
      "The legacy gaming platform handled player matchmaking and game events on a monolithic stateful server. At ~2,000 concurrent players, memory pressure skyrocketed, socket events experienced latency spikes (>400ms), and unhandled socket disconnections led to lost game states.",
    solution: [
      {
        step: "Decoupled Socket Clustered Nodes",
        detail: "Implemented horizontal scaling for WebSocket gateways with Redis adapter, allowing seamless event broadcasting across stateless worker instances.",
      },
      {
        step: "Offloaded I/O to Asynchronous Queues",
        detail: "Shifted database writes and score computations to background BullMQ workers, freeing the event loop for immediate socket event delivery.",
      },
      {
        step: "Database Stored Procedures & Indexing",
        detail: "Rewrote complex transactional queries into atomic MySQL stored procedures and targeted composite indexes, slashing query runtimes by 60%.",
      },
      {
        step: "Smart Heartbeat & State Rehydration",
        detail: "Engineered client-side auto-reconnection tokens cached in Redis, allowing dropped players to seamlessly rehydrate their active session in <1 second.",
      },
    ],
    results: [
      { label: "Peak Concurrent Users", before: "2,000", after: "50,000+", change: "25x Scale" },
      { label: "Average Socket Latency", before: "350ms - 500ms", after: "< 25ms", change: "-94% Latency" },
      { label: "Server CPU Utilization", before: "88% at 2k CCU", after: "35% at 50k CCU", change: "Highly Optimized" },
      { label: "Session Drop Recovery", before: "Manual Reload", after: "< 1s Auto-Rehydrate", change: "Zero Data Loss" },
    ],
  },
};
