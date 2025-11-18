import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useLogoutMutation } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetUserAnswersQuery } from '../redux/slices/answerSlice';

const SavedAnswersTable = () => {
  // hooks first
  const { data: savedAnswers, isLoading, isError } = useGetUserAnswersQuery();
  const [expandedId, setExpandedId] = useState(null);
  const [islogout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await islogout();
    dispatch(logout());
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-gray-400">Loading saved answers...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <button
          className="bg-red-800 text-white rounded px-4 py-1 mx-10"
          onClick={handleLogout}
        >
          Logout
        </button>
        <p className="text-red-400">Failed to load saved answers.</p>
      </div>
    );
  }

  if (!savedAnswers || savedAnswers.length === 0) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <button
          className="bg-red-800 text-white rounded px-4 py-1 mx-10"
          onClick={handleLogout}
        >
          Logout
        </button>
        <p className="text-gray-400">No saved attempts found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <button
        className="bg-red-800 text-white rounded px-4 py-1 mx-10"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 border-b border-gray-200">Test</th>
                <th className="px-4 py-3 border-b border-gray-200">Score</th>
                <th className="px-4 py-3 border-b border-gray-200">Answers</th>
                <th className="px-4 py-3 border-b border-gray-200">Date</th>
                <th className="px-4 py-3 border-b border-gray-200">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {savedAnswers.map((row) => (
                <tr key={row._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-gray-100 font-medium">
                    Test-{row.test}
                  </td>

                  <td className="px-4 py-3 border-b border-gray-100">
                    {typeof row.score === 'number' ? row.score : '—'}
                  </td>

                  <td className="px-4 py-3 border-b border-gray-100">
                    {Array.isArray(row.answers) ? row.answers.length : 0}
                  </td>

                  <td className="px-4 py-3 border-b border-gray-100 text-gray-600">
                    {new Date(row.createdAt).toLocaleString()}
                  </td>

                  <td className="px-4 py-3 border-b border-gray-100">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === row._id ? null : row._id)
                      }
                      className="text-sm px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      {expandedId === row._id ? 'Hide Answers' : 'View Answers'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expanded answers area */}
        <div className="px-4 py-4">
          {savedAnswers.map((row) => {
            if (expandedId !== row._id) return null;
            return (
              <div
                key={`${row._id}-answers`}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Test-{row.test} — Answers (Score:{' '}
                  {typeof row.score === 'number' ? row.score : '—'})
                </h3>

                <ol className="list-decimal list-inside space-y-2">
                  {Array.isArray(row.answers) && row.answers.length > 0 ? (
                    row.answers.map((ans, i) => (
                      <li
                        key={i}
                        className="px-3 py-2 bg-white rounded shadow-sm border border-gray-100"
                      >
                        <span className="font-medium mr-2">Q{i + 1}:</span>
                        <span className="text-gray-800">
                          {ans === null ? <em>Skipped</em> : String(ans)}
                        </span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">No answers recorded.</p>
                  )}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SavedAnswersTable;
