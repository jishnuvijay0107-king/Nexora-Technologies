import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ArrowUpRight, Play, Activity,
  Sparkles, Brain, Cpu, Zap
} from 'lucide-react';

export default function AIExperience({ division, onEnquire }) {
  const [activeSvcId, setActiveSvcId] = useState('biz-auto');
  const services = division.services;
  const currentService = services.find((s) => s.id === activeSvcId) || services[0];

  const aiIntelligence = {
    'biz-auto': {
      category: 'Intelligent Automation',
      model: 'Custom LLM Pipelines & Task Agents',
      metric: '85% Manual Effort Reduction',
      deliverables: [
        'Automated document & data intake classification workflows',
        'Multi-agent decision logic with deterministic validation boundaries',
        'Enterprise ERP and CRM intelligent automation connectors',
        'Human-in-the-loop review interfaces for mission-critical actions',
      ],
    },
    'analytics': {
      category: 'Predictive Intelligence',
      model: 'Time-Series & Vector Analytics',
      metric: 'Sub-Second Analytical Queries',
      deliverables: [
        'Interactive executive KPI intelligence dashboards',
        'Automated anomaly detection across operational datasets',
        'Predictive demand forecasting & resource allocation models',
        'Natural-language data query interfaces for non-technical teams',
      ],
    },
    'chatbots': {
      category: 'Conversational Agents',
      model: 'RAG Architecture + Guardrails',
      metric: '< 250ms First-Token Latency',
      deliverables: [
        'Context-aware conversational assistants trained on private knowledge',
        'Strict output sanitization and hallucination prevention filters',
        'Multi-channel web, API, and internal enterprise chat integrations',
        'Continuous audit logging and sentiment feedback telemetry',
      ],
    },
    'process-auto': {
      category: 'Workflow Orchestration',
      model: 'Deterministic Agentic Chains',
      metric: 'Zero-Error Processing',
      deliverables: [
        'End-to-end multi-step workflow automation across disparate tools',
        'Automated webhook parsing, transformation, and dispatching',
        'Self-healing error recovery and fallback notification systems',
        'Regulatory audit trails and SLA compliance monitoring',
      ],
    },
    'ai-data': {
      category: 'Deep Data Modeling',
      model: 'Transformer Embedding Clustered Graphs',
      metric: '99.4% Extraction Precision',
      deliverables: [
        'High-dimensional semantic vector search indexing',
        'Automated unstructured text summarization and insight synthesis',
        'Pattern discovery algorithms across multi-terabyte datasets',
        'Automated recurring executive analytical intelligence briefings',
      ],
    },
    'doc-assist': {
      category: 'Document Intelligence',
      model: 'Hierarchical RAG Retrieval',
      metric: '100% Sourced Citations',
      deliverables: [
        'Multi-format PDF, Word, and spreadsheet ingestion pipelines',
        'Verifiable citation anchoring linking answers directly to source pages',
        'Confidential on-premise or private-VPC document retrieval hosting',
        'Role-based document access permission enforcement',
      ],
    },
    'custom-ai': {
      category: 'Bespoke AI Engineering',
      model: 'Fine-Tuned Domain-Specific Models',
      metric: 'Proprietary Weight Sovereignty',
      deliverables: [
        'Task-specific LoRA / Full fine-tuning on proprietary business corpora',
        'Optimized local inference serving (vLLM / TensorRT-LLM)',
        'Data privacy boundaries ensuring zero training on public cloud models',
        'Full lifecycle model performance monitoring and drift evaluation',
      ],
    },
  }[currentService.id];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-8 lg:py-14 flex flex-col justify-between">
      {/* ── Editorial Masthead ── */}
      <section className="mb-12 lg:mb-16 border-b border-white/[0.08] pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#c084fc]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#c084fc]">
            ARTIFICIAL INTELLIGENCE DIVISION // COGNITIVE SYSTEMS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-boska text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal tracking-tight text-white leading-[1.03]">
              Intelligent Solutions{' '}
              <span className="italic font-light text-[#c084fc]">for a</span>{' '}
              Smarter Tomorrow.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/60 font-normal leading-relaxed max-w-2xl">
              {division.supportingText}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <button
              onClick={onEnquire}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#9333ea] hover:bg-[#a855f7] transition-all duration-300 shadow-[0_0_30px_rgba(192,132,252,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <span>PRIVATE RAG ARCHITECTURE</span>
              <span>·</span>
              <span>ZERO PUBLIC TRAINING</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial 2-Column Split: Pure Typographic Ledger + Dynamic Cognitive Intelligence Visualizer ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Editorial Capability Ledger (7 Disciplines, Clean Hairlines, NO BOX CARDS) */}
        <div className="lg:col-span-6 space-y-0 border-t border-white/[0.08]">
          <div className="flex items-center justify-between py-3 text-xs font-mono tracking-wider uppercase text-white/35">
            <span>Discipline Index</span>
            <span>07 Core Capabilities</span>
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
                    isSelected ? 'text-[#c084fc] rotate-45' : 'text-white/30 group-hover:text-white/60'
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
                          Enterprise AI // Verified Citations
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEnquire();
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc] hover:text-white transition-colors cursor-pointer"
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

        {/* Right Column: Dynamic Cognitive Neural Visualizer */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/[0.12] bg-[#070512]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c084fc]/10 blur-[90px] pointer-events-none" />

              {/* Console Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#c084fc] block mb-1">
                    {aiIntelligence.category}
                  </span>
                  <h2 className="font-boska text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    {currentService.title}
                  </h2>
                </div>

                <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/60">
                  COGNITIVE CORE: ONLINE
                </div>
              </div>

              {/* Procedural Generative Neural Network Visual (NO STATIC PICTURE) */}
              <div className="relative z-10 py-6 border-b border-white/[0.08]">
                <div className="relative w-full h-40 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 340 160" fill="none">
                    {/* Synaptic vectors */}
                    <g stroke="rgba(192, 132, 252, 0.22)" strokeWidth="1.2">
                      <line x1="35" y1="35" x2="170" y2="40" />
                      <line x1="35" y1="35" x2="170" y2="80" />
                      <line x1="35" y1="80" x2="170" y2="40" />
                      <line x1="35" y1="80" x2="170" y2="80" />
                      <line x1="35" y1="80" x2="170" y2="120" />
                      <line x1="35" y1="125" x2="170" y2="80" />
                      <line x1="35" y1="125" x2="170" y2="120" />

                      <line x1="170" y1="40" x2="305" y2="50" />
                      <line x1="170" y1="40" x2="305" y2="110" />
                      <line x1="170" y1="80" x2="305" y2="50" />
                      <line x1="170" y1="80" x2="305" y2="80" />
                      <line x1="170" y1="80" x2="305" y2="110" />
                      <line x1="170" y1="120" x2="305" y2="80" />
                      <line x1="170" y1="120" x2="305" y2="110" />
                    </g>

                    {/* Traveling Data Pulses */}
                    <circle cx="100" cy="55" r="2.5" fill="#c084fc">
                      <animate attributeName="cx" values="35; 170" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="35; 80" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="235" cy="80" r="2.5" fill="#38bdf8">
                      <animate attributeName="cx" values="170; 305" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="80; 50" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="100" r="2.5" fill="#a855f7">
                      <animate attributeName="cx" values="35; 170" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="125; 80" dur="2.6s" repeatCount="indefinite" />
                    </circle>

                    {/* Nodes Layer: Inputs */}
                    <g fill="#070512" stroke="#c084fc" strokeWidth="2">
                      <circle cx="35" cy="35" r="6" />
                      <circle cx="35" cy="80" r="6" />
                      <circle cx="35" cy="125" r="6" />
                    </g>
                    <circle cx="35" cy="35" r="2.5" fill="#c084fc" />
                    <circle cx="35" cy="80" r="2.5" fill="#c084fc" />
                    <circle cx="35" cy="125" r="2.5" fill="#c084fc" />

                    {/* Transformer Attention Core */}
                    <g fill="#180e29" stroke="#9333ea" strokeWidth="2">
                      <circle cx="170" cy="40" r="8" />
                      <circle cx="170" cy="80" r="10" />
                      <circle cx="170" cy="120" r="8" />
                    </g>
                    <circle cx="170" cy="40" r="3.5" fill="#e9d5ff" />
                    <circle cx="170" cy="80" r="4.5" fill="#e9d5ff" />
                    <circle cx="170" cy="120" r="3.5" fill="#e9d5ff" />

                    {/* Projection Outputs */}
                    <g fill="#070512" stroke="#38bdf8" strokeWidth="2">
                      <circle cx="305" cy="50" r="6" />
                      <circle cx="305" cy="80" r="7" />
                      <circle cx="305" cy="110" r="6" />
                    </g>
                    <circle cx="305" cy="50" r="2.5" fill="#38bdf8" />
                    <circle cx="305" cy="80" r="3" fill="#38bdf8" />
                    <circle cx="305" cy="110" r="2.5" fill="#38bdf8" />
                  </svg>
                </div>
              </div>

              {/* Benchmarks & Deliverables */}
              <div className="relative z-10 py-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/35 block mb-1">
                      Model Architecture
                    </span>
                    <span className="text-sm font-semibold text-[#c084fc]">
                      {aiIntelligence.model}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/35 block mb-1">
                      Operational Metric
                    </span>
                    <span className="text-sm font-semibold text-white/90">
                      {aiIntelligence.metric}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-3">
                    Verified Deliverables:
                  </h4>
                  <div className="space-y-2">
                    {aiIntelligence.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed">
                        <span className="text-[#c084fc] font-mono mt-0.5">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Consultation Trigger */}
              <div className="relative z-10 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <span className="text-xs text-white/40 font-mono">
                  Ready to deploy intelligent automation?
                </span>
                <button
                  type="button"
                  onClick={onEnquire}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#9333ea] text-white hover:text-white transition-all duration-300 border border-white/10 hover:border-[#9333ea] cursor-pointer"
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
