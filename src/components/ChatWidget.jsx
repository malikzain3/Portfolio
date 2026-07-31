import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, X, Send, Sparkles, User, Briefcase, Code,
  Mail, Info
} from 'lucide-react';

const SUGGESTIONS = [
  { id: 'about', text: 'Who is Zain?', icon: Info },
  { id: 'skills', text: 'What are his top skills?', icon: Code },
  { id: 'projects', text: 'Tell me about his projects.', icon: Sparkles },
  { id: 'experience', text: 'What is his work experience?', icon: Briefcase },
  { id: 'contact', text: 'How can I contact him?', icon: Mail },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! 👋 I'm Zain's AI assistant. Ask me anything about his skills, projects, experience, or contact info!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isTyping]);

  // Ref to generate stable message IDs
  const msgIdRef = useRef(10);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Increment and get static stable id
    msgIdRef.current += 1;
    const userMsgId = msgIdRef.current;

    // Add user message
    const userMsg = { id: userMsgId, sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking & reply
    setTimeout(() => {
      const responseText = getAIResponse(text);
      msgIdRef.current += 1;
      const botMsgId = msgIdRef.current;

      setMessages((prev) => [
        ...prev,
        { id: botMsgId, sender: 'bot', text: responseText },
      ]);
      setIsTyping(false);
    }, 850);
  };

  const handleSuggestionClick = (text) => {
    handleSendMessage(text);
  };

  const getAIResponse = (query) => {
    const q = query.toLowerCase();

    // 1. Projects
    if (
      q.includes('project') ||
      q.includes('built') ||
      q.includes('portfolio') ||
      q.includes('app') ||
      q.includes('al-hashmi') ||
      q.includes('ambulance') ||
      q.includes('jump')
    ) {
      return `Zain has built some impressive, real-world featured projects:

🚨 **Al-Hashmi Ambulance**
• A professional web presence for a healthcare emergency platform.
• Built with: **HTML, CSS, JavaScript, Responsive Design**.
• [View Live Website](http://alhashmiambulance.fwh.is)

🎮 **Jump App**
• A fast, interactive web application with real-time features.
• Built with: **Angular, Firebase, Tailwind CSS, JavaScript**.
• Deployed securely on Firebase Hosting.
• [View Live Web App](https://jump-6c215.web.app/home)`;
    }

    // 2. Skills
    if (
      q.includes('skill') ||
      q.includes('tech') ||
      q.includes('language') ||
      q.includes('code') ||
      q.includes('know') ||
      q.includes('framework') ||
      q.includes('react') ||
      q.includes('angular') ||
      q.includes('js')
    ) {
      return `Zain has strong expertise in modern web development:

⚡ **Core Technologies:**
• **React** (85% proficiency)
• **JavaScript** (88% proficiency)
• **Angular** (75% proficiency)
• **Node.js** (70% proficiency)
• **C++** (80% proficiency)
• **Tailwind CSS** (88% proficiency)
• **CSS3** (92% proficiency)
• **HTML5** (95% proficiency)

🛠️ **Familiar Tools & Practices:**
• Git, GitHub, REST APIs, MongoDB, Express.js, VS Code, Figma, Responsive Design.`;
    }

    // 3. Experience
    if (
      q.includes('experience') ||
      q.includes('work') ||
      q.includes('job') ||
      q.includes('intern') ||
      q.includes('career') ||
      q.includes('sense') ||
      q.includes('taqsoft')
    ) {
      return `Zain has hands-on experience in software development environments:

💼 **Part-Time Web Developer at SENSE IIUI** (2025 – Present)
• Contributing to Software Engineering Society platforms.
• Building responsive UI components with **React & Tailwind CSS**.
• Optimizing web page performance and load times.

🏢 **Frontend Developer Intern at Taqsoft** (2025)
• Developed dynamic client-facing web applications using the **Angular** framework.
• Implemented elegant designs with Bootstrap & custom CSS.
• Integrated RESTful APIs and participated in agile development sprints.`;
    }

    // 4. Contact
    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('reach') ||
      q.includes('hire') ||
      q.includes('social') ||
      q.includes('github') ||
      q.includes('linkedin') ||
      q.includes('phone') ||
      q.includes('location') ||
      q.includes('address')
    ) {
      return `You can easily reach out to Zain through any of these channels:

📬 **Email:** [zainmalik84466@gmail.com](mailto:zainmalik84466@gmail.com)
📍 **Location:** Islamabad, Pakistan
🕒 **Availability:** Mon – Fri, 9am – 6pm PKT

🌐 **Connect Online:**
• **GitHub:** [malikzain3](https://github.com/malikzain3)
• **LinkedIn:** [Muhammad Zain ul Abdin](https://www.linkedin.com/in/muhammad-zain-ul-abdin-7a5868386)
• **Twitter/X:** [@malik_zain1212](https://x.com/malik_zain1212)`;
    }

    // 5. About Me / Bio / Education
    if (
      q.includes('about') ||
      q.includes('who is') ||
      q.includes('zain') ||
      q.includes('education') ||
      q.includes('university') ||
      q.includes('iiui') ||
      q.includes('student') ||
      q.includes('resume') ||
      q.includes('degree')
    ) {
      return `**Muhammad Zain ul Abdin** is a dedicated Frontend Web Developer and a **4th Semester Software Engineering student** at **IIUI** (International Islamic University Islamabad), based in Islamabad, Pakistan.

He is highly passionate about building clean, responsive, and user-friendly web interfaces. Currently, he is expanding his stack into full-fledged **MERN Stack Development** (MongoDB, Express, React, Node.js) to bridge the gap between frontend beauty and backend power!`;
    }

    // 6. Greetings
    if (
      q.includes('hello') ||
      q.includes('hi') ||
      q.includes('hey') ||
      q.includes('greetings') ||
      q.includes('good morning') ||
      q.includes('good afternoon')
    ) {
      return `Hello! 😊 Nice to meet you. I'm here to answer any questions about Zain's skills, portfolio, experience, or projects. What would you like to know?`;
    }

    // 7. Fallback
    return `I'm not sure I fully understand that question. 😅

But here is what I can tell you about Zain:
• **Skills:** React, JavaScript, Angular, Node.js, C++, Tailwind CSS.
• **Projects:** Al-Hashmi Ambulance, Jump App.
• **Experience:** Developer at SENSE IIUI, former intern at Taqsoft.
• **Contact:** Email, LinkedIn, GitHub.

Feel free to use one of the quick suggestions below! 👇`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="w-[calc(100vw-2.5rem)] sm:w-96 h-[520px] max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 animate-pulse">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Zain's AI Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/80 font-medium">Online & Ready</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white"
                aria-label="Close chat"
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                      msg.sender === 'user'
                        ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                        : 'bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={13} /> : <Sparkles size={13} />}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100/50 dark:border-gray-700/30 shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5 max-w-[85%] mr-auto">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                    <Sparkles size={13} className="animate-spin" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-2xl p-3 text-xs flex items-center gap-1 shadow-sm border border-gray-100/50 dark:border-gray-700/30">
                    <span>AI is typing</span>
                    <span className="flex gap-0.5 ml-0.5">
                      <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Chips */}
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-950/40 border-t border-gray-100 dark:border-gray-800/50 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
              {SUGGESTIONS.map((sug) => {
                const Icon = sug.icon;
                return (
                  <button
                    key={sug.id}
                    onClick={() => handleSuggestionClick(sug.text)}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all duration-200 shadow-sm"
                  >
                    <Icon size={12} className="opacity-75" />
                    {sug.text}
                  </button>
                );
              })}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Zain's background..."
                className="flex-1 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
              />
              <motion.button
                type="submit"
                disabled={!inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-indigo-500/10 flex items-center justify-center shrink-0"
                aria-label="Send message"
              >
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button / FAB */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="cursor-pointer w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-2xl flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-indigo-500/30 z-50 border border-white/10"
        aria-label="Toggle AI assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center relative"
            >
              <MessageSquare size={24} />
              {/* Little ambient glow circle */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-pink-500 border-2 border-white dark:border-gray-950 rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
