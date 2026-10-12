import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Menu, X, Mail, ArrowUpRight, Phone, MapPin, Shield, Code2, Brain, Cloud, CheckCircle2 } from 'lucide-react';

function Reveal({ children, delay = 0, className = '', y = 30 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: Code2,
      title: 'Software Engineering',
      desc: 'We build the backend infrastructure that companies run on — high-throughput APIs, event-driven systems, platform migrations. The kind of work that doesn\'t look exciting in a pitch deck but keeps a business alive at 3am.',
      points: ['API & platform architecture', 'Legacy system modernization', 'Real-time data pipelines', 'Performance engineering'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      desc: 'Most security work happens after a breach. We\'d rather it didn\'t come to that. We design zero-trust architectures, run adversarial simulations, and build monitoring systems that catch threats before they become headlines.',
      points: ['Zero-trust network design', 'Penetration testing', 'Compliance & audit prep', 'Incident response planning'],
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      desc: 'We\'re skeptical of most AI hype — and that makes us better at shipping AI that actually works. Fine-tuned models, retrieval pipelines, structured agents. No magic, just careful engineering applied to the right problems.',
      points: ['LLM fine-tuning & deployment', 'RAG pipelines', 'Document intelligence', 'MLOps & model monitoring'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      desc: 'Infrastructure that\'s boring to operate is infrastructure done right. We set up multi-region Kubernetes clusters, CI/CD pipelines, and observability stacks — then hand you the keys to something that just works.',
      points: ['Kubernetes & container orchestration', 'CI/CD automation', 'Multi-cloud strategy', 'Cost optimization & FinOps'],
    },
  ];

  return (
    <div className="bg-[#04060c] text-[#b0b8c8] antialiased overflow-x-hidden selection:bg-[#4f6df0]/30 selection:text-white">

      {/* NAV */}
      <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#04060c]/85 backdrop-blur-2xl border-b border-white/[0.06] py-3.5' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold tracking-[0.28em] uppercase text-white/90 group-hover:text-white transition-colors">Nexora</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f6df0] group-hover:shadow-[0_0_10px_#4f6df0] transition-shadow" />
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-[12.5px] font-medium tracking-wide text-white/35 hover:text-white/80 transition-colors duration-300">{l.label}</a>
            ))}
            <div className="w-px h-4 bg-white/10" />
            <a href="#contact" className="text-[12.5px] font-medium tracking-wide text-white/90 border border-white/15 hover:border-white/40 hover:bg-white/[0.03] px-5 py-2 rounded-full transition-all duration-300">
              Get in touch
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/50 hover:text-white" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#04060c]/95 backdrop-blur-xl border-t border-white/[0.05] overflow-hidden">
              <div className="flex flex-col px-6 py-6 gap-1">
                {links.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-light text-white/60 hover:text-white py-3 border-b border-white/[0.04] transition-colors">{l.label}</a>
                ))}
                <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 text-center text-sm font-medium text-white border border-white/15 rounded-full py-3 hover:bg-white/[0.03] transition-all">Get in touch</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ════════════════════════════════════════════════════════
          HERO — cinematic, film-poster feel
          ════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/hero-bg.jpg" alt="" className="w-full h-[120%] object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/25 to-[#04060c]/15 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04060c]/50 via-transparent to-transparent z-[1]" />
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#04060c] to-transparent z-[1]" />

        <motion.div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 pb-20 md:pb-24" style={{ opacity: heroOpacity }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.025em] text-white max-w-3xl"
          >
            We build the
            <br />
            systems behind
            <br />
            <span className="text-white/40">ambitious companies</span><span className="text-[#4f6df0]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-7 text-[15px] md:text-[16px] text-white/35 font-light max-w-md leading-[1.75]"
          >
            Software engineering, cybersecurity, AI, and cloud
            infrastructure. Based in San Francisco with teams
            in Zürich and Singapore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="group inline-flex items-center gap-2.5 bg-[#4f6df0] hover:bg-[#5d7af5] text-white text-[13px] font-medium tracking-wide px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(79,109,240,0.2)] hover:shadow-[0_0_35px_rgba(79,109,240,0.35)]">
              <span>See our work</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2.5 text-white/45 hover:text-white/80 text-[13px] font-medium tracking-wide px-6 py-3 rounded-full border border-white/[0.08] hover:border-white/20 transition-all duration-300">
              What we do
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <ChevronDown size={16} className="text-white/15" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES — interactive selector
          ════════════════════════════════════════════════════════ */}
      <section id="services" className="relative py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#7b8fea] mb-3">What we do</p>
            <h2 className="text-3xl md:text-[2.8rem] font-bold tracking-tight text-white leading-[1.15] max-w-xl">
              Four things, done properly.
            </h2>
            <p className="mt-4 text-[14.5px] text-white/30 font-light max-w-lg leading-[1.75]">
              We don't try to do everything. We focus on the four disciplines where we have
              genuine depth — and we say no to the rest.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 mt-16">
            {/* Left: tabs */}
            <div className="lg:col-span-5 border-t border-white/[0.06]">
              {services.map((s, i) => {
                const Icon = s.icon;
                const active = activeService === i;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActiveService(i)}
                    className={`w-full text-left py-5 md:py-6 border-b border-white/[0.06] flex items-center gap-4 group transition-all duration-300 cursor-pointer ${active ? 'opacity-100' : 'opacity-35 hover:opacity-60'}`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${active ? 'bg-[#4f6df0]/15 text-[#7b8fea] border border-[#4f6df0]/25' : 'bg-white/[0.02] text-white/25 border border-white/[0.05]'}`}>
                      <Icon size={16} />
                    </div>
                    <span className={`text-[15px] md:text-base font-semibold tracking-tight transition-colors duration-300 ${active ? 'text-white' : 'text-white/60'}`}>{s.title}</span>
                    <ArrowRight size={14} className={`ml-auto shrink-0 transition-all duration-300 ${active ? 'text-[#7b8fea] opacity-100' : 'opacity-0'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: detail */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="p-7 md:p-9 rounded-2xl bg-white/[0.015] border border-white/[0.05] h-full flex flex-col justify-between"
                >
                  <div>
                    <p className="text-[14.5px] text-white/45 font-light leading-[1.8] mb-8">
                      {services[activeService].desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {services[activeService].points.map((p) => (
                        <div key={p} className="flex items-center gap-2.5 text-[13px] text-white/50">
                          <CheckCircle2 size={13} className="text-[#4f6df0]/60 shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wider text-[#7b8fea]/80 hover:text-white mt-8 transition-colors duration-300">
                    Start a conversation <ArrowRight size={12} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WORK — Magazine layout with robust live images
          ════════════════════════════════════════════════════════ */}
      <section id="work" className="relative py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#7b8fea] mb-3">Recent projects</p>
            <h2 className="text-3xl md:text-[2.8rem] font-bold tracking-tight text-white leading-[1.15]">
              A few things we've shipped.
            </h2>
          </Reveal>

          {/* Featured */}
          <Reveal className="mt-14">
            <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[2.2/1] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80" alt="Data center" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.4s] ease-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#04060c]/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 md:p-10">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#7b8fea]/80 block mb-3">Cloud · Financial Services</span>
                <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2">Real-time settlement infrastructure</h3>
                <p className="text-[13px] text-white/30 font-light max-w-md leading-relaxed">
                  Rebuilt the core transaction pipeline for a multinational clearing house.
                  Reduced settlement latency by 92% and eliminated a class of race conditions
                  that had caused two outages in the previous year.
                </p>
              </div>
              <div className="absolute top-5 right-5 md:top-7 md:right-7 w-10 h-10 rounded-full border border-white/[0.08] group-hover:border-white/20 group-hover:bg-white/[0.04] flex items-center justify-center transition-all duration-500">
                <ArrowUpRight size={15} className="text-white/20 group-hover:text-white transition-colors" />
              </div>
            </a>
          </Reveal>

          {/* Two-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Reveal delay={0.08}>
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80" alt="Security" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.4s] ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 md:p-8">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#7b8fea]/80 block mb-2.5">Security · Government</span>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-2">Zero-trust network redesign</h3>
                  <p className="text-[13px] text-white/30 font-light max-w-sm leading-relaxed">
                    Designed and deployed a zero-trust architecture across 340 endpoints
                    for a federal contractor — passing CMMC Level 3 on the first audit.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/[0.06] group-hover:border-white/15 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={14} className="text-white/15 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <a href="#contact" className="group block relative rounded-2xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" alt="AI & Hardware" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.4s] ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 md:p-8">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#7b8fea]/80 block mb-2.5">AI · Healthcare</span>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-2">Clinical document intelligence</h3>
                  <p className="text-[13px] text-white/30 font-light max-w-sm leading-relaxed">
                    Built a document processing pipeline that extracts structured data from
                    unstructured clinical notes — replacing 40 hours of weekly manual review.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/[0.06] group-hover:border-white/15 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={14} className="text-white/15 group-hover:text-white transition-colors" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ABOUT — asymmetric editorial
          ════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#7b8fea] mb-3">About</p>
                <h2 className="text-3xl md:text-[2.8rem] font-bold tracking-tight text-white leading-[1.12]">
                  Small team.
                  <br />
                  Hard problems.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <p className="text-[15px] md:text-base text-white/40 font-light leading-[1.85] mb-6">
                  Nexora is a 45-person engineering consultancy. We started in 2019
                  with three founders who were tired of watching good projects get
                  buried under enterprise bureaucracy and vendor lock-in.
                </p>
                <p className="text-[15px] md:text-base text-white/40 font-light leading-[1.85] mb-6">
                  We're not a body shop and we're not an agency. We're engineers
                  who embed with your team, understand the real constraints (not just
                  the ones in the brief), and build systems that your own developers
                  can maintain long after we've left.
                </p>
                <p className="text-[15px] md:text-base text-white/30 font-light leading-[1.85]">
                  We say no to about 70% of inbound projects — not because we're
                  exclusive, but because we only take work where we're genuinely
                  confident we'll deliver something worth the investment.
                </p>
              </Reveal>

              {/* Concrete, specific facts */}
              <Reveal delay={0.2} className="mt-12 pt-10 border-t border-white/[0.05]">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">45</div>
                    <div className="text-[12px] text-white/25 mt-1.5 leading-snug">engineers<br />across 3 offices</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">2019</div>
                    <div className="text-[12px] text-white/25 mt-1.5 leading-snug">founded in<br />San Francisco</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">~70%</div>
                    <div className="text-[12px] text-white/25 mt-1.5 leading-snug">of our work is<br />repeat clients</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CONTACT
          ════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <Reveal>
              <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#7b8fea] mb-4">Contact</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                Tell us what you're
                <br />
                working on<span className="text-[#4f6df0]">.</span>
              </h2>
              <p className="mt-5 text-[14.5px] text-white/30 font-light max-w-md leading-[1.7]">
                No pitch decks, no 12-step sales process. Just a conversation
                about your problem and whether we're the right people to solve it.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 lg:pt-8">
                <a href="mailto:hello@nexora.tech" className="group flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.05] hover:border-white/12 hover:bg-white/[0.015] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Mail size={15} className="text-[#7b8fea]/60" />
                    <span className="text-[14px] text-white/55 group-hover:text-white/80 transition-colors">hello@nexora.tech</span>
                  </div>
                  <ArrowUpRight size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
                <a href="tel:+14155550134" className="group flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.05] hover:border-white/12 hover:bg-white/[0.015] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Phone size={15} className="text-[#7b8fea]/60" />
                    <span className="text-[14px] text-white/55 group-hover:text-white/80 transition-colors">+1 (415) 555-0134</span>
                  </div>
                  <ArrowUpRight size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
                <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/[0.05]">
                  <MapPin size={15} className="text-[#7b8fea]/60" />
                  <span className="text-[14px] text-white/35">San Francisco · Zürich · Singapore</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.04] py-10">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-baseline gap-1">
              <span className="text-[13px] font-semibold tracking-[0.25em] uppercase text-white/40">Nexora</span>
              <span className="w-1 h-1 rounded-full bg-[#4f6df0]" />
            </a>
            <span className="text-[11px] text-white/12">© {new Date().getFullYear()} Nexora Technologies</span>
          </div>
          <div className="flex items-center gap-7 text-[11px] text-white/20">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white/40 transition-colors">{l.label}</a>
            ))}
            <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
