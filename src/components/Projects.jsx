import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Globe, ArrowUpRight } from 'lucide-react';

// ── Header ──
const headerStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Cards: stagger sequentially ──
const cardGrid = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.25 } },
};

const cardVariant = {
  hidden:  { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
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
    tags:        ['React', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    gradient:    'from-indigo-500 to-purple-600',
    glowColor:   'rgba(99,102,241,0.35)',
    badgeBg:     'bg-indigo-50 dark:bg-indigo-500/10',
    badgeText:   'text-indigo-600 dark:text-indigo-400',
    badgeBorder: 'border-indigo-200 dark:border-indigo-500/30',
    category:    'Web App',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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
          className="text-center mb-16"
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
            Real-world projects I've designed, built, and shipped
          </motion.p>
        </motion.div>

        {/* ── Cards — stagger in sequentially ── */}
        <motion.div
          variants={cardGrid}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              // ── Hover: scale 1.05 + dynamic glow shadow ──
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: 'spring', stiffness: 260, damping: 18 },
              }}
              className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
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

                {/* Category */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                  <span className="text-white/90 text-xs font-medium">{project.category}</span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                >
                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm shadow-xl`}>
                    <Globe size={15} />
                    View Live
                    <ArrowUpRight size={14} />
                  </div>
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
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-14"
        >
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">More projects on my GitHub</p>
          <motion.a
            href="https://github.com/malikzain3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-medium hover:border-orange-400 dark:hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
          >
            <ExternalLink size={14} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
