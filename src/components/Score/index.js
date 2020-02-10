import React from "react";
import propTypes from "prop-types";

const Score = ({ score }) => <div className="score h5">Score: {score}</div>;

Score.propTypes = {
  score: propTypes.number
};

export default Score;
