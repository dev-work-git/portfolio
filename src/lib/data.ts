export const profile = {
  name: "Devvvv",
  fullName: "Dev Shishodia",
  tagline: "Final-year CSE student building decentralized systems, cloud & devops automations, and full-stack web apps.",
  location: "Noida, India",
  email: "devshishodia21@gmail.com",
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.jpg",
  about: [
    "I'm a final-year B.Tech CSE student specializing in Blockchain Engineering, with hands-on experience building smart contracts, Web3 dApps, and DevOps pipelines.",
    "I enjoy turning complex distributed-systems concepts into clean, usable products — from Solidity contracts on Sepolia to full-stack React applications deployed with Docker and Kubernetes.",
    "Currently looking for opportunities in Web3, software engineering, and DevOps where I can ship real things and keep learning fast.",
  ],
};

export const socials = {
  github: "https://github.com/dev-work-git",
  linkedin: "https://linkedin.com/in/devvvvv-shishodia",
  twitter: "https://x.com/DVil0p",
  email: "mailto:devshishodia21@gmail.com",
  leetcode: "https://leetcode.com/Devvvv21",
};

export const githubUsername = "dev-work-git";

export const skills = [
  { name: "C++", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Solidity", category: "Languages" },
  { name: "Foundry", category: "Blockchain" },
  { name: "Hardhat", category: "Blockchain" },
  { name: "Web3.js / Ethers.js", category: "Blockchain" },
  { name: "IPFS", category: "Blockchain" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Swagger", category: "Backend" },
  { name: ".NET MAUI", category: "Mobile" },
  { name: "XAML", category: "Mobile" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "trubodh",
    role: "Software Engineer Intern",
    organization: "TrueBodh Learning",
    duration: "June 2026 — Present",
    description: "Working on backend development for a client-facing web app, implementing animated UI sections, fixing production configuration issues, and improving mobile responsiveness and a lot more.",
    tags: ["C#","React","Blazor",".NET MAUI","Tailwind CSS","MongoDB","Node.js","Swagger","Docker","Kubernetes","AWS","GitHub Actions","CI/CD"],
  },
  {
    id: "pseudosanta",
    role: "Founder & Lead Developer",
    organization: "Pseudo Santa",
    duration: "2026 — Present",
    description: "Building a decentralized protocol for anonymous peer-to-peer fulfillment, with custom smart contracts for escrow and verification. Currently in MVP development — open to collaborators.",
    tags: ["Solidity","Smart Contracts","Escrow","Product Design","React","Web3"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "credchain",
    title: "CredChain",
    description: "Blockchain-based credential issuance and verification system for academic institutions, preventing certificate fraud through immutable on-chain records.",
    tags: ["Solidity","Web3.js","Express","MongoDB"],
    github: "https://github.com/Devvvv2112/Credchain",
    live: "",
    images: ["/projects/credchain-1.png", "/projects/credchain-2.png", "/projects/credchain-3.png", "/projects/credchain-4.png"

    ],
  },
  {
    id: "blockguard",
    title: "BlockGuard",
    description: "A security-focused smart contract auditing toolkit with automated vulnerability scanning and gas-optimization suggestions.",
    tags: ["Solidity","Hardhat","Node.js"],
    github: "https://github.com/Devvvv2112/BlockGuard",
    live: "",
    images: ["/projects/blockguard-1.png", "/projects/blockguard-2.png", "/projects/blockguard-3.png", "/projects/blockguard-4.png"

    ],
  },
];
