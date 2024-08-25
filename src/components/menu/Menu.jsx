import React from 'react';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}><a href="#intro">HOME</a></li>
        <li  onClick={()=>setMenuOpen(false)}><a href="#portfolio">PORTFOLIO</a></li>
        <li  onClick={()=>setMenuOpen(false)}><a href="#works">WORKS</a></li>
        <li  onClick={()=>setMenuOpen(false)}><a href="#contact">CONTACT</a></li>
        <li  onClick={()=>setMenuOpen(false)}><a href="#testimonials">TESTIMONIALS</a></li>
      </ul>
    </div>
  );
}
