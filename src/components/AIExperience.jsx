import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, BarChart3, MessageSquareCode, Workflow,
  LineChart, FileText, Layers, ArrowRight, ArrowUpRight, Play
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

        {/* ── Center Column: Neural Centerpiece Artwork ── */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md group"
          >
            <img
              src="/art-ai.jpg"
              alt="Artificial Intelligence"
              className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03050a]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03050a]/40 via-transparent to-[#03050a]/40" />

            {/* Top Right HUD card */}
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.12] shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse bg-[#c084fc]" />
              <span className="text-[11px] font-semibold tracking-wide uppercase text-white/90">
                Cognitive Engine
              </span>
            </div>

            {/* Bottom Left Telemetry */}
            <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.12] text-[10px] font-mono tracking-wider text-white/60">
              NEURAL WEIGHTS CONVERGED · 99.8%
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
