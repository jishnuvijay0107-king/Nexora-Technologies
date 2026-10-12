import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  ArrowUpRight,
  Code2,
  Shield,
  Brain,
  Globe,
  Palette,
  Search,
  Smartphone,
  ShieldAlert,
  Wrench,
  Server,
  Lock,
  MailWarning,
  Network,
  GraduationCap,
  FileCheck2,
  Cpu,
  BarChart3,
  MessageSquareCode,
  Workflow,
  LineChart,
  FileText,
  Sparkles,
} from 'lucide-react';

/* ─── Scroll-reveal wrapper ─── */
function Reveal({ children, delay = 0, className = '', y = 45 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Horizontal marquee for ambient texture ─── */
function Marquee({ items, speed = 40 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <motion.div
        className="inline-flex gap-16 text-[clamp(4rem,9vw,8.5rem)] font-black uppercase tracking-tight text-white/[0.025]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="shrink-0">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Active service discipline: 0 = Software Engineering, 1 = Cybersecurity, 2 = AI
  const [activeCategory, setActiveCategory] = useState(0);

  // Selected sub-service item within the active category
  const [activeSubItem, setActiveSubItem] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Parallax for hero image */
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '22%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  const links = [
    { label: 'Capabilities', href: '#services' },
    { label: 'Selected Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  /* ══════════════════════════════════════════════════════════════════════
     THE 3 CORE PILLARS & THEIR EXACT SERVICE CATALOGS
     ══════════════════════════════════════════════════════════════════════ */
  const pillars = [
    {
      id: 'software-engineering',
      num: '01',
      title: 'Software Engineering',
      tagline: 'Precision digital architecture and modern product systems',
      icon: Code2,
      accentColor: '#4f6df0',
      badge: '4 Core Offerings',
      summary:
        'From high-concurrency cloud software to responsive user-facing experiences, we engineer digital products that perform flawlessly under heavy real-world scale.',
      services: [
        {
          num: '01',
          name: 'Website & Software Development',
          icon: Globe,
          headline: 'Full-Cycle Web Platforms & Custom Software Architecture',
          description:
            'Engineering scalable web platforms, high-throughput microservices, and bespoke enterprise software built on robust, modern frameworks with clean maintainable codebases.',
          deliverables: ['Custom Web Applications', 'API & Microservice Design', 'Enterprise Backends', 'Distributed Databases'],
        },
        {
          num: '02',
          name: 'UI/UX & Product Design',
          icon: Palette,
          headline: 'Cinematic User Experience & Systematic Product Interfaces',
          description:
            'Translating complex computational workflows into intuitive, high-craft user journeys. We build design systems, interactive prototypes, and production design specs.',
          deliverables: ['Design Systems & Component Libraries', 'Interaction Architecture', 'User Journey Mapping', 'High-Fidelity Wireframes'],
        },
        {
          num: '03',
          name: 'SEO & Website Optimization',
          icon: Search,
          headline: 'Search Dominance & Sub-Second Performance Engineering',
          description:
            'Maximizing organic discovery through technical SEO audits, Core Web Vitals optimization, semantic structured data, and search crawler enhancements.',
          deliverables: ['Core Web Vitals Remediation', 'Technical SEO Auditing', 'Schema & Metadata Architectures', 'Edge Caching Strategies'],
        },
        {
          num: '04',
          name: 'Mobile App Development',
          icon: Smartphone,
          headline: 'Native & Cross-Platform Mobile Applications',
          description:
            'Delivering frictionless iOS and Android applications with offline-first state management, hardware acceleration, and fluid 60fps interaction polish.',
          deliverables: ['iOS & Android Engineering', 'Cross-Platform Frameworks', 'Biometric & Push Infrastructure', 'App Store Publishing'],
        },
      ],
    },
    {
      id: 'cybersecurity',
      num: '02',
      title: 'Cybersecurity',
      tagline: 'Cryptographic defense, threat intelligence, and digital sovereignty',
      icon: Shield,
      accentColor: '#38bdf8',
      badge: '9 Specialized Practices',
      summary:
        'Comprehensive defensive architectures, active penetration testing, and continuous threat surface monitoring built to protect mission-critical operations.',
      services: [
        {
          num: '01',
          name: 'Cybersecurity Services',
          icon: ShieldAlert,
          headline: 'Enterprise Zero-Trust Defense & Sovereign Infrastructure',
          description:
            'Holistic security consulting and architecture implementing cryptographic micro-segmentation, identity verification, and multi-layered defense-in-depth frameworks.',
          deliverables: ['Zero-Trust Architecture', 'Security Posture Reviews', 'Boundary Hardening', 'Cryptographic Policies'],
        },
        {
          num: '02',
          name: 'Website Maintenance & Support',
          icon: Wrench,
          headline: 'Continuous Upgrades, Patch Governance & 24/7 Availability',
          description:
            'Preventive health maintenance for digital assets. Proactive dependency patching, automated SSL renewals, and 24/7 incident response SLA coverage.',
          deliverables: ['Proactive Patch Scheduling', 'SSL & Certificate Automation', 'Daily Automated Backups', 'Uptime SLA Monitoring'],
        },
        {
          num: '03',
          name: 'IT Consulting & Integration',
          icon: Server,
          headline: 'Infrastructure Modernization & System Interoperability',
          description:
            'Strategic technical advisory aligning IT ecosystem migrations with regulatory requirements, zero-downtime cuts, and seamless vendor integration.',
          deliverables: ['Legacy Architecture Audits', 'Cloud Migration Roadmaps', 'Enterprise Tooling Integration', 'Disaster Recovery Setup'],
        },
        {
          num: '04',
          name: 'Website Security Assessment',
          icon: Lock,
          headline: 'In-Depth Vulnerability Scans & Attack Surface Mapping',
          description:
            'Rigorous automated and manual inspection of web perimeters, identifying OWASP Top 10 vulnerabilities, misconfigurations, and privilege leaks.',
          deliverables: ['OWASP Top 10 Analysis', 'Penetration Testing Proofs', 'Remediation Roadmap', 'Executive Summary Reports'],
        },
        {
          num: '05',
          name: 'Phishing Detection Solutions',
          icon: MailWarning,
          headline: 'Autonomous Email Hygiene & Social Engineering Barriers',
          description:
            'Real-time behavioral telemetry analyzing incoming communication vectors, simulated drill campaigns, and automated credential-harvesting quarantine.',
          deliverables: ['DMARC/DKIM/SPF Hardening', 'Inbox Defense Agents', 'Simulation Campaigns', 'Real-Time Threat Flagging'],
        },
        {
          num: '06',
          name: 'Network Security Reviews',
          icon: Network,
          headline: 'Traffic Telemetry, Firewall Rules & Ingress Hardening',
          description:
            'Granular inspection of internal routing meshes, VPN gateways, firewall rulesets, and perimeter access logs to ensure total network sovereignty.',
          deliverables: ['Firewall & Router Audits', 'Ingress/Egress Telemetry', 'VPN & Gateway Reviews', 'Traffic Segmentation Plans'],
        },
        {
          num: '07',
          name: 'Cybersecurity Awareness Training',
          icon: GraduationCap,
          headline: 'Adversarial Education & Human Perimeter Resilience',
          description:
            'Custom role-specific curriculum educating developers, executives, and employees on modern social engineering, credential hygiene, and prompt injections.',
          deliverables: ['Interactive Training Modules', 'Spear-Phishing Simulations', 'Executive Threat Briefings', 'Completion Certifications'],
        },
        {
          num: '08',
          name: 'AI Application Security',
          icon: Cpu,
          headline: 'Red-Teaming LLMs, Prompt Injection Defense & Data Leak Prevention',
          description:
            'Hardening autonomous agent pipelines, vector databases, and foundational models against prompt hijacking, training data extraction, and adversarial inputs.',
          deliverables: ['LLM Red-Teaming Audits', 'Prompt Injection Guardrails', 'Vector DB Access Controls', 'Inference Privacy Shields'],
        },
        {
          num: '09',
          name: 'Security Reports and Risk Assessment',
          icon: FileCheck2,
          headline: 'Regulatory Compliance & Executive Risk Quantification',
          description:
            'Formalized third-party audit artifacts prepared for stakeholders, board oversight, and regulatory filings (SOC 2, ISO 27001, HIPAA, GDPR).',
          deliverables: ['Formal Compliance Reports', 'Risk Matrix Prioritization', 'Gap Mitigation Timelines', 'Board-Level Presentations'],
        },
      ],
    },
    {
      id: 'artificial-intelligence',
      num: '03',
      title: 'Artificial Intelligence',
      tagline: 'Deterministic intelligence, document automation, and agentic workflows',
      icon: Brain,
      accentColor: '#818cf8',
      badge: '7 Specialized Solutions',
      summary:
        'Moving beyond generic chat interfaces: tailored fine-tuned neural models, auditable document processing pipelines, and autonomous workflows that multiply output.',
      services: [
        {
          num: '01',
          name: 'AI & Business Automation',
          icon: Sparkles,
          headline: 'Enterprise Orchestration & Autonomous Operational Pipelines',
          description:
            'Deploying agentic systems that orchestrate multi-step business logic across disparate ERPs, CRMs, and internal databases with zero manual handoffs.',
          deliverables: ['Agentic Workflow Pipelines', 'Cross-System Sync Agents', 'Operational Logic Models', 'Exception Handling Bots'],
        },
        {
          num: '02',
          name: 'Data Analytics & Reporting',
          icon: BarChart3,
          headline: 'Actionable Intelligence & Automated Decision Frameworks',
          description:
            'Translating billions of raw operational telemetry logs into clear executive decision dashboards with automated anomaly discovery and trend forecasting.',
          deliverables: ['Predictive Modeling Engines', 'Automated Executive Briefs', 'Anomaly Detection Heuristics', 'Real-Time KPI Dashboards'],
        },
        {
          num: '03',
          name: 'AI Chatbots for Businesses',
          icon: MessageSquareCode,
          headline: 'Context-Aware Conversational Agents with Strict Guardrails',
          description:
            'Customer support and internal knowledge chatbots grounded in your proprietary documents with zero hallucination risk, brand-aligned voice, and CRM handoff.',
          deliverables: ['RAG Knowledge Embeddings', 'Multi-Channel Chat Widget', 'CRM & Ticket Escalation', 'Hallucination Filters'],
        },
        {
          num: '04',
          name: 'Business Process Automation',
          icon: Workflow,
          headline: 'End-to-End Workflow Optimization & Redundancy Elimination',
          description:
            'Auditing and transforming slow manual paperwork and approval chains into streamlined event-driven automations that save hundreds of engineering hours.',
          deliverables: ['Process Mining & Mapping', 'Event-Driven Trigger Systems', 'Legacy RPA Replacements', 'Audit & Approval Chains'],
        },
        {
          num: '05',
          name: 'AI Data Analysis and Reporting',
          icon: LineChart,
          headline: 'Deep Pattern Synthesis & Automated Analytical Narratives',
          description:
            'Automated neural engines that digest large financial tables, sales ledgers, and sensor logs to synthesize clear, coherent written narrative reports.',
          deliverables: ['Synthetic Report Generation', 'Multi-Source Data Synthesis', 'Variance & Anomaly Audits', 'Scheduled Executive Digests'],
        },
        {
          num: '06',
          name: 'AI Document Assistant',
          icon: FileText,
          headline: 'Intelligent Parsing, Semantic Search & Instant Contract Synthesis',
          description:
            'Automated extraction of structured clauses, invoices, and clinical notes from PDFs and scanned documents with instant semantic querying and verified citations.',
          deliverables: ['OCR & Tabular Extraction', 'Clause Comparison & Diffing', 'Semantic Vector Search', 'Verified Source Footnotes'],
        },
        {
          num: '07',
          name: 'Custom AI Solutions',
          icon: Cpu,
          headline: 'Bespoke Neural Architectures & Domain-Adapted Model Weights',
          description:
            'Custom fine-tuned open-weights models (Llama, Mistral, Whisper) tailored specifically to your company vocabulary, private security enclaves, and offline servers.',
          deliverables: ['Proprietary Model Fine-Tuning', 'Private Enclave Inference', 'Custom Loss & Eval Suites', 'Quantized On-Premise Deploys'],
        },
      ],
    },
  ];

  const currentPillar = pillars[activeCategory];
  const currentService = currentPillar.services[activeSubItem] || currentPillar.services[0];

  return (
    <div className="bg-[#04060c] text-[#c8cfd8] antialiased overflow-x-hidden selection:bg-[#4f6df0]/30 selection:text-white">
      {/* ══════════════════════════════════════════════════════════════════
          NAVIGATION
          ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#04060c]/85 backdrop-blur-2xl border-b border-white/[0.06] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-baseline gap-1">
            <span className="text-lg font-semibold tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">
              Nexora
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] group-hover:shadow-[0_0_12px_#4f6df0] transition-shadow" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium tracking-wide text-white/40 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[13px] font-medium tracking-wide text-white/90 border border-white/20 hover:border-white/50 px-5 py-2 rounded-full transition-colors duration-300"
            >
              Let's talk
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#04060c]/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-6">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-light text-white/70 hover:text-white py-3 border-b border-white/[0.04] transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — Cinematic Full-Bleed
          ══════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-[120%] object-cover object-center filter brightness-[0.78] contrast-[1.1]"
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/40 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04060c]/70 via-transparent to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#04060c] to-transparent z-[1]" />

        {/* Content anchored bottom-left like a film title card */}
        <motion.div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-6"
          >
            Software Engineering · Cybersecurity · Artificial Intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white max-w-4xl"
          >
            Building what
            <br />
            comes next<span className="text-[#4f6df0]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/50 font-light max-w-lg leading-relaxed"
          >
            Nexora Technologies architects mission-critical software, impenetrable
            cybersecurity defenses, and custom enterprise AI solutions for organizations
            where precision is paramount.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/10 flex items-center justify-center transition-all duration-500">
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="tracking-wide group-hover:text-[#a0b4ff] transition-colors">Explore Capabilities</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Vertical scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-medium [writing-mode:vertical-lr]">
            Scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={14} className="text-white/25" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CINEMATIC INTERACTIVE SERVICES MATRIX
          Software Engineering · Cybersecurity · Artificial Intelligence
          ══════════════════════════════════════════════════════════════════ */}
      <section id="services" className="relative py-32 md:py-44 border-t border-white/[0.04]">
        {/* Ambient Marquee Texture */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-100 pointer-events-none">
          <Marquee items={['Software Engineering', 'Cybersecurity', 'Artificial Intelligence']} speed={45} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-4">
              Online Services & Solutions
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Core Disciplines.
            </h2>
            <p className="mt-4 text-base text-white/40 font-light max-w-xl leading-relaxed">
              Click an icon below to inspect our exhaustive engineering offerings, defensive
              cyber frameworks, and specialized AI business automation pipelines.
            </p>
          </Reveal>

          {/* ─── 3 CINEMATIC INTERACTIVE DISCIPLINE SELECTORS ─── */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeCategory === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveCategory(idx);
                    setActiveSubItem(0);
                  }}
                  className={`relative p-8 rounded-2xl border text-left transition-all duration-500 cursor-pointer overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-b from-[#0a1226]/80 to-[#04060c] border-[#4f6df0]/50 shadow-[0_0_35px_rgba(79,109,240,0.2)]'
                      : 'bg-white/[0.015] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  {/* Atmospheric Glow on active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute -top-12 -left-12 w-40 h-40 bg-[#4f6df0]/20 rounded-full blur-3xl pointer-events-none"
                    />
                  )}

                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-white/30 tracking-widest">{pillar.num} // CORE</span>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border transition-colors ${
                        isActive
                          ? 'border-[#4f6df0]/40 text-[#91a7ff] bg-[#4f6df0]/10'
                          : 'border-white/10 text-white/30 bg-transparent'
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? 'bg-[#4f6df0] text-white shadow-[0_0_20px_#4f6df0]'
                          : 'bg-white/[0.04] text-white/40 group-hover:text-white group-hover:bg-white/[0.08]'
                      }`}
                    >
                      <Icon size={26} />
                    </motion.div>
                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-white/35 font-light leading-relaxed mb-6">
                    {pillar.tagline}
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium pt-4 border-t border-white/[0.05]">
                    <span className={isActive ? 'text-[#91a7ff]' : 'text-white/30 group-hover:text-white/60'}>
                      {isActive ? 'Currently Inspected' : 'Click to Inspect'}
                    </span>
                    <ArrowRight
                      size={14}
                      className={`transition-transform duration-300 ${
                        isActive ? 'text-[#91a7ff] translate-x-1' : 'text-white/20 group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ─── CINEMATIC EXPANDED SERVICE DETAIL VIEW ─── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#060a16] to-[#04060c] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Pillar Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.07]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#4f6df0] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#91a7ff]">
                      {currentPillar.title} Catalog
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                    {currentPillar.title} Services
                  </h4>
                  <p className="mt-2 text-sm text-white/40 font-light max-w-2xl">
                    {currentPillar.summary}
                  </p>
                </div>

                <div className="text-xs font-mono text-white/30 shrink-0">
                  TOTAL SPECIFIED: <span className="text-white font-semibold">{currentPillar.services.length} PRACTICES</span>
                </div>
              </div>

              {/* Two Column Layout: Service Sub-Navigation List + Focused Detail Dossier */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8">
                {/* Left Column: Interactive Sub-Service List */}
                <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {currentPillar.services.map((sub, sIdx) => {
                    const SubIcon = sub.icon;
                    const isSelected = activeSubItem === sIdx;
                    return (
                      <button
                        key={sub.name}
                        onClick={() => setActiveSubItem(sIdx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                          isSelected
                            ? 'bg-[#4f6df0]/15 border-[#4f6df0]/50 text-white shadow-lg'
                            : 'bg-white/[0.015] border-white/[0.05] hover:border-white/15 text-white/60 hover:text-white'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-[#4f6df0] text-white'
                              : 'bg-white/[0.04] text-white/40 group-hover:text-white'
                          }`}
                        >
                          <SubIcon size={18} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-white/30">{sub.num}</span>
                            <span className="text-sm font-semibold truncate tracking-tight">{sub.name}</span>
                          </div>
                        </div>

                        <ArrowRight
                          size={15}
                          className={`shrink-0 transition-transform ${
                            isSelected ? 'text-[#91a7ff] translate-x-1' : 'opacity-0 -translate-x-1'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Dedicated Cinematic Dossier Card */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="p-8 md:p-10 rounded-2xl bg-[#04060c]/90 border border-white/[0.08] h-full flex flex-col justify-between"
                    >
                      <div>
                        {/* Dossier Meta */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                          <span className="text-[11px] font-mono tracking-widest uppercase text-[#91a7ff]">
                            SPECIFICATION #{currentService.num}
                          </span>
                          <span className="text-[11px] font-mono text-white/30">
                            ENTERPRISE READY
                          </span>
                        </div>

                        {/* Title & Headline */}
                        <h5 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                          {currentService.name}
                        </h5>
                        <p className="text-sm text-[#91a7ff]/80 font-medium mb-6">
                          {currentService.headline}
                        </p>

                        {/* Full Description */}
                        <p className="text-sm md:text-base text-white/50 font-light leading-relaxed mb-8">
                          {currentService.description}
                        </p>

                        {/* Key Deliverables Matrix */}
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 block mb-3">
                            Standard Deliverables
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {currentService.deliverables.map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-white/70"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0]" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA footer */}
                      <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <span className="text-xs text-white/35 font-light">
                          Have specific requirements for {currentService.name}?
                        </span>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#4f6df0] hover:bg-[#3f5cdb] px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(79,109,240,0.3)] shrink-0 self-start sm:self-auto"
                        >
                          <span>Request Briefing</span>
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WORK — Magazine-style Project Showcase
          ══════════════════════════════════════════════════════════════════ */}
      <section id="work" className="relative pb-32 md:pb-44 pt-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-16 md:mb-24">
              <div>
                <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-4">
                  Selected Work
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                  Case studies.
                </h2>
              </div>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 text-xs tracking-wider uppercase text-white/40 hover:text-white transition-colors"
              >
                View all <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Project 1 — Full width hero card */}
          <Reveal>
            <a href="#contact" className="group block relative rounded-2xl overflow-hidden mb-8 cursor-pointer">
              <div className="aspect-[21/9] md:aspect-[2.4/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80"
                  alt="High scale backend infrastructure"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#04060c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">
                  Software Engineering
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">
                  High-Throughput Settlement Platform
                </h3>
                <p className="text-sm text-white/40 font-light max-w-md">
                  Re-architected transaction routing for a global fintech provider,
                  reducing median processing latency from 68ms to under 4.2ms.
                </p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
              </div>
            </a>
          </Reveal>

          {/* Projects 2 & 3 — Asymmetric two-column */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Reveal delay={0.1} className="md:col-span-3">
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
                    alt="Cybersecurity defense operations"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">
                    Cybersecurity
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    Autonomous Perimeter Defense
                  </h3>
                  <p className="text-sm text-white/40 font-light max-w-sm">
                    Continuous zero-trust enforcement and automated behavioral
                    threat containment for a defense technology contractor.
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-2">
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                    alt="AI computing and neural pipelines"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">
                    Artificial Intelligence
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    Document Intelligence Engine
                  </h3>
                  <p className="text-sm text-white/40 font-light max-w-sm">
                    Automated clinical note extraction and regulatory contract
                    synthesis at 10x analyst throughput.
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ABOUT — Editorial split with large typography
          ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-32 md:py-44 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left large statement */}
            <Reveal>
              <div>
                <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-8">
                  About Nexora
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] mb-10">
                  We exist to solve problems
                  most firms won't attempt.
                </h2>
                <div className="w-16 h-[2px] bg-[#4f6df0]/50 mb-10" />
              </div>
            </Reveal>

            {/* Right editorial body text */}
            <Reveal delay={0.15}>
              <div className="lg:pt-16">
                <p className="text-lg md:text-xl text-white/50 font-light leading-[1.8] mb-8">
                  Founded by systems architects, cryptographers, and
                  computational researchers, Nexora was built to address the
                  structural bottlenecks that organizations encounter when
                  off-the-shelf templates and generic AI tools fall short.
                </p>
                <p className="text-base text-white/30 font-light leading-[1.8] mb-12">
                  From high-performance software builds to hardened zero-trust
                  perimeters and bespoke intelligence engines, our work underpins
                  ambitious businesses that require dependable excellence. We build with
                  rigor, test with discipline, and deliver solutions designed to last.
                </p>

                {/* Metrics woven into the narrative */}
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/[0.06]">
                  {[
                    { val: '150+', label: 'Projects Shipped' },
                    { val: '99.99%', label: 'Uptime SLA' },
                    { val: '12', label: 'Countries Served' },
                    { val: '24/7', label: 'Tier-3 Support' },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">
                        {m.val}
                      </div>
                      <div className="text-xs text-white/30 mt-1 tracking-wide uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Pull quote */}
          <Reveal className="mt-32 md:mt-44">
            <blockquote className="relative">
              <div className="absolute -top-6 left-0 text-8xl font-serif text-[#4f6df0]/10 leading-none select-none">
                "
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white/80 leading-[1.3] tracking-tight max-w-5xl">
                We don't keep pace with the future —
                <span className="text-white font-medium"> we set its specifications</span>
                <span className="text-[#4f6df0]">.</span>
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CONTACT — Minimal, Confident
          ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 md:py-44 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <Reveal>
              <div>
                <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-6">
                  Start a Conversation
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  Let's build
                  <br />
                  something real<span className="text-[#4f6df0]">.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6 lg:items-end">
                <p className="text-base text-white/40 font-light max-w-md lg:text-right leading-relaxed">
                  Tell us what technical challenge you are looking to solve. We'll
                  schedule a technical briefing with our principal team within 24 hours.
                </p>
                <a
                  href="mailto:hello@nexora.tech"
                  className="group inline-flex items-center gap-4 text-white"
                >
                  <span className="text-lg md:text-xl font-light tracking-wide group-hover:text-[#a0b4ff] transition-colors">
                    hello@nexora.tech
                  </span>
                  <span className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/10 flex items-center justify-center transition-all duration-500">
                    <Mail size={16} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER — Minimal & Art-Directed
          ══════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.04] py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-baseline gap-1">
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50">
                Nexora
              </span>
              <span className="w-1 h-1 rounded-full bg-[#4f6df0]" />
            </a>
            <span className="text-xs text-white/15">
              © {new Date().getFullYear()} Nexora Technologies Inc. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-8 text-xs text-white/25">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-white/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Security Notice
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
