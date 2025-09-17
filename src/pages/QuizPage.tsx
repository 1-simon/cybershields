// pages/QuizPage.tsx
import React, { useState, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface QuizPageProps {
  gameId: number;
  level: string;
  title: string;
  questions: Question[];
  onBack: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({
  gameId,
  level,
  title,
  questions,
  onBack,
}) => {
  const storageKey = `game-${gameId}-level-${level}`;

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [countdown, setCountdown] = useState(3);

  // Load saved state
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setAnswers(parsed.answers || {});
      }
    } catch (e) {
      console.error("Failed to load saved quiz", e);
    }
  }, [storageKey]);

  // Keep progress in sync with answers
  useEffect(() => {
    const answeredCount = Object.keys(answers).length;
    const newProgress = Math.round((answeredCount / questions.length) * 100);
    setProgress(newProgress);
  }, [answers, questions.length]);

  // Timer for each question
  useEffect(() => {
    if (currentQuestion >= questions.length || showResult) return;

    setTimeLeft(15);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAnswer(questions[currentQuestion].id, "Time Up");
          clearInterval(timer);

          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQ) => prevQ + 1);
          } else {
            handleFinish();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, showResult, questions]);

  const handleAnswer = (qId: number, option: string) => {
    if (answers[qId]) return; // already answered

    const updated = { ...answers, [qId]: option };
    setAnswers(updated);

    // auto move to next question after 3s
    setTimeout(() => {
      if (qId === questions[currentQuestion].id) {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          handleFinish(updated); // pass latest answers
        }
      }
    }, 3000);
  };

  const handleFinish = (finalAnswers: Record<number, string> = answers) => {
    // Compute correct progress fresh
    const answeredCount = Object.keys(finalAnswers).length;
    const finalProgress = Math.round((answeredCount / questions.length) * 100);

    localStorage.setItem(
      storageKey,
      JSON.stringify({ answers: finalAnswers, progress: finalProgress })
    );
    window.dispatchEvent(new Event("progressUpdated"));

    const correct = questions.reduce(
      (acc, q) => acc + (finalAnswers[q.id] === q.answer ? 1 : 0),
      0
    );

    setCorrectCount(correct);
    setShowResult(true);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          onBack();
        }
        return prev - 1;
      });
    }, 1000);
  };

  if (questions.length === 0) return <p>No questions available.</p>;

  const q = questions[currentQuestion];

  return (
    <div className="quiz-page-container">
      <button onClick={onBack} className="back-btn animated-btn">
        &larr; Back
      </button>

      <h1 className="quiz-title">
        {title} - {level}
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <p className="timer">Time Left: {timeLeft}s</p>

      {!showResult ? (
        <div className="quiz-question-container">
          <p className="quiz-question">{q.question}</p>
          <div className="quiz-options">
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt;
              const isCorrect = opt === q.answer;

              let btnClass = "option-btn";
              if (isSelected) {
                btnClass += isCorrect ? " correct-animate" : " wrong-animate";
              }
              if (!isSelected && isCorrect && answers[q.id]) {
                btnClass += " correct-animate";
              }

              return (
                <button
                  key={opt}
                  className={btnClass}
                  onClick={() => handleAnswer(q.id, opt)}
                  disabled={!!answers[q.id]}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="result-popup">
          <h2>🎉 Quiz Completed! 🎉</h2>
          <p>
            Correct Answers: {correctCount} / {questions.length}
          </p>
          <p>Progress: {progress}%</p>
          <p>Returning Home in {countdown}...</p>
        </div>
      )}

      <style>{`
        .animated-btn {
          background-color: #1e3a8a;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
        }
        .animated-btn:hover { transform: scale(1.05); background-color: #3b82f6; }
        .animated-btn:active { transform: scale(0.95); }

        .option-btn {
          margin: 5px;
          padding: 12px 18px;
          border-radius: 8px;
          border: 2px solid #1e3a8a;
          cursor: pointer;
          font-weight: bold;
          background-color: white;
          color: #1e3a8a;
          transition: transform 0.2s, color 0.2s, background-color 0.2s, box-shadow 0.3s;
        }

        .correct-animate {
          border-color: #16a34a;
          color: white;
          background-color: #16a34a;
          animation: pulse 0.6s ease-in-out;
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 #16a34a; }
          50% { transform: scale(1.1); box-shadow: 0 0 15px #16a34a; }
          100% { transform: scale(1); box-shadow: 0 0 0 #16a34a; }
        }

        .wrong-animate {
          border-color: #dc2626;
          color: white;
          background-color: #dc2626;
          animation: shake 0.6s ease;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }

        .progress-bar {
          width: 100%;
          background-color: #e5e7eb;
          height: 10px;
          border-radius: 5px;
          margin-bottom: 15px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background-color: #3b82f6;
          transition: width 0.3s;
        }
        .timer { font-weight: bold; margin-bottom: 15px; }

        .result-popup {
          position: fixed; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background-color: #1e40af; color: white; padding: 40px 60px; border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3); text-align: center; opacity: 0;
          animation: slideFadeIn 0.5s forwards; font-family: 'Arial', sans-serif;
        }
        @keyframes slideFadeIn {
          0% { transform: translate(-50%, -60%); opacity: 0; }
          100% { transform: translate(-50%, -50%); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default QuizPage;
