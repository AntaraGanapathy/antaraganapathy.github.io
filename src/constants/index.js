import {
    // mobile,
    // backend,
    // creator,
    // web,
    // javascript,
    // typescript,
    // html,
    // css,
    // reactjs,
    // redux,
    // tailwind,
    // nodejs,
    // mongodb,
    // git,
    // figma,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    chatbot,
    // threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  

  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
  
  const projects = [
    {
      name: "RAG Chatbot",
      description:
        "Web-app that allows the user to chat with a PDF. Developed using Pinecone and Langchain, the bot uses Retrieval-Augmented Generation to generate context-specific answers",
      tags: ['rag','ai-ml'],
      image: chatbot,
      source_code_link: "https://github.com/AntaraGanapathy/rag-chatbot",
    },
    {
      name: "Glaucoma Detection",
      description:
        "Machine learning model trained to diagnose glaucoma through eye scans. Trained with transfer learning, the performance of different pre-trained models were compared.",
      tags: ['ai-ml','cnn','computer-vision'],
      image: jobit,
      source_code_link: "https://github.com/AntaraGanapathy/Glaucoma-Detection",
    },
    {
      name: "Sentiment Analysis",
      description:
        "Model trained, with Natural Language Processing, to analyze the sentiment of news headlines. The models was evaluated against news headlines scraped from CNN's opinion column",
      tags: ['web-scraping','nlp','ai-ml'],
      image: tripguide,
      source_code_link: "https://github.com/AntaraGanapathy/Sentiment-Analysis",
    },
  ];
  
  export { projects };