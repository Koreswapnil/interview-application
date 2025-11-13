import './Summary.css';

const Summary = ({ questions, userAnswer, correctAnswer, handleNewTest }) => {
  const scoreArray = [];

  for (let i = 0; i < correctAnswer.length; i++) {
    if (correctAnswer[i] == userAnswer[i]) {
      scoreArray.push(correctAnswer[i]);
    }
  }

  return (
    <>
      <button onClick={handleNewTest} className="newTestBtn">
        New Test
      </button>
      <div id="summary">
        <h1>Your Score: {scoreArray.length}</h1>
      </div>
      {questions.map((que) => (
        <div className="summary" key={que.id}>
          <h2>
            {que.id}. {que.text}
          </h2>
          <div className="answers">
            <p className="correctAns">Correct Answer: {que.answers[0]}</p>
            <p
              className={
                userAnswer[que.id - 1] == que.answers[0]
                  ? 'correctAns'
                  : 'wrongAns'
              }
            >
              Your Answer: {userAnswer[que.id - 1]}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Summary;
