import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, GitBranch, Link, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.png';

const GITHUB   = 'https://github.com/malikzain3';
const LINKEDIN = 'https://www.linkedin.com/in/muhammad-zain-ul-abdin-7a5868386';
const EMAIL    = 'mailto:zainmalik84466@gmail.com';

// ── Text column: stagger children sequentially ──
const textContainer = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

const slideUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Profile image: elastic scale-up from 0.8 ──
const imageVariant = {
  hidden:  { opacity: 0, scale: 0.8, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
      scale: { type: 'spring', stiffness: 100, damping: 20 },
    },
  },
};

// ── Floating badge entrance ──
const badgeLeft = {
  hidden:  { opacity: 0, x: -28, scale: 0.85 },
  visible: { opacity: 1, x: 0,   scale: 1,
    transition: { delay: 1.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const badgeRight = {
  hidden:  { opacity: 0, x: 28, scale: 0.85 },
  visible: { opacity: 1, x: 0,  scale: 1,
    transition: { delay: 1.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 grid-bg"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ── Text column ── */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div variants={slideUp} className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={slideUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Muhammad Zain</span>
              <span className="text-gray-900 dark:text-white"> ul Abdin</span>
            </motion.h1>

            {/* Title */}
            <motion.p variants={slideUp} className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Software Engineering Student &amp;{' '}
              <span className="text-indigo-500 dark:text-indigo-400">Frontend Developer</span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Aspiring <span className="text-purple-500 font-semibold">MERN Stack Developer</span> passionate about
              building beautiful, performant web experiences. Currently in my{' '}
              <span className="text-indigo-500 font-semibold">4th Semester</span> at{' '}
              <span className="text-indigo-500 font-semibold">IIUI</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow duration-300"
              >
                <Mail size={16} />
                Get In Touch
              </motion.a>
              <motion.a
                href="/Zain_Resume.pdf"
                download
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={slideUp}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: GitBranch, href: GITHUB,   label: 'GitHub' },
                { icon: Link,      href: LINKEDIN,  label: 'LinkedIn' },
                { icon: Mail,      href: EMAIL,     label: 'Email' },
              ].map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ scale: 1.2, y: -4, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Profile image — elastic spring entrance ── */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full animated-border p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-950" />
              </div>

              {/* Photo */}
              <div className="absolute inset-2 rounded-full overflow-hidden float-animation">
                <img
                  src={profileImg}
                  alt="Muhammad Zain ul Abdin"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-indigo-300/30 dark:border-indigo-500/20"
              />

              {/* Floating badge — left */}
              <motion.div
                variants={badgeLeft}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="absolute -left-8 top-1/4 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Open to work</span>
              </motion.div>

              {/* Floating badge — right */}
              <motion.div
                variants={badgeRight}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="absolute -right-6 bottom-1/4 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-100 dark:border-gray-800"
              >
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">⚡ MERN Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
