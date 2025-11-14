// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [home, setHome] = useState(false);
//   const [html, setHtml] = useState(false);
//   const [js, setJs] = useState(false);
//   const [r, setR] = useState(false);
//   const [node, setNode] = useState(false);
//   const [ex, setEx] = useState(false);
//   const [login, setLogin] = useState(false);

//   const handleHome = () => {
//     setHome(true);
//     setHtml(false);
//     setJs(false);
//     setR(false);
//     setNode(false);
//     setEx(false);
//     setLogin(false);
//   };

//   const handleHtml = () => {
//     setHtml(true);
//     setHome(false);
//     setJs(false);
//     setR(false);
//     setNode(false);
//     setEx(false);
//     setLogin(false);
//   };

//   const handleJs = () => {
//     setJs(true);
//     setHome(false);
//     setHtml(false);
//     setR(false);
//     setNode(false);
//     setEx(false);
//     setLogin(false);
//   };

//   const handleR = () => {
//     setR(true);
//     setHome(false);
//     setHtml(false);
//     setJs(false);
//     setNode(false);
//     setEx(false);
//     setLogin(false);
//   };
//   const nodeHandler = () => {
//     setR(false);
//     setHome(false);
//     setHtml(false);
//     setJs(false);
//     setNode(true);
//     setEx(false);
//     setLogin(false);
//   };
//   const exHandler = () => {
//     setR(false);
//     setHome(false);
//     setHtml(false);
//     setJs(false);
//     setNode(false);
//     setEx(true);
//     setLogin(false);
//   };

//   const loginHandler = () => {
//     setR(false);
//     setHome(false);
//     setHtml(false);
//     setJs(false);
//     setNode(false);
//     setEx(false);
//     setLogin(true);
//   };
//   return (
//     <header>
//       <div className="container">
//         <div className="grid navbar-grid">
//           <div className="logo">
//             <h1 style={{ backgroundColor: '#531414' }}>Int-Q</h1>
//           </div>

//           <nav aria-label="Main Navigation">
//             <ul className="nav-links">
//               <li className={home ? 'nav' : null} onClick={handleHome}>
//                 <Link to="/quiz" className={home ? 'nav' : null}>
//                   Quiz
//                 </Link>
//               </li>
//               <li className={html ? 'nav' : null} onClick={handleHtml}>
//                 <Link to="/html&css" className={html ? 'nav' : null}>
//                   HTML CSS
//                 </Link>
//               </li>
//               <li className={js ? 'nav' : null} onClick={handleJs}>
//                 <Link to="/javascript" className={js ? 'nav' : null}>
//                   JavaScript
//                 </Link>
//               </li>
//               <li className={r ? 'nav' : null} onClick={handleR}>
//                 <Link to="/react" className={r ? 'nav' : null}>
//                   React
//                 </Link>
//               </li>
//               <li className={node ? 'nav' : null} onClick={nodeHandler}>
//                 <Link to="/node" className={node ? 'nav' : null}>
//                   Node
//                 </Link>
//               </li>
//               <li className={ex ? 'nav' : null} onClick={exHandler}>
//                 <Link to="/express" className={ex ? 'nav' : null}>
//                   Express
//                 </Link>
//               </li>
//               <li className={ex ? 'nav' : null} onClick={loginHandler}>
//                 <Link to="/login" className={login ? 'nav' : null}>
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('home');

  const menuItems = [
    { id: 'quiz', label: 'Quiz', path: '/quiz' },
    { id: 'html', label: 'HTML & CSS', path: '/html&css' },
    { id: 'js', label: 'JavaScript', path: '/javascript' },
    { id: 'react', label: 'React', path: '/react' },
    { id: 'node', label: 'Node', path: '/node' },
    { id: 'express', label: 'Express', path: '/express' },
    { id: 'login', label: 'Login', path: '/login' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white px-4 py-2 rounded-lg bg-red-900">
          Int-Q
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer font-medium ${
                  active === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
