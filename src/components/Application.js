import React from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import data from '@data/data'

import './index.scss';

const Application = () => (
  <div className="main-wrapper container">
    <Header />
    <Main data={data}/>
  </div>
);

export default Application;
