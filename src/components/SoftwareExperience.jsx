import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe, Palette, Search, Smartphone, ArrowRight,
  ArrowUpRight, Play, Terminal, Activity, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Globe, Palette, Search, Smartphone,
};

function SoftIcon({ name, size = 18, className = '' }) {
  const C = iconMap[name] || Globe;
  return <C size={size} className={className} />;
}

export default function SoftwareExperience({ division, onEnquire }) {
  const [activeSvcId, setActiveSvcId] = useState(division.services[0]?.id || 'web-dev');
  const [engineMode, setEngineMode] = useState('pipeline'); // 'pipeline' | 'schema'

  const services = division.services;

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
              <span className="w-8 h-[2px] rounded-full bg-[#38bdf8]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#38bdf8]">
                SOFTWARE ENGINEERING
              </span>
            </div>

            {/* Editorial Boska Headline */}
            <h1 className="font-boska text-3xl md:text-5xl xl:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08]">
              Engineering
              <br />
              <span className="italic font-light text-[#38bdf8]">Digital </span>
              <span className="text-[#38bdf8] drop-shadow-[0_0_35px_rgba(56,189,248,0.45)]">
                Experiences.
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
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                  boxShadow: '0 0 25px rgba(56,189,248,0.4)',
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
                <span>See Our Work</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Center Column: Living Architectural Digital Engineering Visualizer (NO STATIC PICTURE) ── */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[460px] aspect-[4/3.4] rounded-3xl overflow-hidden border border-white/[0.14] bg-[#030612]/90 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col justify-between p-6"
          >
            {/* Atmospheric Blue Glow — Pure CSS & SVG, zero static images */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-tr from-[#0284c7]/35 via-[#38bdf8]/20 to-transparent blur-[70px] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
            </div>

            {/* Top HUD bar with mode switch */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-white/90">
                  Architectural Engine
                </span>
              </div>
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.08]">
                <button
                  onClick={() => setEngineMode('pipeline')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    engineMode === 'pipeline'
                      ? 'bg-[#38bdf8]/25 text-[#7dd3fc] border border-[#38bdf8]/50'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setEngineMode('schema')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    engineMode === 'schema'
                      ? 'bg-[#38bdf8]/25 text-[#7dd3fc] border border-[#38bdf8]/50'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  Schema
                </button>
              </div>
            </div>

            {/* Center Dynamic Visual: Interactive Pipeline or Schema */}
            <div className="relative z-10 my-auto py-2 flex items-center justify-center">
              {engineMode === 'pipeline' ? (
                <div className="relative w-full h-44 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 360 170" fill="none">
                    {/* Pipeline Connections */}
                    <g stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.5">
                      <line x1="45" y1="85" x2="135" y2="85" />
                      <line x1="135" y1="85" x2="225" y2="45" />
                      <line x1="135" y1="85" x2="225" y2="125" />
                      <line x1="225" y1="45" x2="315" y2="85" />
                      <line x1="225" y1="125" x2="315" y2="85" />
                    </g>

                    {/* Animated Packets */}
                    <circle cx="90" cy="85" r="3" fill="#38bdf8">
                      <animate attributeName="cx" values="45; 135" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="180" cy="65" r="3" fill="#7dd3fc">
                      <animate attributeName="cx" values="135; 225" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="85; 45" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="270" cy="105" r="3" fill="#38bdf8">
                      <animate attributeName="cx" values="225; 315" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="125; 85" dur="1.8s" repeatCount="indefinite" />
                    </circle>

                    {/* Nodes Layer: Client Viewport */}
                    <rect x="20" y="65" width="50" height="40" rx="8" fill="#050b18" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="45" y="88" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENT</text>

                    {/* Edge Gateway */}
                    <rect x="110" y="65" width="50" height="40" rx="8" fill="#071224" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="135" y="88" fill="#e0f2fe" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ROUTER</text>

                    {/* Core Services Cluster */}
                    <rect x="200" y="25" width="50" height="40" rx="8" fill="#050b18" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="225" y="48" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SERVICES</text>

                    {/* Cache Engine */}
                    <rect x="200" y="105" width="50" height="40" rx="8" fill="#050b18" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="225" y="128" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CACHE</text>

                    {/* Database Engine */}
                    <rect x="290" y="65" width="50" height="40" rx="8" fill="#071224" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="315" y="88" fill="#e0f2fe" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DATA</text>
                  </svg>
                </div>
              ) : (
                /* Live Schema View */
                <div className="w-full space-y-3 py-1 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">API Latency</span>
                    <span className="text-[#38bdf8]">&lt; 45ms (P99)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Component Cadence</span>
                    <span className="text-white/90">120 FPS Fluid Gestures</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Lighthouse Score</span>
                    <span className="text-[#7dd3fc]">100/100 Core Vitals</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Availability SLA</span>
                    <span className="text-white/90">99.99% Fault Tolerant</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="relative z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <Activity size={12} className="text-[#38bdf8]" />
                PIPELINE ONLINE · 0ms DRIFT
              </span>
              <span className="text-white/35">BUILD: PRODUCTION</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: 4 Interactive Software Services ── */}
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
                      ? 'bg-white/[0.07] border-[#38bdf8]/60 shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: isSelected ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.04)',
                          color: isSelected ? '#38bdf8' : 'rgba(255,255,255,0.5)',
                          border: `1px solid ${isSelected ? 'rgba(56,189,248,0.5)' : 'rgba(255,255,255,0.08)'}`,
                        }}
                      >
                        <SoftIcon name={svc.icon} size={16} />
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
                          ? 'text-[#38bdf8] translate-x-1 opacity-100'
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
                            Production Architecture Included
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEnquire();
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#38bdf8] hover:underline cursor-pointer"
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
