import React from 'react';
import AudioPlayer from '@components/AudioPlayer';

import './index.scss';

const RandomBird = () => (
  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start random-bird p-4 rounded-lg">
    <img className="rounded-lg mb-4 random-bird--image" src="https://via.placeholder.com/200x150" />
    <div className="w-100 px-4 py-2">
      <p className="h3 border-bottom text-center text-md-left">******</p>
      <AudioPlayer />
    </div>
  </div>
);

export default RandomBird;
