// pages/QuizPage.tsx
import React, { useState, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface QuizPageProps {
  gameId: number;
  level: string;
  title: string;
  questions: Question[];
  onBack: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ gameId, level, title, questions, onBack }) => {
  const storageKey = `game-${gameId}-level-${level}`;

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [progress, setProgress] = useState(0);

  // Load saved answers
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed.answers || {});
      setProgress(parsed.progress || 0);
    }
  }, [storageKey]);

  const handleAnswer = (qId: number, option: string) => {
    const updated = { ...answers, [qId]: option };
    setAnswers(updated);
    const answeredCount = Object.keys(updated).length;
    const newProgress = Math.round((answeredCount / questions.length) * 100);
    setProgress(newProgress);
  };

  const handleSubmit = () => {
    localStorage.setItem(storageKey, JSON.stringify({ answers, progress }));
    alert(`Submitted! Progress: ${progress}%`);
  };

  return (
    <div className="quiz-page-container">
      <button onClick={onBack} className="back-link">&larr; Back</button>
      <h1 className="quiz-title">{title} - {level}</h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {questions.map((q) => (
        <div key={q.id} className="quiz-question-container">
          <p className="quiz-question">{q.question}</p>
          <div className="quiz-options">
            {q.options.map((opt) => (
              <button
                key={opt}
                className={`option-btn ${answers[q.id] === opt ? "selected" : ""}`}
                onClick={() => handleAnswer(q.id, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          {answers[q.id] && (
            <p className={`feedback ${answers[q.id] === q.answer ? "correct" : "wrong"}`}>
              {answers[q.id] === q.answer ? "✅ Correct!" : `❌ Wrong! Correct: ${q.answer}`}
            </p>
          )}
        </div>
      ))}

      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizPage;
