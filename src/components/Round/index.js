import React from "react";
import propTypes from "prop-types";
import "./index.scss";

const Round = ({ data, roundId }) => (
  <ul className="rounds rounded-lg d-flex flex-column flex-md-row flex-md-wrap">
    {data.map(round => (
      <li
        key={round.round}
        className={`${
          roundId === round.round ? "rounds--item__active" : ""
        } p-2 p-md-3 text-center flex-grow-1`}
      >
        {round.roundTitle}
      </li>
    ))}
  </ul>
);

Round.propTypes = {
  activeRound: propTypes.number,
  data: propTypes.array
};

export default Round;
