import React from 'react';
import RandomBird from '@components/QuestionBlock';
import AnswerChooser from "@components/AnswerChooser";
import AnswerResult from "@components/AnswerResult";
import Button from "@components/Button";

const Main = ({data}) => (
  <main className="py-2 mb-2">
    <RandomBird data={data}/>
    <div className="row mt-4">
      <div className="col-md-4">
        <AnswerChooser currentRoundData={data[0]}/>
      </div>
      <div className="col-md-8">
        <AnswerResult/>
      </div>
    </div>
    <div className="my-4">
      <Button/>
    </div>
  </main>
);

export default Main;
