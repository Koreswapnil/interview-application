import { useState } from 'react';
import { quiz } from '../Question/Quiz';
import Summary from './Summary';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const QuizScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [test, setTest] = useState(1);

  const questions = quiz[test - 1];

  const correctAnswer = questions.map((q) => q.answers[0]);

  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswer((prev) => [...prev, selectedAnswer]);
  };

  const newTestHandler = () => {
    setTest(test + 1);
    setUserAnswer([]);
  };

  if (quizIsComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Quiz Completed!
          </h1>

          <Summary
            questions={questions}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
            handleNewTest={newTestHandler}
          />
        </div>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      {userInfo ? (
        <div className="min-h-screen bg-gray-800 p-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
              JavaScript Quiz
            </h1>

            <div className="flex items-center justify-center space-x-4">
              <h2 className="text-lg font-semibold text-gray-100">
                Select Test:
              </h2>
              <select
                defaultValue={test}
                onChange={(e) => setTest(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-blue-400 focus:ring"
              >
                <option value={1}>Test-1</option>
                <option value={2}>Test-2</option>
                <option value={3}>Test-3</option>
              </select>
            </div>
          </div>

          {/* Question Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {questions[activeQuestionIndex].id}.{' '}
              {questions[activeQuestionIndex].text}
            </h2>

            <ul className="space-y-4">
              {shuffledAnswers.map((answer) => (
                <li
                  key={answer}
                  className="bg-black text-white rounded-lg p-4 text-xl hover:bg-gray-800 transition"
                >
                  <button
                    className="text-lg w-full text-left"
                    onClick={() => handleSelectAnswer(answer)}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="mt-6 w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              onClick={() => handleSelectAnswer(null)}
            >
              Skip Question
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
          <div className="bg-gray-800 text-center">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              For solving the quiz, you have to log in first.
            </h2>

            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
                Click for Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizScreen;
