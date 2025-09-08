export const portfolioData = {
  name: "Mohd Monis Khan",
  title: "Full-Stack MERN Developer | Cybersecurity Enthusiast",
  tagline:
    "Building secure and scalable web applications with modern technologies",

  about: {
    description:
      "Passionate full-stack developer with expertise in MongoDB, Express.js, React, and Node.js. I love creating efficient, scalable solutions and turning complex problems into simple, beautiful designs. With a strong interest in cybersecurity, I ensure the applications I build are not only scalable but also secure.",
    experience: "2+ years of experience building web applications",
    location: "India",
  },

  contact: {
    email: "khanmdmonis45@gmail.com",
    github: "https://github.com/themonis",
    linkedin: "https://www.linkedin.com/in/mohd-monis-khan/",
  },

  skills: {
    frontend: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "React Router",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT",
      "OAuth",
      "2FA",
      "WebSockets (Socket.IO)",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Linux (Pop!_OS)",
      "PM2",
      "Docker",
    ],
    cybersecurity: [
      "OWASP Top 10 (Secure Coding Practices)",
      "Penetration Testing Basics",
      "Network Scanning (Nmap, Wireshark)",
    ],
    programming: ["Java (DSA)", "Python", "C", "C++"],
  },

  achievements: [
    {
      title: "Organized Cyber Threat Hunt – SISTec Tech Fiesta",
      description:
        "Successfully coordinated a cybersecurity awareness event focusing on hands-on threat detection and prevention.",
      year: "2024",
      category: "Leadership & Events",
      image: "/images/achievements/CyberThreatHunt.png",
      impact: "150+ participants",
      skills: ["Event Planning", "Technical Leadership", "Public Speaking"],
    },
    {
      title: "Organized Crack The Hack – Sagar Fiesta 2K25",
      description:
        "Led a cybersecurity challenge event engaging 200+ students in real-world problem solving and secure coding practices.",
      year: "2025",
      category: "Leadership & Events",
      image: "/images/achievements/CrackTheHack.png",
      impact: "200+ students engaged",
      skills: ["Event Management", "Leadership", "Community Building"],
    },

    {
      title: "Technical Head – CITAC Club, SISTec",
      description:
        "Leading technical initiatives, organizing coding workshops, mentoring 50+ juniors, and coordinating tech skill development sessions.",
      year: "2024 - Present",
      category: "Leadership",
      image: "/images/achievements/TechnicalHead.jpg",
      impact: "50+ students mentored",
      skills: ["Team Leadership", "Mentoring", "Technical Training"],
    },
    {
      title: "Finalist – State-level Hackathon on Secure Web Applications",
      description:
        "Secured finalist position among 500+ participants, demonstrating technical excellence and innovative problem-solving in cybersecurity.",
      year: "2024",
      category: "Recognition",
      image: "/images/achievements/hackathon.jpg",
      impact: "Top 10 out of 500+ participants",
      skills: ["Competitive Programming", "Innovation", "Cybersecurity"],
    },
    {
      title: "Guest Speaker – Cybersecurity Orientation Session",
      description:
        "Delivered comprehensive 45-minute sessions on cybersecurity fundamentals to 100+ first-year students during orientation program.",
      year: "2025",
      category: "Knowledge Sharing",
      image: "/images/achievements/Orientationjpg.jpg",
      impact: "100+ students educated",
      skills: ["Public Speaking", "Knowledge Transfer", "Curriculum Design"],
    },
  ],

  // Enhanced Projects Data
  projects: [
    {
      id: 1,
      title: "SecureDocs Vault",
      description:
        "A comprehensive secure document sharing platform built with MERN stack, featuring end-to-end encryption, multi-factor authentication, and real-time analytics dashboard.",
      longDescription:
        "SecureDocs Vault is a enterprise-grade document management system that prioritizes security without compromising usability. The platform implements AES-256 encryption for file storage, JWT and Google OAuth for authentication, and includes 2FA for enhanced security. Features include role-based access control, real-time file sharing, location-based access logging, and comprehensive analytics dashboard for administrators.",
      image: "/images/achievements/SecureDocs.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Google OAuth",
        "2FA",
        "Encryption",
        "Socket.io",
      ],
      category: "Full-Stack",
      status: "Completed",
      year: "2025",
      featured: true,
      liveUrl: "https://securedocs-vault.vercel.app",
      githubUrl: "https://github.com/themonis/securedocs-vault",
      highlights: [
        "End-to-end encryption for all file uploads",
        "Multi-factor authentication (JWT + Google OAuth + 2FA)",
        "Real-time analytics dashboard with location tracking",
        "Role-based access control system",
        "Secure file sharing with expiration links",
      ],
    },
    {
      id: 2,
      title: "BlogShield",
      description:
        "A secure blogging platform implementing OWASP best practices with role-based access control, admin dashboard, and comprehensive security features.",
      longDescription:
        "BlogShield combines the simplicity of modern blogging with enterprise-level security. Built following OWASP Top 10 security guidelines, it features comprehensive input validation, XSS protection, and SQL injection prevention. The platform includes a powerful admin dashboard for content management, user role administration, and security monitoring.",
      image: "/images/achievements/BlogSheild.jpeg",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OWASP",
        "JWT",
        "Helmet.js",
        "Rate Limiting",
      ],
      category: "Full-Stack",
      status: "Completed",
      year: "2025",
      featured: true,
      liveUrl: "https://blogshield.vercel.app",
      githubUrl: "https://github.com/themonis/blogshield",
      highlights: [
        "OWASP Top 10 security implementation",
        "Advanced role-based access control (Admin/Editor/Viewer)",
        "XSS and CSRF protection mechanisms",
        "Real-time content moderation system",
        "Dark mode support with accessibility features",
      ],
    },
    {
      id: 3,
      title: "PhishGuard Pro",
      description:
        "An AI-powered Chrome extension that detects phishing attempts using OpenAI API, VirusTotal integration, and pattern-based analysis for real-time protection.",
      longDescription:
        "PhishGuard Pro revolutionizes web security by combining artificial intelligence with proven security databases. The extension analyzes URLs in real-time using multiple detection mechanisms: AI-powered content analysis via OpenAI API, threat intelligence from VirusTotal, and custom pattern matching algorithms. It provides instant alerts and detailed threat assessments to protect users from phishing, malware, and suspicious websites.",
      image: "/images/projects/phishguard.png",
      technologies: [
        "JavaScript",
        "Chrome Extension API",
        "OpenAI API",
        "VirusTotal API",
        "Machine Learning",
        "Pattern Recognition",
      ],
      category: "Cybersecurity",
      status: "Completed",
      year: "2024",
      featured: true,
      liveUrl: "#", // Extension not published yet
      githubUrl: "https://github.com/themonis/phishguard-pro",
      highlights: [
        "AI-powered threat detection using OpenAI GPT models",
        "Real-time URL scanning with VirusTotal integration",
        "Custom pattern matching for phishing signatures",
        "Zero-day threat detection capabilities",
        "Lightweight extension with minimal performance impact",
      ],
    },
  ],
};
