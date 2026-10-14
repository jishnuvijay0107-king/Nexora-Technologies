import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe, Palette, Search, Smartphone, ArrowRight,
  CheckCircle2, Terminal, Cpu, Gauge, Code2, Sparkles,
  ExternalLink, Layers, ArrowUpRight
} from 'lucide-react';

export default function SoftwareExperience({ division, onEnquire }) {
  const [selectedServiceId, setSelectedServiceId] = useState('web-dev');
  const [activeTab, setActiveTab] = useState('preview');

  const services = division.services;
  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];

  // Specific architectural deliverables & metadata for the 4 services
  const serviceMeta = {
    'web-dev': {
      category: 'Full-Stack Engineering',
      stack: ['React / Next.js', 'TypeScript', 'Node.js / Go', 'GraphQL / REST', 'PostgreSQL / Redis'],
      deliverables: [
        'Component-Driven Modern Frontend Architecture',
        'High-Throughput RESTful & GraphQL APIs',
        'Enterprise SaaS & Custom Web Platforms',
        'Continuous Integration & Zero-Downtime Deployment',
      ],
      metrics: { primary: '< 45ms', primaryLabel: 'API Latency', secondary: '99.99%', secondaryLabel: 'Availability' },
      codeSnippet: `// Nexora Distributed Engine\nexport async function handleRequest(ctx: Context) {\n  const session = await auth.verify(ctx.token);\n  const pipeline = new DataPipeline({ cache: 'redis-edge' });\n  return pipeline.execute(session.scope);\n}`,
    },
    'ui-ux': {
      category: 'Product Design Systems',
      stack: ['Figma Tokens', 'Design Systems', 'Micro-Interactions', 'Prototyping', 'WCAG AA/AAA'],
      deliverables: [
        'User Journey Mapping & Information Architecture',
        'High-Fidelity Wireframes & Interactive Prototypes',
        'Scalable Atomic Design Token Systems',
        'Accessibility & Cognitive Ergonomics Audits',
      ],
      metrics: { primary: '100%', primaryLabel: 'Tokenized UI', secondary: 'WCAG AAA', secondaryLabel: 'Accessibility' },
      codeSnippet: `/* Design Token System */\n:root {\n  --surface-ground: #020409;\n  --accent-electric: #38bdf8;\n  --radius-fluid: clamp(12px, 1.5vw, 24px);\n  --ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);\n}`,
    },
    'seo': {
      category: 'Performance & Search Architecture',
      stack: ['Core Web Vitals', 'JSON-LD Schema', 'Edge Caching', 'SSR Hydration', 'Bundle Optimization'],
      deliverables: [
        'Sub-Second Largest Contentful Paint (LCP < 0.8s)',
        'Semantic HTML5 & JSON-LD Structured Data Schema',
        'Crawl Budget & Search Engine Indexation Optimization',
        'Zero-Bloat Bundle Splitting & Tree-Shaking Audits',
      ],
      metrics: { primary: '100/100', primaryLabel: 'Lighthouse Score', secondary: '0.00', secondaryLabel: 'Cumulative Layout Shift' },
      codeSnippet: `// Next-Gen Edge Optimization\nexport const config = { runtime: 'edge' };\nexport default async function handler(req: Request) {\n  return new Response(payload, {\n    headers: { 'Cache-Control': 's-maxage=31536000, immutable' }\n  });\n}`,
    },
    'mobile': {
      category: 'Cross-Platform Mobile',
      stack: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Offline-First SQLite', 'Gesture Handler'],
      deliverables: [
        'Cross-Platform iOS & Android Native Performance',
        'Offline-First Data Architecture & Local Sync',
        'Fluid 120 FPS Gesture Mechanics & Animations',
        'App Store & Google Play Deployment Pipelines',
      ],
      metrics: { primary: '120 FPS', primaryLabel: 'Render Cadence', secondary: '0ms', secondaryLabel: 'Offline Lag' },
      codeSnippet: `// Native Gesture Interaction\nconst gesture = Gesture.Pan()\n  .onUpdate((e) => { offset.value = e.translationX; })\n  .onEnd(() => { withSpring(0, { damping: 18 }); });`,
    },
  }[currentService.id];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-8 lg:py-12 flex flex-col justify-between">
      {/* ── Architectural Masthead / Hero ── */}
      <section className="mb-12 lg:mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#38bdf8]" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#38bdf8]">
            Software Engineering Division
          </span>
          <span className="text-white/20 hidden sm:inline">/</span>
          <span className="text-xs tracking-wider uppercase text-white/40 hidden sm:inline">
            Digital Craftsmanship & Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-boska text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-normal tracking-tight text-white leading-[1.04]">
              Engineering{' '}
              <span className="italic font-light text-[#38bdf8]">Digital</span>{' '}
              Experiences.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/65 font-normal leading-relaxed max-w-2xl">
              We design and build digital products, websites, and software that turn ambitious ideas into practical solutions.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <button
              onClick={onEnquire}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#38bdf8] hover:bg-[#7dd3fc] transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-6 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                Custom Builds Only
              </span>
              <span>·</span>
              <span>Sub-Second Latency</span>
            </div>
          </div>
        </div>

        {/* Studio Benchmarks Bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Architecture</span>
            <span className="text-sm font-semibold text-white/90">Zero-Bloat Component Systems</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Execution Speed</span>
            <span className="text-sm font-semibold text-white/90">Sub-Millisecond Edge Routing</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Ergonomics</span>
            <span className="text-sm font-semibold text-white/90">Human-Centric Interaction</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/35 block mb-1">Standards</span>
            <span className="text-sm font-semibold text-white/90">WCAG AAA Accessibility</span>
          </div>
        </div>
      </section>

      {/* ── Asymmetric Architectural Atelier / Service Showcase ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Typographic Service Index (4 Services) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/40">
              Selected Capabilities (04)
            </span>
            <span className="text-[11px] text-[#38bdf8] font-medium">Click to inspect specifications</span>
          </div>

          {services.map((svc, index) => {
            const isSelected = svc.id === selectedServiceId;
            return (
              <div
                key={svc.id}
                onClick={() => setSelectedServiceId(svc.id)}
                className={`group cursor-pointer rounded-2xl p-5 transition-all duration-300 border text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-white/[0.06] border-[#38bdf8]/60 shadow-[0_15px_35px_rgba(56,189,248,0.15)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="softwareActiveGlow"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#38bdf8]"
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold tracking-wider text-white/35">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base font-semibold tracking-tight transition-colors ${
                      isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {svc.title}
                    </h3>
                  </div>

                  <ArrowRight
                    size={15}
                    className={`shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'text-[#38bdf8] translate-x-1 opacity-100'
                        : 'text-white/30 group-hover:text-white/70 opacity-40'
                    }`}
                  />
                </div>

                <p className="mt-2.5 text-xs text-white/55 font-normal leading-relaxed pl-7">
                  {svc.desc}
                </p>

                {/* Scope chips */}
                <div className="mt-3.5 pl-7 flex flex-wrap gap-1.5">
                  {serviceMeta && svc.id === selectedServiceId && serviceMeta.stack.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 text-[#7dd3fc] border border-[#38bdf8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Dynamic High-Precision Engineering Viewport */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/[0.12] bg-[#03060f]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle architectural grid watermark */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Viewport Top Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#38bdf8] block mb-1">
                    {serviceMeta.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentService.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 bg-white/[0.04] p-1 rounded-full border border-white/[0.08]">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      activeTab === 'preview'
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      activeTab === 'code'
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Source Blueprint
                  </button>
                </div>
              </div>

              {/* Interactive Viewport Content */}
              <div className="relative z-10 py-6">
                {activeTab === 'preview' ? (
                  <div className="space-y-6">
                    {/* Live Metric Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[10px] uppercase font-bold text-white/35 block mb-1">
                          {serviceMeta.metrics.primaryLabel}
                        </span>
                        <span className="text-2xl font-extrabold text-[#38bdf8] tracking-tight">
                          {serviceMeta.metrics.primary}
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[10px] uppercase font-bold text-white/35 block mb-1">
                          {serviceMeta.metrics.secondaryLabel}
                        </span>
                        <span className="text-2xl font-extrabold text-white tracking-tight">
                          {serviceMeta.metrics.secondary}
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] col-span-2 sm:col-span-1">
                        <span className="text-[10px] uppercase font-bold text-white/35 block mb-1">
                          Delivery Standard
                        </span>
                        <span className="text-sm font-semibold text-white/80 block mt-1">
                          Production Ready & Scalable
                        </span>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3.5">
                        Architectural Deliverables Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceMeta.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed">
                            <CheckCircle2 size={15} className="text-[#38bdf8] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Supported Technology Stack */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2.5">
                        Core Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {serviceMeta.stack.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 rounded-xl bg-white/[0.04] text-white/70 border border-white/[0.08]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Code / Technical Schema View */
                  <div className="rounded-2xl bg-black/80 border border-white/[0.1] p-5 font-mono text-xs overflow-x-auto text-[#7dd3fc] leading-relaxed">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-white/40">
                      <span>blueprint.schema.ts</span>
                      <span>UTF-8 // TypeScript</span>
                    </div>
                    <pre className="text-white/80 whitespace-pre">
                      {serviceMeta.codeSnippet}
                    </pre>
                  </div>
                )}
              </div>

              {/* Bottom Consultation Trigger */}
              <div className="relative z-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-white/45">
                  Ready to construct high-performance digital software with Nexora?
                </div>
                <button
                  type="button"
                  onClick={onEnquire}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#38bdf8] text-white hover:text-black transition-all duration-300 border border-white/10 hover:border-[#38bdf8] cursor-pointer"
                >
                  <span>Enquire About {currentService.title}</span>
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
