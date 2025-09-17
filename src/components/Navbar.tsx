import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { games } from "../data/games";

const Navbar: React.FC = () => {
  const [completedGames, setCompletedGames] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  const calculateProgress = () => {
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
  };

  useEffect(() => {
    // Run once at mount
    calculateProgress();

    // Listen for custom progress update events
    const handleProgressUpdate = () => calculateProgress();
    window.addEventListener("progressUpdated", handleProgressUpdate);

    return () => {
      window.removeEventListener("progressUpdated", handleProgressUpdate);
    };
  }, []);

  function handleBack() {
    window.location.href = "/";
  }

  return (
    <nav>
      <div
        className="logo clickable-logo"
        onClick={handleBack}
        style={{ cursor: "pointer" }}
      >
        CYBER<span>WALLAH</span>
      </div>

      <style>
        {`
          .clickable-logo {
            font-size: 24px;
            font-weight: bold;
            color: #3b82f6;
            user-select: none;
            transition: transform 0.2s ease, color 0.2s ease;
          }
          .clickable-logo span {
            color: #f87171;
          }
          .clickable-logo:hover {
            transform: scale(1.05);
            color: #2563eb;
          }
        `}
      </style>

      <ul>
        <NavLink to="/">
          <li>🛡 Games</li>
        </NavLink>
        <li>🏆 {completedGames}/{games.length}</li>
        <li>⭐ {overallProgress}%</li>
      </ul>
    </nav>
  );
};

export default Navbar;
