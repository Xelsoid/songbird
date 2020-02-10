import React from "react";
import LogoImg from "@images/logo.svg";

import "./index.scss";

const Logo = () => (
  <div className="logo" id="toTop">
    <h1 className="logo--title">Birds quiz application</h1>
    <a href="#toTop" alt="Birds quiz" title="Birds quiz">
      <img
        className="logo--image"
        src={LogoImg}
        alt="Birds quiz"
        title="Birds quiz"
      />
    </a>
  </div>
);

export default Logo;
