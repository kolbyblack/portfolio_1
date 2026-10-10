export interface Project {
  number: string;
  name: string;
  tagline: string;
  description: string;
  stack: string;
  status: string;
  associated: string;
  href?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "NEXUS",
    tagline: "Next-gen Economic Exchange and User Solutions",
    description: "Microfinance platform for credit assessment, loan management, and compliance.",
    stack: "PostgreSQL, Python, Object-Oriented Design",
    status: "In Development (Apr 2025 – Present)",
    associated: "YT Groups",
  },
  {
    number: "02",
    name: "ALPHA",
    tagline: "Advanced Learning Prediction and Hedging Algorithm",
    description: "Monte Carlo and synthetic-data engine for high-stakes forecasting.",
    stack: "Python, Machine Learning, Real-time Data Processing",
    status: "In Development (Feb 2025 – Present)",
    associated: "YT Groups",
  },
  {
    number: "03",
    name: "POLYEDGE",
    tagline: "Prediction Market Intelligence Platform",
    description: "AI-powered market signals combining news, sentiment, and market data.",
    stack: "HTML5, CSS3, Vanilla JavaScript, Anthropic Claude API",
    status: "Completed (Mar 2026)",
    associated: "YT Groups",
  },
  {
    number: "04",
    name: "SCOUT",
    tagline: "Tactical Football Betting Intelligence Platform",
    description: "Live football analytics platform for fixtures, odds, and AI match analysis.",
    stack: "React, JavaScript, football-data.org API, The Odds API, Anthropic Claude API",
    status: "Completed (2026)",
    associated: "YT Groups",
    href: "https://yorkeandtoni.com",
  },
  {
    number: "05",
    name: "STUDYBUDDY",
    tagline: "AI-Powered Study Assistant",
    description: "Study assistant that turns lecture notes into interactive flashcards.",
    stack: "Python, FastAPI, TypeScript, React, PostgreSQL, OAuth2",
    status: "Completed (2026)",
    associated: "YT Groups",
  },
];
