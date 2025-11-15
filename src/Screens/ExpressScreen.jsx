import { Questions } from '../Question/Express';
import ChildComponent from '../components/ChildComponent';

const ExpressScreen = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-2">
      <div className="max-w-3xl mx-auto space-y-2">
        {Questions.map((x) => (
          <div
            key={x.id}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-3 border border-gray-700"
          >
            <ChildComponent question={x} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpressScreen;
