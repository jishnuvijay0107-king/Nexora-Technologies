import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight, ChevronDown, Menu, X, Mail, ArrowUpRight,
  Volume2, VolumeX, Code2, Shield, Brain, Globe, Palette,
  Search, Smartphone, ShieldAlert, Wrench, Server, Lock,
  MailWarning, Network, GraduationCap, Cpu, FileCheck2,
  Sparkles, BarChart3, MessageSquareCode, Workflow,
  LineChart, FileText, Layers, Plus, Minus,
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

/* ─── Scroll-reveal ─── */
function Reveal({ children, delay = 0, className = '', y = 36 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Marquee ─── */
function Marquee({ items, speed = 38 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <motion.div
        className="inline-flex gap-16 text-[clamp(4rem,10vw,9rem)] font-black uppercase tracking-tight text-white/[0.022]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
        {[...items, ...items].map((t, i) => <span key={i} className="shrink-0">{t}</span>)}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   DIVISION STAGE — Full-screen cinematic art-directed experience
   Each division has its own visual personality, asymmetric
   composition, and choreographed entrance motion.
   ══════════════════════════════════════════════════════════ */

/* Division-specific background textures rendered as SVG */
function DivisionTexture({ division }) {
  if (division.id === 'software') {
    // Precise horizontal code-editor lines — blueprints / engineering precision
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="codelines" x="0" y="0" width="1" height="32" patternUnits="userSpaceOnUse">
            <line x1="0" y1="31.5" x2="10000" y2="31.5" stroke={division.accentColor} strokeWidth="0.5" strokeOpacity="0.06" />
          </pattern>
          <linearGradient id="swFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#030408" stopOpacity="0" />
            <stop offset="60%" stopColor="#030408" stopOpacity="0" />
            <stop offset="100%" stopColor="#030408" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#codelines)" />
        <rect width="100%" height="100%" fill="url(#swFade)" />
        {/* Left margin rule */}
        <line x1="72" y1="0" x2="72" y2="10000" stroke={division.accentColor} strokeWidth="1" strokeOpacity="0.07" />
        {/* Faint bracket shapes */}
        <rect x="72" y="0" width="0.5" height="10000" fill={division.accentColor} fillOpacity="0.05" />
      </svg>
    );
  }
  if (division.id === 'cyber') {
    // Hexagonal threat-grid — security, controlled, technical
    const size = 52;
    const w = size * 2;
    const h = size * Math.sqrt(3);
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hexgrid" x="0" y="0" width={w} height={h} patternUnits="userSpaceOnUse">
            <polygon
              points={`${size},0 ${w},${h/4} ${w},${3*h/4} ${size},${h} 0,${3*h/4} 0,${h/4}`}
              fill="none"
              stroke={division.accentColor}
              strokeWidth="0.6"
              strokeOpacity="0.07"
            />
          </pattern>
          <radialGradient id="cyFade" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#030408" stopOpacity="0" />
            <stop offset="100%" stopColor="#030408" stopOpacity="0.6" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexgrid)" />
        <rect width="100%" height="100%" fill="url(#cyFade)" />
      </svg>
    );
  }
  if (division.id === 'ai') {
    // Neural constellation — organic, intelligent, flowing
    const nodes = [
      [15,20],[35,8],[55,25],[75,12],[88,30],
      [10,45],[28,55],[50,48],[68,60],[85,50],
      [20,72],[42,80],[62,75],[80,82],
      [30,35],[60,38],[45,65],
    ];
    const edges = [
      [0,1],[1,2],[2,3],[3,4],[0,5],[1,5],[2,6],[3,7],[4,8],
      [5,6],[6,7],[7,8],[5,9],[6,10],[7,11],[8,12],[9,10],
      [10,11],[11,12],[2,14],[14,15],[15,16],[6,16],[11,16],
    ];
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="aiFade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#030408" stopOpacity="0" />
            <stop offset="100%" stopColor="#030408" stopOpacity="0.55" />
          </radialGradient>
        </defs>
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            stroke={division.accentColor} strokeWidth="0.18" strokeOpacity="0.12" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.55"
            fill={division.accentColor} fillOpacity="0.22" />
        ))}
        <rect width="100%" height="100%" fill="url(#aiFade)" />
      </svg>
    );
  }
  return null;
}

