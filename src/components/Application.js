import React from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import data from "@data/data";

import "./index.scss";

class Application extends React.Component {
  state = {
    data,
    score: 0,
    roundId: 0
  };

  // press = () => {
  //   const className = (this.state.class==="off")?"on":"off";
  //   const label = (this.state.label === 'Нажми')?'нажми еще раз?':'Нажми';
  //   this.setState({class: className, label});
  // };

  render() {
    const { score, data, roundId } = this.state;
    return (
      <div className="main-wrapper container">
        <Header score={score} data={data} roundId={roundId} />
        <Main roundData={data[roundId].roundData} />
      </div>
    );
  }
}
export default Application;
