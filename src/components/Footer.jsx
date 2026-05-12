import { motion } from 'framer-motion';
import { Code2, Heart, GitBranch, Link, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-sm">
              Zain<span className="text-indigo-500">.</span>dev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
            Developed{' '}
            
            {' '}by{' '}
            <span className="font-semibold text-gray-600 dark:text-gray-400">Muhammad Zain ul Abdin</span>
            {' '}· {new Date().getFullYear()}
          </p>

          {/* Social + Scroll to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitBranch, href: 'https://github.com/malikzain3',                                          label: 'GitHub' },
              { icon: Link,      href: 'https://www.linkedin.com/in/muhammad-zain-ul-abdin-7a5868386',           label: 'LinkedIn' },
              { icon: Mail,      href: 'mailto:zainmalik84466@gmail.com',                                        label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={14} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
