import React from 'react';
import './topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen ? 'active' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <a href="tel:+919566585043">
              <span>+91 9566585043</span>
            </a>
          </div>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:Dens22019.it@RMKEC.ac.in">
              <span>Dens22019.it@RMKEC.ac.in</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line1'></span>
            <span className='line1'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
