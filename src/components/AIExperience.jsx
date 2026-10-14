import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, BarChart3, MessageSquareCode, Workflow,
  LineChart, FileText, Layers, ArrowRight, ArrowUpRight, Play,
  Cpu, Activity, Zap, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Sparkles, BarChart3, MessageSquareCode, Workflow,
  LineChart, FileText, Layers,
};

function AIIcon({ name, size = 18, className = '' }) {
  const C = iconMap[name] || Sparkles;
  return <C size={size} className={className} />;
}

export default function AIExperience({ division, onEnquire }) {
  const [activeSvcId, setActiveSvcId] = useState(division.services[0]?.id || 'biz-auto');
  const [neuralMode, setNeuralMode] = useState('network'); // 'network' | 'metrics'

  const services = division.services;
  const activeSvc = services.find(s => s.id === activeSvcId) || services[0];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-8 lg:py-12 flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

        {/* ── Left Column: Editorial Headline & Narrative ── */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* Tagline indicator */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] rounded-full bg-[#c084fc]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c084fc]">
                ARTIFICIAL INTELLIGENCE
              </span>
            </div>

            {/* Editorial Boska Headline */}
            <h1 className="font-boska text-3xl md:text-5xl xl:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08]">
              Intelligent Solutions
              <br />
              <span className="italic font-light text-[#c084fc]">for a </span>
              <span className="text-[#c084fc] drop-shadow-[0_0_35px_rgba(192,132,252,0.45)]">
                Smarter Tomorrow.
              </span>
            </h1>

            {/* Verbatim Supporting Narrative */}
            <p className="mt-5 text-sm md:text-base text-white/60 font-normal leading-[1.8] max-w-md">
              {division.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onEnquire}
                className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-white px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                  boxShadow: '0 0 25px rgba(192,132,252,0.4)',
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onEnquire}
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-white/70 hover:text-white px-4 py-3 rounded-full transition-colors group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-white/50 flex items-center justify-center transition-colors">
                  <Play size={11} className="fill-white translate-x-0.5" />
                </span>
                <span>Watch How It Works</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Center Column: Living Generative Cognitive Intelligence Engine (NO STATIC PICTURE) ── */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[460px] aspect-[4/3.4] rounded-3xl overflow-hidden border border-white/[0.14] bg-[#070512]/90 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col justify-between p-6"
          >
            {/* Atmospheric Neural Glow — Pure CSS & SVG, zero static images */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-tr from-[#9333ea]/35 via-[#c084fc]/25 to-transparent blur-[70px] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
            </div>

            {/* Top HUD bar with mode switch */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse shadow-[0_0_8px_#c084fc]" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-white/90">
                  Cognitive Core
                </span>
              </div>
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.08]">
                <button
                  onClick={() => setNeuralMode('network')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    neuralMode === 'network'
                      ? 'bg-[#c084fc]/25 text-[#e9d5ff] border border-[#c084fc]/50'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  Neural Graph
                </button>
                <button
                  onClick={() => setNeuralMode('metrics')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    neuralMode === 'metrics'
                      ? 'bg-[#c084fc]/25 text-[#e9d5ff] border border-[#c084fc]/50'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  Telemetry
                </button>
              </div>
            </div>

            {/* Center Dynamic Visual: Interactive Generative Neural Network */}
            <div className="relative z-10 my-auto py-2 flex items-center justify-center">
              {neuralMode === 'network' ? (
                <div className="relative w-full h-44 flex items-center justify-center">
                  {/* Procedural Animated SVG Synapses */}
                  <svg className="w-full h-full" viewBox="0 0 360 170" fill="none">
                    {/* Synaptic vectors layer */}
                    <g stroke="rgba(192, 132, 252, 0.22)" strokeWidth="1.2">
                      {/* Inputs to Hidden */}
                      <line x1="40" y1="35" x2="180" y2="40" />
                      <line x1="40" y1="35" x2="180" y2="85" />
                      <line x1="40" y1="85" x2="180" y2="40" />
                      <line x1="40" y1="85" x2="180" y2="85" />
                      <line x1="40" y1="85" x2="180" y2="130" />
                      <line x1="40" y1="135" x2="180" y2="85" />
                      <line x1="40" y1="135" x2="180" y2="130" />

                      {/* Hidden to Output */}
                      <line x1="180" y1="40" x2="320" y2="50" />
                      <line x1="180" y1="40" x2="320" y2="120" />
                      <line x1="180" y1="85" x2="320" y2="50" />
                      <line x1="180" y1="85" x2="320" y2="85" />
                      <line x1="180" y1="85" x2="320" y2="120" />
                      <line x1="180" y1="130" x2="320" y2="85" />
                      <line x1="180" y1="130" x2="320" y2="120" />
                    </g>

                    {/* Animated Data Packets Flowing Along Axons */}
                    <circle cx="110" cy="60" r="2.5" fill="#c084fc">
                      <animate attributeName="cx" values="40; 180" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="35; 85" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="85" r="2.5" fill="#38bdf8">
                      <animate attributeName="cx" values="180; 320" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="85; 50" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="110" cy="110" r="2.5" fill="#a855f7">
                      <animate attributeName="cx" values="40; 180" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="135; 85" dur="2.6s" repeatCount="indefinite" />
                    </circle>

                    {/* Nodes Layer: Input Column */}
                    <g fill="#070512" stroke="#c084fc" strokeWidth="2">
                      <circle cx="40" cy="35" r="7" />
                      <circle cx="40" cy="85" r="7" />
                      <circle cx="40" cy="135" r="7" />
                    </g>
                    <g fill="#c084fc">
                      <circle cx="40" cy="35" r="3" />
                      <circle cx="40" cy="85" r="3" />
                      <circle cx="40" cy="135" r="3" />
                    </g>

                    {/* Nodes Layer: Hidden Dense Transformer Core */}
                    <g fill="#180e29" stroke="#9333ea" strokeWidth="2">
                      <circle cx="180" cy="40" r="9" />
                      <circle cx="180" cy="85" r="11" />
                      <circle cx="180" cy="130" r="9" />
                    </g>
                    <g fill="#e9d5ff">
                      <circle cx="180" cy="40" r="4" />
                      <circle cx="180" cy="85" r="5" className="animate-ping" style={{ transformOrigin: '180px 85px' }} />
                      <circle cx="180" cy="130" r="4" />
                    </g>

                    {/* Nodes Layer: Output Projection Column */}
                    <g fill="#070512" stroke="#38bdf8" strokeWidth="2">
                      <circle cx="320" cy="50" r="7" />
                      <circle cx="320" cy="85" r="8" />
                      <circle cx="320" cy="120" r="7" />
                    </g>
                    <g fill="#38bdf8">
                      <circle cx="320" cy="50" r="3" />
                      <circle cx="320" cy="85" r="4" />
                      <circle cx="320" cy="120" r="3" />
                    </g>
                  </svg>
                </div>
              ) : (
                /* Live Model Parameters Telemetry */
                <div className="w-full space-y-3 py-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Model Architecture</span>
                    <span className="font-mono text-white/90">Transformer-MoE · 8x7B</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Attention Heads</span>
                    <span className="font-mono text-[#c084fc]">32 Multi-Query Heads</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Inference Cadence</span>
                    <span className="font-mono text-white/90">142 Tokens/sec (FP16)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Context Alignment</span>
                    <span className="font-mono text-[#38bdf8]">128,000 Tokens</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="relative z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <Activity size={12} className="text-[#c084fc]" />
                AUTONOMOUS LATENTS ACTIVE
              </span>
              <span className="text-white/35">LOSS: 0.0124</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: 7 Interactive AI Services ── */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-2.5 max-h-[560px] overflow-y-auto pr-2 custom-scrollbar"
          >
            {services.map((svc, i) => {
              const isSelected = svc.id === activeSvcId;
              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveSvcId(svc.id)}
                  className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white/[0.07] border-[#c084fc]/60 shadow-[0_0_25px_rgba(192,132,252,0.2)]'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: isSelected ? 'rgba(192,132,252,0.2)' : 'rgba(255,255,255,0.04)',
                          color: isSelected ? '#c084fc' : 'rgba(255,255,255,0.5)',
                          border: `1px solid ${isSelected ? 'rgba(192,132,252,0.5)' : 'rgba(255,255,255,0.08)'}`,
                        }}
                      >
                        <AIIcon name={svc.icon} size={16} />
                      </div>

                      <span className="text-xs font-semibold tracking-wider text-white/35 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className={`text-sm font-semibold tracking-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {svc.title}
                      </span>
                    </div>

                    <ArrowRight
                      size={15}
                      className={`transition-all duration-300 shrink-0 ${
                        isSelected
                          ? 'text-[#c084fc] translate-x-1 opacity-100'
                          : 'text-white/30 group-hover:text-white/75 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-3 pt-3 border-t border-white/[0.08]"
                      >
                        <p className="text-xs text-white/65 font-normal leading-relaxed mb-3">
                          {svc.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                            Enterprise AI Integration Included
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEnquire();
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c084fc] hover:underline cursor-pointer"
                          >
                            Enquire <ArrowUpRight size={12} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
