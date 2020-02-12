import React from "react";
import propTypes from "prop-types";
import "./index.scss";
import FinishImg from "@images/finishImg.jpg";
import Button from "@components/Button";

const VictoryBlock = ({ score, resetTheStateCallback }) => (
  <div className="py-4">
    <h3 className="h3 text-center"> Поздравляем, ваш счет: {score}</h3>
    <img src={FinishImg} className="w-100 my-4"/>
    <Button buttonOnClickCallback={resetTheStateCallback}/>
  </div>
);

export default VictoryBlock;
