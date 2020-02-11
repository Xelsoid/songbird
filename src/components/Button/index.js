import React from "react";

import "./index.scss";

const Button = ({ isRoundCompleted, buttonOnClickCallback }) => (
  <button className="btn" disabled={!isRoundCompleted} onClick={buttonOnClickCallback}>
    Next
  </button>
);

export default Button;
