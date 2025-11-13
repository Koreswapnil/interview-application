import React from 'react';
import { Questions } from '../Question/JavaScript';
import ChildComponent from '../components/ChildComponent';

const JavascriptScreen = () => {
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

export default JavascriptScreen;
