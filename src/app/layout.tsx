import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vicky Kumar | Senior Software Engineer & Distributed Systems Architect",
  description:
    "Senior Software Engineer & Team Lead with 5+ years of experience in distributed systems, real-time concurrency (50k+ CCU), FinTech microservices, and modern web architectures.",
  keywords: [
    "Vicky Kumar",
    "Senior Software Engineer",
    "Distributed Systems Architect",
    "Team Lead",
    "Full Stack Engineer",
    "Microservices",
    "Node.js",
    "Nest.js",
    "TypeScript",
    "Next.js",
    "Socket.IO",
    "System Design",
  ],
  authors: [{ name: "Vicky Kumar" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
