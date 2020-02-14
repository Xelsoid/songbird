import React from "react";

import "./index.scss";

const Button = ({ disabled, buttonOnClickCallback }) => (
  <button className="btn" disabled={disabled} onClick={buttonOnClickCallback}>
    Next
  </button>
);

export default Button;
