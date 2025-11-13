import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [html, setHtml] = useState(false);
  const [js, setJs] = useState(false);
  const [r, setR] = useState(false);
  const [node, setNode] = useState(false);
  const [ex, setEx] = useState(false);
  const handleHome = () => {
    setHome(true);
    setHtml(false);
    setJs(false);
    setR(false);
    setNode(false);
    setEx(false);
  };

  const handleHtml = () => {
    setHtml(true);
    setHome(false);
    setJs(false);
    setR(false);
    setNode(false);
    setEx(false);
  };

  const handleJs = () => {
    setJs(true);
    setHome(false);
    setHtml(false);
    setR(false);
    setNode(false);
    setEx(false);
  };

  const handleR = () => {
    setR(true);
    setHome(false);
    setHtml(false);
    setJs(false);
    setNode(false);
    setEx(false);
  };
  const nodeHandler = () => {
    setR(false);
    setHome(false);
    setHtml(false);
    setJs(false);
    setNode(true);
    setEx(false);
  };
  const exHandler = () => {
    setR(false);
    setHome(false);
    setHtml(false);
    setJs(false);
    setNode(false);
    setEx(true);
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1 style={{ backgroundColor: '#531414' }}>Int-Q</h1>
          </div>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li className={home ? 'nav' : null} onClick={handleHome}>
                <Link to="/quiz" className={home ? 'nav' : null}>
                  Quiz
                </Link>
              </li>
              <li className={html ? 'nav' : null} onClick={handleHtml}>
                <Link to="/html&css" className={html ? 'nav' : null}>
                  HTML CSS
                </Link>
              </li>
              <li className={js ? 'nav' : null} onClick={handleJs}>
                <Link to="/javascript" className={js ? 'nav' : null}>
                  JavaScript
                </Link>
              </li>
              <li className={r ? 'nav' : null} onClick={handleR}>
                <Link to="/react" className={r ? 'nav' : null}>
                  React
                </Link>
              </li>
              <li className={node ? 'nav' : null} onClick={nodeHandler}>
                <Link to="/node" className={node ? 'nav' : null}>
                  Node
                </Link>
              </li>
              <li className={ex ? 'nav' : null} onClick={exHandler}>
                <Link to="/express" className={ex ? 'nav' : null}>
                  Express
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
