import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'holderjs';

const Home = () => {

  return (
    <div className="home">
    	<Breadcrumb>
		  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
		</Breadcrumb>
    	<p>Welcome to Giants Group of Chennai Pushkar charitable trust</p>
    	<p>We are the South Chennai chapter of the International Giants Organization</p>
    	<p>Our main objective is to cary, support, maintain, assist and promote Social Services and projects in India and abroad </p>
    	<p> Our main areas of focus are : </p>
        <ul>
            <li>Wellness Programs</li>
            <li>Educational Aid</li>
            <li>Skill Development</li>
        </ul>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" thumbnail />
            </Col>
          </Row>
        </Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>        
    	
    </div>
  );
}

export default Home;
