import React from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import data from "@data/data";

import "./index.scss";

class Application extends React.Component {
  state = {
    data,
    score: 0,
    roundId: 0,
    roundsAmount: data.length - 1,
  };

  collectAndSetRoundData = (roundScore) => {
    const {score, roundId, roundsAmount} = this.state;
    if(roundId <= roundsAmount) {
      this.setState({
        roundId: roundId + 1
      });
    }
    this.setState({
      score: score + roundScore
    });
  };

  render() {
    const { score, data, roundId } = this.state;
    return (
      <div className="main-wrapper container">
        <Header score={score} data={data} roundId={roundId} />
        <Main
          roundData={data[roundId].roundData}
          roundScore={data[roundId].roundData.length}
          collectAndSetRoundData={this.collectAndSetRoundData}
        />
      </div>
    );
  }
}
export default Application;
