import React from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import data from "@data/data";

import "./index.scss";

const getRandomValue = (maxValue) => {
  const rand = Math.random() * (maxValue - 1);
  return Math.round(rand);
};

const initialState = {
  data,
  score: 0,
  roundId: 0,
  roundsAmount: data.length - 1,
  isRoundCompleted: false,
  incorrectCheckedOptions: [],
  answerOptionChosen: null,
  isGameFinished: false,
  correctAnswer: null,
};

class Application extends React.Component {
  state = initialState;

  answerOnclickCallback = (id, answerId) => {
    const {incorrectCheckedOptions, isRoundCompleted} = this.state;
    const isAnswerCorrect = id === answerId;

    this.setState({answerOptionChosen: id});

    isAnswerCorrect && !isRoundCompleted ?
      this.setState({isRoundCompleted: true, correctAnswer: id}) :
      null;

    !isAnswerCorrect && !isRoundCompleted && !incorrectCheckedOptions.includes(id) ?
      this.setState({incorrectCheckedOptions: [...incorrectCheckedOptions, id]}) :
      null;
  };

  fire = (e) => {
    this.setState({roundId: 1, isRoundCompleted: true})
  };

  resetTheState = () => {
    this.setState(initialState);
  };

  resetTheRound = () => {
    const { roundId, roundsAmount, incorrectCheckedOptions, score, data } = this.state;
    if(roundId < roundsAmount ) {
      this.setState({
        isRoundCompleted: false,
        roundId: roundId + 1,
        incorrectCheckedOptions: [],
        correctAnswer: null
      })
    }
    if(roundId){
      this.setState({score: score + data[roundId].roundData.length - incorrectCheckedOptions.length,})
    }
    if(roundId === roundsAmount){
      this.setState({isGameFinished: true})
    }
  };

  render() {
    const { score, data, roundId, isRoundCompleted, answerOptionChosen, isGameFinished, incorrectCheckedOptions, correctAnswer } = this.state;
    return (
      <div className="main-wrapper container">
        <button onClick={this.fire}>fire</button>
        <Header score={score} data={data} roundId={roundId} />
        <Main
          roundData={data[roundId].roundData}
          roundScore={data[roundId].roundData.length}
          answerOptionChosen={answerOptionChosen}
          answerId={3}
          isRoundCompleted={isRoundCompleted}
          answerOnclickCallback={this.answerOnclickCallback}
          resetTheRound={this.resetTheRound}
          isGameFinished={isGameFinished}
          score={score}
          resetTheStateCallback={this.resetTheState}
          incorrectCheckedOptions={incorrectCheckedOptions}
          correctAnswer={correctAnswer}
        />
      </div>
    );
  }
}
export default Application;
