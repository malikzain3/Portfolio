import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// ── Header stagger ──
const headerStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Skill cards: stagger 0.1s each, duration 0.4s ──
const skillGrid = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const skillCard = {
  hidden:  { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const skills = [
  {
    name: 'React', level: 85,
    color: 'from-cyan-400 to-blue-500',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    border: 'border-cyan-200 dark:border-cyan-500/30',
    text: 'text-cyan-600 dark:text-cyan-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript', level: 88,
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50 dark:bg-yellow-500/10',
    border: 'border-yellow-200 dark:border-yellow-500/30',
    text: 'text-yellow-600 dark:text-yellow-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-1.8 1.4-3.2 3.5-3.2 1.5 0 2.6.5 3.4 1.9l-1.8 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.4-4 3.4-2.2 0-3.7-1.1-4.4-2.5L7 17.5zm9.5-9.3h2.2v5.8c0 2.6-1.2 3.8-3 3.8-.5 0-1.1-.1-1.5-.3l.3-1.9c.3.1.6.2.9.2.8 0 1.1-.4 1.1-1.8V8.2z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: 'Angular', level: 75,
    color: 'from-red-500 to-pink-500',
    bg: 'bg-red-50 dark:bg-red-500/10',
    border: 'border-red-200 dark:border-red-500/30',
    text: 'text-red-600 dark:text-red-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 2L2 6.5l1.5 13L12 22l8.5-2.5L22 6.5 12 2z" fill="#DD0031"/>
        <path d="M12 2v20l8.5-2.5L22 6.5 12 2z" fill="#C3002F"/>
        <path d="M12 5.5L7 16h1.9l1-2.5h4.2l1 2.5H17L12 5.5zm0 3.2l1.6 3.8H10.4L12 8.7z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Node.js', level: 70,
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50 dark:bg-green-500/10',
    border: 'border-green-200 dark:border-green-500/30',
    text: 'text-green-600 dark:text-green-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35c-.48.28-.78.79-.78 1.33v8.64c0 .54.3 1.05.78 1.33l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.79.78-1.33V7.68c0-.54-.3-1.05-.78-1.33L12.78 2.05c-.23-.13-.5-.2-.78-.2z" fill="#339933"/>
        <text x="12" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">JS</text>
      </svg>
    ),
  },
  {
    name: 'C++', level: 80,
    color: 'from-blue-600 to-indigo-600',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/30',
    text: 'text-blue-600 dark:text-blue-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#00599C"/>
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">C++</text>
      </svg>
    ),
  },
  {
    name: 'HTML5', level: 95,
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-500/10',
    border: 'border-orange-200 dark:border-orange-500/30',
    text: 'text-orange-600 dark:text-orange-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26"/>
        <path d="M12 4.5v15.5l5.3-1.5 1.3-14.5H12z" fill="#EF652A"/>
        <path d="M12 9h-3l-.2-2.5H12V4.5H6.5l.5 5.5H12V9zm0 5.5l-2.5-.7-.2-2.3H7l.4 4.5 4.6 1.3V14.5z" fill="white"/>
        <path d="M12 9v2.5h2.8l-.3 3-2.5.7v2.3l4.6-1.3.4-4.5H12V9z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'CSS3', level: 92,
    color: 'from-blue-400 to-cyan-500',
    bg: 'bg-sky-50 dark:bg-sky-500/10',
    border: 'border-sky-200 dark:border-sky-500/30',
    text: 'text-sky-600 dark:text-sky-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6"/>
        <path d="M12 4.5v15.5l5.3-1.5 1.3-14.5H12z" fill="#33A9DC"/>
        <path d="M12 9H9.2L9 6.5H12V4.5H6.8l.5 5.5H12V9zm0 5.5l-2.5-.7-.2-2.3H7.3l.4 4.5 4.3 1.3V14.5z" fill="white"/>
        <path d="M12 9v2.5h2.7l-.3 3-2.4.7v2.3l4.3-1.3.3-4.5H12V9z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'WordPress', level: 78,
    color: 'from-blue-700 to-blue-900',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-700/30',
    text: 'text-blue-700 dark:text-blue-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#21759B"/>
        <path d="M2.5 12C2.5 6.75 6.75 2.5 12 2.5c2.9 0 5.5 1.2 7.4 3.1L4.1 17.9C3.1 16.2 2.5 14.2 2.5 12zm2.1 5.4L12 4.5c.5 0 1 .1 1.5.2L5.8 19.5c-.5-.7-.9-1.4-1.2-2.1zm3.2 3.5l5.5-15.1c.9.3 1.7.8 2.4 1.4L9.5 21.2c-.6-.2-1.2-.5-1.7-.8zm4.2 1.1l4.5-12.4c.8.9 1.4 2 1.7 3.2L13.5 22c-.5 0-1-.1-1.5-.1zm3.5-.7l2.5-6.8c.3 1 .4 2 .4 3.1 0 1.5-.3 2.9-.9 4.1l-2-.4z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind', level: 88,
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-50 dark:bg-teal-500/10',
    border: 'border-teal-200 dark:border-teal-500/30',
    text: 'text-teal-600 dark:text-teal-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: 'Bootstrap', level: 85,
    color: 'from-purple-600 to-violet-700',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    border: 'border-purple-200 dark:border-purple-500/30',
    text: 'text-purple-600 dark:text-purple-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#7952B3"/>
        <path d="M6.5 5h5.5c2.5 0 4 1.2 4 3.2 0 1.4-.8 2.5-2 2.9 1.5.3 2.5 1.5 2.5 3.1 0 2.3-1.7 3.8-4.5 3.8H6.5V5zm2.5 5.2h2.5c1.2 0 1.9-.6 1.9-1.6 0-1-.7-1.6-1.9-1.6H9v3.2zm0 5.6h2.8c1.4 0 2.1-.7 2.1-1.8 0-1.1-.8-1.8-2.1-1.8H9v3.6z" fill="white"/>
      </svg>
    ),
  },
];

const tools = ['Git', 'GitHub', 'VS Code', 'Figma', 'REST APIs', 'MongoDB', 'Express.js', 'Responsive Design'];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            What I work with
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* ── Skill cards — stagger 0.1s each ── */}
        <motion.div
          variants={skillGrid}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillCard}
              whileHover={{
                scale: 1.08,
                y: -7,
                transition: { type: 'spring', stiffness: 350, damping: 18 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative group flex flex-col items-center gap-3 p-5 rounded-2xl border ${skill.bg} ${skill.border} cursor-default`}
            >
              {/* Glow overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">{skill.icon}</div>

              <span className={`relative z-10 text-sm font-bold ${skill.text}`}>
                {skill.name}
              </span>

              {/* Animated progress bar */}
              <div className="relative z-10 w-full">
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 block text-right">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Also familiar with — stagger tags */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-sm text-gray-400 dark:text-gray-500 mb-4 font-medium">
            Also familiar with
          </motion.p>
          <motion.div variants={skillGrid} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="flex flex-wrap justify-center gap-2">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                variants={skillCard}
                whileHover={{ scale: 1.08, y: -2, transition: { type: 'spring', stiffness: 400, damping: 18 } }}
                className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium border border-gray-200 dark:border-gray-700 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
