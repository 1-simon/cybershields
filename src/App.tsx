import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import { games } from "./data/games";
import Gamepage from "./pages/Gamepage";

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [progressMap, setProgressMap] = useState<Record<number, number>>({});

  const handleBack = () => setSelectedGame(null);

  const selectedData = games.find((g) => g.id === selectedGame);

  // Load progress for all games on mount
  useEffect(() => {
    const progressData: Record<number, number> = {};
    games.forEach((game) => {
      const saved = localStorage.getItem(`game-progress-${game.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        progressData[game.id] = parsed.progress || 0;
      } else {
        progressData[game.id] = 0;
      }
    });
    setProgressMap(progressData);
  }, []);

  // Scroll to footer function
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar />

      {selectedData ? (
        <Gamepage
          gameId={selectedData.id}
          title={selectedData.title}
          onBack={handleBack}
          levels={selectedData.levels}
        />
      ) : (
        <>
          <Hero />
          
          <div className="container">
            {games.map((game) => (
              <GameCard
                id={game.id}
                key={game.id}
                levels={game.levels}
                icon={game.icon}
                title={game.title}
                subtitle={game.subtitle}
                tag={game.tag}
                progress={progressMap[game.id] || 0} // ✅ show saved progress
                tagClass={game.tagClass}
                onPlay={() => setSelectedGame(game.id)}
              />
            ))}
          </div>
        </>
      )}

      {/* Floating Chatbot Icon */}
      <button
        className="chatbot-btn"
        onClick={scrollToFooter}
        aria-label="Open Chatbot"
      >
        💬
      </button>

      <Footer />
    </div>
  );
};

export default App;
