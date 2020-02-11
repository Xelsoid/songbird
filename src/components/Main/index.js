import React from "react";
import QuestionBlock from "@components/QuestionBlock";
import AnswerList from "@components/AnswerList";
import Button from "@components/Button";



class Main extends React.Component {
  state = {
    roundScore: this.props.roundScore,
    isRoundCompleted: this.props.isRoundCompleted,
    answerOptionChosen: "",
  };

  checkTheAnswer = (e, state) => {
    const { answerId } = this.props;
    const currentValue = e.target.value - 1;
    const isAnswerCorrect = currentValue === answerId;

    this.setState({ answerOptionChosen: currentValue });

    if (isAnswerCorrect) {
      this.setState({
        isRoundCompleted: true
      })
    }

    this.countScore(state, isAnswerCorrect);
  };

  countScore(state, isAnswerCorrect) {
    if(!state && !isAnswerCorrect && !this.state.isRoundCompleted) {
      this.setState({
        roundScore: this.state.roundScore - 1
      });
    }
  }

  finishTheRound = () => {
    const {collectAndSetRoundData} = this.props;
    const {roundScore} = this.state;
    collectAndSetRoundData(roundScore);
  };

  render() {
    const {answerOptionChosen, isRoundCompleted} = this.state;
    const {answerId, roundData } = this.props;
    return (
      <main className="py-2 mb-2">
        <QuestionBlock
          audio={roundData[answerId].audio}
          image={isRoundCompleted ? roundData[answerId].image : ''}
          name={isRoundCompleted ? roundData[answerId].name : ''}
          autoPlayAfterSrcChange={false}
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
                autoPlayAfterSrcChange={false}
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
          <Button
            isRoundCompleted={isRoundCompleted}
            buttonOnClickCallback={this.finishTheRound}
          />
        </div>
      </main>
    );
  }
}

export default Main;
