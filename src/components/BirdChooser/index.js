import React from 'react';

import './index.scss';

const BirdsChooser = () => (
  <ul className="birds-chooser rounded-lg">
    <li className="birds-chooser--item">
      <label  className="birds-chooser--label p-3 pl-5">
        <input className="d-none" type="checkbox"/> Синица
      </label>
    </li>
  </ul>
);

export default BirdsChooser;
