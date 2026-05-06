import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Heart, Code, Zap } from 'lucide-react';

// ── Shared scroll-reveal variants (used across all sections) ──
const sectionReveal = {
  hidden:  { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// Left column slides in from left, right from right
const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
};
const slideRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '2+',   label: 'Years Experience', icon: Calendar },
  { value: '10+',  label: 'Projects Built',   icon: Code },
  { value: '5+',   label: 'Technologies',     icon: Zap },
  { value: '100%', label: 'Passion',          icon: Heart },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — slides up as one unit */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — slides in from left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Muhammad Zain ul Abdin
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Dedicated Frontend Web Developer with hands-on experience in HTML, CSS, JavaScript,
                Angular, and Bootstrap. I'm passionate about crafting clean, responsive, and
                user-friendly interfaces that deliver exceptional digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently expanding my expertise into the full MERN stack, I thrive on turning
                complex problems into elegant solutions. My goal is to bridge the gap between
                design and functionality.
              </p>
            </motion.div>

            {/* Info grid — stagger each card */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: GraduationCap, label: 'University', value: 'IIUI — Software Engineering' },
                { icon: MapPin,        label: 'Location',   value: 'Islamabad, Pakistan' },
                { icon: Calendar,      label: 'Status',     value: '4th Semester Student' },
                { icon: Code,          label: 'Focus',      value: 'MERN Stack Development' },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -3, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — slides in from right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Stats — stagger each tile */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.06, y: -5, transition: { type: 'spring', stiffness: 350, damping: 18 } }}
                  className="relative overflow-hidden bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm text-center group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-5xl font-black text-white/20 leading-none mb-2">"</div>
                <p className="text-white/90 text-base leading-relaxed font-medium">
                  Code is not just my profession — it's my craft. Every line I write is a step
                  toward building something meaningful.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-white/40" />
                  <span className="text-white/70 text-sm font-medium">Muhammad Zain ul Abdin</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
