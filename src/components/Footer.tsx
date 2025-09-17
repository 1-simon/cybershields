import React from "react";
import QHLogo from "../assets/QH.jpeg"; // Quick Heal logo
import CLLogo from "../assets/CL.jpeg"; // College logo

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#0a0f1c",
        color: "white",
      }}
    >
      {/* Chatbot iframe */}
      <iframe
        src="https://bots.easy-peasy.ai/bot/31aa19ea-49f8-4af7-9887-deb1fada548b?mode=iframe"
        width="350"
        height="450"
        style={{
          border: "none",
          borderRadius: "10px",
          maxWidth: "90%",
        }}
        title="Quick Heal Cyber Warrior Chatbot"
      />

      {/* Divider */}
      <hr
        style={{
          margin: "20px auto",
          border: "0",
          borderTop: "1px solid #444",
          width: "80%",
        }}
      />

      {/* Footer Content with logos near text */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Logo (College) */}
        <img
          src={CLLogo}
          alt="College Logo"
          style={{
            height: "60px",
            width: "auto",
            objectFit: "contain",
          }}
        />

        {/* Center Text */}
        <div
          className="footer-text"
          style={{
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          This website is created by{" "}
          <b style={{ color: "lightgreen" }}>Sumit Sapkal</b> and his team,{" "}
          <b style={{ color: "orange" }}>Cyber Warriors</b> of the{" "}
          <b style={{ color: "lightblue" }}>Quick Heal Cyber Warrior Club</b>.
          <br />
          <b style={{ color: "#ffcc00" }}>Shankarlal Khandelwal College, Akola</b>
        </div>

        {/* Right Logo (Quick Heal) */}
        <img
          src={QHLogo}
          alt="Quick Heal Foundation Logo"
          style={{
            height: "50px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
