import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Users, Lightbulb, Award, MapPin, Calendar, Star, Zap, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const highlights = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'Explored AWS core services including EC2, S3, Lambda, and CloudFront through live demos and workshops.',
  },
  {
    icon: Users,
    title: 'Community Networking',
    desc: 'Connected with 200+ developers, cloud engineers, and tech enthusiasts from across Pakistan.',
  },
  {
    icon: Lightbulb,
    title: 'Hands-on Workshops',
    desc: 'Participated in interactive sessions on serverless computing, DevOps practices, and cloud-native development.',
  },
  {
    icon: Award,
    title: 'Certification Insights',
    desc: 'Gained valuable guidance on AWS certification paths and career opportunities in cloud computing.',
  },
];

const sessions = [
  { title: 'Keynote: The Future of Cloud', speaker: 'AWS Solutions Architect', tag: 'Keynote' },
  { title: 'Serverless with AWS Lambda', speaker: 'Cloud Engineer', tag: 'Workshop' },
  { title: 'Building Scalable Apps on AWS', speaker: 'Senior Developer', tag: 'Talk' },
  { title: 'AWS for Students & Startups', speaker: 'AWS Evangelist', tag: 'Panel' },
];

export default function AWSEvent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="aws"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* AWS-themed background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-orange-500 dark:text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Community Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            AWS Student{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Community Day
            </span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mx-auto mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Islamabad, Pakistan
          </motion.p>
        </motion.div>

        {/* Hero Event Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-3xl mb-12"
        >
          <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-px rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* AWS Logo area */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="w-40 h-40 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 flex flex-col items-center justify-center shadow-2xl shadow-orange-500/30 pulse-glow"
                  >
                    <Cloud size={48} className="text-white mb-2" />
                    <span className="text-white font-black text-xl tracking-wider">AWS</span>
                    <span className="text-white/80 text-xs font-medium">Community Day</span>
                  </motion.div>
                </div>

                {/* Event details */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold border border-orange-200 dark:border-orange-500/30">
                      🎉 Attended
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-500/30">
                      ✅ Certified Participant
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
                    AWS Student Community Day Islamabad
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
                    Had the incredible opportunity to attend the AWS Student Community Day in Islamabad —
                    a full-day event packed with technical sessions, hands-on workshops, and networking
                    with cloud professionals. This experience deepened my understanding of cloud computing
                    and AWS services, and inspired me to pursue cloud development alongside my frontend journey.
                  </p>

                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-orange-500" />
                      Islamabad, Pakistan
                    </span>
                    <span className="flex items-center gap-2">
                      <Users size={14} className="text-orange-500" />
                      200+ Attendees
                    </span>
                    <span className="flex items-center gap-2">
                      <Globe size={14} className="text-orange-500" />
                      AWS Community Event
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <Icon size={18} className="text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sessions attended */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeUp} className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Sessions Attended
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {sessions.map((session, i) => (
              <motion.div
                key={session.title}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <Star size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{session.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{session.speaker}</p>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-medium flex-shrink-0">
                  {session.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
