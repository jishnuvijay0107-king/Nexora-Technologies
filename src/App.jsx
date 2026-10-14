import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  ArrowUpRight,
  Volume2,
  VolumeX,
  Sparkles,
} from 'lucide-react';

/* ─── Scroll-reveal wrapper ─── */
function Reveal({ children, delay = 0, className = '', y = 40 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Horizontal text marquee ─── */
function Marquee({ items, speed = 35 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <motion.div
        className="inline-flex gap-16 text-[clamp(4rem,10vw,9rem)] font-black uppercase tracking-tight text-white/[0.02]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="shrink-0">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Cinematic Intro state (A brief Hollywood-grade aperture reveal on first load)
  const [introFinished, setIntroFinished] = useState(false);

  // Sound design toggle (optional cinematic ambient hum simulation)
  const [soundActive, setSoundActive] = useState(false);
  const audioCtxRef = useRef(null);

  // Interactive mouse-tracking parallax coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });

    // Intro shutter timer
    const t = setTimeout(() => setIntroFinished(true), 1200);

    return () => {
      window.removeEventListener('scroll', fn);
      clearTimeout(t);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Ambient sound synthesizer for true cinematic immersion
  const toggleSound = () => {
    if (!soundActive) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;

          // Low cinematic space drone
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(55, ctx.currentTime); // Deep A1 drone
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(110, ctx.currentTime);

          gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

          osc1.connect(gainNode);
          osc2.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc1.start();
          osc2.start();
          setSoundActive(true);
        }
      } catch (err) {
        console.warn('Audio not allowed', err);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setSoundActive(false);
    }
  };

  /* Parallax for hero image */
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '24%']);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-[#030408] text-[#c8cfd8] antialiased overflow-x-hidden selection:bg-[#4f6df0]/30 selection:text-white relative">
      {/* ══════════════════════════════════════════════════════════════════
          CINEMATIC INTRO CURTAIN REVEAL (35mm Film Aperture)
          ══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] pointer-events-none flex flex-col justify-between bg-black"
          >
            {/* Top Shutter */}
            <motion.div
              initial={{ height: '50vh' }}
              exit={{ height: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#020204] w-full border-b border-white/[0.08]"
            />
            {/* Center Monogram Flash */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-[0.4em] uppercase text-white">NEXORA</span>
                <span className="w-2 h-2 rounded-full bg-[#4f6df0] shadow-[0_0_15px_#4f6df0]" />
              </div>
            </motion.div>
            {/* Bottom Shutter */}
            <motion.div
              initial={{ height: '50vh' }}
              exit={{ height: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#020204] w-full border-t border-white/[0.08]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Film Grain Shader */}
      <div className="fixed inset-0 pointer-events-none z-[80] film-grain opacity-40 mix-blend-overlay" />

      {/* ══════════════════════════════════════════════════════════════════
          NAVIGATION
          ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#030408]/85 backdrop-blur-2xl border-b border-white/[0.06] py-3.5 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-baseline gap-1.5">
            <span className="text-base font-semibold tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">
              Nexora
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] group-hover:shadow-[0_0_12px_#4f6df0] transition-shadow" />
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[12.5px] font-medium tracking-wide text-white/40 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}

            <div className="w-px h-3.5 bg-white/10" />

            {/* Cinematic Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase border transition-all cursor-pointer ${
                soundActive
                  ? 'border-[#4f6df0] text-[#91a7ff] bg-[#4f6df0]/10 shadow-[0_0_15px_rgba(79,109,240,0.3)]'
                  : 'border-white/10 text-white/30 hover:text-white/70 hover:border-white/20'
              }`}
              title="Toggle cinematic ambient audio"
            >
              {soundActive ? <Volume2 size={13} className="animate-pulse" /> : <VolumeX size={13} />}
              <span>{soundActive ? 'Audio ON' : 'Audio'}</span>
            </button>

            <a
              href="#contact"
              className="text-[12.5px] font-medium tracking-wide text-white/90 border border-white/20 hover:border-white/50 px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/[0.04]"
            >
              Let's talk
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030408]/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-6">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-light text-white/70 hover:text-white py-3 border-b border-white/[0.04] transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — Hollywood-Grade Living Cinematic Motion
          ══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen min-h-[720px] flex items-end overflow-hidden cinematic-vignette"
      >
        {/* Layer 1: Parallax container tied to scroll + mouse responsiveness */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ y: heroY, scale: heroScale }}
        >
          {/* Layer 2: Slow breathing continuous Ken Burns cinematic drift with mouse tilt */}
          <div
            className="w-full h-full animate-hero-cinematic transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 11}px, 0)`,
            }}
          >
            <img
              src="/hero-bg.jpg"
              alt="Cinematic planetary horizon"
              className="w-full h-[125%] object-cover object-center filter contrast-[1.12] brightness-[0.9]"
            />
          </div>
        </motion.div>

        {/* Layer 3: Anamorphic Horizontal Blue Streak / Lens Flare Beam */}
        <div
          className="absolute top-[18%] inset-x-0 h-[2px] pointer-events-none z-[2] animate-beam"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(79, 109, 240, 0.1) 20%, rgba(145, 195, 255, 0.85) 68%, rgba(255, 255, 255, 0.95) 70%, rgba(145, 195, 255, 0.85) 72%, rgba(79, 109, 240, 0.1) 80%, transparent 100%)',
            boxShadow: '0 0 35px 2px rgba(79, 109, 240, 0.65)',
          }}
        />

        {/* Layer 4: Living Solar Flare / Horizon Light Burst */}
        <div
          className="absolute top-[13%] right-[29%] w-44 h-44 md:w-64 md:h-64 rounded-full pointer-events-none z-[2] animate-flare"
          style={{
            background: 'radial-gradient(circle, rgba(210, 235, 255, 0.6) 0%, rgba(110, 150, 255, 0.25) 35%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Layer 5: Dynamic Aurora Glow on the curvature */}
        <div
          className="absolute top-[5%] inset-x-[-20%] h-80 pointer-events-none z-[1] animate-aurora"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(79, 109, 240, 0.18) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Layer 6: Deep Cosmos Twinkling Stars */}
        <div className="absolute top-[12%] right-[11%] w-1.5 h-1.5 rounded-full bg-white animate-star-1 pointer-events-none z-[2] shadow-[0_0_12px_#fff]" />
        <div className="absolute top-[17%] right-[15%] w-1 h-1 rounded-full bg-[#91a7ff] animate-star-2 pointer-events-none z-[2] shadow-[0_0_9px_#91a7ff]" />
        <div className="absolute top-[40%] right-[28%] w-1 h-1 rounded-full bg-white animate-star-1 pointer-events-none z-[2] shadow-[0_0_8px_#fff]" />
        <div className="absolute top-[35%] left-[21%] w-1 h-1 rounded-full bg-[#a0b4ff] animate-star-2 pointer-events-none z-[2] shadow-[0_0_8px_#a0b4ff]" />

        {/* Layer 7: Golden Twilight Atmospheric Mist across the terrain */}
        <div
          className="absolute bottom-[26%] inset-x-0 h-44 pointer-events-none z-[2] opacity-70"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 175, 120, 0.16) 0%, rgba(79, 109, 240, 0.06) 50%, transparent 80%)',
            filter: 'blur(15px)',
          }}
        />

        {/* Layer 8: Film Vignette & Seamless Fade Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/30 to-transparent z-[3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030408]/85 via-transparent to-transparent z-[3]" />
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#030408] to-transparent z-[3]" />

        {/* Content — anchored to bottom-left like a cinematic master title */}
        <motion.div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28"
          style={{ opacity: heroOpacity }}
        >
          {/* Film slate meta tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-md text-[11px] font-mono tracking-[0.25em] uppercase text-[#91a7ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] shadow-[0_0_8px_#4f6df0] animate-pulse" />
              NEXORA TECHNOLOGIES // 2026
            </span>
            <span className="text-[11px] font-mono tracking-widest text-white/30 hidden sm:inline">
              MISSION-CRITICAL DIGITAL ENGINEERING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.6rem,7.2vw,6.6rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-white max-w-4xl"
          >
            Building what
            <br />
            comes next<span className="text-[#4f6df0]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/55 font-light max-w-lg leading-relaxed"
          >
            We design and engineer the systems that
            power ambitious organizations — from sovereign
            security architectures to adaptive intelligence platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span className="w-13 h-13 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/15 flex items-center justify-center transition-all duration-500 shadow-[0_0_25px_rgba(79,109,240,0.25)] group-hover:shadow-[0_0_35px_rgba(79,109,240,0.5)]">
                <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="tracking-wide group-hover:text-[#a0b4ff] transition-colors">See our work</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Explore Disciplines <ArrowDownRightIcon />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint with pulsing chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">
            SCROLL TO EXPLORE
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <ChevronDown size={14} className="text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SERVICES — Cinematic staggered layout
          ══════════════════════════════════════════════════════════════════ */}
      <section id="services" className="relative py-32 md:py-44 border-t border-white/[0.04]">
        {/* Background marquee for texture */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-100 pointer-events-none">
          <Marquee items={['Engineering', 'Security', 'Intelligence', 'Infrastructure']} speed={45} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-4">
              What we do
            </p>
          </Reveal>

          {/* Service entries — editorial staggered layout */}
          <div className="mt-16 space-y-0 border-t border-white/[0.06]">
            {[
              {
                num: '01',
                title: 'Software Engineering',
                desc: 'Distributed platforms, event-driven architectures, and mission-critical systems built to operate at planetary scale without compromise.',
              },
              {
                num: '02',
                title: 'Cybersecurity',
                desc: 'Zero-trust frameworks, autonomous threat response, and cryptographic architectures that protect sovereign enterprise infrastructure.',
              },
              {
                num: '03',
                title: 'Artificial Intelligence',
                desc: 'Custom LLM deployments, agentic workflows, and neural pipelines that convert unstructured complexity into operational advantage.',
              },
              {
                num: '04',
                title: 'Cloud Architecture',
                desc: 'Multi-region orchestration, container-native infrastructure, and observability frameworks engineered for zero-downtime operations.',
              },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <a
                  href="#contact"
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-10 md:py-12 border-b border-white/[0.06] cursor-pointer"
                >
                  <span className="text-xs font-mono text-white/20 md:w-20 shrink-0">
                    {s.num}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/80 group-hover:text-white transition-colors duration-500 md:flex-1 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/35 group-hover:text-white/60 font-light leading-relaxed max-w-sm md:text-right transition-colors duration-500">
                    {s.desc}
                  </p>
                  <ArrowUpRight
                    size={20}
                    className="hidden md:block ml-8 text-white/10 group-hover:text-[#4f6df0] group-hover:rotate-0 -rotate-45 transition-all duration-500 shrink-0"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WORK — Magazine-style project showcases
          ══════════════════════════════════════════════════════════════════ */}
      <section id="work" className="relative pb-32 md:pb-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-16 md:mb-24">
              <div>
                <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-4">
                  Selected work
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                  Case studies
                </h2>
              </div>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 text-xs tracking-wider uppercase text-white/40 hover:text-white transition-colors"
              >
                View all <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Project 1 — Full width hero card */}
          <Reveal>
            <a href="#contact" className="group block relative rounded-2xl overflow-hidden mb-8 cursor-pointer">
              <div className="aspect-[21/9] md:aspect-[2.4/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80"
                  alt="Data center infrastructure"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030408]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">
                  Cloud Infrastructure
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">
                  Global Edge Mesh
                </h3>
                <p className="text-sm text-white/40 font-light max-w-md">
                  Multi-region computation network that reduced transatlantic
                  latency from 68ms to under 5ms for tier-1 financial institutions.
                </p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
              </div>
            </a>
          </Reveal>

          {/* Projects 2 & 3 — Asymmetric two-column */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Reveal delay={0.1} className="md:col-span-3">
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
                    alt="Cybersecurity operations"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">
                    Cybersecurity
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    Autonomous Perimeter Defense
                  </h3>
                  <p className="text-sm text-white/40 font-light max-w-sm">
                    Real-time behavioral graph analytics protecting
                    defense-grade cloud environments with 0.001% false positive rate.
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-2">
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                    alt="AI neural network and computing architecture"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7b8fea] block mb-3">
                    AI Platform
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    Cognitive Synthesis
                  </h3>
                  <p className="text-sm text-white/40 font-light max-w-sm">
                    Enterprise intelligence engine parsing
                    multi-modal data at 10x analyst speed.
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ABOUT — Editorial split with large typography
          ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-32 md:py-44 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — large statement */}
            <Reveal>
              <div>
                <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-8">
                  About Nexora
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] mb-10">
                  We exist to solve problems
                  most firms won't attempt.
                </h2>
                <div className="w-16 h-[2px] bg-[#4f6df0]/50 mb-10" />
              </div>
            </Reveal>

            {/* Right — editorial body text */}
            <Reveal delay={0.15}>
              <div className="lg:pt-16">
                <p className="text-lg md:text-xl text-white/50 font-light leading-[1.8] mb-8">
                  Founded by systems architects, cryptographers, and
                  computational researchers, Nexora was built to address the
                  structural bottlenecks that hyperscale organizations encounter
                  when off-the-shelf solutions reach their limits.
                </p>
                <p className="text-base text-white/30 font-light leading-[1.8] mb-12">
                  From sub-millisecond execution planes to impenetrable
                  zero-trust perimeters, our work underpins organizations
                  where failure carries consequences measured in millions —
                  or in lives. We build with mathematical rigor, test with
                  adversarial discipline, and deliver with the precision
                  our clients' missions demand.
                </p>

                {/* Metrics — woven into narrative */}
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/[0.06]">
                  {[
                    { val: '150+', label: 'Projects shipped' },
                    { val: '99.99%', label: 'Uptime SLA' },
                    { val: '12', label: 'Countries' },
                    { val: '24/7', label: 'Tier-3 support' },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">
                        {m.val}
                      </div>
                      <div className="text-xs text-white/30 mt-1 tracking-wide uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Pull quote — full width, cinematic */}
          <Reveal className="mt-32 md:mt-44">
            <blockquote className="relative">
              <div className="absolute -top-6 left-0 text-8xl font-serif text-[#4f6df0]/10 leading-none select-none">
                "
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white/80 leading-[1.3] tracking-tight max-w-5xl">
                We don't keep pace with the future —
                <span className="text-white font-medium"> we set its specifications</span>
                <span className="text-[#4f6df0]">.</span>
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CONTACT — Minimal, confident
          ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 md:py-44 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <Reveal>
              <div>
                <p className="text-[11px] md:text-xs font-medium tracking-[0.4em] uppercase text-[#7b8fea] mb-6">
                  Start a conversation
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  Let's build
                  <br />
                  something real<span className="text-[#4f6df0]">.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6 lg:items-end">
                <p className="text-base text-white/40 font-light max-w-md lg:text-right leading-relaxed">
                  Tell us what you're trying to solve. We'll respond within
                  24 hours with an honest assessment of whether we're the right fit.
                </p>
                <a
                  href="mailto:hello@nexora.tech"
                  className="group inline-flex items-center gap-4 text-white"
                >
                  <span className="text-lg md:text-xl font-light tracking-wide group-hover:text-[#a0b4ff] transition-colors">
                    hello@nexora.tech
                  </span>
                  <span className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#4f6df0] group-hover:bg-[#4f6df0]/10 flex items-center justify-center transition-all duration-500">
                    <Mail size={16} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER — Minimal
          ══════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.04] py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-baseline gap-1">
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50">
                Nexora
              </span>
              <span className="w-1 h-1 rounded-full bg-[#4f6df0]" />
            </a>
            <span className="text-xs text-white/15">
              © {new Date().getFullYear()} Nexora Technologies
            </span>
          </div>

          <div className="flex items-center gap-8 text-xs text-white/25">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-white/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowDownRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="7" x2="17" y2="17"></line>
      <polyline points="17 7 17 17 7 17"></polyline>
    </svg>
  );
}
