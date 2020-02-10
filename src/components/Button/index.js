import React from "react";

import "./index.scss";

const Button = ({ isRoundCompleted }) => (
  <button className="btn" disabled={!isRoundCompleted}>
    Next
  </button>
);

export default Button;
