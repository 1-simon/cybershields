import React, { useEffect, useState } from "react";
import './Stats.css';
import { games } from "../data/games"; // Make sure this points to your games data

const Stats: React.FC = () => {
  const [completedGames, setCompletedGames] = useState(0);

  // This function calculates completed games from localStorage
  const calculateCompletedGames = () => {
    let completedCount = 0;
    games.forEach((game) => {
      const levels = game.levels || [];
      // A game is completed if AT LEAST ONE of its levels has 100% progress.
      const isCompleted = levels.some((lvl) => {
        const saved = localStorage.getItem(`game-${game.id}-level-${lvl.level}`);
        if (!saved) return false;
        const parsed = JSON.parse(saved);
        return parsed.progress >= 100;
      });
      if (isCompleted) completedCount++;
    });
    setCompletedGames(completedCount);
  };

  useEffect(() => {
    calculateCompletedGames();
  }, []);

  const totalGames = games.length;
  const totalQuestions = games.reduce((sum, game) => {
    const levels = game.levels || [];
    const questionsCount = levels.reduce(
      (lvlSum, lvl) => lvlSum + lvl.questions.length,
      0
    );
    return sum + questionsCount;
  }, 0);

  // --- NEW: Reset Button Handler ---
  const handleReset = () => {
    // Confirm before deleting progress
    if (window.confirm("Are you sure you want to reset all your game progress? This cannot be undone.")) {
      // Loop through all games and levels to clear localStorage
      games.forEach((game) => {
        const levels = game.levels || [];
        levels.forEach((lvl) => {
          localStorage.removeItem(`game-${game.id}-level-${lvl.level}`);
        });
      });

      // Update the state to reflect the change immediately
      setCompletedGames(0);
      alert("Game progress has been reset!");
    }
  };

  return (
    <>
      <div className="stats">
        <div className="stat green">
          <h2>{completedGames}</h2>
          <p>Games Completed</p>
        </div>
        <div className="stat blue">
          <h2>{totalGames}</h2>
          <p>Total Games</p>
        </div>
        <div className="stat yellow">
          <h2>{totalQuestions}</h2>
          <p>Total Questions</p>
        </div>
      </div>

      {/* --- NEW: Reset Button --- */}
      <div className="reset-container">
  <button onClick={handleReset} className="reset-button">
    {/* Refresh Icon SVG */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
    
    <span>Reset All Quiz</span>
  </button>
</div>
    </>
  );
};

export default Stats;