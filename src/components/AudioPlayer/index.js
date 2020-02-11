import React from "react";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import "./index.scss";

const AudioPlayer = ({ audio, autoPlayAfterSrcChange }) => (
  <Player
    autoPlay={false}
    autoPlayAfterSrcChange={autoPlayAfterSrcChange}
    src={
      audio ||
      "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    }
    onPlay={e => console.log("onPlay")}
    showLoopControl={false}
    showJumpControls={false}
    controls={false}
  />
);

export default AudioPlayer;
