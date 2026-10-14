import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ArrowUpRight, Play, Activity,
  CheckCircle2, Terminal, Cpu, Gauge
} from 'lucide-react';

export default function SoftwareExperience({ division, onEnquire }) {
  const [activeSvcId, setActiveSvcId] = useState('web-dev');
  const services = division.services;
  const currentService = services.find((s) => s.id === activeSvcId) || services[0];

  const softwareIntelligence = {
    'web-dev': {
      category: 'Full-Stack Architecture',
      latency: '< 45ms P99',
      standard: 'Zero-Bloat Microservices',
      stack: ['React / Next.js', 'TypeScript', 'Node.js / Go', 'GraphQL / REST', 'PostgreSQL / Redis'],
      deliverables: [
        'Component-driven modern frontend architecture with strict typing',
        'High-throughput RESTful & GraphQL microservice APIs',
        'Enterprise SaaS & mission-critical custom web platforms',
        'Continuous integration & zero-downtime containerized deployment',
      ],
    },
    'ui-ux': {
      category: 'Product Design Systems',
      latency: '120 FPS Fluid',
      standard: 'WCAG AAA Accessibility',
      stack: ['Figma Design Tokens', 'Design Systems', 'Micro-Interactions', 'Interactive Prototypes'],
      deliverables: [
        'User journey mapping & cognitive information architecture',
        'High-fidelity wireframes & clickable interactive prototypes',
        'Scalable atomic design token systems for design-to-code alignment',
        'Comprehensive accessibility & cognitive ergonomics audits',
      ],
    },
    'seo': {
      category: 'Search & Edge Performance',
      latency: '0.6s LCP',
      standard: '100/100 Core Vitals',
      stack: ['Core Web Vitals', 'JSON-LD Schema', 'Edge SSR Caching', 'Bundle Tree-Shaking'],
      deliverables: [
        'Sub-second Largest Contentful Paint (LCP < 0.8s) optimization',
        'Semantic HTML5 & JSON-LD structured data schema graphs',
        'Crawl budget & international search engine indexation architecture',
        'Zero-bloat JavaScript bundle splitting & performance profiling',
      ],
    },
    'mobile': {
      category: 'Cross-Platform Native',
      latency: '60-120 FPS',
      standard: 'Offline-First SQLite',
      stack: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Fluid Gesture Handlers'],
      deliverables: [
        'Cross-platform iOS & Android native performance optimization',
        'Offline-first local data synchronization & persistent caching',
        'Fluid 120 FPS gesture choreography & micro-interactions',
        'App Store & Google Play automated release pipeline setup',
      ],
    },
  }[currentService.id];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-8 lg:py-14 flex flex-col justify-between">
      {/* ── Editorial Masthead ── */}
      <section className="mb-12 lg:mb-16 border-b border-white/[0.08] pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#38bdf8]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#38bdf8]">
            SOFTWARE ENGINEERING DIVISION // DIGITAL ARCHITECTURE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-boska text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal tracking-tight text-white leading-[1.03]">
              Engineering <span className="italic font-light text-[#38bdf8]">Digital</span> Experiences.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/60 font-normal leading-relaxed max-w-2xl">
              {division.supportingText}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <button
              onClick={onEnquire}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#38bdf8] hover:bg-[#7dd3fc] transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <span>PIXEL-CALIBRATED</span>
              <span>·</span>
              <span>SUB-SECOND EXECUTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial 2-Column Split: Pure Typographic Ledger + Dynamic Architectural Workbench ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Editorial Capability Ledger (4 Disciplines, Clean Hairlines, NO BOX CARDS) */}
        <div className="lg:col-span-6 space-y-0 border-t border-white/[0.08]">
          <div className="flex items-center justify-between py-3 text-xs font-mono tracking-wider uppercase text-white/35">
            <span>Discipline Index</span>
            <span>04 Core Capabilities</span>
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
                    isSelected ? 'text-[#38bdf8] rotate-45' : 'text-white/30 group-hover:text-white/60'
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
                          Production Ready // Scalable Architecture
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEnquire();
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#38bdf8] hover:text-white transition-colors cursor-pointer"
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

        {/* Right Column: Dynamic Architectural Workbench */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/[0.12] bg-[#030612]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#38bdf8]/10 blur-[90px] pointer-events-none" />

              {/* Console Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#38bdf8] block mb-1">
                    {softwareIntelligence.category}
                  </span>
                  <h2 className="font-boska text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    {currentService.title}
                  </h2>
                </div>

                <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/60">
                  BUILD STATUS: OPTIMAL
                </div>
              </div>

              {/* Procedural Architectural Data Pipeline (NO STATIC PICTURE) */}
              <div className="relative z-10 py-6 border-b border-white/[0.08]">
                <div className="relative w-full h-40 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 340 160" fill="none">
                    {/* Pipeline Connections */}
                    <g stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.5">
                      <line x1="40" y1="80" x2="120" y2="80" />
                      <line x1="120" y1="80" x2="200" y2="40" />
                      <line x1="120" y1="80" x2="200" y2="120" />
                      <line x1="200" y1="40" x2="290" y2="80" />
                      <line x1="200" y1="120" x2="290" y2="80" />
                    </g>

                    {/* Animated Packets */}
                    <circle cx="80" cy="80" r="3" fill="#38bdf8">
                      <animate attributeName="cx" values="40; 120" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="160" cy="60" r="3" fill="#7dd3fc">
                      <animate attributeName="cx" values="120; 200" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="80; 40" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="245" cy="100" r="3" fill="#38bdf8">
                      <animate attributeName="cx" values="200; 290" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="120; 80" dur="1.8s" repeatCount="indefinite" />
                    </circle>

                    {/* Nodes Layer */}
                    <rect x="15" y="60" width="50" height="40" rx="8" fill="#040b17" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="40" y="84" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENT</text>

                    <rect x="95" y="60" width="50" height="40" rx="8" fill="#061226" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="120" y="84" fill="#e0f2fe" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ROUTER</text>

                    <rect x="175" y="20" width="50" height="40" rx="8" fill="#040b17" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="200" y="44" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLUSTER</text>

                    <rect x="175" y="100" width="50" height="40" rx="8" fill="#040b17" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="200" y="124" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CACHE</text>

                    <rect x="265" y="60" width="50" height="40" rx="8" fill="#061226" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="290" y="84" fill="#e0f2fe" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DATA</text>
                  </svg>
                </div>
              </div>

              {/* Benchmarks & Tech Stack */}
              <div className="relative z-10 py-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/35 block mb-1">
                      Execution Benchmark
                    </span>
                    <span className="text-sm font-semibold text-[#38bdf8]">
                      {softwareIntelligence.latency}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/35 block mb-1">
                      Delivery Standard
                    </span>
                    <span className="text-sm font-semibold text-white/90">
                      {softwareIntelligence.standard}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-3">
                    Architectural Deliverables:
                  </h4>
                  <div className="space-y-2">
                    {softwareIntelligence.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed">
                        <span className="text-[#38bdf8] font-mono mt-0.5">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-2">
                    Core Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareIntelligence.stack.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-white/70 border border-white/[0.08]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Consultation Trigger */}
              <div className="relative z-10 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <span className="text-xs text-white/40 font-mono">
                  Ready to construct this platform?
                </span>
                <button
                  type="button"
                  onClick={onEnquire}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#38bdf8] text-white hover:text-black transition-all duration-300 border border-white/10 hover:border-[#38bdf8] cursor-pointer"
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
