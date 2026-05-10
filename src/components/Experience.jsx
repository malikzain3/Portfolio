import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const experiences = [
  {
    role: 'Web Developer',
    company: 'SENSE IIUI',
    type: 'Part-time',
    period: '2025 – Present',
    location: 'Islamabad, Pakistan',
    color: 'from-indigo-500 to-purple-600',
    accent: 'indigo',
    description:
      'Working as a web developer at the Software Engineering Society (SENSE) at IIUI, contributing to the development and maintenance of society web platforms and digital presence.',
    responsibilities: [
      'Developed and maintained the SENSE IIUI official website',
      'Built responsive UI components using React and Tailwind CSS',
      'Collaborated with design team to implement pixel-perfect interfaces',
      'Optimized web performance and improved page load times',
      'Managed content updates and feature enhancements',
    ],
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Taqsoft',
    type: 'Internship',
    period: '2025',
    location: 'Rawalpindi, Pakistan',
    color: 'from-purple-500 to-pink-600',
    accent: 'purple',
    description:
      'Completed a frontend development internship at Taqsoft, a software house, where I gained hands-on experience building production-grade web applications.',
    responsibilities: [
      'Built dynamic web applications using Angular framework',
      'Implemented responsive designs with Bootstrap and custom CSS',
      'Integrated RESTful APIs and handled asynchronous data flows',
      'Participated in code reviews and agile development sprints',
      'Delivered multiple client-facing features on schedule',
    ],
    tech: ['Angular', 'Bootstrap', 'TypeScript', 'REST APIs'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            My journey
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent hidden sm:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-8 hidden sm:flex">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-white dark:ring-gray-900`}
                  />
                </div>

                {/* Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} sm:pl-20 lg:pl-0`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                          <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white whitespace-nowrap shrink-0`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={14} className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
