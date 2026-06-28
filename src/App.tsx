import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Award,
  ExternalLink,
  ArrowUp,
  Menu,
  X
} from 'lucide-react';
import {
  caseStudies,
  certifications,
  contact,
  experience,
  metrics,
  navItems,
  resumeProjects,
  skillGroups,
  specialties,
  toolbox,
  typedRoles,
} from './data';

// ── Motion Animation Variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
  },
  hover: {
    y: -6,
    scale: 1.01,
    boxShadow: '0 20px 40px rgba(12, 39, 58, 0.14), 0 0 0 1px rgba(8, 127, 140, 0.18)',
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 }
  }
} as const;

function SectionHeader({
  eyebrow,
  title,
  text,
  textClassName,
}: {
  eyebrow: string;
  title: string;
  text?: ReactNode;
  textClassName?: string;
}) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p className={textClassName}>{text}</p> : null}
    </motion.div>
  );
}

function splitCertification(certification: string) {
  const [title, issuer] = certification.split(' — ');
  return {
    title: title.trim(),
    issuer: issuer?.trim(),
  };
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [typedRoleIndex, setTypedRoleIndex] = useState(0);
  const [typedCharCount, setTypedCharCount] = useState(0);
  const [isDeletingRole, setIsDeletingRole] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const currentTypedRole = typedRoles[typedRoleIndex] ?? '';
  const typedRoleText = currentTypedRole.slice(0, typedCharCount);
  const resumeDriveFileId = '18i97XRyRwfxVWe4XXqLiz8uUwl36-kOo';
  const resumeUrl = `https://drive.google.com/file/d/${resumeDriveFileId}/view?usp=sharing`;

  // Handle active navigation section highlight based on scroll position
  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 170;
      let currentSection = navItems[0];

      for (const item of navItems) {
        const element = document.getElementById(item);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = item;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Monitor scroll for "Back to top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMobileMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const closeOnDesktop = () => {
      if (window.innerWidth > 700) setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', closeMobileMenu);
    window.addEventListener('resize', closeOnDesktop);

    return () => {
      document.removeEventListener('keydown', closeMobileMenu);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!typedRoles.length) return;

    const isComplete = typedCharCount === currentTypedRole.length;
    const isEmpty = typedCharCount === 0;
    const delay = isComplete && !isDeletingRole ? 1200 : isDeletingRole ? 42 : 72;

    const timeoutId = window.setTimeout(() => {
      if (!isDeletingRole && isComplete) {
        setIsDeletingRole(true);
        return;
      }

      if (isDeletingRole && isEmpty) {
        setIsDeletingRole(false);
        setTypedRoleIndex((index) => (index + 1) % typedRoles.length);
        return;
      }

      setTypedCharCount((count) => count + (isDeletingRole ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [currentTypedRole, isDeletingRole, typedCharCount]);

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setFormStatus('error');
      window.setTimeout(() => setFormStatus('idle'), 4000);
      return;
    }

    setFormStatus('sending');

    try {
      const formData = new FormData(form);
      formData.append('access_key', accessKey);
      formData.append('from_name', 'Nithin Portfolio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error('Web3Forms submission failed');
      }

      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    } finally {
      window.setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  // Unique categories for Case Study filtering
  const categories = ['All', ...Array.from(new Set(caseStudies.map((item) => item.category)))];

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* ── Scroll Progress Line ── */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* ── Fixed Premium Header ── */}
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nithin N home">
          <span>N</span>
          Nithin N
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item}
              className={activeSection === item ? 'active' : ''}
              href={`#${item}`}
              aria-current={activeSection === item ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item);
                document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMobileMenuOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  className={activeSection === item ? 'active' : ''}
                  href={`#${item}`}
                  aria-current={activeSection === item ? 'page' : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.025 }}
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveSection(item);
                    setIsMobileMenuOpen(false);
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── Hero Section ── */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="eyebrow-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="eyebrow">Software Engineer Consultant</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Sparkles size={14} style={{ color: 'var(--accent)' }} />
                </motion.div>
              </div>
              <h1 className="hero-title">
                Hello, I'm <span className="highlight">Nithin N</span>
              </h1>
              <h2 className="typed-line" aria-label={`I'm a ${currentTypedRole}`}>
                I'm a{' '}
                <span className="typed-text">{typedRoleText}</span>
                <span className="typing-cursor" aria-hidden="true" />
              </h2>
              <p className="hero-copy">
                I work across backend services, React interfaces, SQL data flows, Python analytics, technical SEO, and
                AI-assisted WhatsApp systems with a focus on practical fixes that hold up in production.
              </p>
              <div className="hero-actions">
                <a
                  className="primary-action"
                  href={resumeUrl}
                  aria-label="Download resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  View/Download Resume <Download size={18} />
                </a>
                <a className="secondary-action" href={contact.github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a className="secondary-action" href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="tool-strip"
              aria-label="Core technical focus areas"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {toolbox.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.span
                    key={item.label}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                    {item.label}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>

          <motion.figure
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/image.jpg`}
              alt="Profile of Nithin N"
            />
            <figcaption>
              <span>NN</span>
              <div>
                <strong>Nithin N</strong>
                <small>Backend | Python | Data Analysis | AI workflows</small>
              </div>
            </figcaption>
          </motion.figure>
        </section>

        {/* ── About Section ── */}
        <section id="about" className="section">
          <SectionHeader
            eyebrow="About"
            title="A practical engineer with full-stack, Python, and data-analysis depth."
            textClassName="about-intro-card"
            text={
              <>
                <span className="about-intro-label">Profile Summary</span>
                <span className="about-intro-copy">
                  Computer Science Engineering graduate with hands-on experience in{' '}
                  <strong>backend development</strong>, <strong>software testing</strong>,{' '}
                  <strong>data analysis</strong>, AI workflows, cloud services, and production debugging.
                </span>
              </>
            }
          />
          
          <motion.div
            className="specialty-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {specialties.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="specialty-card"
                  key={item.title}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            className="metrics-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                className="metric-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Experience Section ── */}
        <section id="experience" className="section">
          <SectionHeader
            eyebrow="Experience"
            title="Production work across APIs, admin tools, SEO, data, and AI workflows."
          />
          
          <div className="experience-list">
            {experience.map((job, idx) => (
              <motion.article
                className="experience-card"
                key={job.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div>
                  <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '8px' }}>{job.period}</span>
                  <h3>{job.role}</h3>
                  <p className="company">
                    <BriefcaseBusiness size={18} /> {job.company} | {job.location}
                  </p>
                </div>
                <div>
                  <p>{job.summary}</p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 size={18} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── Projects Section ── */}
        <section id="projects" className="section">
          <SectionHeader
            eyebrow="Projects"
            title="Anonymized case studies from real delivery work."
            text="These focus on outcomes, technologies, and engineering responsibility."
          />

          {/* Interactive Category Filtering Tabs */}
          <div className="category-tabs" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`secondary-action ${selectedCategory === cat ? 'active' : ''}`}
                style={{
                  minHeight: '38px',
                  padding: '0 16px',
                  fontSize: '0.85rem',
                  border: selectedCategory === cat ? '1px solid var(--accent)' : '1px solid var(--border)',
                  backgroundColor: selectedCategory === cat ? 'var(--accent-soft)' : 'var(--surface)',
                  color: selectedCategory === cat ? 'var(--accent)' : 'var(--ink-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <motion.div className="case-grid">
            <AnimatePresence>
              {filteredCaseStudies.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="case-card"
                    key={item.title}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="case-topline">
                      <span>{item.category}</span>
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.problem}</p>
                    <strong>{item.result}</strong>
                    <div className="stack-list">
                      {item.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <div className="section-header" style={{ marginTop: '56px', marginBottom: '24px' }}>
            <h3>Other Key Highlights</h3>
          </div>

          <motion.div
            className="resume-projects"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {resumeProjects.map((project) => (
              <motion.article
                key={project.name}
                variants={cardVariants}
                whileHover="hover"
              >
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ── Skills Section ── */}
        <section id="skills" className="section">
          <SectionHeader
            eyebrow="Skills"
            title="A balanced toolkit for product engineering and data-backed problem solving."
          />
          
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {skillGroups.map((group) => (
              <motion.article
                className="skill-card"
                key={group.title}
                variants={cardVariants}
                whileHover="hover"
              >
                <h3>{group.title}</h3>
                <div>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ── Certifications Section ── */}
        <section id="certifications" className="section">
          <SectionHeader eyebrow="Certifications" title="Cloud, data, AI, and professional readiness." />
          
          <motion.div
            className="cert-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {certifications.map((certification) => {
              const { title, issuer } = splitCertification(certification);

              return (
                <motion.article
                  key={certification}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Award size={20} />
                  <div className="cert-copy">
                    <strong>{title}</strong>
                    {issuer ? <small>{issuer}</small> : null}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contact" className="section contact-section">
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk about backend systems, data workflows, or full-stack product work."
          />
          
          <div className="contact-layout">
            <motion.div
              className="contact-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href={`mailto:${contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Mail size={19} style={{ color: 'var(--accent)' }} />
                {contact.email}
              </a>

              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={19} />
                LinkedIn <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer">
                <Github size={19} />
                GitHub <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
              </a>
              <span>
                <MapPin size={19} />
                {contact.location}
              </span>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={submitContact}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <input name="botcheck" type="checkbox" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <label>
                Name
                <input name="name" type="text" required />
              </label>
              
              <label>
                Email
                <input name="email" type="email" required />
              </label>

              <label>
                Subject
                <input name="subject" type="text" required />
              </label>
              
              <label>
                Message
                <textarea name="message" rows={5} required />
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button type="submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending...' : 'Send message'} <Send size={18} />
                </button>
                {formStatus === 'success' && (
                  <span style={{ color: 'var(--teal)', fontSize: '0.9rem', fontWeight: 600 }}>Message sent successfully!</span>
                )}
                {formStatus === 'error' && (
                  <span style={{ color: '#b56f62', fontSize: '0.9rem', fontWeight: 600 }}>
                    Message failed. Check your Web3Forms key and try again.
                  </span>
                )}
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Nithin N. Built with React, TypeScript & Framer Motion.</p>
      </footer>

      {/* ── Scroll to Top Button ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 90,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lg)',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--accent)',
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
