import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, ShieldAlert, Wrench, Server, Lock, MailWarning,
  Network, GraduationCap, Cpu, FileCheck2, ArrowRight,
  ArrowUpRight, Play, Activity, AlertTriangle
} from 'lucide-react';

const iconMap = {
  ShieldAlert, Wrench, Server, Lock, MailWarning,
  Network, GraduationCap, Cpu, FileCheck2,
};

function SecIcon({ name, size = 18, className = '' }) {
  const C = iconMap[name] || Shield;
  return <C size={size} className={className} />;
}

export default function CybersecurityExperience({ division, onEnquire }) {
  const [activeSvcId, setActiveSvcId] = useState(division.services[0]?.id || 'cyber-svc');
  const [defenseMode, setDefenseMode] = useState('shield'); // 'shield' | 'telemetry'

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
              <span className="w-8 h-[2px] rounded-full bg-[#00f0ff]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00f0ff]">
                CYBERSECURITY
              </span>
            </div>

            {/* Editorial Boska Headline */}
            <h1 className="font-boska text-3xl md:text-5xl xl:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08]">
              Stronger Security
              <br />
              <span className="italic font-light text-[#00f0ff]">for a </span>
              <span className="text-[#00f0ff] drop-shadow-[0_0_35px_rgba(0,240,255,0.45)]">
                Safer Tomorrow.
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
                className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-black px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #00d4cc 0%, #0284c7 100%)',
                  boxShadow: '0 0 25px rgba(0,240,255,0.4)',
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
                <span>Watch Overview</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Center Column: Living Holographic Cryptographic Defense Engine (NO STATIC PICTURE) ── */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[460px] aspect-[4/3.4] rounded-3xl overflow-hidden border border-white/[0.14] bg-[#020713]/90 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col justify-between p-6"
          >
            {/* Atmospheric Cyan Glow — Pure CSS & SVG, zero static images */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-tr from-[#00d4cc]/35 via-[#00f0ff]/20 to-transparent blur-[70px] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
            </div>

            {/* Top HUD bar with mode switch */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_8px_#00f0ff]" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-white/90">
                  Zero-Trust Vector
                </span>
              </div>
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.08]">
                <button
                  onClick={() => setDefenseMode('shield')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    defenseMode === 'shield'
                      ? 'bg-[#00f0ff]/25 text-[#a5f3fc] border border-[#00f0ff]/50'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  Radar Shield
                </button>
                <button
                  onClick={() => setDefenseMode('telemetry')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    defenseMode === 'telemetry'
                      ? 'bg-[#00f0ff]/25 text-[#a5f3fc] border border-[#00f0ff]/50'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  Governance
                </button>
              </div>
            </div>

            {/* Center Dynamic Visual: Interactive Radar Shield or Telemetry */}
            <div className="relative z-10 my-auto py-2 flex items-center justify-center">
              {defenseMode === 'shield' ? (
                <div className="relative w-full h-44 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 360 170" fill="none">
                    {/* Concentric Defense Radar Orbit Rings */}
                    <circle cx="180" cy="85" r="70" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="180" cy="85" r="50" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="1.2" />
                    <circle cx="180" cy="85" r="30" stroke="rgba(0, 240, 255, 0.35)" strokeWidth="1.5" />

                    {/* Scanning Radar Sweep Line */}
                    <line x1="180" y1="85" x2="250" y2="85" stroke="#00f0ff" strokeWidth="1.5" opacity="0.7">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 180 85"
                        to="360 180 85"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </line>

                    {/* Central Cryptographic Shield Core */}
                    <path
                      d="M180 62 L198 70 V88 C198 100 180 108 180 108 C180 108 162 100 162 88 V70 Z"
                      fill="#031526"
                      stroke="#00f0ff"
                      strokeWidth="2"
                    />
                    <path
                      d="M180 72 V98 M172 82 L180 72 L188 82"
                      stroke="#00f0ff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Perimeter Defense Nodes */}
                    <g fill="#020713" stroke="#00f0ff" strokeWidth="1.5">
                      <circle cx="110" cy="85" r="5" />
                      <circle cx="250" cy="85" r="5" />
                      <circle cx="180" cy="15" r="5" />
                      <circle cx="180" cy="155" r="5" />
                    </g>
                    <g fill="#00f0ff">
                      <circle cx="110" cy="85" r="2.5" />
                      <circle cx="250" cy="85" r="2.5" />
                      <circle cx="180" cy="15" r="2.5" />
                      <circle cx="180" cy="155" r="2.5" />
                    </g>
                  </svg>
                </div>
              ) : (
                /* Live Governance & Compliance Parameters */
                <div className="w-full space-y-3 py-1 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Audit Standard</span>
                    <span className="text-[#00f0ff]">OWASP WSTG v4.2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Framework Alignment</span>
                    <span className="text-white/90">NIST CSF 2.0 / ISO 27001</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Risk Metric Matrix</span>
                    <span className="text-[#a5f3fc]">CVSS v3.1 Scoring</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Assessment Scope</span>
                    <span className="text-white/90">Authorized Systems Only</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="relative z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <Activity size={12} className="text-[#00f0ff]" />
                PERIMETER HARDENED · 100% SECURE
              </span>
              <span className="text-white/35">POLICY: STRICT</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: 9 Interactive Cybersecurity Services ── */}
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
                      ? 'bg-white/[0.07] border-[#00f0ff]/60 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: isSelected ? 'rgba(0,240,255,0.2)' : 'rgba(255,255,255,0.04)',
                          color: isSelected ? '#00f0ff' : 'rgba(255,255,255,0.5)',
                          border: `1px solid ${isSelected ? 'rgba(0,240,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
                        }}
                      >
                        <SecIcon name={svc.icon} size={16} />
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
                          ? 'text-[#00f0ff] translate-x-1 opacity-100'
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
                            Authorized Assessment Protocol Included
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEnquire();
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00f0ff] hover:underline cursor-pointer"
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
