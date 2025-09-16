import React from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  icon: string;
  title: string;
  subtitle: string;
  tag: string;
  tagClass: string;
  progress?: number;
  path: string;
}

const GameCard: React.FC<GameCardProps> = ({ icon, title, subtitle, tag, tagClass, progress = 0, path }) => {
  return (
    <Link to={path} className="card-link" style={{ textDecoration: 'none' }}> 
      <div className="card">
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className={`tag ${tagClass}`}>{tag}</div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="play-btn">▶</div>
      </div>
    </Link>
  );
};

export default GameCard;