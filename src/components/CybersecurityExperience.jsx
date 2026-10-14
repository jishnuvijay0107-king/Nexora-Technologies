import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, ShieldAlert, Wrench, Server, Lock, MailWarning,
  Network, GraduationCap, Cpu, FileCheck2, ArrowRight,
  CheckCircle2, ArrowUpRight, Search, FileText, AlertTriangle
} from 'lucide-react';

const iconMap = {
  Shield, ShieldAlert, Wrench, Server, Lock, MailWarning,
  Network, GraduationCap, Cpu, FileCheck2,
};

function SecIcon({ name, size = 18, className = '' }) {
  const C = iconMap[name] || Shield;
  return <C size={size} className={className} />;
}

export default function CybersecurityExperience({ division, onEnquire }) {
  const [selectedServiceId, setSelectedServiceId] = useState('sec-assess');
  const [activePillar, setActivePillar] = useState('all');

  const services = division.services;

  // Strategic categorization of the 9 services into 3 defense pillars
  const pillars = [
    { id: 'all', label: 'All 9 Capabilities' },
    { id: 'assess', label: 'Assessments & Audits' },
    { id: 'defense', label: 'Core Defense & Infra' },
    { id: 'advanced', label: 'AI & Advanced Defense' },
  ];

  const servicePillarMap = {
    'sec-assess': 'assess',
    'network': 'assess',
    'risk-report': 'assess',
    'cyber-svc': 'defense',
    'web-maint': 'defense',
    'it-consult': 'defense',
    'phishing': 'advanced',
    'ai-sec': 'advanced',
    'training': 'advanced',
  };

  const filteredServices = activePillar === 'all'
    ? services
    : services.filter(s => servicePillarMap[s.id] === activePillar);

  const currentService = services.find(s => s.id === selectedServiceId) || services[0];

  // Specific contextual intelligence for each of the 9 services
  const securityIntelligence = {
    'cyber-svc': {
      objective: 'Comprehensive Institutional Defense',
      vector: 'Attack Surface Reduction & Threat Hardening',
      framework: 'NIST CSF 2.0 / ISO 27001 Advisory',
      deliverables: [
        'Security posture analysis & maturity roadmap',
        'Identity & access management governance (IAM)',
        'Defensive control implementation & hardening',
        'Incident readiness advisory and response planning',
      ],
    },
    'web-maint': {
      objective: 'Continuous Operational Resilience',
      vector: 'Unpatched Exploit Mitigation & System Uptime',
      framework: 'Proactive Patch Management Standards',
      deliverables: [
        'Automated scheduled backups & disaster recovery tests',
        'Core framework & dependency security patching',
        'Real-time uptime & anomaly monitoring',
        'Configuration drift detection and error mitigation',
      ],
    },
    'it-consult': {
      objective: 'Secure Infrastructure Integration',
      vector: 'Misconfiguration & Architectural Flaw Elimination',
      framework: 'Zero-Trust Architecture Principles',
      deliverables: [
        'Enterprise IT security architecture design',
        'Secure multi-environment migration strategies',
        'Vendor technology risk assessment',
        'Operational efficiency & security tooling alignment',
      ],
    },
    'sec-assess': {
      objective: 'Authorized Vulnerability Identification',
      vector: 'OWASP Top 10 & CWE Weakness Discovery',
      framework: 'OWASP Web Security Testing Guide (WSTG)',
      deliverables: [
        'Authorized automated & manual penetration testing',
        'Authentication bypass & injection vulnerability analysis',
        'Cryptographic & SSL/TLS cipher evaluation',
        'Prioritized CVSS 3.1 remediation action plans',
      ],
    },
    'phishing': {
      objective: 'Social Engineering & Email Defense',
      vector: 'Domain Spoofing & Malicious Payload Neutralization',
      framework: 'DMARC / SPF / DKIM & Behavioral Analysis',
      deliverables: [
        'Automated suspicious URL analysis algorithms',
        'Email gateway security rule calibration',
        'Domain spoofing & brand impersonation detection',
        'Suspicious message triage and heuristic evaluation',
      ],
    },
    'network': {
      objective: 'Perimeter & Internal Traffic Auditing',
      vector: 'Exposed Port & Lateral Movement Prevention',
      framework: 'CIS Network Security Benchmarks',
      deliverables: [
        'Perimeter firewall rule and port exposure review',
        'Internal segmentation and subnet isolation audit',
        'VPN and remote access security evaluations',
        'Network telemetry and log visibility assessment',
      ],
    },
    'training': {
      objective: 'Human Layer Cyber Resilience',
      vector: 'Credential Harvesting & Social Engineering Defense',
      framework: 'Practical Behavioral Security Protocols',
      deliverables: [
        'Realistic simulated phishing campaign exercises',
        'Executive & workforce secure data-handling training',
        'Password manager & MFA best practice adoption',
        'Clear incident reporting guidelines for employees',
      ],
    },
    'ai-sec': {
      objective: 'Enterprise AI & LLM Protection',
      vector: 'Prompt Injection, Insecure Output & Data Exfiltration',
      framework: 'OWASP Top 10 for LLM Applications',
      deliverables: [
        'Direct and indirect prompt-injection threat modeling',
        'Retrieval-Augmented Generation (RAG) data access guardrails',
        'Model input sanitization and output filter validation',
        'Agentic tool-call permission boundary enforcement',
      ],
    },
    'risk-report': {
      objective: 'Executive & Technical Remediation Guidance',
      vector: 'Actionable Prioritization of Organizational Risks',
      framework: 'Quantitative Risk Assessment (FAIR / CVSS)',
      deliverables: [
        'Executive summaries tailored for leadership & board review',
        'Detailed engineering remediation specifications',
        'Defect severity ranking and risk impact matrices',
        'Post-remediation verification and re-testing validation',
      ],
    },
  }[currentService.id];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-8 lg:py-12 flex flex-col justify-between">
      {/* ── Security Masthead / Hero ── */}
      <section className="mb-12 lg:mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#00f0ff]" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00f0ff]">
            Cybersecurity Division
          </span>
          <span className="text-white/20 hidden sm:inline">/</span>
          <span className="text-xs tracking-wider uppercase text-white/40 hidden sm:inline">
            Risk Mitigation & Digital Defense
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-boska text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-normal tracking-tight text-white leading-[1.04]">
              Stronger Security{' '}
              <span className="italic font-light text-[#00f0ff]">for a</span>{' '}
              Safer Tomorrow.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/65 font-normal leading-relaxed max-w-2xl">
              We help organizations identify risks, strengthen their defenses, and improve the security of their digital environments.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <button
              onClick={onEnquire}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#00f0ff] hover:bg-[#67e8f9] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-6 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                Zero-Trust Principles
              </span>
              <span>·</span>
              <span>Authorized Assessments</span>
            </div>
          </div>
        </div>

        {/* Defense Standards Banner */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Defense Protocol</span>
            <span className="text-sm font-semibold text-white/90">OWASP Top 10 Aligned</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Risk Governance</span>
            <span className="text-sm font-semibold text-white/90">Actionable Remediation</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Specialization</span>
            <span className="text-sm font-semibold text-white/90">AI Application Security</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Assessment Scope</span>
            <span className="text-sm font-semibold text-white/90">Authorized Systems Only</span>
          </div>
        </div>
      </section>

      {/* ── Structured 9-Service Defense Matrix / Capability Navigator ── */}
      <section className="space-y-6">
        {/* Pillar Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {pillars.map((p) => {
              const isActive = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/50 shadow-sm'
                      : 'bg-white/[0.03] text-white/45 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-white/40 hidden sm:inline">
            Showing {filteredServices.length} of 9 defensive disciplines
          </span>
        </div>

        {/* Dual-Pane Defense Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Pane: Interactive Capability Ledger (List of Services) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredServices.map((svc, index) => {
              const isSelected = svc.id === selectedServiceId;
              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedServiceId(svc.id)}
                  className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 border text-left relative overflow-hidden ${
                    isSelected
                      ? 'bg-white/[0.07] border-[#00f0ff]/60 shadow-[0_15px_30px_rgba(0,240,255,0.12)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="cyberActiveGlow"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#00f0ff]"
                    />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40'
                            : 'bg-white/[0.04] text-white/50 border border-white/[0.08] group-hover:text-white'
                        }`}
                      >
                        <SecIcon name={svc.icon} size={15} />
                      </div>

                      <h3 className={`text-sm font-semibold tracking-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {svc.title}
                      </h3>
                    </div>

                    <ArrowRight
                      size={14}
                      className={`shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'text-[#00f0ff] translate-x-1 opacity-100'
                          : 'text-white/30 group-hover:text-white/70 opacity-40'
                      }`}
                    />
                  </div>

                  <p className="mt-2 text-xs text-white/55 font-normal leading-relaxed pl-11 line-clamp-2">
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Pane: Authoritative Threat Mitigation & Architecture Readout */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-white/[0.12] bg-[#020713]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Visual watermark: Dimensional Protection Emblem */}
                <div className="absolute right-4 top-4 pointer-events-none opacity-5">
                  <Shield size={240} className="text-[#00f0ff]" />
                </div>

                {/* Viewport Top Header */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00f0ff] block mb-1">
                      {securityIntelligence.framework}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                      <SecIcon name={currentService.icon} size={22} className="text-[#00f0ff]" />
                      <span>{currentService.title}</span>
                    </h2>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-white/60">
                    STATUS: HARDENED
                  </div>
                </div>

                {/* Service Verbatim Description & Operational Scope */}
                <div className="relative z-10 py-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/45 mb-2">
                      Official Service Scope
                    </h4>
                    <p className="text-sm text-white/80 font-normal leading-relaxed">
                      {currentService.desc}
                    </p>
                  </div>

                  {/* Operational Target & Threat Vector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] uppercase font-bold text-white/35 block mb-1">
                        Primary Defense Objective
                      </span>
                      <span className="text-sm font-semibold text-white/95">
                        {securityIntelligence.objective}
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] uppercase font-bold text-white/35 block mb-1">
                        Mitigation Focus Vector
                      </span>
                      <span className="text-sm font-semibold text-[#00f0ff]">
                        {securityIntelligence.vector}
                      </span>
                    </div>
                  </div>

                  {/* Concrete Defensive Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/45 mb-3.5">
                      Key Verification Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {securityIntelligence.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed">
                          <CheckCircle2 size={15} className="text-[#00f0ff] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Illustrative Telemetry Disclaimer (Prominently transparent per prompt) */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-white/45 flex items-center gap-2">
                    <AlertTriangle size={14} className="text-[#00f0ff]/70 shrink-0" />
                    <span>
                      Illustrative Defense Architecture // All security assessments are conducted exclusively on authorized systems with clear scope authorization.
                    </span>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="relative z-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-white/45">
                    Strengthen your organization's digital perimeter with Nexora.
                  </div>
                  <button
                    type="button"
                    onClick={onEnquire}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#00f0ff] text-white hover:text-black transition-all duration-300 border border-white/10 hover:border-[#00f0ff] cursor-pointer"
                  >
                    <span>Enquire for Security Review</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
