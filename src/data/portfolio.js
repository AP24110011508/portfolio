export const portfolioData = {
  personal: {
    name: "Koya Charan Babu",
    title: "Software Engineer | AI & ML Enthusiast",
    bio: "I am a passionate and highly motivated B.Tech Computer Science (Artificial Intelligence & Machine Learning) student at SRM University AP with a strong interest in Full Stack Development, Software Engineering, and Data Structures & Algorithms.",
    email: "charankoya8@gmail.com",
    phone: "+91 7731896885",
    location: "Akividu, Andhra Pradesh, India",
    availability: "Open to Internships and Software Engineering Opportunities.",
    resumeUrl: "/resume.pdf",
  },

  social: {
    github: "https://github.com/charankoya8",
    linkedin: "https://www.linkedin.com/in/charankoya/",
    leetcode: "https://leetcode.com/u/AP24110011508/",
  },

  hero: {
    greeting: "Hello, I'm",
    roles: [
      "Software Engineer",
      "Full Stack Developer",
      "AI & ML Enthusiast",
      "Software Engineer",
      "Problem Solver",
    ],
    tagline: "Building Scalable Software. Solving Real-World Problems.",
    description:
      "I am a Computer Science (Artificial Intelligence & Machine Learning) student at SRM University AP with a passion for Full Stack Development, Software Engineering, and Data Structures & Algorithms. I enjoy building scalable, user-centric web applications using modern technologies while continuously learning, solving real-world problems, and creating impactful digital experiences.",
    stats: [
      { label: "Projects", value: "3+" },
      { label: "Skills", value: "25+" },
      { label: "Internship", value: "NIT Warangal" },
      { label: "Specialization", value: "AIML" },
    ],
  },

  about: {
    summary: `I am a passionate and highly motivated B.Tech Computer Science (Artificial Intelligence & Machine Learning) student at SRM University AP with a strong interest in Full Stack Development, Software Engineering, and Data Structures & Algorithms. I enjoy building scalable, user-centric web applications and continuously expanding my technical expertise through real-world projects, internships, and hands-on learning.`,
    objective:
      "To become a skilled Software Engineer by continuously improving my expertise in Full Stack Development, Data Structures & Algorithms, Artificial Intelligence, and Software Engineering while contributing to innovative technology products that create real-world impact.",
    interests: [
      "Full Stack Development",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
    ],
  },

  education: [
    {
      institution: "SRM University AP",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      duration: "2024 - 2028",
      gpa: "8.3",
      achievements: ["Dean's List", "Active in coding competitions"],
    },
    {
      institution: "Tirumala IIT Academy",
      degree: "Intermediate (MPC)",
      duration: "2022 - 2024",
      percentage: "90.8%",
    },
    {
      institution: "Narayana E-Techno School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2022",
      percentage: "80.5%",
    },
  ],

  skills: {
    languages: [
      { name: "Python", level: 82 },
      { name: "C++", level: 80 },
      { name: "C", level: 78 },
      { name: "C#", level: 72 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
    ],
    frontend: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "Responsive Web Design", level: 86 },
      { name: "Framer Motion", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Flask", level: 72 },
      { name: "REST APIs", level: 82 },
    ],
    database: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 76 },
    ],
    tools: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 86 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "MongoDB Compass", level: 75 },
      { name: "Unity", level: 70 },
      { name: "Blender", level: 68 },
    ],
    core: [
      { name: "Data Structures & Algorithms", level: 78 },
      { name: "DBMS", level: 78 },
      { name: "Operating Systems", level: 72 },
      { name: "Computer Networks", level: 70 },
      { name: "Object Oriented Programming", level: 80 },
    ],
  },

  strengths: {
    technical: [
      "Full Stack Web Development using React.js, Node.js, Express.js, and MongoDB.",
      "Strong foundation in Data Structures & Algorithms with continuous problem-solving practice.",
      "Experience in building Machine Learning applications using Python, Flask, and Scikit-learn.",
      "Knowledge of REST API development and backend integration.",
      "Experience with database design, CRUD operations, indexing, and MongoDB aggregation.",
      "Frontend development with responsive, modern, and user-friendly UI design.",
      "Familiar with Git, GitHub, version control, and collaborative development workflows.",
      "Basic experience in AR/VR development using Unity and Blender through internship work.",
    ],
    professional: [
      "Quick learner",
      "Strong analytical thinking",
      "Problem-solving mindset",
      "Self-motivated",
      "Team player",
      "Clean code practices",
      "Continuous learner",
    ],
    interests: [
      "Full Stack Development",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Backend Development",
      "Web Development",
      "AR/VR",
      "Cloud Computing",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Task Manager",
      description:
        "A full-featured task management application with real-time updates, user authentication, and persistent data storage.",
      longDescription:
        "Built a complete task management system with features for creating, updating, and deleting tasks. Integrated user authentication, responsive UI, and database persistence for seamless task organization.",
      tech: ["React", "Node.js", "MongoDB", "Express", "CSS"],
      github: "https://github.com/charankoya8/Task-Manager",
      liveDemo: null,
      featured: true,
      image: "project-1",
    },
    {
      id: 2,
      title: "Student Performance Prediction System",
      description:
        "Developed a Machine Learning web application to predict student academic performance using multiple educational parameters.",
      longDescription:
        "Implemented data preprocessing, feature engineering, model training, and optimization to improve prediction accuracy. Built a Flask-based interface for real-time student performance predictions.",
      tech: ["Python", "Flask", "Machine Learning", "Scikit-learn", "HTML", "CSS"],
      github: "https://github.com/AP24110011508/student-performance-prediction-ml",
      liveDemo: null,
      featured: true,
      image: "project-2",
    },
    {
      id: 3,
      title: "Student Resource Management System (SRMS)",
      description:
        "Built a student management application for organizing and maintaining academic records with complete CRUD capability.",
      longDescription:
        "Implemented full record management workflows and a responsive user interface to enhance usability and administrative efficiency.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AP24110011508/srms-project",
      liveDemo: null,
      featured: true,
      image: "project-3",
    },
    {
      id: 4,
      title: "Fast Click Challenge",
      description:
        "Developed an interactive browser-based reflex game where players improve reaction speed by clicking randomly moving targets.",
      longDescription:
        "Designed a responsive interface with dynamic score tracking, timer mechanics, and randomized movement behavior to create a polished frontend game experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AP24110011508/FASTCLICK",
      liveDemo: null,
      featured: true,
      image: "project-4",
    },
  ],

  experience: [
    {
      id: 1,
      company: "National Institute of Technology (NIT) Warangal",
      position: "AR/VR Intern",
      duration: "2026",
      description:
        "Worked on creating immersive Virtual Reality environments using Unity and Blender, including architectural asset design and interactive scene development.",
      highlights: [
        "Designed 3D architectural assets",
        "Created immersive VR walkthroughs",
        "Implemented interactive navigation and controller interactions",
        "Collaborated with design and development teams",
      ],
    },
  ],

  certifications: [
    {
      id: 1,
      title: "MongoDB Certified Associate Developer",
      issuer: "MongoDB",
      date: "2026",
      description:
        "Validated skills in CRUD operations, indexing, aggregation pipelines, and MongoDB development.",
    },
    {
      id: 2,
      title: "MongoDB Node.js Developer Path for SmartBridge",
      issuer: "SmartBridge",
      date: "2026",
      description:
        "Completed hands-on MongoDB integration with Node.js applications.",
    },
    {
      id: 3,
      title: "Introduction to Python",
      issuer: "Saylor Academy",
      date: "2026",
      description:
        "Completed a 36-hour course covering Python programming fundamentals and problem-solving.",
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      issuer: "LinkedIn Learning",
      date: "2026",
      description:
        "Completed modern frontend-backend integration training for professional web applications.",
    },
  ],

  timeline: [
    {
      year: "2022",
      title: "SSC Completed",
      description: "Completed SSLC at Narayana E-Techno School with a strong academic foundation.",
    },
    {
      year: "2024",
      title: "Intermediate Completed",
      description: "Completed MPC at Tirumala IIT Academy with 90.8% marks.",
    },
    {
      year: "2024",
      title: "Joined SRM University AP",
      description: "Started B.Tech CSE (AIML) program with a focus on software engineering and AI.",
    },
    {
      year: "2026",
      title: "NIT Warangal Internship",
      description: "Started AR/VR internship building immersive virtual experiences with Unity and Blender.",
    },
    {
      year: "2026",
      title: "Completed Multiple Full Stack Projects",
      description: "Delivered several full-stack and frontend projects across web and game development.",
    },
  ],

  contact: {
    email: "charankoya8@gmail.com",
    phone: "+91 7731896885",
    location: "Akividu, Andhra Pradesh, India",
  },

  achievements: [
    "AR/VR Internship at NIT Warangal",
    "Multiple Full Stack Development Projects",
    "Dean's List Student",
    "Active Open Source Contributor",
    "Strong DSA practice and software engineering mindset",
  ],
};
