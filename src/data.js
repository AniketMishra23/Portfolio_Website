export const personal = {
  name: "Aniket Mishra",
  title: "Data Scientist",
  roles: [
    "Data Scientist",
    "ML Engineer",
    "LLM Application Builder",
    "Full Stack Developer",
    "AI/ML Enthusiast",
  ],
  bio: "Machine Learning Engineer and Data Science postgraduate at Deakin University. I build end-to-end ML pipelines, LLM-powered apps, and automated AI systems. Passionate about applying transformative AI solutions to real-world problems.",
  email: "mishraaniket557@gmail.com",
  phone: "+61416128335",
  github: "https://github.com/AniketMishra23",
  linkedin: "https://linkedin.com/in/aniketmishra",
  location: "Glen Waverley, Victoria, Australia",
};

export const projects = [
  {
    title: "AcadBot",
    description:
      "A Telegram bot that assists students with academic needs — natural language Q&A, resource discovery, and PDF question-answering by uploading documents. Deployed live at t.me/Acad23Bot.",
    tags: ["Python", "Telegram Bot API", "OpenAI API", "ChatPDF API", "HTML", "CSS"],
    live: "https://t.me/Acad23Bot",
    color: "#00f5ff",
  },
  {
    title: "AusFlash",
    description:
      "End-to-end automated news intelligence pipeline for Australia (inspired by InShorts). Scrapes 20+ global sources, deduplicates via TF-IDF, classifies into 9 sections, and summarises to 60 words every 30 minutes.",
    tags: ["Python", "Apify", "BART", "HuggingFace", "scikit-learn", "Pandas", "GitHub Actions"],
    color: "#bf00ff",
  },
  {
    title: "IndianLeftOver",
    description:
      "Full-stack recipe recommendation web app that suggests Indian recipes based on available ingredients using cosine similarity. Features dark/light themes, colour scheme controls, and font settings. Deployed on Vercel.",
    tags: ["React.js", "SCSS", "Flask", "Python", "cosine similarity"],
    color: "#39ff14",
  },
  {
    title: "YouTube Q&A Bot",
    description:
      "Chat application that lets users ask natural language questions about any YouTube video's content. Flask backend integrates OpenAI NLP models with a React frontend.",
    tags: ["JavaScript", "Python", "Flask", "OpenAI API", "React", "HTML", "CSS"],
    color: "#ff6b35",
  },
  {
    title: "EHR System",
    description:
      "Electronic Health Records system addressing the digitisation and management of patient medical records — history, medications, test results, and diagnoses — to reduce administrative burden.",
    tags: ["Python"],
    color: "#00f5ff",
  },
  {
    title: "CarPool",
    description:
      "Carpooling hackathon project implementing route-matching and pooling logic. Includes a routing algorithm, data-driven matching from CSV datasets, and route difference analysis.",
    tags: ["Python", "Jupyter Notebook", "JavaScript"],
    color: "#bf00ff",
  },
];

export const skills = [
  { name: "Python", level: 92, color: "#00f5ff" },
  { name: "Machine Learning", level: 88, color: "#bf00ff" },
  { name: "LangChain / LLMs", level: 82, color: "#39ff14" },
  { name: "NLP", level: 85, color: "#ff6b35" },
  { name: "JavaScript / TypeScript", level: 75, color: "#00f5ff" },
  { name: "React.js & Flask", level: 78, color: "#bf00ff" },
  { name: "Data Science (NumPy/Pandas)", level: 88, color: "#39ff14" },
  { name: "Computer Vision", level: 72, color: "#ff6b35" },
];

export const timeline = [
  {
    year: "Jul 2024 — Present",
    title: "Master of Data Science",
    org: "Deakin University — Burwood, VIC, Australia",
    description:
      "Postgraduate study in data science covering advanced ML, deep learning, NLP, and data engineering.",
    type: "education",
  },
  {
    year: "Jun 2023 — Aug 2023",
    title: "Machine Learning Engineer (Internship)",
    org: "LegalBrain.ai — Delhi, India",
    description:
      "Developed an LLM-powered legal chatbot using LangChain, enabling users to query case details and receive structured output on required documents. Integrated AI into a law platform to streamline document management.",
    type: "work",
  },
  {
    year: "Jan 2021 — May 2024",
    title: "B.E. in Electronic & Telecommunication Engineering",
    org: "Thakur College of Engineering & Technology, University of Mumbai (GPA: 7.79)",
    description:
      "Bachelor's degree in ECE with a focus on AI/ML, signal processing, and embedded systems. Active in IEEE student chapter and Team Mavericks Racing.",
    type: "education",
  },
  {
    year: "Dec 2022 — Jan 2023",
    title: "Python Developer (Internship)",
    org: "Sahu Technologies — Mumbai, India",
    description:
      "Conducted sentiment analysis on a Reddit dataset applying NLP preprocessing, feature extraction, and classification models.",
    type: "work",
  },
  {
    year: "Dec 2022 — Jan 2023",
    title: "Artificial Intelligence Intern",
    org: "CodeClause — Mumbai, India",
    description:
      "Built a local document plagiarism checker using text similarity techniques and implemented handwritten digit recognition on MNIST using Artificial Neural Networks.",
    type: "work",
  },
];

export const certifications = [
  "Microsoft AI-900: Azure AI Fundamentals",
  "Artificial Intelligence Certification",
  "Machine Learning Certification",
  "Git & GitHub Workshop Certificate",
  "Code-a-thon 2023 Certificate",
  "SSOC Season 2 Certificate",
];
