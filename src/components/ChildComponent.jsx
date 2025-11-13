import './Child.css';

const ChildComponent = ({ question }) => {
  return (
    <div key={question.id} className="child">
      <h3>
        {question.id}. {question.Q}
      </h3>
      <p>{question.A}</p>
    </div>
  );
};

export default ChildComponent;
