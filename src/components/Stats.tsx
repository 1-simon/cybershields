import React, { useEffect, useState } from "react";
import { games } from "../data/games"; // Make sure this points to your games data

const Stats: React.FC = () => {
  const [completedGames, setCompletedGames] = useState(0);

  useEffect(() => {
    let completedCount = 0;

    games.forEach((game) => {
      // Check all levels for each game
      const levels = game.levels || [];
      const isCompleted = levels.some((lvl) => {
        const saved = localStorage.getItem(`game-${game.id}-level-${lvl.level}`);
        if (!saved) return false;
        const parsed = JSON.parse(saved);
        return parsed.progress >= 100;
      });
      if (isCompleted) completedCount++;
    });

    setCompletedGames(completedCount);
  }, []);

  const totalGames = games.length;
  const totalQuestions = games.reduce((sum, game) => {
    const levels = game.levels || [];
    const questionsCount = levels.reduce((lvlSum, lvl) => lvlSum + lvl.questions.length, 0);
    return sum + questionsCount;
  }, 0);

  return (
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
  );
};

export default Stats;
