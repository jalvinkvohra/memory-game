import React from "react";
import { useSelector } from "react-redux";

const Score = () => {
  const { score } = useSelector((state) => state);
  return (
    <div className="score">
      Score : <span>{score}</span>
    </div>
  );
};

export default Score;
