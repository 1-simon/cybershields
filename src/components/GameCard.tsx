import React, { useEffect, useState } from "react";
interface Level {
  level: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    answer: string;
  }[];
}

interface GameCardProps {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  tag: string;
  levels: Level[]; // 👈 now matches your data
  tagClass: string;
  progress?: number;
  onPlay: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  icon,
  id,
  title,
  subtitle,
  tag,
  tagClass,
  levels,
  onPlay,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let totalProgress = 0;
    console.log(totalProgress);
    levels.forEach((level) => {
      const saved = localStorage.getItem(`game-${id}-level-${level.level}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);

          if (typeof parsed.progress === "number") {
            totalProgress += parsed.progress;
          }
        } catch {
          console.warn(`Invalid data in storage for game-${id}-level-${level}`);
        }
      }
    });

    if (levels.length > 0) {
      setProgress(Math.round(totalProgress / levels.length)); // average across levels
    }
  }, []);

  return (
    <div
      className="card-link"
      style={{ textDecoration: "none" }}
      onClick={onPlay}
    >
      <div className="card">
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className={`tag ${tagClass}`}>{tag}</div>

        {/* Progress Section */}
        <div className="progress">
          <div
            className="progress"
            style={{
              backgroundColor: "#ddd",
              width: `${progress}%`,
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
          <span className="progress-text">Completed: {progress}%</span>

        <div className="play-btn">▶</div>
      </div>
    </div>
  );
};

export default GameCard;
