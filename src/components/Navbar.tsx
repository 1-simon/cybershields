import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
import { games } from "../data/games";

const Navbar: React.FC = () => {
  const [completedGames, setCompletedGames] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    let completedCount = 0;
    let totalProgress = 0;

    games.forEach((game) => {
      const levels = game.levels || [];
      if (levels.length === 0) return;

      const levelProgressSum = levels.reduce((sum, lvl) => {
        const saved = localStorage.getItem(`game-${game.id}-level-${lvl.level}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          return sum + (parsed.progress || 0);
        }
        return sum;
      }, 0);

      const avgProgress = levelProgressSum / levels.length;
      totalProgress += avgProgress;

      if (avgProgress === 100) completedCount += 1;
    });

    setCompletedGames(completedCount);
    setOverallProgress(Math.round(totalProgress / games.length));
  }, []);

  return (
    <nav>
      <div className="logo">
        CYBER<span>SHIELDS</span>
      </div>
      <ul>
        <NavLink to="/">
          <li>🛡 Games</li>
        </NavLink>
        <NavLink to="">
          <li>🧠 Quiz</li>
        </NavLink>
        <li>🏆 {completedGames}/{games.length}</li>
        <li>⭐ {overallProgress}%</li>
      </ul>
    </nav>
  );
};

export default Navbar;
