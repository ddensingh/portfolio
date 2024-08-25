import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const data = [
    {
      id: '1',
      icon: 'https://img.freepik.com/premium-photo/developer-sleeping-their-keyboard-dimly-lit-office-showcasing-dedication-long-hou_980716-197917.jpg?w=826',
      title: 'Developer',
      desc: 'A developer is a professional who creates and maintains software applications. They possess expertise in various programming languages and technologies. Developers work on both the front-end and back-end of software systems. They collaborate with designers, analysts, and other stakeholders to deliver functional and efficient software solutions. Continuous learning and adapting to new technologies are essential for a developer\'s success.',
      img: 'https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png',
    },
    {
      id: '2',
      icon: 'https://img.freepik.com/premium-photo/creative-3d-flat-icon-designer-napping-sketchpad-studio-long-hours-dedication-craft_980716-198053.jpg?w=826',
      title: 'Networking',
      desc: 'Networking professionals manage and optimize network systems, ensuring connectivity and security for organizations. They design, configure, and troubleshoot network infrastructure, including hardware and software components. Networking involves understanding protocols, network topologies, and the integration of various networking technologies.',
      img: 'https://img.freepik.com/free-photo/3d-render-young-business-woman-with-computer-charts-office_1057-44531.jpg?t=st=1721831188~exp=1721834788~hmac=ee56d4ffba0f3b724af55408102590d221a11ba1bd9400a0b179ffb664cbc1b5&w=826',
    },
    {
      id: '3',
      icon: 'https://img.freepik.com/premium-photo/3d-flat-icon-researcher-asleep-lab-surrounded-by-equipment-depicting-dedication-long-hours_980716-196875.jpg?w=826',
      title: 'Cyber Security',
      desc: 'Cybersecurity specialists protect systems and data from digital attacks. They implement security measures, monitor network activity, and respond to security breaches. Their role includes safeguarding sensitive information, conducting security audits, and ensuring compliance with security standards.',
      img: 'https://img.freepik.com/premium-photo/3d-flat-icon-freelancer-working-from-home-digital-project-with-flexibility-independence-te_980716-180772.jpg?w=826',
    },
    {
      id: '4',
      icon: 'https://img.freepik.com/premium-photo/creative-studio-3d-flat-icon-designer-napping-sketchpad-reflecting-dedication-cartoon-style_980716-198050.jpg?w=826',
      title: 'Data Analyst',
      desc: 'Data analysts interpret complex data sets to help organizations make informed decisions. They use statistical tools and software to analyze data trends, create reports, and present insights. Their work supports strategic planning and operational efficiency.',
      img: 'https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?t=st=1721830397~exp=1721833997~hmac=64e1e1f94677e2b103c07bb27271b8f79b97ab749e91c354d7f85f62394a8da9&w=1380',
    },
    {
      id: '5',
      icon: 'https://img.freepik.com/premium-photo/3d-flat-icon-freelancer-working-from-home-digital-project-with-flexibility-independence-te_980716-180772.jpg?w=826',
      title: 'UI/UX Designer',
      desc: 'UI/UX designers focus on creating user-friendly interfaces and experiences for applications and websites. They conduct user research, design wireframes, and ensure that digital products are intuitive and engaging. Their goal is to enhance user satisfaction and accessibility.',
      img: 'https://img.freepik.com/free-vector/user-flow-concept-illustration_114360-1818.jpg?t=st=1721831391~exp=1721834991~hmac=96de38e703ecde7c3c772585847bea81c4ef2eb69dda1128f45c91b5f809fe26&w=826',
    },
    {
      id: '6',
      icon: 'https://img.freepik.com/premium-photo/financial-analyst-asleep-spreadsheets-illustrating-meticulous-nature-financial-analysi_980716-197758.jpg?w=826',
      title: 'Software Engineer',
      desc: 'Software engineers apply engineering principles to the design, development, and maintenance of software systems. They work on coding, debugging, and testing software applications. Their expertise includes software architecture, system integration, and performance optimization.',
      img: 'https://img.freepik.com/premium-photo/cartoon-developer-holding-light-bulb-with-code-computer-screen-integrating-new-ideas-into-s_980716-197992.jpg?w=826',
    },
    {
      id: '7',
      icon: 'https://img.freepik.com/premium-photo/glossy-research-development-data-visualization-3d-flat-icon-innovative-cartoon-style-digital-art_980716-197919.jpg?w=826',
      title: 'Cloud Computing',
      desc: 'Cloud computing professionals manage cloud-based services and infrastructure. They work with cloud platforms to deploy, maintain, and scale applications. Their responsibilities include ensuring data security, optimizing resource usage, and integrating cloud solutions with existing systems.',
      img: 'https://img.freepik.com/premium-photo/man-sits-desk-with-computer-plant-background_1275749-165.jpg?w=826',
    },
    {
      id: '8',
      icon: 'https://img.freepik.com/premium-photo/illustration-beautiful-young-business-woman-working-her-laptop-computer_1057-39026.jpg?w=826',
      title: 'Mobile Developer',
      desc: 'Mobile developers create applications for mobile devices. They work on app design, coding, and testing to ensure functionality and performance on various mobile platforms. They must understand mobile operating systems and user interface guidelines.',
      img: 'https://img.freepik.com/premium-photo/glossy-research-development-data-visualization-3d-flat-icon-digital-art-showcasing-clarity-i_980716-198098.jpg?w=826',
    },
    {
      id: '9',
      icon: 'https://img.freepik.com/premium-photo/glossy-3d-flat-icon-research-development-data-visualization-concept-digital-art-innovative-t_980716-197931.jpg?w=826',
      title: 'Project Manager',
      desc: 'Project managers oversee and coordinate projects from inception to completion. They manage timelines, resources, and budgets while ensuring that project goals are met. Effective communication and leadership are crucial for successful project management.',
      img: 'https://img.freepik.com/premium-photo/3d-flat-icon-developer-with-light-bulb-code-concept-cartoon-style-integrating-new-ideas_980716-197933.jpg?w=826',
    },
    {
      id: '10',
      icon: 'https://img.freepik.com/premium-photo/glossy-research-development-integration-seamless-innovation-3d-flat-icon-abstract-digital_980716-197806.jpg?w=826',
      title: 'Graphic Designer',
      desc: 'Graphic designers create visual content to communicate messages and ideas. They work on designing graphics, layouts, and visual elements for various media. Their work includes using design software, understanding color theory, and maintaining brand consistency.',
      img: 'https://img.freepik.com/premium-photo/3d-flat-icon-developer-with-light-bulb-code-concept-cartoon-style-illustration-developer-i_980716-198027.jpg?w=826',
    },
  ];

  const totalSlides = data.length;

  const handleSlideChange = (index) => {
    setCurrentSlide((prevIndex) => (index + totalSlides) % totalSlides);
  };

  const handleReadMore = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/details/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setModalData(result);
      setModal(true);
    } catch (error) {
      setError(error.message);
      setModalData({});
      setModal(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(currentSlide + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="container-wrapper">
      <div className="area">
        <ul className="bubbles">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
      <Container className="works">
        <Carousel
          activeIndex={currentSlide}
          next={() => handleSlideChange(currentSlide + 1)}
          previous={() => handleSlideChange(currentSlide - 1)}
          interval={null}
        >
          {data.map((item) => (
            <CarouselItem key={item.id} className="carousel-item">
              <Row className="align-items-center">
                <Col md="6" className="text-center">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={item.icon} alt={`${item.title} icon`} className="img-fluid" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button onClick={() => handleReadMore(item.id)} className="read-more-btn">
                      Read more
                    </button>
                  </div>
                </Col>
                <Col md="6" className="text-center">
                  <img src={item.img} alt={`${item.title} image`} className="img-fluid main-img" />
                </Col>
              </Row>
            </CarouselItem>
          ))}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => handleSlideChange(currentSlide - 1)} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => handleSlideChange(currentSlide + 1)} />
        </Carousel>
      </Container>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          {error ? 'Error' : modalData.title}
        </ModalHeader>
        <ModalBody>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              <img src={modalData.img} alt={modalData.title} className="img-fluid" />
              <p>{modalData.desc}</p>
              <p>{modalData.moreDetails}</p>
            </>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}
