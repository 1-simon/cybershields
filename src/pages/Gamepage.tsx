// pages/Gamepage.tsx
import React, { useState, useEffect } from "react";
import QuizPage from "./QuizPage";
import "../pages/DragQuiz.css"; // keep your existing styles

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
  const [backAnimating, setBackAnimating] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const progressData: Record<string, number> = {};
    levels.forEach((lvl) => {
      const saved = localStorage.getItem(`game-${gameId}-level-${lvl.level}`);
      progressData[lvl.level] = saved ? JSON.parse(saved).progress || 0 : 0;
    });
    setLevelProgress(progressData);
  }, [levels, gameId]);

  const handleBack = () => {
    setBackAnimating(true);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  // Reset all quiz progress
  const handleReset = () => {
    levels.forEach((lvl) => {
      localStorage.removeItem(`game-${gameId}-level-${lvl.level}`);
    });
    // Reset state
    const resetProgress: Record<string, number> = {};
    levels.forEach((lvl) => (resetProgress[lvl.level] = 0));
    setLevelProgress(resetProgress);
  };

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
    <div className={`quiz-page-container ${backAnimating ? "fade-out" : ""}`}>
      <style>
        {`
          .animated-back {
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .animated-back:hover {
            transform: translateX(-5px);
          }
          .fade-out {
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .level-card.completed {
            border: 2px solid #4ade80;
            background-color: #f0fff4;
          }
          .reset-btn {
            margin: 15px 0;
            padding: 8px 16px;
            background-color: #f87171;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .reset-btn:hover {
            background-color: #ef4444;
          }
        `}
      </style>

      <nav className="quiz-nav">
        <button onClick={handleBack} className="back-link animated-back">
          &larr; Back
        </button>
      </nav>



<style>
  {`
    .animated-back {
      padding: 8px 16px;
      background-color: #3b82f6; /* Blue */
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    /* Hover effect */
    .animated-back:hover {
      transform: translateY(-3px) scale(1.05);
      background-color: #2563eb; /* Darker blue */
      box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }

    /* Click effect */
    .animated-back:active {
      transform: translateY(1px) scale(0.98);
      box-shadow: 0 3px 5px rgba(0,0,0,0.1);
    }
  `}
</style>



      <h1 className="quiz-title">{title}</h1>

      {/* Reset button */}
      <button className="reset-btn" onClick={handleReset}>
        Reset All Progress
      </button>

      <div className="level-cards-container">
        {levels.map((lvl, index) => {
          const progress = levelProgress[lvl.level] || 0;
          const isCompleted = progress === 100;

          return (
            <div
              key={lvl.level}
              className={`level-card ${isCompleted ? "completed" : ""}`}
              onClick={() => setSelectedLevel(lvl)}
            >
              <div className="level-number-circle">
                <span>{index + 1}</span>
              </div>
              <h2 className="level-title">{lvl.level}</h2>
              <p className="level-status">
                {isCompleted
                  ? `Completed (${progress}%)`
                  : `Score: ${progress}%`}
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
