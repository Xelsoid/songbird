import React from "react";
import Logo from "@components/Logo";
import Score from "@components/Score";
import Round from "@components/Round";

// import 'index.scss';

const Header = ({ score, data, roundId }) => (
  <header className="py-2 mb-2">
    <div className="d-flex justify-content-between align-items-center">
      <Logo />
      <Score score={score} />
    </div>
    <Round data={data} roundId={roundId} />
  </header>
);

export default Header;
