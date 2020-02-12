import React from "react";
import QuestionBlock from "@components/QuestionBlock";
import AnswerList from "@components/AnswerList";
import Button from "@components/Button";
import VictoryBlock from "@components/VictoryBlock";

class Main extends React.Component {
  render() {
    const {answerId, roundData, isRoundCompleted, answerOnclickCallback, resetTheRound, answerOptionChosen, isGameFinished, score, resetTheStateCallback} = this.props;
    return (
      <main className="py-2 mb-2">
        {!isGameFinished ?
          <>
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
                  answerOnclickCallback={answerOnclickCallback}
                />
              </div>
              <div className="col-md-8">
                {answerOptionChosen !== null ? (
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
                    <br/>
                    Выберите птицу из списка
                  </div>
                )}
              </div>
            </div>
            <div className="my-4">
              <Button
                disabled={!isRoundCompleted}
                buttonOnClickCallback={resetTheRound}
              />
            </div>
          </> :
          <>
            <VictoryBlock score={score} resetTheStateCallback={resetTheStateCallback}/>
          </>
        }
      </main>
    );
  }
}

export default Main;
