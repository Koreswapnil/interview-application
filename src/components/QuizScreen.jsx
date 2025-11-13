import { useState } from 'react';
import './QuizScreen.css';
import { quiz } from '../Question/Quiz';
import Summary from './Summary';

const QuizScreen = () => {
  const [test, setTest] = useState(1);
  const questions = quiz[test - 1];
  const correctAnswer = [];
  for (let i = 0; i < questions.length; i++) {
    correctAnswer.push(questions[i].answers[0]);
  }
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === questions.length;
  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswer((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  const newTestHandler = () => {
    setTest(test + 1);
    setUserAnswer([]);
  };

  if (quizIsComplete) {
    return (
      <>
        <div id="quizComplete">
          <h1>Quiz Completed!</h1>
          <Summary
            questions={questions}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
            handleNewTest={newTestHandler}
          />
        </div>
      </>
    );
  }
  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="header">
        <h1>JavaScript Quiz</h1>
        <h2>Select Test: </h2>
        <select defaultValue={test} onChange={(e) => setTest(e.target.value)}>
          <option value={1}>Test-1</option>
          <option value={2}>Test-2</option>
          <option value={3}>Test-3</option>
        </select>
      </div>

      <div id="question">
        <h2>
          {questions[activeQuestionIndex].id} .{' '}
          {questions[activeQuestionIndex].text}
        </h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li
              key={answer}
              className="answer"
              style={{ backgroundColor: '#000', fontSize: '25px' }}
            >
              <button
                style={{ fontSize: '20px' }}
                onClick={() => handleSelectAnswer(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
        <button className="skipBtn" onClick={() => handleSelectAnswer(null)}>
          Skip Question
        </button>
      </div>
    </>
  );
};

export default QuizScreen;
