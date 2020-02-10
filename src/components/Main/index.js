import React from "react";
import QuestionBlock from "@components/QuestionBlock";
import AnswerList from "@components/AnswerList";
import Button from "@components/Button";

const getRandomValue = maxValue => {
  const rand = Math.random() * (maxValue - 1);
  return Math.round(rand);
};

class Main extends React.Component {
  state = {
    roundData: this.props.roundData,
    answerId: getRandomValue(this.props.roundData.length),
    isRoundCompleted: false,
    roundScore: 6,
    answerOptionChosen: "",
  };


  checkTheAnswer = (e, state) => {
    const { answerId } = this.state;
    const currentValue = e.target.value - 1;
    const isAnswerCorrect = currentValue === answerId;

    this.setState({ answerOptionChosen: currentValue });

    if (isAnswerCorrect) {
      this.setState({ isRoundCompleted: true });
    }

    // this.setAnswerParams(currentValue);
    this.countScore(state, isAnswerCorrect);
  };

  countScore(state, isAnswerCorrect) {
    if(!state && !isAnswerCorrect && !this.state.isRoundCompleted) {
      this.setState({
        roundScore: this.state.roundScore - 1
      });
    }
  }

  render() {
    const {roundData, answerId, isRoundCompleted, answerOptionChosen} = this.state;
    return (
      <main className="py-2 mb-2">
        <QuestionBlock
          audio={roundData[answerId].audio}
          image={isRoundCompleted ? roundData[answerId].image : ''}
          name={isRoundCompleted ? roundData[answerId].name : ''}
          autoPlay={false}
        />
        <div className="row mt-4">
          <div className="col-md-4">
            <AnswerList
              currentRoundData={roundData}
              answerId={answerId}
              onclickCallback={this.checkTheAnswer}
            />
            {this.state.roundScore}
          </div>
          <div className="col-md-8">
            {answerOptionChosen !== "" ? (
              <QuestionBlock
                image={roundData[answerOptionChosen].image}
                audio={roundData[answerOptionChosen].audio}
                name={roundData[answerOptionChosen].name}
                species={roundData[answerOptionChosen].species}
                description={roundData[answerOptionChosen].description}
                autoPlay={false}
              />
            ) : (
              <div className="question-container p-3 rounded-lg">
                Послушайте плеер.
                <br />
                Выберите птицу из списка
              </div>
            )}
          </div>
        </div>
        <div className="my-4">
          <Button isRoundCompleted={isRoundCompleted} />
        </div>
      </main>
    );
  }
}

export default Main;
