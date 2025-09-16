import React from "react";
import { Link } from "react-router-dom";
import { quizTopics } from "../data/quizzes";
import "./QuizPage.css"; // We will create this CSS file next

const QuizPage = () => {
  return (
    <div className="quiz-page-container">
      <nav className="quiz-page-nav">
        <Link to="/" className="back-link">
          &larr; Back to Home
        </Link>
      </nav>

      <main>
        <h1 className="quiz-page-title">Cybersecurity Quiz</h1>
        <div className="quiz-grid">
          {quizTopics.map((topic) => (
            <Link key={topic.id} to={`/quiz/${topic.id}`} className="quiz-card">
              <div className="quiz-card-icon">{topic.icon}</div>
              <h2 className="quiz-card-title">{topic.title}</h2>
              <p className="quiz-card-description">{topic.description}</p>
              <div className="quiz-card-details">
                <span>{topic.questions} Questions</span>
                <span>{topic.timePerQuestion}s per question</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default QuizPage;