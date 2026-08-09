import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Java } from "@/components/ui/svgs/java";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Git } from "@/components/ui/svgs/git";
import { Grafana } from "@/components/ui/svgs/grafana";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Prometheus } from "@/components/ui/svgs/prometheus";
import { Rabbitmq } from "@/components/ui/svgs/rabbitmq";

export const DATA = {
  name: "Basil Borda - Software Engineer",
  initials: "BB",
  url: "https://BestBor.github.io",
  location: "Bogotá, Colombia",
  locationLink: "https://www.google.com/maps/place/bogota+colombia",
  description:
     "Systems Engineer focused on backend development and intelligent automation.",
  summary:
    "I'm a Systems Engineer from the [National University of Colombia](/#education), focused on backend development and intelligent automation. I build APIs and web services with TypeScript/Node.js and Python, and I've developed an [AI agent using Gemini's function calling API](/#projects) for autonomous code diagnosis and repair. I've also worked with AWS for cloud deployment and I'm currently deepening my knowledge in semantic search and RAG pipelines. I care about writing secure, clean, and scalable code, and I'm looking for an environment where I can drive real automation impact from day one.",
  avatarUrl: "/img/b.png",
  ogImage: "/img/b.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: false, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Technologies" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "A mix of backend systems and AI-assisted tooling — from an autonomous code-fixing agent to a real-time chat app and a URL shortening platform built with security best practices in mind.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on LinkedIn and I'll respond whenever I can.",
    },
  },
  photos: [
    // { src: "/photos/photo1.jpg", alt: "Photo 1" },
  ],
  skills: [
    { name: "Git", icon: Git },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Java", icon: Java },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: Mongodb },
    { name: "Prisma", icon: Prisma },
    { name: "Git", icon: Git },
    { name: "RabbitMQ", icon: Rabbitmq },
    { name: "Prometheus", icon: Prometheus },
    { name: "Grafana", icon: Grafana },
    { name: "React", icon: ReactLight },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "bbordav.work@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BestBor",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/basil-borda-71b796334",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bbordav.work@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "National University of Colombia",
      href: "https://unal.edu.co/",
      degree: "Systems and Computing Engineering",
      logoUrl: "/img/UNlogo.png",
      start: "2019",
      end: "2025",
    },
  ],
  projects: [
  {
    title: "AI Code-Fixing Agent",
    href: "https://github.com/BestBor/ai-agent",
    dates: "2026",
    active: false,
    description:
      "An agent with tool-calling capabilities, built with Gemini's function calling API. It can autonomously read, diagnose, and fix broken code through defined functions for file read/write.",
    technologies: ["Python", "Gemini API", "Function Calling"],
    links: [
      { type: "Source", href: "https://github.com/BestBor/ai-agent", icon: <Icons.github className="size-3" /> },
    ],
    image: "/projectImg/ai-agent.jpg",
    video: "",
  },
  {
    title: "RedirVault",
    href: "https://github.com/BestBor/RedirVault-FE",
    dates: "2024-2025",
    active: false,
    description:
      "A multi-user URL shortening platform with authentication, resource-level authorization, and input validation following OWASP guidelines. Includes collision-resistant short identifier generation (NanoID) and dynamic redirect resolution logic.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "NanoID", "Vue.js", "Pinia", "Quasar"],
    links: [
      { type: "Source", href: "https://github.com/BestBor/RedirVault-FE", icon: <Icons.github className="size-3" /> },
    ],
    image: "/projectImg/redir-vault.jpg",
    video: "",
  },
  {
    title: "FireChat",
    href: "https://github.com/BestBor/firechat-2026",
    dates: "2026",
    active: false,
    description:
      "A real-time chat application with authentication, message persistence, and reactive updates via Firebase. Includes client-side state management for consistent message rendering and user session flow.",
    technologies: ["React", "TypeScript", "Firebase"],
    links: [
      { type: "Source", href: "https://github.com/BestBor/firechat-2026", icon: <Icons.github className="size-3" /> },
    ],
    image: "/projectImg/firechat.jpg",
    video: "",
  },
  {
    title: "SEO Link Crawler",
    href: "https://github.com/BestBor/web-crawler",
    dates: "2026",
    active: true,
    description:
      "A Python web crawler that maps internal links across a site to understand how search engines traverse and index pages. Built as a hands-on way to learn how web scraping and crawling actually work under the hood.",
    technologies: ["Python", "Requests", "BeautifulSoup", "asyncio"],
    links: [
      { type: "Source", href: "https://github.com/BestBor/web-crawler", icon: <Icons.github className="size-3" /> },
    ],
    image: "/projectImg/crawler.jpg",
    video: "",
  },
],
  hackathons: [],
} as const;
