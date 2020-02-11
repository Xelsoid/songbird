import React from "react";
import AudioPlayer from "@components/AudioPlayer";
import Bird from "@images/randombird.jpg";
import propTypes from "prop-types";

import "./index.scss";

const QuestionBlock = ({
  image,
  audio,
  name,
  species,
  description,
  autoPlayAfterSrcChange
}) => (
  <div className="question-container p-4 rounded-lg">
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <img
        className="rounded-lg mb-4 mb-md-0 question-container--image"
        src={image || Bird}
      />
      <div className="w-100 px-4 py-2">
        <p className="h3 border-bottom text-center text-md-left">
          {name || "******"}
        </p>
        {species ? (
          <p className="h3 border-bottom text-center text-md-left">{species}</p>
        ) : null}
        <AudioPlayer audio={audio} autoPlayAfterSrcChange={autoPlayAfterSrcChange} />
      </div>
    </div>
    {description ? <p className="w-100 px-4 py-2">{description}</p> : null}
  </div>
);

QuestionBlock.propTypes = {
  image: propTypes.string,
  audio: propTypes.string,
  name: propTypes.string,
  species: propTypes.string,
  description: propTypes.string
};

export default QuestionBlock;
