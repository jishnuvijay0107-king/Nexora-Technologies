import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { divisions } from '../data/servicesData';
import SoftwareExperience from './SoftwareExperience';
import CybersecurityExperience from './CybersecurityExperience';
import AIExperience from './AIExperience';

export default function DivisionStage({ division, onClose, onSelectDivision }) {
  // Keyboard Escape listener
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
    }, 120);
  };

  // Watermarks per division
  const watermarkMap = {
    software: 'Code · Design · Build · Grow',
    cyber: 'Protect · Monitor · Secure · Defend',
    ai: 'Learn · Automate · Optimize · Scale',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[150] overflow-y-auto bg-[#03050a] text-white flex flex-col justify-between"
    >
      {/* ── Background Glow Atmospheres (Subtle and seamless) ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-[15%] left-[25%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[120px] opacity-20 transition-all duration-500"
          style={{ background: division.accentColor }}
        />
        <div
          className="absolute -bottom-[15%] right-[15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[130px] opacity-15 transition-all duration-500"
          style={{ background: division.accentColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050a] via-transparent to-[#03050a]/90" />
      </div>

      {/* ── Top Header Bar ── */}
      <header className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 pt-6 pb-4 flex items-center justify-between border-b border-white/[0.06] backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-[0.25em] uppercase text-white">Nexora</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 hidden sm:inline">Technologies</span>
        </div>

        {/* Center Division Switcher (Snappy Fast Switching) */}
        <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
          {divisions.map((d) => {
            const isCurrent = d.id === division.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelectDivision?.(d)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'text-white bg-white/[0.14] shadow-sm'
                    : 'text-white/40 hover:text-white/80 hover:bg-white/[0.02]'
                }`}
                style={isCurrent ? { borderColor: `${d.accentColor}60` } : {}}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: isCurrent ? d.accentColor : 'rgba(255,255,255,0.25)' }}
                />
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Right CTA & Close Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleEnquire}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full border border-white/20 hover:border-white/50 text-white transition-all duration-200 hover:bg-white/[0.05] cursor-pointer"
          >
            Get Started <ArrowRight size={13} />
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
            title="Press Escape to exit"
            aria-label="Back to Services"
          >
            <span className="text-[11px] font-semibold text-white/35">ESC</span>
            <X size={15} />
          </button>
        </div>
      </header>

      {/* ── Sub-navigation: Return to Services ── */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 pt-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Services</span>
        </button>

        {/* Mobile Division Selector */}
        <div className="lg:hidden flex items-center gap-1 text-xs">
          {divisions.map((d) => (
            <button
              key={d.id}
              onClick={() => onSelectDivision?.(d)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                d.id === division.id ? 'text-white bg-white/10' : 'text-white/40'
              }`}
            >
              {d.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Dynamic Destination World ── */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={division.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {division.id === 'software' && (
              <SoftwareExperience division={division} onEnquire={handleEnquire} />
            )}
            {division.id === 'cyber' && (
              <CybersecurityExperience division={division} onEnquire={handleEnquire} />
            )}
            {division.id === 'ai' && (
              <AIExperience division={division} onEnquire={handleEnquire} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Bottom Watermark Footer ── */}
      <footer className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between border-t border-white/[0.06] text-xs text-white/30">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: division.accentColor }} />
          <span>Nexora Technologies // Mission-Critical Digital Engineering</span>
        </span>
        <span className="tracking-widest uppercase font-semibold text-white/40 hidden sm:inline">
          {watermarkMap[division.id]}
        </span>
      </footer>
    </motion.div>
  );
}
