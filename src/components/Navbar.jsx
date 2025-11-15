import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  // Prevent crash if userInfo is undefined
  const userName = userInfo?.name || 'User';

  const menuItems = [
    { id: 'quiz', label: 'Quiz', path: '/quiz' },
    { id: 'html', label: 'HTML & CSS', path: '/html&css' },
    { id: 'js', label: 'JavaScript', path: '/javascript' },
    { id: 'react', label: 'React', path: '/react' },
    { id: 'node', label: 'Node', path: '/node' },
    { id: 'express', label: 'Express', path: '/express' },
    !userInfo
      ? { id: 'login', label: 'Login', path: '/login' }
      : { id: 'profile', label: userName, path: '/profile' },
  ];
  // If logged in → show username instead of login

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white px-4 py-2 rounded-lg bg-red-900">
          Int-Q
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setIsOpen(false); // close drawer on mobile
                }}
                className={`cursor-pointer font-medium py-2 md:py-0 ${
                  active === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600 md:pb-1'
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
