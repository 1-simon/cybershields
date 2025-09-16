// src/data/quizzes.ts

export interface QuizTopic {
  id: number;
  icon: string;
  title: string;
  description: string;
  questions: number;
  timePerQuestion: number;
}

// src/data/quizzes.ts

export interface QuizTopic { // Add "export" here
  id: number;
  icon: string;
  title: string;
  description: string;
  questions: number;
  timePerQuestion: number;
}


export const quizTopics: QuizTopic[] = [
  {
    id: 1,
    icon: "🛡️",
    title: "General Cyber Threats",
    description: "Basic cybersecurity threats and concepts",
    questions: 5,
    timePerQuestion: 30,
  },
  {
    id: 2,
    icon: "🦠",
    title: "Types of Malware",
    description: "Learn about different types of malicious software",
    questions: 5,
    timePerQuestion: 30,
  },
  {
    id: 3,
    icon: "🎣",
    title: "Phishing and Social Engineering",
    description: "Understand social engineering and phishing attacks",
    questions: 5,
    timePerQuestion: 30,
  },
  {
    id: 4,
    icon: "🚫",
    title: "Denial-of-Service (DoS)",
    description: "Learn about DoS and DDoS attacks",
    questions: 5,
    timePerQuestion: 30,
  },
  {
    id: 5,
    icon: "🌐",
    title: "Network & Web attacks",
    description: "Understand network and web-based security threats",
    questions: 5,
    timePerQuestion: 30,
  },
  {
    id: 6,
    icon: "👤",
    title: "Insider Threats & Human Factors",
    description: "Learn about threats from within organizations",
    questions: 5,
    timePerQuestion: 30,
  },
  // Add other topics as needed
];


