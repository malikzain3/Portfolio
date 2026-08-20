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
  const scrollToBottom = (behavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      // Use auto scroll (instant) when first opened to prevent layout fighting with CSS transition,
      // and smooth scroll for subsequent new messages.
      const timer = setTimeout(() => {
        scrollToBottom('auto');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length > 1) {
      const timer = setTimeout(() => {
        scrollToBottom('smooth');
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [messages, isTyping, isOpen]);

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
    const q = query.toLowerCase().trim();

    // Helper functions for matching
    const matchesAny = (words) => words.some(word => q.includes(word));

    // 1. IIUI / Islamic International University Islamabad
    if (matchesAny(['iiui', 'islamic international', 'international islamic', 'where does he study', 'where is he studying', 'what is iiui', 'university', 'undergrad', 'degree', 'studies', 'college', 'qualification'])) {
      return `Zain studies at **Islamic International University Islamabad (IIUI)**. 🎓

**Islamic International University Islamabad (IIUI)** is a prestigious public research university located in Islamabad, Pakistan. Established in 1980, it is a center of higher education blending modern science and technology with Islamic perspectives and values.

Zain is currently in his **5th Semester** pursuing a **Bachelor of Science in Software Engineering** here. His curriculum includes:
• Software Engineering Principles & Practices
• Object-Oriented Programming & Data Structures
• Web Engineering & Database Systems
• Agile Methodologies & Project Management

His academic experience at IIUI has provided him with a strong foundation in computer science theory, collaborative software development, and modern system architectures.

*What would you like to know next?*
• Ask about his **tech stack** or specific skills like **React** or **Angular**.
• Ask about his **work experience** at SENSE IIUI and Taqsoft.
• Ask about his featured **projects** like Belle's Pantry, Al-Hashmi Ambulance, or Jump App.`;
    }

    // 2. Skill Specific Explanations (React, Node.js, Angular, C++, HTML/CSS, Tailwind)
    if (matchesAny(['react', 'what is react', 'reactjs', 'react.js'])) {
      return `**React & Zain's Expertise** ⚡

**What is React?**
In simple, plain-language: React is an open-source JavaScript library developed by Meta (Facebook) used for building interactive and dynamic user interfaces (UIs) for websites and web apps. Instead of reloading the whole page when something changes, React only updates the specific parts of the page that changed (using a 'Virtual DOM'), making websites load incredibly fast. It operates on a "component-based" architecture, meaning developers build small, reusable blocks (like a button, search bar, or profile card) and combine them to create large applications.

**Zain's Usage:**
• Zain has **85% proficiency** in React and uses it as his primary library for frontend development.
• He leverages React Hooks, state management, and modern component architectural patterns to build smooth, ultra-fast web interfaces.
• He is currently building projects like this portfolio site using React!

*What would you like to explore next?*
• Ask about other skills like **Angular**, **Node.js**, or **C++**.
• Ask about his **projects** where he applied his React skills.
• Ask how to **contact** him.`;
    }

    if (matchesAny(['angular', 'what is angular', 'angularjs'])) {
      return `**Angular & Zain's Expertise** 🅰️

**What is Angular?**
In simple terms: Angular is a comprehensive web development framework developed by Google. Unlike React (which is a flexible library), Angular is a complete "opinionated" framework that comes with all the built-in tools a developer needs, such as routing (navigating between pages), form handling, and talking to servers. It is written in TypeScript (a safer version of JavaScript) and is highly popular for building massive, secure, and robust enterprise-grade web applications.

**Zain's Usage:**
• Zain has **75% proficiency** in Angular.
• During his internship at Taqsoft, he worked as a Frontend Web Developer building client-facing web applications using Angular.
• He integrated RESTful APIs and handled asynchronous data flows to deliver scalable, dynamic frontend experiences.

*Where should we go from here?*
• Ask about his other skills like **React** or **Tailwind CSS**.
• Ask about his **work experience** at Taqsoft.
• Ask about his **projects** like Jump App, which uses Angular!`;
    }

    if (matchesAny(['node', 'nodejs', 'node.js', 'what is node'])) {
      return `**Node.js & Zain's Expertise** 🟢

**What is Node.js?**
In simple, plain language: Historically, JavaScript only ran inside web browsers (like Chrome or Safari) to make web pages interactive. Node.js is a "runtime environment" that allows developers to run JavaScript directly on their computer or server, outside of a web browser. This means developers can write server-side code (databases, APIs, user authentication, file systems) using the exact same language they use for the frontend.

**Zain's Usage:**
• Zain has **20% proficiency** in Node.js.
• He is currently expanding his tech stack into full-fledged **MERN Stack Development** (MongoDB, Express, React, Node.js) to bridge the gap between frontend beauty and robust backend server logic.

*What would you like to check next?*
• Ask about his core frontend skills like **React** or **JavaScript**.
• Ask about his **education** at IIUI.
• Ask about his featured **projects**.`;
    }

    if (matchesAny(['c++', 'cpp', 'c plus plus', 'what is c++'])) {
      return `**C++ & Zain's Expertise** 🔵

**What is C++?**
In simple terms: C++ is a powerful, extremely fast, compile-based programming language. It is one of the most widely used systems programming languages, providing fine-grained control over computer memory and system resources. It is the language of choice for performance-critical applications, including operating systems, 3D game engines, graphics engines, and competitive programming.

**Zain's Usage:**
• Zain has **50% proficiency** in C++.
• He developed a solid foundation in programming logic, Object-Oriented Programming (OOP) principles, and basic data structures using C++ during his early coursework at IIUI.

*What would you like to know next?*
• Ask about his modern web skills like **React** or **Tailwind CSS**.
• Ask about his **education** at IIUI.
• Ask about his **projects**.`;
    }

    if (matchesAny(['tailwind', 'bootstrap', 'css', 'html', 'what is tailwind', 'what is css'])) {
      return `**Styling & Markup (HTML, CSS, Tailwind, Bootstrap) 🎨**

**What are these?**
• **HTML5 (95% proficiency):** The skeletal structure of every webpage. It defines what elements go where (headings, paragraphs, images).
• **CSS3 (92% proficiency):** The styling language that makes websites look beautiful (colors, layout, spacing, animations).
• **Tailwind CSS (88% proficiency):** A utility-first CSS framework. Instead of writing custom CSS files, Tailwind lets developers style elements directly inside HTML using predefined class names, making responsive design and prototyping extremely fast and consistent.
• **Bootstrap (85% proficiency):** A popular responsive UI toolkit developed by Twitter that provides pre-built responsive layout systems and components.

**Zain's Usage:**
• Zain uses Tailwind CSS and Bootstrap to design modern, pixel-perfect, and fully responsive layouts that adapt beautifully across mobile devices, tablets, and desktops.

*What would you like to know next?*
• Ask about his interactive web framework skills: **React** or **Angular**.
• Ask about his **projects** like Al-Hashmi Ambulance, which was custom built with CSS/JS.
• Ask about his **experience** at SENSE IIUI.`;
    }

    if (matchesAny(['javascript', 'js', 'what is javascript', 'what is js'])) {
      return `**JavaScript & Zain's Expertise** 💛

**What is JavaScript?**
In simple terms: JavaScript is the programming language of the web. While HTML structures a page and CSS styles it, JavaScript brings it to life. It handles animations, user interactions, click events, fetches data from servers, and updates content on-the-fly without needing a full page reload.

**Zain's Usage:**
• Zain has **88% proficiency** in modern JavaScript (ES6+).
• It is the core language powering his entire frontend framework stack, including React and Angular.

*What would you like to see next?*
• Ask about his projects built with JavaScript like **Jump App** or **Al-Hashmi Ambulance**.
• Ask about his **work experience**.
• Ask how to **contact** him.`;
    }

    // 3. General Skills / Tech Stack
    if (matchesAny(['skill', 'tech', 'language', 'code', 'know', 'framework', 'tool', 'stack', 'mongodb', 'express', 'mern'])) {
      return `Zain is a highly skilled Frontend Developer expanding into full-stack **MERN Development**:

⚡ **Core Technologies & Proficiency:**
• **JavaScript** (88%) - Zain's core programming language.
• **React** (85%) - His primary library for interactive frontend interfaces.
• **HTML5 / CSS3** (95% / 92%) - Markup and custom styling foundations.
• **Tailwind CSS** (88%) - For rapid, modern, utility-first CSS design.
• **Bootstrap** (85%) - Used for responsive grids and flexible UI components.
• **WordPress** (78%) - Experience with custom CMS design and editing.
• **Angular** (75%) - Experience building client-side enterprise apps.
• **C++** (50%) - Foundations in programming logic and computer science.
• **Node.js** (20%) - Expanding server-side capability.

🛠️ **Tools & Practices:**
Git, GitHub, VS Code, REST APIs, MongoDB, Express.js, Figma, Responsive Web Design.

*What would you like to learn more about?*
• Ask about a specific skill, e.g., **"What is React?"** or **"What is Angular?"** for a plain-language breakdown.
• Ask about his **projects** like Al-Hashmi Ambulance or Jump App.
• Ask about his **work experience** at Taqsoft or SENSE IIUI.`;
    }

    // 4. Projects
    if (matchesAny(['project', 'built', 'portfolio', 'app', 'belle', 'pantry', 'al-hashmi', 'ambulance', 'jump', 'work-sample', 'showcase'])) {
      return `Zain has designed and deployed high-performance, real-world web projects:

🍲 **Belle's Pantry**
• A Southern gourmet catering website for Belle's Pantry based in Lafayette, Louisiana, offering scratch-made Southern comfort food, catering services, and gourmet gifts.
• **Built with:** React, Tailwind CSS, Vercel, Responsive Design.
• [View Live Website](https://belles-pantry-semi.vercel.app/)

🚨 **Al-Hashmi Ambulance**
• A professional web presence for a healthcare emergency platform designed to provide quick access to medical transport.
• **Built with:** HTML5, CSS3, JavaScript, Responsive Design.
• Highly optimized for rapid loading and clean mobile user experience.
• [View Live Website](http://alhashmiambulance.fwh.is)

🎮 **Jump App**
• A fast, interactive web application featuring real-time data handling and hosting.
• **Built with:** Angular, Firebase, Tailwind CSS, JavaScript.
• Deployed securely on Firebase Hosting for reliability.
• [View Live Web App](https://jump-6c215.web.app/home)

*What would you like to know next?*
• Ask about the **tech stack** used to build these (React, Angular, Tailwind).
• Ask about Zain's **work experience** where he built commercial products.
• Ask how to **contact** him.`;
    }

    // 5. Work Experience
    if (matchesAny(['experience', 'work', 'job', 'intern', 'career', 'sense', 'taqsoft', 'history', 'professional', 'part-time'])) {
      return `Zain has strong professional and community experience in software environments:

💼 **Part-Time Web Developer at SENSE IIUI** (2025 – Present)
• Contributing to Software Engineering Society (SENSE) official web presence.
• Building responsive, elegant UI components using **React & Tailwind CSS**.
• Collaborating with design teams and optimizing web asset performance.

🏢 **Frontend Developer Intern at Taqsoft** (2025)
• Developed dynamic client-facing web applications using the **Angular** framework.
• Designed responsive layouts with Bootstrap and customized stylesheets.
• Integrated RESTful APIs and participated in agile team sprints to deliver features.

*Would you like to explore further?*
• Ask about his **education** at IIUI.
• Ask about his **skills** or specific tech explanations.
• Ask about his **projects**.`;
    }

    // 6. Contact, Socials, Resume
    if (matchesAny(['contact', 'email', 'reach', 'hire', 'social', 'github', 'linkedin', 'phone', 'location', 'address', 'resume', 'cv'])) {
      return `You can easily connect with Zain or download his credentials:

📬 **Email:** [zainmalik84466@gmail.com](mailto:zainmalik84466@gmail.com)
📍 **Location:** Islamabad, Pakistan
🕒 **Availability:** Monday – Friday, 9:00 AM – 6:00 PM PKT
📄 **Resume:** [Download Resume](/Zain_Resume.pdf)

🌐 **Connect Online:**
• **GitHub:** [malikzain3](https://github.com/malikzain3)
• **LinkedIn:** [Muhammad Zain ul Abdin](https://www.linkedin.com/in/muhammad-zain-ul-abdin-7a5868386)
• **Twitter/X:** [@malik_zain1212](https://x.com/malik_zain1212)

*What can I help you with next?*
• Ask about his **education** or his university, **IIUI**.
• Ask about his **skills** or **projects**.`;
    }

    // 7. Greetings
    if (matchesAny(['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening', 'yo', 'sup'])) {
      return `Hello! 😊 Nice to meet you. I'm Zain's smart AI assistant.

I can tell you all about:
• His **education** at **IIUI** (Islamic International University Islamabad)
• Plain-language explanations of his skills like **React**, **Angular**, **Node.js**, **C++**, and **Tailwind CSS**
• His professional **experience** at SENSE IIUI and Taqsoft
• Detailed breakdowns of his **projects** and how to **contact** him.

What would you like to explore first?`;
    }

    // 8. Thank you / Bye
    if (matchesAny(['bye', 'goodbye', 'thanks', 'thank you', 'awesome', 'great', 'cool'])) {
      return `You're very welcome! 😊 If you have any more questions about Zain's background, skills, projects, or availability, just let me know. Have a wonderful day!`;
    }

    // 9. About Zain / General Info / Biography
    if (matchesAny(['about', 'who is', 'zain', 'background', 'bio', 'story', 'developer'])) {
      return `**Muhammad Zain ul Abdin** is a dedicated Frontend Web Developer and a **5th Semester Software Engineering student** at **IIUI** (International Islamic University Islamabad), based in Islamabad, Pakistan.

He is highly passionate about building clean, responsive, and user-friendly web interfaces. Currently, he is expanding his stack into full-fledged **MERN Stack Development** (MongoDB, Express, React, Node.js) to bridge the gap between frontend beauty and backend power!

*What would you like to see?*
• Ask about his **education** at **IIUI**.
• Ask about his **experience** at SENSE IIUI and Taqsoft.
• Ask about his **projects** like Belle's Pantry, Jump App, or Al-Hashmi Ambulance.`;
    }

    // 10. Fallback
    return `I'm not sure I fully understand that question. 😅

But here is what I can tell you about Zain:
• **Education:** BS Software Engineering (5th Semester) at IIUI.
• **Skills:** React, JavaScript, Angular, Tailwind CSS, Bootstrap, Node.js (20%), C++ (50%).
• **Projects:** Belle's Pantry, Al-Hashmi Ambulance, Jump App.
• **Experience:** Web Developer at SENSE IIUI, former intern at Taqsoft.
• **Contact:** Email, LinkedIn, GitHub.

Feel free to ask a specific question, or click one of the quick suggestions below! 👇`;
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
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
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
