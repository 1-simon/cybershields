import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="stats">
      <div className="stat green">
        <h2>0</h2>
        <p>Games Completed</p>
      </div>
      <div className="stat blue">
        <h2>20</h2>
        <p>Total Games</p>
      </div>
      <div className="stat yellow">
        <h2>100</h2>
        <p>Quiz Questions</p>
      </div>
    </div>
  );
};

export default Stats;
