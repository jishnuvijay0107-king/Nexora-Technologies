import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, ArrowRight, ArrowUpRight, Play, Activity,
  CheckCircle2, AlertTriangle, Lock, Cpu
} from 'lucide-react';

export default function CybersecurityExperience({ division, onEnquire }) {
  const [activeSvcId, setActiveSvcId] = useState('sec-assess');
  const services = division.services;
  const currentService = services.find((s) => s.id === activeSvcId) || services[0];

  // Editorial intelligence & verified deliverables for each of the 9 disciplines
  const serviceIntelligence = {
    'cyber-svc': {
      category: 'Institutional Advisory',
      vector: 'Attack Surface Reduction & Threat Hardening',
      framework: 'NIST CSF 2.0 / ISO 27001 Advisory',
      deliverables: [
        'Security posture analysis & organizational maturity roadmap',
        'Identity & access management governance (IAM) review',
        'Defensive control implementation & boundary hardening',
        'Incident readiness advisory and response playbooks',
      ],
    },
    'web-maint': {
      category: 'Operational Resilience',
      vector: 'Unpatched Exploit Mitigation & System Uptime',
      framework: 'Proactive Patch Management Standards',
      deliverables: [
        'Automated scheduled backups & disaster recovery validation',
        'Core framework & third-party dependency security patching',
        'Continuous uptime & anomaly telemetry monitoring',
        'Configuration drift detection and error mitigation',
      ],
    },
    'it-consult': {
      category: 'Infrastructure Strategy',
      vector: 'Architectural Flaw Elimination',
      framework: 'Zero-Trust Architecture Principles',
      deliverables: [
        'Enterprise IT security architecture blueprint design',
        'Secure multi-environment migration strategies',
        'Vendor technology risk and compliance assessment',
        'Operational efficiency & security tooling alignment',
      ],
    },
    'sec-assess': {
      category: 'Penetration & Flaw Audit',
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
      category: 'Social Engineering Defense',
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
      category: 'Perimeter Auditing',
      vector: 'Exposed Service & Lateral Movement Prevention',
      framework: 'CIS Network Security Benchmarks',
      deliverables: [
        'Perimeter firewall rule and port exposure review',
        'Internal segmentation and subnet isolation audit',
        'VPN and remote access security evaluations',
        'Network telemetry and log visibility assessment',
      ],
    },
    'training': {
      category: 'Human Resilience',
      vector: 'Credential Harvesting & Social Engineering Defense',
      framework: 'Behavioral Security Protocols',
      deliverables: [
        'Realistic simulated phishing campaign exercises',
        'Executive & workforce secure data-handling training',
        'Password manager & MFA best practice adoption',
        'Clear incident reporting guidelines for employees',
      ],
    },
    'ai-sec': {
      category: 'AI Application Security',
      vector: 'Prompt Injection & Data Exfiltration Defense',
      framework: 'OWASP Top 10 for LLM Applications',
      deliverables: [
        'Direct and indirect prompt-injection threat modeling',
        'Retrieval-Augmented Generation (RAG) data access guardrails',
        'Model input sanitization and output filter validation',
        'Agentic tool-call permission boundary enforcement',
      ],
    },
    'risk-report': {
      category: 'Risk Governance',
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
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-8 lg:py-14 flex flex-col justify-between">
      {/* ── Editorial Masthead ── */}
      <section className="mb-12 lg:mb-16 border-b border-white/[0.08] pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#00f0ff]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#00f0ff]">
            CYBERSECURITY DIVISION // MISSION-CRITICAL DEFENSE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-boska text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal tracking-tight text-white leading-[1.03]">
              Stronger Security{' '}
              <span className="italic font-light text-[#00f0ff]">for a</span>{' '}
              Safer Tomorrow.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/60 font-normal leading-relaxed max-w-2xl">
              {division.supportingText}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <button
              onClick={onEnquire}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#00f0ff] hover:bg-[#67e8f9] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <span>ZERO-TRUST STANDARD</span>
              <span>·</span>
              <span>OWASP WSTG ALIGNED</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial 2-Column Split: Pure Typographic Ledger + Dynamic Defense Console ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Editorial Capability Ledger (9 Disciplines, Clean Hairlines, NO BOX CARDS) */}
        <div className="lg:col-span-6 space-y-0 border-t border-white/[0.08]">
          <div className="flex items-center justify-between py-3 text-xs font-mono tracking-wider uppercase text-white/35">
            <span>Discipline Index</span>
            <span>09 Core Practices</span>
          </div>

          {services.map((svc, i) => {
            const isSelected = svc.id === activeSvcId;
            return (
              <div
                key={svc.id}
                onClick={() => setActiveSvcId(svc.id)}
                className={`group cursor-pointer transition-all duration-200 border-b border-white/[0.08] py-4.5 px-2 ${
                  isSelected ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
              >
                {/* Row Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono font-medium tracking-widest text-white/35 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base sm:text-lg font-medium tracking-tight transition-colors ${
                      isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {svc.title}
                    </h3>
                  </div>

                  <span className={`text-sm font-mono transition-transform duration-300 ${
                    isSelected ? 'text-[#00f0ff] rotate-45' : 'text-white/30 group-hover:text-white/60'
                  }`}>
                    +
                  </span>
                </div>

                {/* Expanded Editorial Body */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pt-3 pl-8"
                    >
                      <p className="text-sm text-white/60 font-normal leading-[1.75] max-w-xl mb-4">
                        {svc.desc}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/[0.05]">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-white/35">
                          Scope Verified // Authorized Protocol
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEnquire();
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00f0ff] hover:text-white transition-colors cursor-pointer"
                        >
                          Inquire About Scope <ArrowUpRight size={13} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Cryptographic Threat Governance Console */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/[0.12] bg-[#020713]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#00f0ff]/10 blur-[90px] pointer-events-none" />

              {/* Console Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#00f0ff] block mb-1">
                    {serviceIntelligence.category}
                  </span>
                  <h2 className="font-boska text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    {currentService.title}
                  </h2>
                </div>

                <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/60">
                  DEFENSE POSTURE: HARDENED
                </div>
              </div>

              {/* Procedural Cryptographic Shield Visual (NO STATIC PICTURE) */}
              <div className="relative z-10 py-6 border-b border-white/[0.08]">
                <div className="relative w-full h-40 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 340 160" fill="none">
                    {/* Concentric Defense Radar Orbit Rings */}
                    <circle cx="170" cy="80" r="65" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="170" cy="80" r="45" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="1.2" />
                    <circle cx="170" cy="80" r="25" stroke="rgba(0, 240, 255, 0.35)" strokeWidth="1.5" />

                    {/* Scanning Radar Sweep Line */}
                    <line x1="170" y1="80" x2="235" y2="80" stroke="#00f0ff" strokeWidth="1.5" opacity="0.7">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 170 80"
                        to="360 170 80"
                        dur="4.5s"
                        repeatCount="indefinite"
                      />
                    </line>

                    {/* Central Cryptographic Shield Core */}
                    <path
                      d="M170 58 L188 66 V84 C188 96 170 104 170 104 C170 104 152 96 152 84 V66 Z"
                      fill="#020d1c"
                      stroke="#00f0ff"
                      strokeWidth="2"
                    />
                    <path
                      d="M170 68 V94 M162 78 L170 68 L178 78"
                      stroke="#00f0ff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Defense Nodes */}
                    <circle cx="105" cy="80" r="4" fill="#00f0ff" />
                    <circle cx="235" cy="80" r="4" fill="#00f0ff" />
                    <circle cx="170" cy="15" r="4" fill="#00f0ff" />
                    <circle cx="170" cy="145" r="4" fill="#00f0ff" />
                  </svg>
                </div>
              </div>

              {/* Verified Intelligence & Deliverables */}
              <div className="relative z-10 py-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/35 block mb-1">
                      Target Threat Vector
                    </span>
                    <span className="text-sm font-semibold text-[#00f0ff]">
                      {serviceIntelligence.vector}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/35 block mb-1">
                      Compliance Standard
                    </span>
                    <span className="text-sm font-semibold text-white/90">
                      {serviceIntelligence.framework}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-3">
                    Verification Deliverables:
                  </h4>
                  <div className="space-y-2">
                    {serviceIntelligence.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed">
                        <span className="text-[#00f0ff] font-mono mt-0.5">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transparency Disclaimer */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-white/45 flex items-center gap-2">
                  <AlertTriangle size={13} className="text-[#00f0ff]/70 shrink-0" />
                  <span>
                    All assessments conducted strictly on authorized scopes under written engagement.
                  </span>
                </div>
              </div>

              {/* Bottom Consultation Trigger */}
              <div className="relative z-10 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <span className="text-xs text-white/40 font-mono">
                  Ready to fortify this perimeter?
                </span>
                <button
                  type="button"
                  onClick={onEnquire}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#00f0ff] text-white hover:text-black transition-all duration-300 border border-white/10 hover:border-[#00f0ff] cursor-pointer"
                >
                  <span>Initiate Consultation</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
