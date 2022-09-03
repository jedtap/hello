import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

const Navbar = () => {
  return (<>
    <nav className="navbar sticky-top navbar-expand-lg ">
      <div className="container-fluid">

        <Link to='/hello' className="navbar-brand">Jed Tapiador</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to='/hello/about' className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">Resume</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>);
}

export default Navbar;