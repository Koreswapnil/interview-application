import React from 'react';
import { Questions } from '../Question/Express';
import ChildComponent from '../components/ChildComponent';

const ExpressScreen = () => {
  return (
    <>
      {Questions.map((x) => (
        <div key={x.id}>
          <ChildComponent question={x} />
        </div>
      ))}
    </>
  );
};

export default ExpressScreen;
