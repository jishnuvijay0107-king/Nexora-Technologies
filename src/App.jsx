import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight, ChevronDown, Menu, X, Mail, ArrowUpRight,
  Volume2, VolumeX, Code2, Shield, Brain, Globe, Palette,
  Search, Smartphone, ShieldAlert, Wrench, Server, Lock,
  MailWarning, Network, GraduationCap, Cpu, FileCheck2,
  Sparkles, BarChart3, MessageSquareCode, Workflow,
  LineChart, FileText, Layers, Play, ArrowLeft,
} from 'lucide-react';
import { divisions } from './data/servicesData';
import DivisionStage from './components/DivisionStage';

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
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative w-full h-full text-left overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 focus:outline-none flex flex-col justify-between p-8 min-h-[390px] bg-[#050711]/90 border backdrop-blur-xl cursor-pointer"
        style={{
          borderColor: hovered ? `${division.accentColor}70` : 'rgba(255,255,255,0.08)',
          boxShadow: hovered ? `0 25px 60px ${division.accentColor}25` : '0 10px 30px rgba(0,0,0,0.5)',
        }}
      >
        {/* Ambient atmospheric aura — Pure CSS, NO static pictures */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700"
          style={{
            background: division.accentColor,
            opacity: hovered ? 0.28 : 0.08,
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700"
          style={{
            background: division.accentColor,
            opacity: hovered ? 0.20 : 0.04,
          }}
        />

        {/* Precision architectural hairline grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Top bar: Number & Jewel Icon */}
        <div className="relative z-10 flex items-start justify-between w-full">
          <span className="text-xs font-mono font-bold tracking-widest text-white/35 uppercase">
            // {division.index}
          </span>
          <div
            className="w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg"
            style={{
              background: hovered ? `${division.accentColor}25` : 'rgba(255,255,255,0.03)',
              color: hovered ? division.accentColor : 'rgba(255,255,255,0.7)',
              border: `1px solid ${hovered ? `${division.accentColor}60` : 'rgba(255,255,255,0.08)'}`,
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              boxShadow: hovered ? `0 0 25px ${division.accentColor}40` : 'none',
            }}
          >
            <LIcon name={division.icon} size={24} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 my-auto py-8">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase block mb-2"
            style={{ color: division.accentColor }}
          >
            {division.id === 'software' ? 'Engineering Studio' : division.id === 'cyber' ? 'Defense & Governance' : 'Intelligence Lab'}
          </span>
          <h3 className="font-boska text-2xl lg:text-3xl font-normal text-white tracking-tight leading-tight mb-3">
            {division.label}
          </h3>
          <p className="text-sm text-white/55 font-normal leading-relaxed">
            {division.tagline}
          </p>
        </div>

        {/* Bottom bar: Service count & Enter portal action */}
        <div className="relative z-10 pt-5 border-t border-white/[0.08] w-full flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider uppercase" style={{ color: division.accentColor }}>
            {division.services.length} Services
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
            Enter World
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
      <AnimatePresence>
        {activeDivision && (
          <DivisionStage
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

        {/* Cinematic VFX layers — Refined, seamless, zero horizontal lines or blurry seams */}
        <div className="absolute top-[13%] right-[29%] w-44 h-44 md:w-64 md:h-64 rounded-full pointer-events-none z-[2] animate-flare"
          style={{ background: 'radial-gradient(circle, rgba(210,235,255,0.45) 0%, rgba(110,150,255,0.18) 35%, transparent 70%)', filter: 'blur(25px)' }} />
        <div className="absolute top-[5%] inset-x-[-10%] h-80 pointer-events-none z-[1] animate-aurora"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(79,109,240,0.14) 0%, rgba(56,189,248,0.05) 45%, transparent 70%)', filter: 'blur(45px)' }} />
        <div className="absolute top-[12%] right-[11%] w-1.5 h-1.5 rounded-full bg-white animate-star-1 pointer-events-none z-[2] shadow-[0_0_12px_#fff]" />
        <div className="absolute top-[17%] right-[15%] w-1 h-1 rounded-full bg-[#91a7ff] animate-star-2 pointer-events-none z-[2] shadow-[0_0_9px_#91a7ff]" />
        <div className="absolute top-[40%] right-[28%] w-1 h-1 rounded-full bg-white animate-star-1 pointer-events-none z-[2] shadow-[0_0_8px_#fff]" />
        <div className="absolute top-[35%] left-[21%] w-1 h-1 rounded-full bg-[#a0b4ff] animate-star-2 pointer-events-none z-[2] shadow-[0_0_8px_#a0b4ff]" />

        {/* Seamless multi-stop background transition with zero visible banding */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/40 to-transparent z-[3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030408]/80 via-transparent to-transparent z-[3]" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#030408] via-[#030408]/85 to-transparent z-[3]" />

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

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-boska text-[clamp(3.2rem,8.5vw,7.4rem)] font-normal leading-[0.93] tracking-[-0.025em] text-white max-w-4xl">
            Building what<br />
            <span className="italic font-light text-[#91a7ff]">comes</span> next<span className="text-[#4f6df0]">.</span>
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
          MAIN SERVICE SELECTOR (The 3 Division Portals)
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
              <h2 className="font-boska text-3xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-white leading-[1.04] max-w-xl">
                Three disciplines.<br />
                <span className="text-white/40 italic font-light">One unified standard.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-sm text-white/45 font-normal max-w-xs leading-relaxed md:text-right">
                Click any division to enter its dedicated cinematic digital world.
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
                <h2 className="font-boska text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.05]">Case Studies</h2>
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
                <h2 className="font-boska text-3xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-white leading-[1.08] mb-10">
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
              <p className="font-boska text-2xl md:text-4xl lg:text-5xl font-normal text-white/85 leading-[1.3] tracking-tight max-w-5xl">
                We don't keep pace with the future —<span className="italic font-light text-white"> we set its specifications</span><span className="text-[#4f6df0]">.</span>
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
                <h2 className="font-boska text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.02]">
                  Let's build<br /><span className="italic font-light text-[#91a7ff]">something</span> real<span className="text-[#4f6df0]">.</span>
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
