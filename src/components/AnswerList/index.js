import React from "react";

import "./index.scss";

const AnswerList = ({ currentRoundData, onclickCallback }) => {
  // const checkCheckedState = (e) => {
  //   console.log(e.target.checked);
  //   onclickCallback(e, e.target.checked);
  // };

  return (
    <ul className="answer-list rounded-lg">
      {currentRoundData.map(elem => (
        <li key={elem.id} className="answer-list--item">
          {/*<label className="answer-list--label p-3 pl-5">*/}
          {/*  <input*/}
          {/*    className="d-none"*/}
          {/*    type="checkbox"*/}
          {/*    value={elem.id}*/}
          {/*    onChange={checkCheckedState}*/}
          {/*    // checked={}*/}
          {/*  /> {elem.name}*/}
          {/*</label>*/}
          <AnswerLabel
            value={elem.id}
            name={elem.name}
            onclickCallback={onclickCallback}
          />
        </li>
      ))}
    </ul>
  );
};

class AnswerLabel extends React.Component {
  state = {
    isCheckedBefore: false,
    onChangeCallback: this.props.onclickCallback
  };

  handleOnCheck = e => {
    const { isCheckedBefore, onChangeCallback } = this.state;
    if (!isCheckedBefore) {
      this.setState({ isCheckedBefore: true });
    }
    onChangeCallback(e, isCheckedBefore);
  };

  render() {
    const { isCheckedBefore } = this.state;
    const { value, name } = this.props;
    return (
      <label className="answer-list--label p-3 pl-5">
        <input
          className="d-none"
          defaultChecked={isCheckedBefore}
          type="checkbox"
          value={value}
          onChange={this.handleOnCheck}
        />
        {name}
      </label>
    );
  }
}

export default AnswerList;
