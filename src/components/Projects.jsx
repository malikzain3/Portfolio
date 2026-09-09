import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Globe, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// ── Header Animations ──
const headerStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const projects = [
  {
    title:       'Schoolix',
    description: 'An enterprise-level AI-powered school management system built to streamline educational operations. Features attendance tracking, fee management, examinations, teacher portals, and automated workflows in one clean, reliable platform.',
    link:        'https://schoolix.tech',
    image:       '/schoolix.png',
    tags:        ['React', 'Firebase', 'n8n', 'Tailwind CSS', 'AI Workflows'],
    gradient:    'from-blue-600 via-indigo-600 to-purple-600',
    glowColor:   'rgba(79,70,229,0.35)',
    badgeBg:     'bg-blue-50 dark:bg-blue-500/10',
    badgeText:   'text-blue-600 dark:text-blue-400',
    badgeBorder: 'border-blue-200 dark:border-blue-500/30',
    category:    'SaaS',
    featured:    true,
  },
  {
    title:       'Belle\'s Pantry',
    description: 'A gourmet Southern catering and pantry platform based in Lafayette, Louisiana. Features scratch-made Southern comfort food, catering services for events and weddings, quote requests, and gourmet gift options with a refined user experience.',
    link:        'https://belles-pantry-semi.vercel.app/',
    image:       '/belles-pantry.png',
    tags:        ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    gradient:    'from-amber-600 to-orange-600',
    glowColor:   'rgba(217,119,6,0.35)',
    badgeBg:     'bg-amber-50 dark:bg-amber-500/10',
    badgeText:   'text-amber-600 dark:text-amber-400',
    badgeBorder: 'border-amber-200 dark:border-amber-500/30',
    category:    'Catering & E-Commerce',
  },
  {
    title:       'Al-Hashmi Ambulance',
    description: 'A professional web presence for Al-Hashmi Ambulance Service — a healthcare emergency platform built to provide quick access to ambulance services across the region. Features a clean, responsive layout with service information and contact details.',
    link:        'http://alhashmiambulance.fwh.is',
    image:       '/alhashmi.png',
    tags:        ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    gradient:    'from-red-500 to-rose-600',
    glowColor:   'rgba(239,68,68,0.35)',
    badgeBg:     'bg-red-50 dark:bg-red-500/10',
    badgeText:   'text-red-600 dark:text-red-400',
    badgeBorder: 'border-red-200 dark:border-red-500/30',
    category:    'Healthcare',
  },
  {
    title:       'Jump App',
    description: 'A dynamic web application built with Firebase — Jump App delivers a fast, interactive user experience with real-time features. Deployed on Firebase Hosting for reliable, scalable performance.',
    link:        'https://jump-6c215.web.app/home',
    image:       '/jump.png',
    tags:        ['Angular', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    gradient:    'from-indigo-500 to-purple-600',
    glowColor:   'rgba(99,102,241,0.35)',
    badgeBg:     'bg-indigo-50 dark:bg-indigo-500/10',
    badgeText:   'text-indigo-600 dark:text-indigo-400',
    badgeBorder: 'border-indigo-200 dark:border-indigo-500/30',
    category:    'Web App',
  },
];

function useVisibleCards() {
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visibleCards;
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { type: 'spring', stiffness: 260, damping: 18 },
      }}
      className="group relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden cursor-pointer"
      style={{
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 24px 64px ${project.glowColor}, 0 4px 24px rgba(0,0,0,0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Live badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-xs font-semibold">Live</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
            <span className="text-white/90 text-xs font-medium">{project.category}</span>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95`}
          >
            <Globe size={15} /> View Live <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm shadow-lg transition-shadow duration-300 hover:shadow-xl`}
        >
          <Globe size={15} />
          View Live
          <ExternalLink size={13} className="opacity-75" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const visibleCards = useVisibleCards();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const maxIndex = Math.max(0, projects.length - visibleCards);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const currentSafe = Math.min(prev, maxIndex);
      return currentSafe >= maxIndex ? 0 : currentSafe + 1;
    });
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const currentSafe = Math.min(prev, maxIndex);
      return currentSafe <= 0 ? maxIndex : currentSafe - 1;
    });
  }, [maxIndex]);

  // Auto slide timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, handleNext]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* ── Premium warm background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-orange-400/10 dark:bg-orange-500/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-yellow-400/5 dark:bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-orange-500 dark:text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
            What I've built
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Real-world enterprise applications & custom solutions I've designed, built, and shipped
          </motion.p>
        </motion.div>

        {/* ── Project Slider Controls Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center justify-between mb-8 px-2"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 dark:text-gray-500 sm:inline-block font-medium">
              Project {safeIndex + 1} - {Math.min(safeIndex + visibleCards, projects.length)} of {projects.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto Play / Pause Toggle */}
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-400 transition-colors duration-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-400 transition-all duration-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-400 transition-all duration-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* ── Slider Viewport & Cards Track ── */}
        <div
          className="relative overflow-hidden py-4 px-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{
              x: `calc(-${safeIndex * (100 / visibleCards)}% - ${safeIndex * (visibleCards === 1 ? 0 : visibleCards === 2 ? 12 : 16)}px)`,
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 28 }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0"
                style={{
                  width:
                    visibleCards === 1
                      ? '100%'
                      : visibleCards === 2
                      ? 'calc(50% - 12px)'
                      : 'calc(33.333% - 16px)',
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Pagination Dots & Status ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  safeIndex === idx
                    ? 'w-8 bg-gradient-to-r from-orange-400 to-yellow-400'
                    : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.a
            href="https://github.com/malikzain3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold hover:border-orange-400 dark:hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 bg-white/50 dark:bg-gray-900/50"
          >
            <ExternalLink size={13} />
            View all on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
