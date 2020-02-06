import React from 'react';
import Header from '@components/Header';
import Main from '@components/Main';

import './index.scss';

const Application = () => (
  <div className="main-wrapper container">
    <Header />
    <Main />
  </div>
);

export default Application;
