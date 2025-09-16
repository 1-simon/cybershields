import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import { games } from "./data/games";
import DragQuiz from "./pages/DragQuiz";
import QuizPage from "./pages/QuizPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Route for the Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <div className="container">
                {games.map((game) => (
                  <GameCard
                    key={game.id}
                    icon={game.icon}
                    title={game.title}
                    subtitle={game.subtitle}
                    tag={game.tag}
                    progress={game.progress}
                    tagClass={game.tagClass}
                    path={game.path}
                  />
                ))}
              </div>
            </>
          }
        />

        {/* Route for the Drag and Drop Quiz Page */}
        <Route path="/drag-quiz" element={<DragQuiz />} />

        {/* FIX: Moved this route inside the <Routes> block */}
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;