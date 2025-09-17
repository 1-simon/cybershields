// pages/Gamepage.tsx
import React, { useState, useEffect } from "react";
import QuizPage from "./QuizPage";
import "../pages/DragQuiz.css"; // Your level card styles

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface Level {
  level: string;
  questions: Question[];
}

interface GamepageProps {
  gameId: number;
  title: string;
  onBack: () => void;
  levels: Level[];
}

const Gamepage: React.FC<GamepageProps> = ({ gameId, title, onBack, levels }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levelProgress, setLevelProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const progressData: Record<string, number> = {};
    levels.forEach((lvl) => {
      const saved = localStorage.getItem(`game-${gameId}-level-${lvl.level}`);
      progressData[lvl.level] = saved ? JSON.parse(saved).progress || 0 : 0;
    });
    setLevelProgress(progressData);
  }, [levels, gameId]);

  if (selectedLevel) {
    return (
      <QuizPage
        gameId={gameId}
        title={title}
        level={selectedLevel.level}
        questions={selectedLevel.questions}
        onBack={() => setSelectedLevel(null)}
      />
    );
  }

  return (
    <div className="quiz-page-container">
      <nav className="quiz-nav">
        <button onClick={onBack} className="back-link">
          &larr; Back
        </button>
      </nav>

      <h1 className="quiz-title">{title}</h1>

      <div className="level-cards-container">
        {levels.map((lvl, index) => {
          const progress = levelProgress[lvl.level] || 0;
          const isCompleted = progress === 100;

          return (
            <div key={lvl.level} className="level-card" onClick={() => setSelectedLevel(lvl)}>
              <div className="level-number-circle">
                <span>{index + 1}</span>
              </div>
              <h2 className="level-title">{lvl.level}</h2>
              <p className="level-status">
                {isCompleted ? `Completed (${progress}%)` : `${lvl.questions.length} Questions`}
              </p>
              <button className="start-level-btn">
                {isCompleted ? "Completed" : "Start Level"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gamepage;
