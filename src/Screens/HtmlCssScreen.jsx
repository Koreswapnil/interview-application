import React from 'react';
import { Questions } from '../Question/Html';
import ChildComponent from '../components/ChildComponent';

const HtmlCssScreen = () => {
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

export default HtmlCssScreen;
