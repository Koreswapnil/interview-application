import React from 'react';
import { Questions } from '../Question/React';
import ChildComponent from '../components/ChildComponent';

const ReactScreen = () => {
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

export default ReactScreen;
