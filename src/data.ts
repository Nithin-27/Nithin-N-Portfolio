import {
  Award,
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LineChart,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

export const contact = {
  email: 'nithin.n2028@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nithin-n27',
  github: 'https://github.com/Nithin-27',
  location: 'Bengaluru, India',
};

export const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

export const metrics = [
  { value: '18+', label: 'production tickets shaped into portfolio-safe case studies' },
  { value: '25%', label: 'CRM data accuracy improvement in AI data-quality project' },
  { value: '40%', label: 'manual work reduction from anomaly correction workflow' },
  { value: '2025', label: 'Oracle Cloud Infrastructure certifications' },
];

export const specialties = [
  { title: 'Backend APIs', icon: ServerCog, text: 'REST API design, validation, SQL-backed flows, production debugging, and scoped fixes.' },
  { title: 'Python + Data', icon: BarChart3, text: 'Python, Pandas, NumPy, Matplotlib, Tableau dashboards, data cleaning, and analysis.' },
  { title: 'AI Workflows', icon: BrainCircuit, text: 'Langflow, RAG, Gemini API, LLM intent routing, FAQ matching, and AI questionnaire flows.' },
  { title: 'Full-Stack Delivery', icon: Workflow, text: 'React UI work, Node/Express services, MySQL, S3 media handling, and deployment-safe iteration.' },
];

export const experience = [
  {
    role: 'Software Engineer Consultant',
    company: 'Stemphor Techlabs',
    period: 'Dec 2025 - Present',
    location: 'Bengaluru, India',
    summary:
      'Contributing to OrderOnBot, a UK-based software product, across admin portals, APIs, public business websites, promotional tooling, and AI-assisted WhatsApp workflows.',
    bullets: [
      'Implemented and debugged REST APIs, request validation, SQL filters, and cross-service data contracts.',
      'Delivered React UI enhancements for media upload, scheduling, promotions, logs, search, pagination, and stateful forms.',
      'Worked on technical SEO, dynamic sitemap routing, metadata, Open Graph, structured data, and route title behavior.',
      'Integrated AI questionnaire and FAQ flows into WhatsApp bot behavior while preserving existing intent-driven ordering flows.',
    ],
  },
];

export const caseStudies = [
  {
    title: 'Business-Scoped Voucher Validation',
    category: 'Backend + SQL',
    icon: ShieldCheck,
    problem: 'Referral vouchers were being blocked across the whole platform instead of per business.',
    result: 'Corrected eligibility checks so order history in one business no longer blocks another business.',
    stack: ['Node.js', 'Express', 'SQL', 'API validation'],
  },
  {
    title: 'Menu Category Image Upload',
    category: 'Full Stack + Media',
    icon: Cloud,
    problem: 'Admin users needed category image upload and replacement behavior aligned with existing item images.',
    result: 'Built upload, persistence, preview refresh, and clearer error handling across UI, API, DB, and S3.',
    stack: ['React', 'Express', 'MySQL', 'AWS S3'],
  },
  {
    title: 'SEO Management + Dynamic Sitemap',
    category: 'Technical SEO',
    icon: LineChart,
    problem: 'A multi-business website needed stronger metadata, domain-aware sitemap behavior, and cleaner route titles.',
    result: 'Added editable SEO fields, structured data, dynamic sitemap routing, robots updates, and metadata cleanup.',
    stack: ['React', 'TypeScript', 'Vite', 'Nginx', 'Express'],
  },
  {
    title: 'WhatsApp Promotions Targeting',
    category: 'Product Engineering',
    icon: Sparkles,
    problem: 'Audience filters, store scope, validation, and scheduling had edge cases across UI, API, and DB behavior.',
    result: 'Improved store-scoped targeting, fixed count mismatches, hardened validation, and reduced unnecessary API calls.',
    stack: ['React', 'Node.js', 'MySQL', 'Moment.js'],
  },
  {
    title: 'AI Questionnaire + Bot FAQ',
    category: 'AI / LLM Integration',
    icon: Bot,
    problem: 'Admin-managed Q&A needed to improve WhatsApp bot responses without disrupting core transaction flows.',
    result: 'Added FAQ intent handling, dynamic prompt context, backend API integration, auth fixes, and test updates.',
    stack: ['Node.js', 'OpenAI workflows', 'Express', 'Vitest'],
  },
  {
    title: 'Data Accuracy + Analytics Projects',
    category: 'Python + Data Analysis',
    icon: Database,
    problem: 'Resume projects needed clearer data-analysis positioning beyond general software work.',
    result: 'Showcases CRM anomaly correction, Tableau salary dashboarding, and Python/Django data-backed applications.',
    stack: ['Python', 'Pandas', 'Tableau', 'Django', 'SQL'],
  },
];

export const resumeProjects = [
  {
    name: 'Customer Support AI Agent',
    detail:
      'Built a RAG-based support chatbot using Langflow, Astra DB vector storage, and Gemini API for natural data-backed responses.',
  },
  {
    name: 'Fitness Tracker App',
    detail:
      'Created a Django platform with admin management, authentication, database models, backend logic, and Bootstrap UI.',
  },
  {
    name: 'Data Science Jobs Salaries Dashboard',
    detail:
      'Designed an interactive Tableau dashboard for salary analysis by role, location, experience, and employment type.',
  },
  {
    name: 'AI CRM Data Correction',
    detail:
      'Created an anomaly detection and correction workflow that improved data accuracy by 25% and reduced manual work by 40%.',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C'],
  },
  {
    title: 'Python + Data Analysis',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning', 'Data Visualization', 'Tableau'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Responsive UI', 'State Management', 'React Bootstrap', 'Draft.js', 'Vite'],
  },
  {
    title: 'Backend + Database',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'MySQL', 'MariaDB'],
  },
  {
    title: 'AI + Cloud',
    skills: ['Langflow', 'RAG', 'Gemini API', 'OpenAI workflows', 'Oracle Cloud', 'AWS S3'],
  },
  {
    title: 'Engineering Practice',
    skills: ['Debugging', 'API Contracts', 'JIRA', 'Bitbucket', 'SDLC', 'Production Builds'],
  },
];

export const certifications = [
  'Oracle Cloud Infrastructure 2025 Data Science Professional - Oracle University',
  'Oracle Cloud Infrastructure 2025 Certified Foundations Associate - Oracle University',
  'McKinsey.org Forward Program - McKinsey & Company',
  'Campus to Corporate Digital Academy - CRM, ICT Academy and Capgemini',
  'AI - Data Quality Analyst Certification - Rooman Technologies Pvt. Ltd.',
  'Certificate in Event Management - Main Coordinator of a National-Level Technical Symposium',
];

export const toolbox = [
  { label: 'Python', icon: Code2 },
  { label: 'Data Analysis', icon: BarChart3 },
  { label: 'REST APIs', icon: ServerCog },
  { label: 'AI Workflows', icon: BrainCircuit },
  { label: 'SQL', icon: Database },
  { label: 'Cloud', icon: Cloud },
  { label: 'Dashboards', icon: LineChart },
  { label: 'Certifications', icon: Award },
];
