import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight, ChevronDown, Menu, X, Mail, ArrowUpRight,
  Volume2, VolumeX, Code2, Shield, Brain, Globe, Palette,
  Search, Smartphone, ShieldAlert, Wrench, Server, Lock,
  MailWarning, Network, GraduationCap, Cpu, FileCheck2,
  Sparkles, BarChart3, MessageSquareCode, Workflow,
  LineChart, FileText, Layers, Plus, Minus, ArrowLeft,
  CheckCircle2, Terminal, Activity, Eye, Zap,
} from 'lucide-react';
import { divisions } from './data/servicesData';

/* ─── Icon resolver ─── */
const iconMap = {
  Code2, Shield, Brain, Globe, Palette, Search, Smartphone,
  ShieldAlert, Wrench, Server, Lock, MailWarning, Network,
  GraduationCap, Cpu, FileCheck2, Sparkles, BarChart3,
  MessageSquareCode, Workflow, LineChart, FileText, Layers,
};
function LIcon({ name, size = 18, className = '' }) {
  const C = iconMap[name];
  return C ? <C size={size} className={className} /> : null;
}

/* ─── Scroll-reveal wrapper ─── */
function Reveal({ children, delay = 0, className = '', y = 32 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Horizontal Marquee ─── */
function Marquee({ items, speed = 40 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <motion.div
        className="inline-flex gap-16 text-[clamp(4.5rem,10vw,9.5rem)] font-extrabold uppercase tracking-tight text-white/[0.022]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
        {[...items, ...items].map((t, i) => <span key={i} className="shrink-0">{t}</span>)}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CINEMATIC VISUAL CENTERPIECES FOR EACH DIVISION WORLD
   ══════════════════════════════════════════════════════════ */

/* 1. Software Engineering Centerpiece: Architecture Canvas & IDE Layers */
function SoftwareVisualCenterpiece() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-blue-500/20 bg-[#060a16]/90 shadow-[0_0_50px_rgba(62,109,247,0.18)] backdrop-blur-xl p-5 flex flex-col justify-between">
      {/* Moving blueprint grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(62,109,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(62,109,247,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Top window bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-white/40 font-medium">nexora-architecture.engine</span>
        </div>
        <span className="text-[11px] text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">PRODUCTION READY</span>
      </div>

      {/* Centerpiece architectural mockups & code blocks */}
      <div className="relative z-10 my-auto space-y-3">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-3 rounded-lg bg-white/[0.03] border border-blue-500/20">
            <span className="block text-[10px] text-white/40 uppercase">Latency</span>
            <span className="text-base font-bold text-white tracking-tight">1.2ms</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-blue-500/20">
            <span className="block text-[10px] text-white/40 uppercase">Architecture</span>
            <span className="text-base font-bold text-blue-400 tracking-tight">Distributed</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-blue-500/20">
            <span className="block text-[10px] text-white/40 uppercase">Reliability</span>
            <span className="text-base font-bold text-emerald-400 tracking-tight">100% SLA</span>
          </div>
        </div>

        {/* Floating code simulation */}
        <div className="p-3.5 rounded-xl bg-black/50 border border-white/[0.06] font-mono text-xs text-blue-200/80 space-y-1">
          <div className="flex items-center justify-between text-white/30 text-[10px] pb-1 border-b border-white/[0.04]">
            <span>pipeline_optimizer.ts</span>
            <span className="text-emerald-400">Compiled OK</span>
          </div>
          <p className="text-white/60"><span className="text-blue-400">export</span> <span className="text-violet-400">class</span> DigitalArchitecture &#123;</p>
          <p className="pl-4 text-white/80">buildSystem(specs: <span className="text-amber-300">EnterpriseReq</span>) &#123;</p>
          <p className="pl-8 text-emerald-300">// Precision engineering without compromise</p>
          <p className="pl-4 text-white/80">&#125;</p>
          <p className="text-white/60">&#125;</p>
        </div>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Continuous Integration Pipeline Active
        </span>
        <span className="text-white/60 font-medium">Bespoke Framework</span>
      </div>
    </div>
  );
}

/* 2. Cybersecurity Centerpiece: Dimensional Shield & Defense Matrix */
function CyberVisualCenterpiece() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#02050b]/90 shadow-[0_0_60px_rgba(0,212,204,0.18)] backdrop-blur-xl p-6 flex flex-col justify-between">
      {/* Hexagonal grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(0,212,204,0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top security status */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-cyan-400" />
          <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Zero-Trust Perimeter</span>
        </div>
        <span className="text-[11px] font-semibold text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 animate-pulse">
          DEFENSE ARMED
        </span>
      </div>

      {/* Center dimensional shield visual */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Animated concentric rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping opacity-40" />
          <div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-5 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-400/50 shadow-[0_0_30px_rgba(0,212,204,0.4)]" />
          <Lock size={32} className="relative z-10 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,212,204,0.8)]" />
        </div>

        {/* Security telemetry metrics */}
        <div className="grid grid-cols-2 gap-3 w-full mt-4">
          <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-center">
            <span className="block text-[10px] text-cyan-200/50 uppercase">Protective Posture</span>
            <span className="text-sm font-bold text-white">Full Hardening</span>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-center">
            <span className="block text-[10px] text-cyan-200/50 uppercase">Vulnerability Exposure</span>
            <span className="text-sm font-bold text-cyan-300">0 Critical Risks</span>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-cyan-500/15 text-[11px] text-cyan-200/60">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-cyan-400" />
          Authorized Security Auditing Protocol
        </span>
        <span className="text-cyan-400 font-medium">Verified Scope</span>
      </div>
    </div>
  );
}

/* 3. Artificial Intelligence Centerpiece: Neural Constellation & Cognitive Stream */
function AIVisualCenterpiece() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/25 bg-[#050410]/90 shadow-[0_0_60px_rgba(155,93,229,0.2)] backdrop-blur-xl p-6 flex flex-col justify-between">
      {/* Radial particle background */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(155,93,229,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Top AI status */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-purple-400" />
          <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Cognitive Inference Engine</span>
        </div>
        <span className="text-[11px] font-semibold text-purple-300 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30">
          NEURAL ACTIVE
        </span>
      </div>

      {/* Center neural constellation graphic */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
        <div className="relative w-full h-32 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 300 120" fill="none">
            {/* Synaptic paths */}
            <path d="M30 60 Q 90 20, 150 60 T 270 60" stroke="#9b5de5" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            <path d="M50 30 Q 150 90, 250 30" stroke="#60a5fa" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M60 90 Q 150 30, 240 90" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.5" />
            
            {/* Pulsing Nodes */}
            <circle cx="30" cy="60" r="5" fill="#3b82f6" />
            <circle cx="90" cy="35" r="6" fill="#9b5de5" className="animate-pulse" />
            <circle cx="150" cy="60" r="9" fill="#c084fc" className="shadow-[0_0_15px_#c084fc]" />
            <circle cx="210" cy="85" r="6" fill="#818cf8" className="animate-pulse" />
            <circle cx="270" cy="60" r="5" fill="#38bdf8" />
          </svg>
        </div>

        {/* Intelligence telemetry */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-center">
            <span className="block text-[10px] text-purple-200/50 uppercase">Workflow Automation</span>
            <span className="text-sm font-bold text-white">Intelligent Speed</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-center">
            <span className="block text-[10px] text-purple-200/50 uppercase">Decision Precision</span>
            <span className="text-sm font-bold text-purple-300">Human-Verified</span>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-purple-500/15 text-[11px] text-purple-200/60">
        <span className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-purple-400" />
          Multi-Modal Synthesis Engine
        </span>
        <span className="text-purple-400 font-medium">Enterprise Safe</span>
      </div>
    </div>
  );
}

/* ─── Service Row with refined interactive expander ─── */
function ServiceRow({ svc, index, isOpen, onToggle, accent, onEnquire }) {
  return (
    <div className="border-b border-white/[0.08] last:border-0 transition-all duration-300">
      <button
        onClick={onToggle}
        className="group w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left transition-colors duration-300"
      >
        {/* Index number */}
        <span className="text-xs font-medium text-white/35 shrink-0 w-8 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Jewel-box icon */}
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: isOpen
              ? `radial-gradient(circle, ${accent}30 0%, rgba(255,255,255,0.02) 100%)`
              : 'rgba(255,255,255,0.03)',
            color: isOpen ? accent : 'rgba(255,255,255,0.5)',
            border: `1px solid ${isOpen ? `${accent}50` : 'rgba(255,255,255,0.07)'}`,
            boxShadow: isOpen ? `0 0 20px ${accent}25` : 'none',
          }}
        >
          <LIcon name={svc.icon} size={18} />
        </span>

        {/* Title */}
        <span className={`flex-1 text-base md:text-lg font-semibold tracking-[-0.01em] transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
          {svc.title}
        </span>

        {/* Divider rule */}
        <span className="hidden md:block flex-1 max-w-[120px]">
          <span className="block h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors duration-500" />
        </span>

        {/* Expand plus/minus indicator */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300"
          style={{
            borderColor: isOpen ? `${accent}60` : 'rgba(255,255,255,0.12)',
            color: isOpen ? accent : 'rgba(255,255,255,0.4)',
            background: isOpen ? `${accent}15` : 'transparent',
          }}
        >
          <Plus size={15} strokeWidth={2} />
        </motion.span>
      </button>

      {/* Expanded description with direct inquiry action */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 md:gap-6 pb-8 pl-12 md:pl-14">
              <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-2 pl-5 md:pl-6" style={{ borderColor: `${accent}40` }}>
                <p className="text-sm md:text-base text-white/65 font-normal leading-[1.8] max-w-2xl">
                  {svc.desc}
                </p>
                <button
                  type="button"
                  onClick={onEnquire}
                  className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 px-5 py-2.5 rounded-full border hover:scale-105"
                  style={{
                    color: accent,
                    borderColor: `${accent}50`,
                    background: `${accent}15`,
                    boxShadow: `0 0 15px ${accent}25`,
                  }}
                >
                  Enquire <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FULL-SCREEN CINEMATIC DIVISION WORLD EXPERIENCE
   ══════════════════════════════════════════════════════════ */
function DivisionStage({ division, onClose, onSelectDivision }) {
  const [openSvc, setOpenSvc] = useState(division.services[0]?.id || null);
  const toggle = (id) => setOpenSvc(prev => prev === id ? null : id);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleEnquire = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.div
      key={division.id}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[150] overflow-hidden"
      style={{ background: '#030408' }}
    >
      {/* ── Layer 1: Division atmospheric glow ── */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          top: '-20%', right: '-15%',
          width: '70vw', height: '70vw',
          maxWidth: 900, maxHeight: 900,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${division.glowColor} 0%, transparent 65%)`,
          filter: 'blur(70px)',
        }}
      />

      {/* ── Layer 2: Custom dynamic background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ background: division.bgGradient }}>
        {division.id === 'cyber' && (
          <motion.div
            className="absolute left-0 right-0 h-[1.5px] pointer-events-none z-[5]"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${division.accentColor}60 30%, ${division.accentColor} 50%, ${division.accentColor}60 70%, transparent 100%)`,
              boxShadow: `0 0 12px ${division.accentColor}80`,
            }}
            initial={{ top: '0%', opacity: 0 }}
            animate={{ top: ['0%', '100%'], opacity: [0, 0.85, 0.85, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'linear', repeatDelay: 2.5 }}
          />
        )}
      </div>

      {/* ── Layer 3: Vignette & Film Grain ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(3,4,8,0.85) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#030408] via-transparent to-[#030408]" />
      <div className="absolute inset-0 pointer-events-none film-grain opacity-25 mix-blend-overlay" />

      {/* ════════════════════════════════════════
          SCROLLABLE CONTENT STAGE
          ════════════════════════════════════════ */}
      <div className="relative z-10 h-full overflow-y-auto">

        {/* ── Top Bar: Division Switcher + Clear Return Actions ── */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-12 pt-6 pb-5 backdrop-blur-md"
          style={{ background: 'linear-gradient(to bottom, rgba(3,4,8,0.96) 0%, rgba(3,4,8,0.85) 75%, transparent 100%)' }}>
          
          {/* Back button */}
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group flex items-center gap-2.5 text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">All Divisions</span>
          </motion.button>

          {/* Division switcher pills */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]"
          >
            {divisions.map((d) => {
              const isActive = d.id === division.id;
              return (
                <button
                  key={d.id}
                  onClick={() => onSelectDivision?.(d)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-white/[0.1] shadow-sm'
                      : 'text-white/40 hover:text-white/80 hover:bg-white/[0.03]'
                  }`}
                  style={isActive ? { borderColor: `${d.accentColor}50` } : {}}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: isActive ? d.accentColor : 'rgba(255,255,255,0.25)' }}
                  />
                  {d.label}
                </button>
              );
            })}
          </motion.div>

          {/* Close button with ESC badge */}
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 bg-white/[0.03]"
            title="Close (Press Escape)"
          >
            <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline text-white/40 group-hover:text-white/80">ESC</span>
            <X size={15} className="group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* ── Main Hero Area: Editorial Headline + Visual Centerpiece ── */}
        <div className="px-6 md:px-12 pt-8 md:pt-14 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Required Division Headline & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Category indicator */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: division.accentColor }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: division.accentColor }}>
                  {division.label} Division
                </span>
              </div>

              {/* Exact Required Title */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.06]">
                {division.headline}
              </h2>

              {/* Exact Required Supporting Text */}
              <p className="mt-5 text-base md:text-lg text-white/65 font-normal leading-relaxed">
                {division.supportingText}
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleEnquire}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ background: division.accentColor }}
                >
                  Discuss a Project <ArrowRight size={14} />
                </button>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: division.accentColor }} />
                  {division.services.length} Specialized Offerings
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Distinctive Interactive Visual Centerpiece */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {division.id === 'software' && <SoftwareVisualCenterpiece />}
              {division.id === 'cyber' && <CyberVisualCenterpiece />}
              {division.id === 'ai' && <AIVisualCenterpiece />}
            </motion.div>
          </div>
        </div>

        {/* ── Separator Line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-6 md:mx-12 h-[1px] origin-left"
          style={{ background: `linear-gradient(90deg, ${division.accentColor}60, rgba(255,255,255,0.06) 50%, transparent)` }}
        />

        {/* ── Complete Services List with Staggered Entrance ── */}
        <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50">
              Complete Service Catalog ({division.services.length})
            </span>
            <span className="text-xs text-white/35">
              Click any service to view scope and details
            </span>
          </div>

          <div className="space-y-1">
            {division.services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ServiceRow
                  svc={svc}
                  index={i}
                  isOpen={openSvc === svc.id}
                  onToggle={() => toggle(svc.id)}
                  accent={division.accentColor}
                  onEnquire={handleEnquire}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="px-6 md:px-12 py-12 md:py-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/[0.06] mt-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-white/40 mb-1">Ready to start?</p>
            <p className="text-base text-white/80 font-medium">Tell us what you want to achieve.</p>
          </div>
          <button
            type="button"
            onClick={handleEnquire}
            className="group flex items-center gap-3 text-sm font-semibold text-white px-6 py-3 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 bg-white/[0.04]"
          >
            <span>Start a Conversation</span>
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: division.accentColor, color: '#fff' }}
            >
              <ArrowUpRight size={15} />
            </span>
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN SERVICE SELECTOR CARDS (Initial State)
   ═══════════════════════════════════════════════════════════════════════ */
function MainServiceCard({ division, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative w-full h-full text-left overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 focus:outline-none flex flex-col justify-between"
        style={{
          border: `1px solid ${hovered ? division.accentColor + '50' : 'rgba(255,255,255,0.08)'}`,
          background: hovered ? `${division.accentColor}0a` : 'rgba(255,255,255,0.02)',
          boxShadow: hovered ? `0 15px 40px ${division.accentColor}25` : 'none',
        }}
      >
        {/* Accent top laser edge */}
        <motion.div
          className="absolute top-0 left-6 right-6 h-[2px]"
          animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.45 }}
          style={{
            background: `linear-gradient(90deg, transparent, ${division.accentColor}, transparent)`,
            boxShadow: `0 0 12px ${division.accentColor}`,
            originX: 0.5,
          }}
        />

        {/* Ambient glow bloom */}
        <motion.div
          className="absolute pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            top: '-25%', right: '-25%',
            width: '85%', height: '125%',
            background: `radial-gradient(circle, ${division.glowColor} 0%, transparent 65%)`,
            filter: 'blur(35px)',
          }}
        />

        {/* Card Header & Body */}
        <div className="relative z-10 p-7 lg:p-9 w-full">
          {/* Top row: Number & Distinctive Icon */}
          <div className="flex items-start justify-between mb-8">
            <span className="text-xs font-semibold tracking-wider text-white/30 uppercase">{division.index}</span>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-md"
              style={{
                background: hovered ? `${division.accentColor}25` : 'rgba(255,255,255,0.04)',
                color: hovered ? division.accentColor : 'rgba(255,255,255,0.4)',
                border: `1px solid ${hovered ? `${division.accentColor}50` : 'rgba(255,255,255,0.08)'}`,
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <LIcon name={division.icon} size={22} />
            </div>
          </div>

          {/* Division Title */}
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
            {division.label}
          </h3>

          {/* Short Narrative */}
          <p className="text-sm text-white/50 font-normal leading-relaxed">
            {division.tagline}
          </p>
        </div>

        {/* Card Footer: Clear Interaction Indicator */}
        <div className="relative z-10 px-7 lg:px-9 py-5 border-t w-full flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: `${division.accentColor}dd` }}>
            {division.services.length} Services
          </span>
          <span
            className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-colors duration-300"
            style={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.4)' }}
          >
            Enter World
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </button>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN APPLICATION
   ═══════════════════════════════════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [activeDivision, setActiveDivision] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const audioCtxRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    const t = setTimeout(() => setIntroFinished(true), 1200);
    return () => { window.removeEventListener('scroll', fn); clearTimeout(t); };
  }, []);

  // Lock body scroll when division stage is open
  useEffect(() => {
    document.body.style.overflow = activeDivision ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeDivision]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX / window.innerWidth - 0.5) * 2,
      y: (clientY / window.innerHeight - 0.5) * 2,
    });
  };

  const toggleSound = () => {
    if (!soundActive) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();
          osc1.type = 'sine'; osc1.frequency.value = 55;
          osc2.type = 'triangle'; osc2.frequency.value = 110;
          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
          osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
          osc1.start(); osc2.start();
          setSoundActive(true);
        }
      } catch (err) { console.warn('Audio not allowed', err); }
    } else {
      audioCtxRef.current?.close();
      audioCtxRef.current = null;
      setSoundActive(false);
    }
  };

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '24%']);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-[#030408] text-[#c8cfd8] antialiased overflow-x-hidden selection:bg-[#4f6df0]/30 selection:text-white relative">

      {/* ── Cinematic Aperture Intro Curtain ── */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] pointer-events-none flex flex-col justify-between bg-black"
          >
            <motion.div initial={{ height: '50vh' }} exit={{ height: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="bg-[#020204] w-full border-b border-white/[0.08]" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-[0.35em] uppercase text-white">NEXORA</span>
                <span className="w-2 h-2 rounded-full bg-[#4f6df0] shadow-[0_0_15px_#4f6df0]" />
              </div>
            </motion.div>
            <motion.div initial={{ height: '50vh' }} exit={{ height: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="bg-[#020204] w-full border-t border-white/[0.08]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full-Screen Division Stage Overlay ── */}
      <AnimatePresence mode="wait">
        {activeDivision && (
          <DivisionStage
            key={activeDivision.id}
            division={activeDivision}
            onClose={() => setActiveDivision(null)}
            onSelectDivision={(d) => setActiveDivision(d)}
          />
        )}
      </AnimatePresence>

      {/* ── Global Film Grain ── */}
      <div className="fixed inset-0 pointer-events-none z-[80] film-grain opacity-40 mix-blend-overlay" />

      {/* ══════════════════════════════════════════════════
          NAVIGATION
          ══════════════════════════════════════════════════ */}
      <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#030408]/88 backdrop-blur-2xl border-b border-white/[0.06] py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-baseline gap-1.5">
            <span className="text-base font-bold tracking-[0.25em] uppercase text-white/90 group-hover:text-white transition-colors">Nexora</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] group-hover:shadow-[0_0_12px_#4f6df0] transition-shadow" />
          </a>
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300">{l.label}</a>
            ))}
            <div className="w-px h-3.5 bg-white/10" />
            <button onClick={toggleSound}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${soundActive ? 'border-[#4f6df0] text-[#91a7ff] bg-[#4f6df0]/10 shadow-[0_0_15px_rgba(79,109,240,0.3)]' : 'border-white/10 text-white/40 hover:text-white/80 hover:border-white/20'}`}>
              {soundActive ? <Volume2 size={13} className="animate-pulse" /> : <VolumeX size={13} />}
              <span>{soundActive ? 'Audio ON' : 'Audio'}</span>
            </button>
            <a href="#contact" className="text-sm font-medium text-white/90 border border-white/20 hover:border-white/50 px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/[0.04]">
              Let's talk
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/60 hover:text-white" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#030408]/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden">
              <div className="flex flex-col gap-1 px-6 py-6">
                {navLinks.map(l => (
                  <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-lg font-light text-white/70 hover:text-white py-3 border-b border-white/[0.04] transition-colors">{l.label}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO — Cinematic Full-Screen
          ══════════════════════════════════════════════════ */}
      <section ref={heroRef} onMouseMove={handleMouseMove}
        className="relative h-screen min-h-[720px] flex items-end overflow-hidden cinematic-vignette">

        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: heroY, scale: heroScale }}>
          <div className="w-full h-full animate-hero-cinematic transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 11}px, 0)` }}>
            <img src="/hero-bg.jpg" alt="Cinematic planetary horizon"
              className="w-full h-[125%] object-cover object-center filter contrast-[1.12] brightness-[0.9]" />
          </div>
        </motion.div>

        {/* Cinematic VFX layers */}
        <div className="absolute top-[18%] inset-x-0 h-[2px] pointer-events-none z-[2] animate-beam"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(79,109,240,0.1) 20%, rgba(145,195,255,0.85) 68%, rgba(255,255,255,0.95) 70%, rgba(145,195,255,0.85) 72%, rgba(79,109,240,0.1) 80%, transparent 100%)', boxShadow: '0 0 35px 2px rgba(79,109,240,0.65)' }} />
        <div className="absolute top-[13%] right-[29%] w-44 h-44 md:w-64 md:h-64 rounded-full pointer-events-none z-[2] animate-flare"
          style={{ background: 'radial-gradient(circle, rgba(210,235,255,0.6) 0%, rgba(110,150,255,0.25) 35%, transparent 70%)', filter: 'blur(20px)' }} />
        <div className="absolute top-[5%] inset-x-[-20%] h-80 pointer-events-none z-[1] animate-aurora"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(79,109,240,0.18) 0%, rgba(56,189,248,0.08) 45%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-[12%] right-[11%] w-1.5 h-1.5 rounded-full bg-white animate-star-1 pointer-events-none z-[2] shadow-[0_0_12px_#fff]" />
        <div className="absolute top-[17%] right-[15%] w-1 h-1 rounded-full bg-[#91a7ff] animate-star-2 pointer-events-none z-[2] shadow-[0_0_9px_#91a7ff]" />
        <div className="absolute top-[40%] right-[28%] w-1 h-1 rounded-full bg-white animate-star-1 pointer-events-none z-[2] shadow-[0_0_8px_#fff]" />
        <div className="absolute top-[35%] left-[21%] w-1 h-1 rounded-full bg-[#a0b4ff] animate-star-2 pointer-events-none z-[2] shadow-[0_0_8px_#a0b4ff]" />
        <div className="absolute bottom-[26%] inset-x-0 h-44 pointer-events-none z-[2] opacity-70"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,175,120,0.16) 0%, rgba(79,109,240,0.06) 50%, transparent 80%)', filter: 'blur(15px)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/30 to-transparent z-[3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030408]/85 via-transparent to-transparent z-[3]" />
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#030408] to-transparent z-[3]" />

        {/* Hero headline and statement */}
        <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28" style={{ opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-xs font-semibold tracking-wider text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#4f6df0] shadow-[0_0_10px_#4f6df0] animate-pulse" />
              Nexora Technologies
              <span className="text-white/25">/</span>
              <span className="text-[#91a7ff]">Engineering Studio</span>
            </span>
            <span className="text-xs tracking-wider uppercase text-white/40 hidden sm:inline font-medium">Next-Gen Systems & Defense</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7.5vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white max-w-4xl">
            Building what<br />comes next<span className="text-[#4f6df0]">.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/60 font-normal max-w-lg leading-relaxed">
            We design and engineer the systems that power ambitious organizations — from intelligent software products to practical AI and robust cybersecurity.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#services" className="group inline-flex items-center gap-3 text-sm font-semibold text-white">
              <span className="w-13 h-13 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/15 flex items-center justify-center transition-all duration-500 shadow-[0_0_25px_rgba(79,109,240,0.25)] group-hover:shadow-[0_0_35px_rgba(79,109,240,0.5)]">
                <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="tracking-wide group-hover:text-[#a0b4ff] transition-colors">Explore Our Capabilities</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors">
              Discuss a Project <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-xs tracking-wider uppercase text-white/35 font-medium">SCROLL TO EXPLORE</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <ChevronDown size={14} className="text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          MAIN SERVICE SELECTOR (Section 1 & 2)
          ══════════════════════════════════════════════════ */}
      <section id="services" className="relative py-28 md:py-36 border-t border-white/[0.04] overflow-hidden">
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-100 pointer-events-none">
          <Marquee items={['Engineering', 'Security', 'Intelligence']} speed={50} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] mb-4">Our Service Divisions</p>
          </Reveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
            <Reveal>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white leading-[1.04] max-w-xl">
                Three disciplines.<br />
                <span className="text-white/40 font-light">One unified standard.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-sm text-white/45 font-normal max-w-xs leading-relaxed md:text-right">
                Click any division icon to enter its dedicated cinematic digital world.
              </p>
            </Reveal>
          </div>

          {/* Three premium interactive division portals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {divisions.map((div, i) => (
              <MainServiceCard
                key={div.id}
                division={div}
                index={i}
                onClick={() => setActiveDivision(div)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SELECTED WORK
          ══════════════════════════════════════════════════ */}
      <section id="work" className="relative pb-28 md:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-16 md:mb-24">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] mb-4">Selected Work</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.05]">Case Studies</h2>
              </div>
              <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/50 hover:text-white transition-colors">
                View all <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Project 1 */}
          <Reveal>
            <a href="#contact" className="group block relative rounded-2xl overflow-hidden mb-8 cursor-pointer">
              <div className="aspect-[21/9] md:aspect-[2.4/1] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80"
                  alt="Software infrastructure — illustrative example"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030408]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] block mb-3">Software Engineering · Case Study</span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">Digital Platform Architecture</h3>
                <p className="text-sm text-white/50 font-normal max-w-md">Custom software and API infrastructure for high-concurrency enterprise applications.</p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
              </div>
            </a>
          </Reveal>

          {/* Projects 2 & 3 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Reveal delay={0.1} className="md:col-span-3">
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
                    alt="Cybersecurity — illustrative example"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] block mb-3">Cybersecurity · Case Study</span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">Security Assessment Programme</h3>
                  <p className="text-sm text-white/50 font-normal max-w-sm">Structured vulnerability assessment and hardening for authorized environments.</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-2">
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                    alt="AI systems — illustrative example"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] block mb-3">Artificial Intelligence · Case Study</span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">Business Process Intelligence</h3>
                  <p className="text-sm text-white/50 font-normal max-w-sm">Custom AI workflows automating document analysis and analytical reporting.</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT
          ══════════════════════════════════════════════════ */}
      <section id="about" className="relative py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] mb-8">About Nexora</p>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08] mb-10">
                  We exist to solve problems most firms won't attempt.
                </h2>
                <div className="w-16 h-[2px] bg-[#4f6df0]/50" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="lg:pt-16">
                <p className="text-lg md:text-xl text-white/60 font-light leading-[1.8] mb-8">
                  Nexora Technologies brings together software engineers, security specialists, and AI practitioners to build digital solutions that meet real operational demands.
                </p>
                <p className="text-base text-white/40 font-light leading-[1.8] mb-12">
                  We work with organizations that need reliable, well-considered technology — not off-the-shelf templates or inflated promises. Our process is honest, our delivery is thorough, and our results are built to last.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/[0.06]">
                  {[{ val: '3', label: 'Core Disciplines' }, { val: '20', label: 'Services Offered' }, { val: '100%', label: 'Bespoke Delivery' }, { val: '24/7', label: 'Support Available' }].map(m => (
                    <div key={m.label}>
                      <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{m.val}</div>
                      <div className="text-xs text-white/40 mt-1 tracking-wide uppercase font-semibold">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-28 md:mt-36">
            <blockquote className="relative">
              <div className="absolute -top-6 left-0 text-8xl font-serif text-[#4f6df0]/10 leading-none select-none">"</div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white/85 leading-[1.3] tracking-tight max-w-5xl">
                We don't keep pace with the future —<span className="text-white font-semibold"> we set its specifications</span><span className="text-[#4f6df0]">.</span>
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT
          ══════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <Reveal>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#7b8fea] mb-6">Start a Conversation</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02]">
                  Let's build<br />something real<span className="text-[#4f6df0]">.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6 lg:items-end">
                <p className="text-base text-white/50 font-light max-w-md lg:text-right leading-relaxed">
                  Tell us what you're trying to solve. We'll respond within 24 hours with an honest assessment of whether we're the right fit.
                </p>
                <a href="mailto:hello@nexora.tech" className="group inline-flex items-center gap-4 text-white">
                  <span className="text-lg md:text-xl font-medium tracking-wide group-hover:text-[#a0b4ff] transition-colors">hello@nexora.tech</span>
                  <span className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/10 flex items-center justify-center transition-all duration-500">
                    <Mail size={16} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.04] py-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 pb-14 border-b border-white/[0.04]">
            {divisions.map(div => (
              <div key={div.id}>
                <div className="flex items-center gap-2 mb-5">
                  <span style={{ color: div.accentColor }}><LIcon name={div.icon} size={15} /></span>
                  <span className="text-xs font-bold tracking-wider uppercase text-white/50">{div.label}</span>
                </div>
                <ul className="space-y-2.5">
                  {div.services.map(svc => (
                    <li key={svc.id}>
                      <button onClick={() => { setActiveDivision(div); window.scrollTo({ top: 0 }); }}
                        className="text-xs text-white/35 hover:text-white transition-colors text-left leading-relaxed">
                        {svc.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-baseline gap-1">
                <span className="text-sm font-bold tracking-[0.25em] uppercase text-white/70">Nexora</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0]" />
              </a>
              <span className="text-xs text-white/25">© {new Date().getFullYear()} Nexora Technologies</span>
            </div>
            <div className="flex items-center gap-8 text-xs text-white/40">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} className="hover:text-white/70 transition-colors">{l.label}</a>
              ))}
              <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
