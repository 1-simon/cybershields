import React from "react";
import "./Chatbot.css";

const Chatbot: React.FC = () => {
  return (
    <div className="chatbot">
      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-user">
          <img
            src="https://via.placeholder.com/50"
            alt="CyberGuru"
            className="chatbot-avatar"
          />
          <div>
            <h2 className="chatbot-title">CyberGuru</h2>
            <p className="chatbot-subtitle">
              Your friendly cybersecurity teacher bot
            </p>
          </div>
        </div>
        <div className="chatbot-actions">
          <button>⟳</button>
          <button>✕</button>
        </div>
      </div>

      {/* Messages */}
      <div className="chatbot-messages">
        <h3>5. Download Apps from Trusted Sources:</h3>
        <p>
          <b>Why:</b> Apps from unofficial sources may contain malware or
          malicious code.
        </p>
        <p>
          <b>Tip:</b> Stick to official app stores like Google Play or Apple
          App Store.
        </p>
        <br />
        <h3>6. Review App Permissions:</h3>
        <p>
          <b>Why:</b> Some apps request access to more data than necessary.
        </p>
      </div>

      {/* Input */}
      <div className="chatbot-input">
        <input type="text" placeholder="Type your message..." />
        <button>➤</button>
      </div>

      <p className="chatbot-footer">powered by Easy-Peasy.AI</p>
    </div>
  );
};

export default Chatbot;  // ✅ Make sure this is at the bottom
