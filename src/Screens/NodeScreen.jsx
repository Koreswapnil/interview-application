import React from 'react';
import { Questions } from '../Question/Node';
import ChildComponent from '../components/ChildComponent';

const NodeScreen = () => {
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

export default NodeScreen;