/* ─── Scanning line animation for Cybersecurity only ─── */
function CyberScanLine({ color }) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[1px] pointer-events-none z-[5]"
      style={{ background: `linear-gradient(90deg, transparent 0%, ${color}60 30%, ${color}90 50%, ${color}60 70%, transparent 100%)` }}
      initial={{ top: '0%', opacity: 0 }}
      animate={{ top: ['0%', '100%'], opacity: [0, 0.7, 0.7, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
    />
  );
}

/* ─── Service Row — editorial accordion ─── */
function ServiceRow({ svc, index, total, isOpen, onToggle, accent, onEnquire }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={onToggle}
        className="group w-full flex items-center gap-4 md:gap-7 py-5 md:py-6 text-left transition-colors duration-300"
      >
        {/* Index */}
        <span className="text-[11px] font-mono tracking-[0.25em] text-white/25 shrink-0 w-6 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Service Icon */}
        <span
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? `${accent}1c` : 'rgba(255,255,255,0.03)',
            color: isOpen ? accent : 'rgba(255,255,255,0.4)',
            border: `1px solid ${isOpen ? `${accent}40` : 'rgba(255,255,255,0.06)'}`,
          }}
        >
          <LIcon name={svc.icon} size={16} />
        </span>

        {/* Title */}
        <span className={`flex-1 text-base md:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
          {svc.title}
        </span>

        {/* Divider rule */}
        <span className="hidden md:block flex-1 max-w-[160px]">
          <span className="block h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors duration-500" />
        </span>

        {/* Plus/minus indicator */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300"
          style={{
            borderColor: isOpen ? `${accent}60` : 'rgba(255,255,255,0.1)',
            color: isOpen ? accent : 'rgba(255,255,255,0.3)',
            background: isOpen ? `${accent}10` : 'transparent',
          }}
        >
          <Plus size={15} strokeWidth={1.75} />
        </motion.span>
      </button>

      {/* Expanded description */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 md:gap-7 pb-8 pl-[46px] md:pl-[58px]">
              <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-6 border-l pl-5 md:pl-6" style={{ borderColor: `${accent}35` }}>
                <p className="text-sm md:text-base text-white/55 font-light leading-[1.85] max-w-2xl">
                  {svc.desc}
                </p>
                <button
                  type="button"
                  onClick={onEnquire}
                  className="shrink-0 inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] uppercase transition-all duration-300 px-4 py-2 rounded-full border hover:bg-white/[0.04]"
                  style={{ color: accent, borderColor: `${accent}40` }}
                >
                  Enquire <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── The cinematic full-screen stage ─── */
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

  // Stagger delays for service rows
  const rowDelay = (i) => 0.5 + i * 0.05;

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
      {/* ── Layer 1: Division atmospheric light source ── */}
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
          filter: 'blur(60px)',
        }}
      />

      {/* ── Layer 2: Division-specific texture ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DivisionTexture division={division} />
      </div>

      {/* Cybersecurity scan line */}
      {division.id === 'cyber' && <CyberScanLine color={division.accentColor} />}

      {/* ── Layer 3: Vignette fade from edges ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(3,4,8,0.8) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#030408] via-transparent to-[#030408]" />

      {/* ── Film grain ── */}
      <div className="absolute inset-0 pointer-events-none film-grain opacity-25 mix-blend-overlay" />

      {/* ════════════════════════════════════════
          SCROLLABLE CONTENT
          ════════════════════════════════════════ */}
      <div className="relative z-10 h-full overflow-y-auto">

        {/* ── Top bar with live division switcher ── */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-12 pt-6 pb-5 backdrop-blur-md"
          style={{ background: 'linear-gradient(to bottom, rgba(3,4,8,0.95) 0%, rgba(3,4,8,0.8) 70%, transparent 100%)' }}>
          
          {/* Back button */}
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group flex items-center gap-2.5 text-white/40 hover:text-white transition-colors duration-300"
          >
            <span className="w-7 h-7 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
              <ArrowRight size={13} className="rotate-180 group-hover:-translate-x-0.5 transition-transform" />
            </span>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase">All Divisions</span>
          </motion.button>

          {/* Division switcher pills */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]"
          >
            {divisions.map((d) => {
              const isActive = d.id === division.id;
              return (
                <button
                  key={d.id}
                  onClick={() => onSelectDivision?.(d)}
                  className={`px-3.5 py-1.5 rounded-full text-[10.5px] font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-sm'
                      : 'text-white/35 hover:text-white/70 hover:bg-white/[0.02]'
                  }`}
                  style={isActive ? { borderColor: `${d.accentColor}40` } : {}}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: isActive ? d.accentColor : 'rgba(255,255,255,0.2)' }}
                  />
                  {d.label}
                </button>
              );
            })}
          </motion.div>

          {/* Close button with ESC indicator */}
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-white/40 hover:text-white transition-all duration-300 bg-white/[0.02]"
            title="Close (Press Escape)"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase hidden sm:inline text-white/30 group-hover:text-white/60">ESC</span>
            <X size={15} className="group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* ── Hero area — asymmetric editorial layout ── */}
        <div className="px-6 md:px-12 pt-8 md:pt-12 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">

          {/* Left — identity column */}
          <div className="flex flex-col justify-end lg:pb-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase mb-5" style={{ color: division.accentColor }}>
                {division.tagline}
              </p>
              <p className="text-sm text-white/45 font-light leading-[1.9] max-w-xs">
                {division.narrative}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1px] w-10 origin-left"
                  style={{ background: division.accentColor }}
                />
                <button
                  type="button"
                  onClick={handleEnquire}
                  className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/35 hover:text-white transition-colors duration-300"
                >
                  Discuss a project
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right — massive editorial division title */}
          <div className="relative overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,7vw,6.2rem)] font-extrabold tracking-[-0.03em] text-white leading-[0.92]"
            >
              {division.label.split(' ').map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2 + wi * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Accent underline — grows in from left */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 h-[3px] origin-left"
              style={{
                background: `linear-gradient(90deg, ${division.accentColor}, ${division.accentColor}30, transparent)`,
                width: '70%',
              }}
            />

            {/* Service count badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-mono tracking-[0.25em] uppercase"
              style={{
                borderColor: `${division.accentColor}35`,
                color: `${division.accentColor}90`,
                background: `${division.accentColor}0a`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: division.accentColor }} />
              {division.services.length} services available
            </motion.div>
          </div>
        </div>

        {/* ── Separator ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-6 md:mx-12 h-[1px] origin-left"
          style={{ background: `linear-gradient(90deg, ${division.accentColor}40, rgba(255,255,255,0.05) 50%, transparent)` }}
        />

        {/* ── Service list — editorial accordion ── */}
        <div className="px-6 md:px-12 py-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/25 mb-2 pt-4"
          >
            Services — select to expand
          </motion.p>

          <div>
            {division.services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: rowDelay(i), ease: [0.16, 1, 0.3, 1] }}
              >
                <ServiceRow
                  svc={svc}
                  index={i}
                  total={division.services.length}
                  isOpen={openSvc === svc.id}
                  onToggle={() => toggle(svc.id)}
                  accent={division.accentColor}
                  onEnquire={handleEnquire}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom spacer / CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="px-6 md:px-12 py-12 md:py-16 flex items-center justify-between border-t border-white/[0.05] mt-4"
        >
          <div>
            <p className="text-xs text-white/20 font-mono tracking-wider mb-1">Ready to begin?</p>
            <p className="text-sm text-white/50 font-light">Tell us what you need to solve.</p>
          </div>
          <button
            type="button"
            onClick={handleEnquire}
            className="group flex items-center gap-3 text-sm font-medium text-white"
          >
            <span className="text-white/50 group-hover:text-white transition-colors duration-300">Start a conversation</span>
            <span
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-400 group-hover:scale-110"
              style={{ borderColor: `${division.accentColor}50`, color: division.accentColor }}
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
   DIVISION SELECTOR CARDS — premium, restrained, editorial
   ═══════════════════════════════════════════════════════════════════════ */
function DivisionCard({ division, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative w-full text-left overflow-hidden"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {/* Border frame */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            border: `1px solid ${hovered ? division.accentColor + '30' : 'rgba(255,255,255,0.07)'}`,
            background: hovered ? `${division.accentColor}06` : 'rgba(255,255,255,0.018)',
            borderRadius: '1rem',
          }}
        />

        {/* Accent top edge */}
        <motion.div
          className="absolute top-0 left-6 right-6 h-[1px]"
          animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.45 }}
          style={{
            background: `linear-gradient(90deg, transparent, ${division.accentColor}, transparent)`,
            originX: 0.5,
          }}
        />

        {/* Atmospheric bloom on hover */}
        <motion.div
          className="absolute pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            top: '-30%', right: '-20%',
            width: '80%', height: '120%',
            background: `radial-gradient(circle, ${division.glowColor} 0%, transparent 65%)`,
            filter: 'blur(30px)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-7 lg:p-9">
          {/* Top row: index + icon */}
          <div className="flex items-start justify-between mb-10">
            <span className="text-[10px] font-mono tracking-[0.35em] text-white/15">{division.index}</span>
            <div
              className="transition-all duration-500"
              style={{ color: hovered ? division.accentColor : 'rgba(255,255,255,0.25)', transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
            >
              <LIcon name={division.icon} size={22} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-[1.7rem] font-bold text-white tracking-tight leading-tight mb-3">
            {division.label}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-white/30 font-light leading-relaxed mb-8">
            {division.tagline}
          </p>

          {/* Bottom: count + CTA */}
          <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase" style={{ color: `${division.accentColor}80` }}>
              {division.services.length} services
            </span>
            <motion.span
              className="flex items-center gap-2 text-[11px] font-medium"
              animate={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.25)' }}
              transition={{ duration: 0.3 }}
            >
              Enter
              <motion.span
                animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={13} />
              </motion.span>
            </motion.span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN APP
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

  // Lock scroll when stage is open
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

      {/* ── Cinematic Intro Curtain ── */}
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
                <span className="text-xl font-bold tracking-[0.4em] uppercase text-white">NEXORA</span>
                <span className="w-2 h-2 rounded-full bg-[#4f6df0] shadow-[0_0_15px_#4f6df0]" />
              </div>
            </motion.div>
            <motion.div initial={{ height: '50vh' }} exit={{ height: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="bg-[#020204] w-full border-t border-white/[0.08]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Division Stage ── */}
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

      {/* ── Film Grain ── */}
      <div className="fixed inset-0 pointer-events-none z-[80] film-grain opacity-40 mix-blend-overlay" />

      {/* ══════════════════════════════════════════════════
          NAVIGATION
          ══════════════════════════════════════════════════ */}
      <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#030408]/88 backdrop-blur-2xl border-b border-white/[0.06] py-3.5 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-baseline gap-1.5">
            <span className="text-base font-semibold tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">Nexora</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] group-hover:shadow-[0_0_12px_#4f6df0] transition-shadow" />
          </a>
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-[12.5px] font-medium tracking-wide text-white/40 hover:text-white transition-colors duration-300">{l.label}</a>
            ))}
            <div className="w-px h-3.5 bg-white/10" />
            <button onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase border transition-all cursor-pointer ${soundActive ? 'border-[#4f6df0] text-[#91a7ff] bg-[#4f6df0]/10 shadow-[0_0_15px_rgba(79,109,240,0.3)]' : 'border-white/10 text-white/30 hover:text-white/70 hover:border-white/20'}`}>
              {soundActive ? <Volume2 size={13} className="animate-pulse" /> : <VolumeX size={13} />}
              <span>{soundActive ? 'Audio ON' : 'Audio'}</span>
            </button>
            <a href="#contact" className="text-[12.5px] font-medium tracking-wide text-white/90 border border-white/20 hover:border-white/50 px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/[0.04]">
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
          HERO
          ══════════════════════════════════════════════════ */}
      <section ref={heroRef} onMouseMove={handleMouseMove}
        className="relative h-screen min-h-[720px] flex items-end overflow-hidden cinematic-vignette">

        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: heroY, scale: heroScale }}>
          <div className="w-full h-full animate-hero-cinematic transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 11}px, 0)` }}>
            <img src="/hero-bg.jpg" alt="Cinematic planetary horizon"
              className="w-full h-[125%] object-cover object-center filter contrast-[1.12] brightness-[0.9]" />
          </div>
        </motion.div>

        {/* VFX layers */}
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

        {/* Hero text */}
        <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28" style={{ opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="flex items-center gap-3 mb-6">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-md text-[11px] font-mono tracking-[0.25em] uppercase text-[#91a7ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] shadow-[0_0_8px_#4f6df0] animate-pulse" />
              NEXORA TECHNOLOGIES // 2026
            </span>
            <span className="text-[11px] font-mono tracking-widest text-white/30 hidden sm:inline">MISSION-CRITICAL DIGITAL ENGINEERING</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.6rem,7.2vw,6.6rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-white max-w-4xl">
            Building what<br />comes next<span className="text-[#4f6df0]">.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/55 font-light max-w-lg leading-relaxed">
            We design and engineer the systems that power ambitious organizations — from intelligent software products to practical AI and robust cybersecurity.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#services" className="group inline-flex items-center gap-3 text-sm font-medium text-white">
              <span className="w-13 h-13 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/15 flex items-center justify-center transition-all duration-500 shadow-[0_0_25px_rgba(79,109,240,0.25)] group-hover:shadow-[0_0_35px_rgba(79,109,240,0.5)]">
                <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="tracking-wide group-hover:text-[#a0b4ff] transition-colors">Explore Capabilities</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Discuss a Project <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">SCROLL TO EXPLORE</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <ChevronDown size={14} className="text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          DIVISION SELECTOR
          ══════════════════════════════════════════════════ */}
      <section id="services" className="relative py-28 md:py-36 border-t border-white/[0.04] overflow-hidden">
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-100 pointer-events-none">
          <Marquee items={['Engineering', 'Security', 'Intelligence']} speed={50} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-4">What we do</p>
          </Reveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
            <Reveal>
              <h2 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white leading-[1.06] max-w-xl">
                Three disciplines.<br />
                <span className="text-white/35 font-light">One precise standard.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-sm text-white/28 font-light max-w-xs leading-relaxed md:text-right">
                Select a division to explore our full service catalogue.
              </p>
            </Reveal>
          </div>

          {/* Three division cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {divisions.map((div, i) => (
              <DivisionCard key={div.id} division={div} index={i} onClick={() => setActiveDivision(div)} />
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
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-4">Selected work</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">Case studies</h2>
              </div>
              <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-xs tracking-wider uppercase text-white/40 hover:text-white transition-colors">
                View all <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

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
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">Software Engineering · Illustrative Example</span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">Digital Platform Architecture</h3>
                <p className="text-sm text-white/40 font-light max-w-md">Custom software and API infrastructure for a regional financial services provider.</p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
              </div>
            </a>
          </Reveal>

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
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">Cybersecurity · Illustrative Example</span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">Security Assessment Programme</h3>
                  <p className="text-sm text-white/40 font-light max-w-sm">Structured vulnerability assessment for an authorized enterprise environment.</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
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
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">Artificial Intelligence · Illustrative Example</span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">Business Intelligence Automation</h3>
                  <p className="text-sm text-white/40 font-light max-w-sm">AI-assisted reporting workflow that reduced manual analysis time significantly.</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
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
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-8">About Nexora</p>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] mb-10">
                  We exist to solve problems most firms won't attempt.
                </h2>
                <div className="w-16 h-[2px] bg-[#4f6df0]/50" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="lg:pt-16">
                <p className="text-lg md:text-xl text-white/50 font-light leading-[1.8] mb-8">
                  Nexora Technologies brings together software engineers, security specialists, and AI practitioners to build digital solutions that meet real operational demands.
                </p>
                <p className="text-base text-white/30 font-light leading-[1.8] mb-12">
                  We work with organizations that need reliable, well-considered technology — not off-the-shelf templates or inflated promises. Our process is honest, our delivery is thorough, and our results are built to last.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/[0.06]">
                  {[{ val: '3', label: 'Core disciplines' }, { val: '20', label: 'Services offered' }, { val: '100%', label: 'Bespoke delivery' }, { val: '24/7', label: 'Support available' }].map(m => (
                    <div key={m.label}>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">{m.val}</div>
                      <div className="text-xs text-white/30 mt-1 tracking-wide uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-28 md:mt-36">
            <blockquote className="relative">
              <div className="absolute -top-6 left-0 text-8xl font-serif text-[#4f6df0]/10 leading-none select-none">"</div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white/80 leading-[1.3] tracking-tight max-w-5xl">
                We don't keep pace with the future —<span className="text-white font-medium"> we set its specifications</span><span className="text-[#4f6df0]">.</span>
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
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-6">Start a conversation</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  Let's build<br />something real<span className="text-[#4f6df0]">.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6 lg:items-end">
                <p className="text-base text-white/40 font-light max-w-md lg:text-right leading-relaxed">
                  Tell us what you're trying to solve. We'll respond within 24 hours with an honest assessment of whether we're the right fit.
                </p>
                <a href="mailto:hello@nexora.tech" className="group inline-flex items-center gap-4 text-white">
                  <span className="text-lg md:text-xl font-light tracking-wide group-hover:text-[#a0b4ff] transition-colors">hello@nexora.tech</span>
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
                  <span style={{ color: div.accentColor }}><LIcon name={div.icon} size={13} /></span>
                  <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/28">{div.label}</span>
                </div>
                <ul className="space-y-2.5">
                  {div.services.map(svc => (
                    <li key={svc.id}>
                      <button onClick={() => { setActiveDivision(div); window.scrollTo({ top: 0 }); }}
                        className="text-xs text-white/20 hover:text-white/55 transition-colors text-left leading-relaxed">
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
                <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50">Nexora</span>
                <span className="w-1 h-1 rounded-full bg-[#4f6df0]" />
              </a>
              <span className="text-xs text-white/15">© {new Date().getFullYear()} Nexora Technologies</span>
            </div>
            <div className="flex items-center gap-8 text-xs text-white/25">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} className="hover:text-white/50 transition-colors">{l.label}</a>
              ))}
              <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
