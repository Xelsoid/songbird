import React from 'react';
import Player from "react-h5-audio-player";
import 'react-h5-audio-player/src/styles.scss';

import './index.scss';

const AudioPlayer = () => (
  <Player
    autoPlay
    src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
    showLoopControl={false}
    showJumpControls={false}
    controls={false}
  />
);

export default AudioPlayer;
