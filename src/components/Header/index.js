import React from 'react';
import Logo from '@components/Logo';
import Score from '@components/Score';
import Round from '@components/Round';

// import 'index.scss';

const Header = () => (
  <header className="py-2 mb-2">
    <div className="d-flex justify-content-between align-items-center">
      <Logo />
      <Score score="2" />
    </div>
    <Round />
  </header>
);

export default Header;
