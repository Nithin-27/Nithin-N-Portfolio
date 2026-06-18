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

export const typedRoles = [
  'Full Stack Developer',
  'Backend API Engineer',
  'WhatsApp Bot & AI Integration',
];

export const metrics = [
  { value: '18+', label: 'production features shipped and debugged end-to-end' },
  { value: '25%', label: 'CRM data accuracy improvement from anomaly detection workflow' },
  { value: '40%', label: 'manual work reduction in data correction automation' },
  { value: '2025', label: 'Oracle Cloud Infrastructure certifications (Data Science + Foundations)' },
];

export const specialties = [
  { 
    title: 'Backend APIs & SQL', 
    icon: ServerCog, 
    text: 'Express REST APIs, query debugging and optimization, multi-tenant data scoping, cross-service integration.' 
  },
  { 
    title: 'Full Stack Features', 
    icon: Workflow, 
    text: 'React form state management, API contract design, cloud storage integration, end-to-end feature delivery.' 
  },
  { 
    title: 'Bot & LLM Integration', 
    icon: Bot, 
    text: 'LLM intent routing, webhook message processing, dynamic context injection, multi-tenant knowledge storage.' 
  },
  { 
    title: 'Data & Analysis', 
    icon: BarChart3, 
    text: 'Python data analysis, Pandas/NumPy, Tableau dashboarding, anomaly detection workflows.' 
  },
];

export const experience = [
  {
    role: 'Software Engineer Consultant',
    company: 'Stemphor Techlabs',
    period: 'Dec 2025 - Present',
    location: 'Bengaluru, India',
    summary:
      'Full-stack feature development and production debugging across React frontends, Node/Express APIs, MySQL databases, and WhatsApp bot integration.',
    bullets: [
      'Backend API debugging: SQL query scoping, cross-repo root cause analysis, data validation across service boundaries.',
      'Full-stack features: React state management, Express endpoint design, AWS S3 integration, MySQL persistence, error handling.',
      'Technical SEO: Helmet metadata, JSON-LD structured data, dynamic sitemap generation, Nginx routing, multi-tenant site configuration.',
      'WhatsApp bot integration: LLM intent routing, FAQ context injection, message processing, webhook handling, multi-tenant Q&A storage.',
      'Backend logging & audit trails: Schema design, API endpoints, bot event capture, admin UI with search/pagination.',
      'Form state hardening: React Hook validation, Draft.js editor management, timezone-aware date/time scheduling, Moment.js utilities.',
    ],
  },
];

export const caseStudies = [
  {
    title: 'SQL Query Scoping & Debugging',
    category: 'Backend + SQL',
    icon: ShieldCheck,
    problem: 'Query logic at incorrect scope level affecting multi-tenant data isolation.',
    result: 'Root cause analysis across repos, scoped SQL checks properly, verified no regression in related queries.',
    stack: ['Node.js', 'Express', 'MySQL', 'Cross-repo debugging'],
  },
  {
    title: 'File Upload & Media Handling',
    category: 'Full Stack',
    icon: Cloud,
    problem: 'Frontend and backend integration for file upload with cloud storage persistence.',
    result: 'Built React upload flow → Express endpoint → AWS S3 + database, resolved credential config issues, improved error handling.',
    stack: ['React', 'Express', 'MySQL', 'AWS S3'],
  },
  {
    title: 'Technical SEO & Metadata',
    category: 'SEO + Multi-Tenant',
    icon: LineChart,
    problem: 'Multi-domain website needed dynamic metadata, structured data, and domain-aware sitemap.',
    result: 'Helmet/React Router SEO setup, JSON-LD schema generation, dynamic sitemap endpoint, Nginx routing with proxy headers.',
    stack: ['React', 'TypeScript', 'Express', 'Nginx', 'JSON-LD'],
  },
  {
    title: 'Data Validation & Filtering',
    category: 'Backend API',
    icon: Sparkles,
    problem: 'Multi-filter queries with scope handling and count accuracy across related tables.',
    result: 'Query logic correction, scope propagation, validation layer hardening, direct DB verification testing.',
    stack: ['Node.js', 'MySQL', 'SQL validation', 'API design'],
  },
  {
    title: 'LLM Integration & Intent Routing',
    category: 'AI + Bot',
    icon: Bot,
    problem: 'Integrate dynamic knowledge base into existing bot without disrupting core flows.',
    result: 'FAQ context injection into LLM prompts, intent classification without extra API calls, preserving existing behavior.',
    stack: ['Node.js', 'OpenAI workflows', 'Express', 'WhatsApp webhook'],
  },
  {
    title: 'Backend Logging & Observability',
    category: 'Database + API',
    icon: Database,
    problem: 'Event capture and audit trail design for bot interactions and user actions.',
    result: 'Schema design, API endpoints for log insertion/retrieval, webhook event capture, admin UI with filtering.',
    stack: ['Node.js', 'React', 'MySQL', 'API design'],
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
      'Full-stack Django application with admin management, authentication, database models, and Bootstrap UI for membership and service tracking.',
  },
  {
    name: 'Data Science Jobs Salary Dashboard',
    detail:
      'Interactive Tableau dashboard visualizing salary trends by role, location, experience level, and employment type.',
  },
  {
    name: 'AI CRM Data Correction',
    detail:
      'Built anomaly detection and correction workflow that improved CRM data accuracy by 25% and reduced manual work by 40%.',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'TypeScript', 'SQL', 'C'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'State Management', 'Form Handling', 'React Bootstrap', 'Responsive Design', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'API Design'],
  },
  {
    title: 'Database & SQL',
    skills: ['MySQL', 'MariaDB', 'Query Debugging', 'Schema Design', 'Data Validation'],
  },
  {
    title: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Data Cleaning', 'Anomaly Detection'],
  },
  {
    title: 'Cloud & Integration',
    skills: ['AWS S3', 'Oracle Cloud', 'WhatsApp API', 'OpenAI API', 'LLM Integration', 'Langflow'],
  },
  {
    title: 'Tools & Practices',
    skills: ['JIRA', 'Bitbucket', 'Git', 'Debugging', 'Production Builds', 'Testing (Vitest)'],
  },
];

export const certifications = [
  'Oracle Cloud Infrastructure 2025 Data Science Professional (1Z0-1110-25)',
  'Oracle Cloud Infrastructure 2025 Foundations Associate',
  'McKinsey.org Forward Program - McKinsey & Company',
  'AI Data Quality Analyst Certification - Rooman Technologies',
  'Campus to Corporate Digital Academy - ICT Academy & Capgemini',
  'Certificate in Event Management - National-Level Technical Symposium Coordinator',
];

export const toolbox = [
  { label: 'React', icon: Code2 },
  { label: 'Node.js', icon: ServerCog },
  { label: 'MySQL', icon: Database },
  { label: 'Python', icon: BarChart3 },
  { label: 'WhatsApp Bot', icon: Bot },
  { label: 'AWS S3', icon: Cloud },
  { label: 'Tableau', icon: LineChart },
  { label: 'Certifications', icon: Award },
];