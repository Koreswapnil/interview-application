import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useLogoutMutation } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [islogout] = useLogoutMutation();

  const handleLogout = async () => {
    await islogout();
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <button
        className="bg-red-800 text-white rounded px-4 py-1 mx-10"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Profile</h2>

        <h4 className="text-lg text-gray-700">
          <span className="font-semibold">Name:</span> {userInfo.name}
        </h4>

        <h4 className="text-lg text-gray-700 mb-6">
          <span className="font-semibold">Email:</span> {userInfo.email}
        </h4>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-400 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Test
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Marks
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">TEST-1</td>
                <td className="border border-gray-400 px-4 py-2">8</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border border-gray-400 px-4 py-2">TEST-2</td>
                <td className="border border-gray-400 px-4 py-2">8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
