import React from 'react';
import Logo from '@components/Logo';
import Score from '@components/Score';
import MainMenu from '@components/MainMenu';

// import 'index.scss';

const Header = () => (
  <header className="pt-2">
    <div className="d-flex justify-content-between align-items-center">
      <Logo/>
      <Score score="2"/>
    </div>
    <MainMenu/>
  </header>
);

export default Header;
