import React from 'react';
import AudioPlayer from '@components/AudioPlayer';

import './index.scss';

const RandomBird = () => (
  <div className="bird-container p-4 rounded-lg">
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <img className="rounded-lg mb-4 mb-md-0 bird-container--image" src="https://via.placeholder.com/200x150" />
      <div className="w-100 px-4 py-2">
        <p className="h3 border-bottom text-center text-md-left">******</p>
        <p className="h3 border-bottom text-center text-md-left">******</p>
        <AudioPlayer />
      </div>
    </div>
    <p className="w-100 px-4 py-2">
    "Bird description"
    </p>
  </div>
);

export default RandomBird;
