import React from 'react';
import { Questions } from '../Question/JavaScript';
import ChildComponent from '../components/ChildComponent';

const JavascriptScreen = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {Questions.map((x) => (
          <div
            key={x.id}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-6 border border-gray-700"
          >
            <ChildComponent question={x} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JavascriptScreen;
