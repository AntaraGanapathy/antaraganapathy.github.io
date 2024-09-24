import {
  chatbot,
  ipcc,
  news,
  diabetic,
  portfolio,
  pneumonia,
  glaucoma,
  sentiment,
  budgetary
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

const projects = [
  {
    name: "RAG Chatbot",
    description:
      "Web-app that allows the user to chat with a PDF. Developed using Pinecone and Langchain, the bot uses Retrieval-Augmented Generation to generate context-specific answers.",
    tags: ['rag', 'ai-ml'],
    image: chatbot,
    source_code_link: "https://github.com/AntaraGanapathy/rag-chatbot",
  },
  {
    name: "Glaucoma Detection",
    description:
      "Machine learning model that diagnoses glaucoma in eye scans. Trained with transfer learning, the performance of different pre-trained models were compared. Finalist (top 15 of ~ 200) at NDSC challenge.",
    tags: ['ai-ml', 'cnn', 'computer-vision'],
    image: glaucoma,
    source_code_link: "https://github.com/AntaraGanapathy/Glaucoma-Detection",
  },
  {
    name: "Sentiment Analysis",
    description:
      "Model trained, with Natural Language Processing, to analyze the sentiment of news headlines. The models was evaluated against news headlines scraped from CNN's opinion column.",
    tags: ['web-scraping', 'nlp', 'ai-ml'],
    image: sentiment,
    source_code_link: "https://github.com/AntaraGanapathy/Sentiment-Analysis",
  },
  {
    name: "Budgetary",
    description:
      "Web-app that aims at increasing financial literacy amongst school-going students. With the use of interactive activities, students are motivated to build the right saving habits early on.",
    tags: ['python-flask', 'web-dev', 'db'],
    image: budgetary,
    source_code_link: "https://github.com/AntaraGanapathy/budgetary-flask",
  },
  {
    name: "Diabetic Retinopathy",
    description:
      "Machine learning model trained on IDRiD dataset to diagnose diabetic retinopathy and the risk of macular edema. Transfer learning and image pre-prcoessing technqiues were implemented for accuracy.",
    tags: ['ai-ml', 'cnn', 'computer-vision'],
    image: diabetic,
    source_code_link: "https://github.com/AntaraGanapathy/Diabetic-Retinopathy-Detection/tree/main",
  },
  {
    name: "Pneumonia Detection",
    description:
      "Model trained to diagnose pneumonia in children under the age of 5 through chest x-ray scans. Implemented a Convolution Neural Network to train the model and achieved an accuracy of 96.6%.",
    tags: ['cnn', 'computer-vision', 'ai-ml'],
    image: pneumonia,
    source_code_link: "https://github.com/AntaraGanapathy/Pneumonia-Detection",
  },
  {
    name: "IPCC Dataset Analysis",
    description:
      "Analyzed the Intergovernmental Panel on Climate Change (IPCC) dataset to find key drivers of climate change. Used Pandas and Matplotlib to identify countries with similar CO2 emissions to determine global trends.",
    tags: ['data-science', 'python'],
    image: ipcc,
    source_code_link: "https://github.com/AntaraGanapathy/IPCC-Dataset-Analysis",
  },
  {
    name: "Fake News Detection",
    description:
      "Model trained, with Natural Language Processing, detect fake news. Techniques such as TF-IDF Vectorizer and Multinomial Naive Bayes Classifier were used to extract features of news articles.",
    tags: ['nlp', 'ai-ml'],
    image: news,
    source_code_link: "https://github.com/AntaraGanapathy/Fake-News-Detection",
  },
  {
    name: "Portfolio",
    description:
      "Website to display my experiences over the years. Developed with ReactJS and Tailwind, the website is expected to provide an in-depth depiction of my computer science skills and knowledge.",
    tags: ['web-dev', 'react', 'tailwind'],
    image: portfolio,
    source_code_link: "https://github.com/AntaraGanapathy/antaraganapathy.github.io",
  },
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

export { projects, research };