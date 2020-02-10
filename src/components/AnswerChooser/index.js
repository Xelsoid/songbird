import React from 'react';

import './index.scss';

const AnswerChooser = ({currentRoundData}) => (
  <ul className="birds-chooser rounded-lg">
    {currentRoundData.map(elem => (
      <li key={elem.id} className="birds-chooser--item">
        <label  className="birds-chooser--label p-3 pl-5">
          <input className="d-none" type="checkbox"/> {elem.name}
        </label>
      </li>
      )
    )}
  </ul>
);

export default AnswerChooser;
