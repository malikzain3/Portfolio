import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Mail, GitBranch, Link, ExternalLink, Send, MapPin, Phone,
  MessageSquare, User, AtSign, CheckCircle2, Loader2
} from 'lucide-react';

// ── Header ──
const headerStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Left column slides from left ──
const slideLeft = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

// ── Form fields stagger in ──
const formStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};

const fieldVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ── Form card slides from right ──
const slideRight = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  {
    icon: GitBranch, label: 'GitHub',     handle: '@malikzain3',
    href: 'https://github.com/malikzain3',
    color: 'hover:border-gray-400 dark:hover:border-gray-500',
    bg:    'hover:bg-gray-50 dark:hover:bg-gray-800',
  },
  {
    icon: Link, label: 'LinkedIn', handle: 'Muhammad Zain ul Abdin',
    href: 'https://www.linkedin.com/in/muhammad-zain-ul-abdin-7a5868386',
    color: 'hover:border-blue-400',
    bg:    'hover:bg-blue-50 dark:hover:bg-blue-500/10',
  },
  {
    icon: ExternalLink, label: 'Twitter / X', handle: '@malik_zain1212',
    href: 'https://x.com/malik_zain1212',
    color: 'hover:border-sky-400',
    bg:    'hover:bg-sky-50 dark:hover:bg-sky-500/10',
  },
  {
    icon: Mail, label: 'Email', handle: 'zainmalik84466@gmail.com',
    href: 'mailto:zainmalik84466@gmail.com',
    color: 'hover:border-indigo-400',
    bg:    'hover:bg-indigo-50 dark:hover:bg-indigo-500/10',
  },
];

const FORMSPREE_URL = 'https://formspree.io/f/xojrwqew';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Let's talk
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's build something great together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left: info + socials — slides from left ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div
              whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail,   label: 'Email',        value: 'zainmalik84466@gmail.com' },
                  { icon: MapPin, label: 'Location',     value: 'Islamabad, Pakistan' },
                  { icon: Phone,  label: 'Availability', value: 'Mon – Fri, 9am – 6pm PKT' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 break-all">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">Find me on</h3>
              {socials.map(({ icon: Icon, label, handle, href, color, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ x: 5, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 ${color} ${bg} transition-all duration-200 group`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={15} className="text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{label}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form — slides from right ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare size={18} className="text-indigo-500" />
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{   opacity: 0, scale: 0.88 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 size={32} className="text-green-500" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    action={FORMSPREE_URL}
                    method="POST"
                    variants={formStagger}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="space-y-4"
                  >
                    {/* Name + Email row */}
                    <motion.div variants={fieldVariant} className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            id="name" type="text" name="name" required
                            placeholder="Muhammad Zain"
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <AtSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            id="email" type="email" name="email" required
                            placeholder="you@example.com"
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Subject */}
                    <motion.div variants={fieldVariant}>
                      <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject" type="text" name="subject" required
                        placeholder="Project collaboration, job opportunity..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={fieldVariant}>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        placeholder="Tell me about your project or idea..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 resize-none"
                      />
                    </motion.div>

                    {/* Error */}
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 dark:text-red-400"
                      >
                        Something went wrong. Please try again or email me directly.
                      </motion.p>
                    )}

                    {/* ── Submit — pulse on hover ── */}
                    <motion.div variants={fieldVariant}>
                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={{
                          scale: 1.03,
                          y: -2,
                          boxShadow: '0 0 28px rgba(99,102,241,0.55)',
                          transition: { type: 'spring', stiffness: 380, damping: 18 },
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
