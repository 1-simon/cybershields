import React from "react";
import { NavLink } from "react-router-dom"; 

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">CYBER<span>SHIELDS</span></div>
      <ul>
        
        <NavLink to="/">
          <li>🛡 Games</li>
        </NavLink>
        <NavLink to="/quiz">
          <li>🧠 Quiz</li>
        </NavLink>
        
        <li>🏆 0/20</li>
        <li>⭐ 0%</li>
      </ul>
    </nav>
  );
};

export default Navbar;