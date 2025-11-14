// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLoginMutation } from '../redux/slices/userSlice';
// import { setCredentials } from '.././redux/slices/authSlice';
// import { toast } from 'react-toastify';

// const LoginScreen = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const dispatch = useDispatch();

//   const [login, { isLoading }] = useLoginMutation();

//   //   const { userInfo } = useSelector((state) => state.auth);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="login-form">
//         <form className="login-form" onSubmit={submitHandler}>
//           <h2>Login</h2>
//           <div className="email">
//             <label htmlFor="email_field" className="form-label">
//               Email
//             </label>
//             <br />
//             <input
//               type="email"
//               id="email_field"
//               className="form-control"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="password_field" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password_field"
//               className="form-control"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button id="login_button" type="submit" disabled={isLoading}>
//             LOGIN
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginScreen;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../redux/slices/userSlice';
import { setCredentials } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      toast.success('Login Successful!');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email_field"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email_field"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password_field"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password_field"
              name="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button
            id="login_button"
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {isLoading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
