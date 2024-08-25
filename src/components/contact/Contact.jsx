import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.scss';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const starContainerRef = useRef(null);

  useEffect(() => {
    const numberOfStars = 100; 
    const container = starContainerRef.current;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'stars';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('https://formspree.io/f/myzgllkd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    }).catch(error => {
      alert('Error sending message. Please try again later.');
      console.error('Error:', error);
    });
  };

  return (
    <div className='contact-page' id='contact' ref={starContainerRef}>
      <div className="contact-container">
        <div className="contact-left">
          <div className="info">
            <h2 className='title'>Contact Us</h2>
            <p className='desc'>Our company is dedicated to innovative growth, continuously expanding our portfolio to deliver cutting-edge solutions. We prioritize sustainable development, ensuring long-term success for our clients and stakeholders.</p>
            <div className="details">
              <div className="item">
                <FontAwesomeIcon icon={faLocationArrow} className="icon" />
                <p><a href="https://www.google.com/maps/search/?api=1&query=4671+Sugar+Camp+Road,+Owatonna,+Minnesota,+55060" target="_blank" rel="noopener noreferrer" className='detail'>7B/4b churchstreet Paramarthalingapuram,<br/> vetturnimadam Nagercoil - 629003</a></p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <p><a href="tel:+150747560945" className='detail'>+91 9566585043</a></p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <p><a href="mailto:wrub7d7810e@temporary-mail.net" className='detail'>Dens22019.it@RMKEC.ac.in</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2>Send Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder='Message'
              cols={40}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
