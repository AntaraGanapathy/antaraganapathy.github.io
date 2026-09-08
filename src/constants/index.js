import {
  machani,
  jpmorgan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "research",
    title: "Research",
  },
];

const projects = [
  
  {
    name: "ZeroVault",
    description:
      "A zero-knowledge, local-first password manager built with Electron that securely stores credentials using AES-256-GCM encryption and Argon2id key derivation. Includes TOTP/2FA, password generation, breach detection, auto-lock, and encrypted backup/restore.",
    tags: [
      "electron",
      "react",
      "nodejs",
      "sqlite",
      "cryptography",
      "security"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/password-manager",

  },
  {
    name: "Secure AI Orchestrator",
    description:
      "An AI-powered workflow automation platform that uses Google Gemini to coordinate tasks across Gmail, Google Calendar, and Slack, with Auth0 Token Vault for secure credential management and user-authorized integrations.",
    tags: [
      "nextjs",
      "react",
      "tailwind",
      "gemini",
      "auth0",
      "supabase",
      "prisma",
      "ai"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/auth0-trial",
  },
  {
    name: "PathMatch",
    description:
      "A web application developed during JPMorgan Chase's Code for Good Hackathon to streamline mentor registration and improve mentor-mentee matching for MCR Pathways using AI-assisted recommendations.",
    tags: [
      "django",
      "react",
      "tailwind",
      "python",
      "ai",
      "machine-learning"
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "Dish-it-Out",
    description:
      "A smart kitchen and grocery management platform for shared households featuring expense splitting, fridge inventory, shared calendars, group chat, and an AI-powered cooking assistant.",
    tags: [
      "react",
      "tailwind",
      "firebase",
      "ai",
      "web-app"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/COMP10120-X14",
  },
  {
    name: "RAG Chatbot",
    description:
      "A Retrieval-Augmented Generation chatbot that enables users to query PDF documents using semantic search with Pinecone and LangChain to deliver context-aware responses.",
    tags: [
      "python",
      "langchain",
      "pinecone",
      "rag",
      "llm",
      "ai"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/rag-chatbot",
  },
  {
    name: "Glaucoma Detection",
    description:
      "A deep learning project for glaucoma detection from retinal fundus images using transfer learning. Finalist in the NDSC Challenge, placing in the top 15 out of nearly 200 teams.",
    tags: [
      "python",
      "tensorflow",
      "computer-vision",
      "cnn",
      "deep-learning",
      "healthcare-ai"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/Glaucoma-Detection",
  },
  {
    name: "Sentiment Analysis",
    description:
      "An NLP model for sentiment classification of news headlines, trained and evaluated on articles scraped from CNN's Opinion section using web scraping and text preprocessing techniques.",
    tags: [
      "python",
      "nlp",
      "machine-learning",
      "web-scraping",
      "text-analysis"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/Sentiment-Analysis",
  },
  {
    name: "Diabetic Retinopathy",
    description:
      "A deep learning model trained on the IDRiD dataset to detect diabetic retinopathy and assess macular edema risk using transfer learning and advanced image preprocessing.",
    tags: [
      "python",
      "tensorflow",
      "computer-vision",
      "cnn",
      "deep-learning",
      "healthcare-ai"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/Diabetic-Retinopathy-Detection/tree/main",
  },
  {
    name: "Budgetary",
    description:
      "An educational web application designed to promote financial literacy among students through interactive budgeting activities and gamified savings challenges.",
    tags: [
      "flask",
      "python",
      "sql",
      "education",
      "web-app"
    ],
    source_code_link: "https://github.com/AntaraGanapathy/budgetary-flask",
  },

  // {
  //   name: "ZeroVault",
  //   description:
  //     "A zero-knowledge, local-first password manager that securely stores credentials and sensitive data using AES-256-GCM encryption and Argon2id key derivation. Features encrypted vault management, password generation, TOTP/2FA, breach detection, auto-lock, and encrypted backup/restore.",
  //   tags: ["electron", "react", "nodejs", "sqlite"],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/password-manager",
  // },
  // {
  //   name: "Secure AI Orchestrator",
  //   description:
  //     "A secure AI orchestration platform that uses Google Gemini to automate workflows across Gmail, Google Calendar, and Slack, with Auth0 Token Vault for secure credential storage and user-authorized third-party access.",
  //   tags: [ "nextjs", "react", "gemini", "supabase" ],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/auth0-trial",
  // },
  // {
  //   name: "PathMatch",
  //   description:
  //     "Web-app designed to improve the mentor registration process and matching algorithm for MCR Pathways. Team submission for Code for Good Hackathon held by JPMorganChase",
  //   tags: ['django', 'react', 'tailwind', 'ai-ml'],
    
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Dish-it-Out",
  //   description:
  //     "Dish-it-Out is a smart grocery and kitchen management app made for people living in shared spaces. Includes features such as cost splitter, fridge manager, calendar system, chats between flatmates and an AI chatbot.",
  //   tags: ['react', 'tailwind', 'ai-ml'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/COMP10120-X14",
  // },
  // {
  //   name: "RAG Chatbot",
  //   description:
  //     "Web-app that allows the user to chat with a PDF. Developed using Pinecone and Langchain, the bot uses Retrieval-Augmented Generation to generate context-specific answers.",
  //   tags: ['rag', 'ai-ml'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/rag-chatbot",
  // },
  // {
  //   name: "Glaucoma Detection",
  //   description:
  //     "Machine learning model that diagnoses glaucoma in eye scans. Trained with transfer learning, the performance of different pre-trained models were compared. Finalist (top 15 of ~ 200) at NDSC challenge.",
  //   tags: ['ai-ml', 'cnn', 'computer-vision'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/Glaucoma-Detection",
  // },
  // {
  //   name: "Sentiment Analysis",
  //   description:
  //     "Model trained, with Natural Language Processing, to analyze the sentiment of news headlines. The models was evaluated against news headlines scraped from CNN's opinion column.",
  //   tags: ['web-scraping', 'nlp', 'ai-ml'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/Sentiment-Analysis",
  // },
  // {
  //   name: "Diabetic Retinopathy",
  //   description:
  //     "Machine learning model trained on IDRiD dataset to diagnose diabetic retinopathy and the risk of macular edema. Transfer learning and image pre-prcoessing technqiues were implemented for accuracy.",
  //   tags: ['ai-ml', 'cnn', 'computer-vision'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/Diabetic-Retinopathy-Detection/tree/main",
  // },
  // {
  //   name: "Budgetary",
  //   description:
  //     "Web-app that aims at increasing financial literacy amongst school-going students. With the use of interactive activities, students are motivated to build the right saving habits early on.",
  //   tags: ['python-flask', 'web-dev', 'sql'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/budgetary-flask",
  // },
  // {
  //   name: "Pneumonia Detection",
  //   description:
  //     "Model trained to diagnose pneumonia in children under the age of 5 through chest x-ray scans. Implemented a Convolution Neural Network to train the model and achieved an accuracy of 96.6%.",
  //   tags: ['cnn', 'computer-vision', 'ai-ml'],
  //   
  //   source_code_link: "https://github.com/AntaraGanapathy/Pneumonia-Detection",
  // },
  // {
  //   name: "IPCC Dataset Analysis",
  //   description:
  //     "Analyzed the Intergovernmental Panel on Climate Change (IPCC) dataset to find key drivers of climate change. Used Pandas and Matplotlib to identify countries with similar CO2 emissions to determine global trends.",
  //   tags: ['data-science', 'python'],
  //   
  //   source_code_link: "https://github.com/AntaraGanapathy/IPCC-Dataset-Analysis",
  // },
  // {
  //   name: "Fake News Detection",
  //   description:
  //     "Model trained, with Natural Language Processing, detect fake news. Techniques such as TF-IDF Vectorizer and Multinomial Naive Bayes Classifier were used to extract features of news articles.",
  //   tags: ['nlp', 'ai-ml'],
    
  //   source_code_link: "https://github.com/AntaraGanapathy/Fake-News-Detection",
  // },
  // {
  //   name: "Portfolio",
  //   description:
  //     "Website to display my experiences over the years. Developed with ReactJS and Tailwind, the website is expected to provide an in-depth depiction of my computer science skills and knowledge.",
  //   tags: ['web-dev', 'react', 'tailwind'],
  //   
  //   source_code_link: "https://github.com/AntaraGanapathy/antaraganapathy.github.io",
  // },
];

const research = [
  {
    title: "Defining Evaluation Metrics for Medical Imaging Datasets",
    journal: "Young Scientist Journal by Vanderbilt University",
    date: "May 30th 2023",
    description:
      "As society relies more on AI/ML in the medical field, it becomes imperative to get the dataset criteria right. This paper focuses on defining a metric to aid in the selection of a reliable medical imaging dataset.",
    url: "https://wp0.vanderbilt.edu/youngscientistjournal/article/defining-evaluation-metrics-for-medical-imaging-datasets",
  },
];

const experiences = [
  {
    title: "SWE Intern",
    company_name: "JPMorgan Chase & Co., Glasgow",
    icon: jpmorgan,
    iconBg: "#1E212D",
    date: "Jun 2026 - Aug 2026",
    points: [
      "Contributing to the International Tax team within the Asset & Wealth Management (AWM) line of business by designing, developing, and implementing new application features.",
    ],
  },
  {
    title: "Intern",
    company_name: "Machani Robotics, Bengaluru",
    icon: machani,
    iconBg: "#1E212D",
    date: "Aug 2025 - Sept 2025",
    points: [
      "Worked on building a Python-based interface enabling elderly users to play tablet games via Ria, a humanoid robot.",
      "Designed, built, and deployed a bidirectional system using FastAPI and Socket.IO.",
      "Integrating Unity game with robot middleware to facilitate hands-free gameplay and user accessibility.",
      "Delivered a fully functional proof-of-concept within an 8-week timeframe, prioritizing a simple, robust architecture",
    ],
  },
  {
    title: "Spring into Software Engineering",
    company_name: "JPMorgan Chase & Co., Glasgow",
    icon: jpmorgan,
    iconBg: "#1E212D",
    date: "April 2025",
    points: [
      "Attended panel discussions, networking sessions and workshops over the week to learn about Tech at JPMC.",
      "Gained an in-depth understanding of the lines of businesses at JPMC and the role of tech in each.",
      "Participated in the Code for Good Hackathon by developing PathMatch to improve the mentor registration and matching algorithm for MCR Pathways.",
    ],
  },
];

export { projects, research, experiences };