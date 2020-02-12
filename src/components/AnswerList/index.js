import React from "react";

import "./index.scss";

const AnswerList = ({ currentRoundData, answerOnclickCallback, answerId }) => {
  return (
    <ul className="answer-list rounded-lg">
      {currentRoundData.map(elem => {
        const isOptionClicked = true;
        const isAnswerCorrect = answerId === elem.id;
        return (
          <li key={elem.id} className="answer-list--item">
            <span
              className={`${isAnswerCorrect && isOptionClicked
                    ? "success"
                    : isOptionClicked
                    ? "fail"
                    : ""
                } answer-list--label p-3 pl-5`}

              onClick={() => {answerOnclickCallback(elem.id, isAnswerCorrect)}}
            >
              {elem.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default AnswerList;
