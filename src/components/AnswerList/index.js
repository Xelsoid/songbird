import React from "react";

import "./index.scss";

const AnswerList = ({ currentRoundData, answerOnclickCallback, answerId, incorrectCheckedOptions, correctAnswer }) => {
  return (
    <ul className="answer-list rounded-lg">
      {currentRoundData.map(elem => {
        const isOptionClicked = incorrectCheckedOptions.includes(elem.id);
        const isAnswerCorrect = correctAnswer === elem.id;

        return (
          <li key={elem.id} className="answer-list--item">
            <span
              className={`${isAnswerCorrect
                    ? "success"
                    : isOptionClicked
                    ? "fail"
                    : ""
                } answer-list--label p-3 pl-5`}

              onClick={() => {answerOnclickCallback(elem.id, answerId)}}
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
