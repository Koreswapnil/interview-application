const ChildComponent = ({ question }) => {
  return (
    <div className="rounded-lg shadow-sm bg-dark">
      <h3 className="text-xl font-semibold bg-red-600 text-white p-1 rounded">
        {question.id}. {question.Q}
      </h3>

      <p className="text-white leading-relaxed">{question.A}</p>
    </div>
  );
};

export default ChildComponent;
