import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { init } from 'ityped';
import './intro.scss';
import './rain.scss';
// Import the resume PDF
import resume from './resume.pdf';

export default function Intro() {
  const imgRef = useRef(null);
  const rainContainerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the image
    gsap.fromTo(imgRef.current, { y: 1000 }, { y: 0, duration: 1.5, ease: 'power3.out' });

    // Initialize ityped
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Developer...",
        "Designer...",
        "Full Stack Engineer...",
        "Tester...",
        "App Developer...",
        "Frontend Developer...",
        "Backend Developer...",
        "Big-Data Analyst..."
      ],
    });

    // Function to create raindrops
    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
      raindrop.style.opacity = Math.random();
      rainContainerRef.current.appendChild(raindrop);

      setTimeout(() => {
        raindrop.remove();
      }, 3000);
    };

    // Interval to create raindrops
    const intervalId = setInterval(createRaindrop, 50);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Handle CV download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume; // Use the imported resume PDF file
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='intro' id='intro'>
      <div className="rain-container" ref={rainContainerRef}></div>
      <div className="left">
        <div className="imgContainer">
          <img ref={imgRef} src={`${process.env.PUBLIC_URL}/assets/image.png`} alt="Description of image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Densingh</h1>
          <h3>I'm a Good  : <span ref={textRef}></span></h3>
        </div>
        <div className="download-container">
          <button onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
