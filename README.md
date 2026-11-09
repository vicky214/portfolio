# Distributed Systems & Full-Stack Portfolio

A high-performance, responsive portfolio web application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase large-scale distributed architectures, low-level design patterns, enterprise microservices, and production web applications.

---

## 🏛️ System Architecture

```mermaid
flowchart TD
    subgraph Client ["Client Browser (SSR / Hydration)"]
        UI["Next.js App Router (React 19)"]
        Framer["Framer Motion Animations"]
        Lucide["Lucide Icons & Tailwind CSS v4"]
    end

    subgraph AppPages ["App Structure (/src/app)"]
        Layout["layout.tsx (Root Layout & Font Optimization)"]
        Page["page.tsx (Single Page Layout)"]
    end

    subgraph Components ["Interactive UI Components (/src/components)"]
        Hero["Hero Section (Metrics & Bio)"]
        About["About Section (Architectural Principles)"]
        Skills["Skills Matrix (Tabbed Categories)"]
        Projects["Projects Grid (Dynamic Filter Pills)"]
        CaseStudy["System Design Case Study (Benchmarks)"]
        Experience["Experience Timeline"]
        Contact["Contact & Social Channels"]
    end

    subgraph DataStore ["Static Data & Configuration (/src/data)"]
        PortfolioData["portfolio.ts (Typed Project Schemas & Profiles)"]
    end

    UI --> Layout --> Page
    Page --> Hero
    Page --> About
    Page --> Skills
    Page --> Projects
    Page --> CaseStudy
    Page --> Experience
    Page --> Contact
    Projects --> PortfolioData
    Skills --> PortfolioData
    Experience --> PortfolioData
```

---

## 🚀 Key Features & Highlights

1. **Next.js 16 App Router & React 19**: Leverages Server Components, layout streaming, and zero-bundle hydration optimizations.
2. **Interactive System Design Case Study**: Deep dive into real-world distributed bottlenecks, before-and-after throughput benchmarks, and architectural resolutions.
3. **Dynamic Project Filtering**: Filter enterprise projects by category (*Distributed Systems*, *FinTech*, *Real-Time*, *Full-Stack*).
4. **Experience Timeline**: Career history with role impacts, quantifiable metrics, and tech stack tags.
5. **Interactive Skills Matrix**: Tabbed navigation across *Distributed Systems*, *Backend Architecture*, *Cloud & DevOps*, and *Databases*.
6. **Ultra-Responsive UI**: Fully accessible design with dark-mode ambient glows, smooth scrolling, and mobile drawer navigation.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css          # Tailwind CSS v4 directives & theme variables
│   │   ├── layout.tsx           # Metadata, viewport, and root HTML shell
│   │   └── page.tsx             # Main page composing sections
│   ├── components/
│   │   ├── Hero.tsx             # Hero banner with metric counters
│   │   ├── About.tsx            # Engineering philosophy and principles
│   │   ├── Skills.tsx           # Categorized tech competencies
│   │   ├── Projects.tsx         # Filterable portfolio project gallery
│   │   ├── SystemDesignCaseStudy.tsx # Distributed architecture deep-dive
│   │   ├── Experience.tsx       # Timeline of professional roles
│   │   ├── Contact.tsx          # Direct contact info and form
│   │   ├── Navbar.tsx           # Sticky navigation with mobile menu
│   │   ├── Footer.tsx           # Footer with links and back-to-top
│   │   └── Icons.tsx            # Custom SVG icons
│   ├── data/
│   │   └── portfolio.ts         # Centralized data model (projects, skills, roles)
│   └── lib/
│       └── utils.ts             # Tailwind class merging (clsx + twMerge)
├── public/                      # Static assets & icons
├── package.json
└── tsconfig.json
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Lint & Typecheck
```bash
npm run lint
```
