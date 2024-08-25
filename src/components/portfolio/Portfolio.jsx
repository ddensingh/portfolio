// src/components/Portfolio.js
import React, { useState, useEffect } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { portfolioData } from './data'; // Correct import for named export

const technicalDescriptions = {
  'Networking': 'Networking involves connecting computers and other devices to share resources and communicate.',
  'Developer': 'A developer creates applications and software to solve problems or perform tasks.',
  'Cyber Security': 'Cyber Security focuses on protecting systems and networks from digital attacks and breaches.',
  'AI': 'Artificial Intelligence involves creating systems that can perform tasks that typically require human intelligence.',
  'Cloud Computing': 'Cloud Computing provides on-demand computing resources and services over the internet.',
  'Blockchain': 'Blockchain is a decentralized ledger technology used to securely record transactions across multiple computers.',
  'Data Science': 'Data Science involves extracting insights and knowledge from data using various techniques and algorithms.',
  'IoT': 'Internet of Things (IoT) connects physical devices to the internet, allowing them to collect and exchange data.',
  'Machine Learning': 'Machine Learning is a subset of AI that involves training algorithms to learn from and make predictions based on data.',
};

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showFullWidthBlock, setShowFullWidthBlock] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ img: '', title: '', description: '' });

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];

  useEffect(() => {
    const fetchImages = () => {
      setData(portfolioData[selected] || []);
    };

    fetchImages();
  }, [selected]);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage({
      img: image.img,
      title: image.title,
      description: technicalDescriptions[image.title] || 'No description available.'
    });
    setShowFullWidthBlock(true);
  };

  const handleCloseFullWidthBlock = () => setShowFullWidthBlock(false);

  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='title'>Project</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((image, index) => (
          <div 
            className="item" 
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.img} alt={image.title} />
            {hoveredItem === index && (
              <div className="hover-info">
                <h3>{image.title}</h3>
              </div>
            )}
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>

      {/* Full Width Block for image details */}
      {showFullWidthBlock && (
        <div className="full-width-block">
          <div className="close-btn" onClick={handleCloseFullWidthBlock}>×</div>
          <div className="content">
            <img src={selectedImage.img} alt={selectedImage.title} className="modal-image" />
            <h2>{selectedImage.title}</h2>
            <p className="modal-description">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
