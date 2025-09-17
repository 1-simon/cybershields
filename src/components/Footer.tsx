import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div>
        <img src="logo1.png" alt="College Logo" />
        <img src="logo2.png" alt="Club Logo" />
      </div>
      <div className="footer-text">
        This website is created by <b style={{ color: "lightgreen" }}>Aditya Mishra</b>, 
        Activity Director of <b style={{ color: "orange" }}>Quick Heal Cyber Warrior Club</b>, 
        Priyadarshini College of Engineering.
      </div>

      <iframe 
    src="https://bots.easy-peasy.ai/bot/31aa19ea-49f8-4af7-9887-deb1fada548b?mode=iframe" 
    width="400" 
    height="500">
  </iframe>
    </footer>
  );
};

export default Footer;
