import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <img src="logo1.png" alt="College Logo" />
        <img src="logo2.png" alt="Club Logo" />
      </div>
      <div className="footer-text">
        This website is created by <b style={{ color: "lightgreen" }}>Aditya Mishra</b>, 
        Activity Director of <b style={{ color: "orange" }}>Quick Heal Cyber Warrior Club</b>, 
        Priyadarshini College of Engineering.
      </div>
    </footer>
  );
};

export default Footer;
