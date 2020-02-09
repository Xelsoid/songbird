import React from 'react';
import RandomBird from '@components/Bird';
import BirdsChooser from "@components/BirdChooser";
import BirdChoosen from "@components/BirdResult";
import Button from "@components/Button";

const Main = (data) => (
  <main className="py-2 mb-2">
    <RandomBird data={data}/>
    <div className="row mt-4">
      <div className="col-md-4">
        <BirdsChooser/>
      </div>
      <div className="col-md-8">
        <BirdChoosen/>
      </div>
    </div>
    <div className="my-4">
      <Button/>
    </div>
  </main>
);

export default Main;
