import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const programmingLanguages = [
  {
    id: 1,
    name: 'React',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5zQQfgYdauP902KBIcvqGVfUGvUT4gyCJw&s',
    details: 'React is a JavaScript library for building user interfaces.',
    documentation: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 2,
    name: 'MERN Stack',
    image: 'https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png',
    details: 'MERN is a JavaScript stack used for easier and faster deployment of full-stack web applications.',
    documentation: 'https://www.mongodb.com/mern-stack',
  },
  {
    id: 3,
    name: 'Android Development (Java)',
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/286616272/original/c6bac0066fb0ae1d7c0acafcb48fd15fc077d108/develop-android-application-using-kotlin-or-java-in-android-studio.jpg',
    details: 'Developing Android apps using Java.',
    documentation: 'https://developer.android.com/docs',
  },
  {
    id: 4,
    name: 'React Native',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHB1_-Ghe-QWTn6_v5ZmbqxdrBV7S5mn0Yw&s',
    details: 'React Native lets you create truly native apps using React.',
    documentation: 'https://reactnative.dev/docs/getting-started',
  },
  {
    id: 5,
    name: 'Flutter',
    image: 'https://digitronsoftwares.com/assets/uploads/media-uploader/flutter-featured-blog-image21690356842.jpg',
    details: 'Flutter is an open-source UI software development kit created by Google.',
    documentation: 'https://flutter.dev/docs',
  },
  {
    id: 6,
    name: 'MEAN Stack',
    image: 'https://www.logicraysacademy.com/blog/wp-content/uploads/2023/05/MVM2.png',
    details: 'MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications.',
    documentation: 'https://www.mongodb.com/mean-stack',
  },
  {
    id: 7,
    name: 'Angular',
    image: 'https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?auto=webp&s=6611d9c403cb948d1caf33e595f129bd18d745e3',
    details: 'Angular is a platform for building mobile and desktop web applications.',
    documentation: 'https://angular.io/docs',
  },
  {
    id: 8,
    name: 'C',
    image: 'https://datapro.in/uploads/1a73de2b9ea968a014158e1af9839dc0.png',
    details: 'C is a general-purpose, procedural computer programming language.',
    documentation: 'https://en.cppreference.com/w/c',
  },
  {
    id: 9,
    name: 'C++',
    image: 'https://training.digigrowhub.in/wp-content/uploads/2021/02/do-coding-of-any-program-by-c-plus-plus-perfectly-and-within-time.jpg',
    details: 'C++ is a general-purpose programming language created as an extension of the C programming language.',
    documentation: 'https://en.cppreference.com/w/cpp',
  },
  {
    id: 10,
    name: 'Python',
    image: 'https://media.licdn.com/dms/image/D4D12AQGkjC4g7LwHMA/article-cover_image-shrink_600_2000/0/1678515120746?e=2147483647&v=beta&t=AQJkpUeeJ8vciEI8cQ2nQuAH6CvlsuytB7duosMI2s0',
    details: 'Python is a high-level, interpreted programming language with dynamic semantics.',
    documentation: 'https://docs.python.org/3/',
  },
  {
    id: 11,
    name: 'Node.js',
    image: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4anecy5mdl4pho8w7519.jpg',
    details: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    documentation: 'https://nodejs.org/en/docs/',
  },
  {
    id: 12,
    name: 'Express.js',
    image: 'https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA',
    details: 'Express.js is a minimal and flexible Node.js web application framework.',
    documentation: 'https://expressjs.com/',
  },
  {
    id: 13,
    name: 'MongoDB',
    image: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fu8ji0lvijqsw237ssc4x.png',
    details: 'MongoDB is a document database with the scalability and flexibility that you want with the data model you need.',
    documentation: 'https://www.mongodb.com/docs/',
  },
  {
    id: 14,
    name: 'FireBase',
    image: 'https://firebase.google.com/images/social.png',
    details: 'Firebase provides detailed documentation and cross-platform app development SDKs, to help you build and ship apps for iOS, Android, the Web, Flutter, Unity, and C++.',
    documentation: 'https://firebase.google.com/docs',
  },
  {
    id: 15,
    name: 'Docker',
    image: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/04/075c8694.jpeg',
    details: 'Docker is an open platform for developing, shipping, and running applications.',
    documentation: 'https://docs.docker.com/',
  },



];

const ProgrammingLanguages = () => {
  return (
    <div style={styles.pageWrapper}>
      <Container className="py-5">
      <h1 className="text-center mb-5 display-4" style={{ fontFamily: '"Nerko One", cursive',fontWeight:550,overflow:"hidden" }}>
  Languages and Technologies
</h1>

        <Row>
          {programmingLanguages.map((language) => (
            <Col md={4} sm={6} key={language.id} className="mb-4">
              <Card style={styles.languageCard} className="shadow-lg h-100">
                <Card.Img
                  variant="top"
                  src={language.image}
                  alt={language.name}
                  style={styles.cardImage}
                />
                <Card.Body style={styles.cardBody}>
                  <Card.Title style={styles.cardTitle}>{language.name}</Card.Title>
                  <Card.Text style={styles.cardText}>{language.details}</Card.Text>
                  <Button variant="outline-primary" href={language.documentation} target="_blank" style={styles.button}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundImage: `linear-gradient(45deg, transparent 0%, transparent 55%, rgba(64, 64, 64, 0.04) 55%, rgba(64, 64, 64, 0.04) 76%, transparent 76%, transparent 100%),
                      linear-gradient(135deg, transparent 0%, transparent 14%, rgba(64, 64, 64, 0.04) 14%, rgba(64, 64, 64, 0.04) 41%, transparent 41%, transparent 100%),
                      linear-gradient(45deg, transparent 0%, transparent 2%, rgba(64, 64, 64, 0.04) 2%, rgba(64, 64, 64, 0.04) 18%, transparent 18%, transparent 100%),
                      linear-gradient(135deg, transparent 0%, transparent 61%, rgba(64, 64, 64, 0.04) 61%, rgba(64, 64, 64, 0.04) 71%, transparent 71%, transparent 100%),
                      linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))`,
    padding: '20px',
  },
  header: {
    color: '#007bff', // Blue color for the header
  },
  languageCard: {
    border: 'none',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardImage: {
    height: '200px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#007bff', // Blue color for card title
  },
  cardText: {
    fontSize: '1rem',
    color: '#333333',
    marginBottom: '20px',
  },
  button: {
    borderColor: '#007bff',
    color: '#007bff',
  },
  buttonHover: {
    backgroundColor: '#007bff',
    color: '#ffffff',
  },
};

export default ProgrammingLanguages;
