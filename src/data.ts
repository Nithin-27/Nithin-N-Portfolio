import {
  Award,
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Database,
  LineChart,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

export const contact = {
  email: 'nithin99722@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nithin-n27',
  github: 'https://github.com/Nithin-27',
  location: 'Bengaluru, India',
};

export const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

export const typedRoles = [
  'Full Stack Developer',
  'Backend API Developer',
  'WhatsApp Bot & LLM Integration',
];

export const metrics = [
  { value: '18+', label: 'production tickets resolved across frontend, backend, and SQL layers' },
  // { value: '4', label: 'production codebases worked across (web-ui, express-js-api, bot-service, business website)' },
  { value: '25%', label: 'data-accuracy improvement on a personal AI/CRM project' },
  // { value: '2', label: 'Oracle Cloud Infrastructure certifications (2025)' },
];

export const specialties = [
  {
    title: 'Backend APIs & SQL',
    icon: ServerCog,
    text: 'Express REST APIs across multi-repo, multi-tenant systems, MySQL/MariaDB query debugging, scope correction, and schema/migration support.',
  },
  {
    title: 'Full Stack Feature Delivery',
    icon: Workflow,
    text: 'React + Express features end-to-end — file-upload pipelines, mutually-exclusive UI state logic, admin tooling with debounced queries and pagination.',
  },
  {
    title: 'WhatsApp Bot & LLM Integration',
    icon: Bot,
    text: 'Intent-classification routing, FAQ context injection into LLM prompts, audit-logging pipelines, multi-tenant data retrieval.',
  },
  {
    title: 'Technical SEO',
    icon: LineChart,
    text: 'Structured data (JSON-LD), Open Graph/GA metadata, and Nginx-routed dynamic sitemaps for multi-tenant web applications.',
  },
];

export const experience = [
  {
    role: 'Software Engineer Consultant',
    company: 'Stemphor Techlabs',
    period: 'Dec 2025 - Present',
    location: 'Bengaluru, India',
    summary:
      'Full-stack Engineer contributing to OrderOnBot, a UK-based SaaS product, working across an existing production codebase - covering backend APIs, SEO infrastructure, SQL correction, and LLM-driven bot integration.',
    bullets: [
      'Built SEO infrastructure for a multi-tenant website — JSON-LD structured data, Open Graph/GA metadata, admin-managed configuration, and Nginx-routed dynamic sitemaps.',
      'Enabled end-to-end menu image management by building a file-upload pipeline (React → Express → AWS S3 → MySQL).',
      'Extended WhatsApp bot coverage to free-form business Q&A by integrating FAQ handling into the existing LLM intent-classification flow, without a second model call.',
      'Gave businesses visibility into AI-assisted WhatsApp conversations by building audit-logging and admin review tooling.',
      'Enabled accurate business/store-scoped WhatsApp promotion targeting by designing audience-segmentation logic and fixing count mismatches.',
      // 'Eliminated cross-business benefit leakage by correcting authorization and SQL scoping in multi-tenant voucher and promotion systems.',
    ],
  },
];

export const caseStudies = [
  {
    title: 'Cross-Service Authorization Scope Correction',
    category: 'Backend + SQL',
    icon: ShieldCheck,
    problem:
      'A validation check ran at the wrong tenancy boundary — order history in one business incorrectly blocked eligibility in another, across two service repositories.',
    result:
      'Traced the real enforcement point, corrected the scope key, and verified against existing API tests with minimal regression surface.',
    stack: ['Node.js', 'Express', 'MariaDB/MySQL', 'Cross-service debugging'],
  },
  {
    title: 'Intent-Classification Extension for LLM-Driven Bot',
    category: 'AI + Bot',
    icon: Bot,
    problem:
      "The bot's intent-driven system needed to handle open-ended business Q&A — without a second model call or destabilizing existing flows.",
    result:
      'Added FAQ as a new intent inside the existing LLM classification call, with per-tenant context retrieval and confidence-based fallback.',
    stack: ['Node.js', 'OpenAI LLM integration', 'Express', 'Webhook-based messaging'],
  },
  {
    title: 'Multi-Tenant SEO & Dynamic Sitemap Architecture',
    category: 'SEO + Infrastructure',
    icon: LineChart,
    problem:
      'A static sitemap and client-rendered metadata were causing indexing failures and inconsistent SEO across tenant domains.',
    result:
      'Built a backend-driven SEO field system and replaced the static sitemap with a domain-aware endpoint routed through Nginx — fixing 502/404 failures across environments.',
    stack: ['TypeScript', 'React', 'Vite', 'Nginx', 'Express', 'JSON-LD'],
  },
];

export const resumeProjects = [
  {
    name: 'Customer Support AI Agent',
    detail:
      'RAG-based conversational agent — workflow orchestration via Langflow, vector retrieval via Astra DB, generation via the Google Gemini API.',
  },
  {
    name: 'Fitness Tracker App',
    detail:
      'Full-stack Django application with authentication, relational data models, and a Bootstrap-based UI for membership and service tracking.',
  },
  {
    name: 'Data Science Jobs Salary Dashboard',
    detail:
      'Interactive Tableau dashboard visualizing salary distributions by role, location, experience level, and employment type.',
  },
  {
    name: 'AI-Driven Anomaly Detection for CRM Data',
    detail:
      'Personal project implementing automated anomaly detection and correction — reported a 25% data-accuracy improvement and 40% reduction in manual correction effort.',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'React Bootstrap', 'Debounced query handling', 'Dynamic form state management'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API design', 'Django', 'Flask'],
  },
  {
    title: 'Database & SQL',
    skills: ['MySQL', 'MariaDB', 'Query debugging & optimization', 'Schema design & migrations'],
  },
  {
    title: 'Cloud & Integration',
    skills: ['AWS S3', 'Nginx (reverse proxy)', 'Webhook-based messaging APIs', 'LLM/OpenAI integration', 'Salesforce CRM', 'Langflow'],
  },
  {
    title: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Tableau'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'JIRA', 'Bitbucket', 'API testing (Postman)', 'Production-safe debugging'],
  },
];

export const certifications = [
  'Oracle Cloud Infrastructure 2025 Data Science Professional (1Z0-1110-25) — Oracle University',
  'Oracle Cloud Infrastructure 2025 Foundations Associate — Oracle University',
  'Campus to Corporate Digital Academy (Salesforce CRM) — ICT Academy & Capgemini',
  'Lead Coordinator, National-Level Technical Symposium',
];

export const toolbox = [
  { label: 'React', icon: Code2 },
  { label: 'Node.js', icon: ServerCog },
  { label: 'MySQL/MariaDB', icon: Database },
  { label: 'LLM Integration', icon: Bot },
  // { label: 'AWS S3', icon: Cloud },
  { label: 'SQL Debugging', icon: ShieldCheck },
  { label: 'Technical SEO', icon: LineChart },
  { label: 'Certifications', icon: Award },
];