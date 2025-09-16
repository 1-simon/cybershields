import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import './DragQuiz.css';

// Define a type for our level data for TypeScript
type Level = {
  id: number;
  title: string;
  difficulty: string;
  status: string;
};

// Array of level data
const levels: Level[] = [
  { id: 1, title: 'Level 1', difficulty: 'Easy', status: 'Not started' },
  { id: 2, title: 'Level 2', difficulty: 'Medium', status: 'Not started' },
  { id: 3, title: 'Level 3', difficulty: 'Hard', status: 'Not started' },
];

const DragQuiz = () => {
  // A handler function for when a user clicks "Start Level"
  const handleStartLevel = (levelId: number) => {
    console.log(`Starting level ${levelId}...`);
    // Here you would add logic to navigate to the actual quiz component for the selected level
    // For example: navigate(`/quiz/${levelId}`);
  };

  return (
    <div className="quiz-page-container">
      <nav className="quiz-nav">
        <Link to="/games" className="back-link">
          &larr; Back to Games
        </Link>
      </nav>
      
      <main className="quiz-content">
        <h1 className="quiz-title">Drag-and-Drop Quiz</h1>

        <div className="level-cards-container">
          {levels.map((level) => (
            <div key={level.id} className="level-card">
              <div className="level-number-circle">
                <span>{level.id}</span>
              </div>
              <h2 className="level-title">{level.title}: {level.difficulty}</h2>
              <p className="level-status">{level.status}</p>
              <button 
                className="start-level-btn" 
                onClick={() => handleStartLevel(level.id)}
              >
                Start Level
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DragQuiz;