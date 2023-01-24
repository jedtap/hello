import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

import Resume from '../Docs/Tapiador-Resume.pdf'

const Navbar = ({ toggleContact }) => {
  return (<>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">

        <Link to='/hello' className="navbar-brand">Jed Tapiador, CSM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to='/hello/about' className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>{toggleContact()}}>Contact</div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/jedtap" target="_blank">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/jed-tapiador" target="_blank">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.hackerrank.com/jed_tapiador" target="_blank">HackerRank</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Resume} target="_blank">Resume</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>);
}

export default Navbar;