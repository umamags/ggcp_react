import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <Container>
      <Row>
        <Col><Link to="/"><Button variant="primary">Home</Button></Link></Col>
        <Col><Link to="/intro"><Button variant="secondary">Intro</Button></Link></Col>
        <Col><Link to="/org"><Button variant="success">Org</Button></Link></Col>
        <Col><Link to="/joinus"><Button variant="warning">Join Us</Button></Link></Col>
        <Col><Link to="/awards"><Button variant="danger">Awards</Button></Link></Col>
        <Col><Link to="/report"><Button variant="light">Report</Button></Link></Col>
        <Col><Link to="/newsletters"><Button variant="link">Newsletters</Button></Link></Col>
        <Col><Link to="/projects"><Button variant="info">Projects and Programs</Button></Link></Col>
        <Col><Link to="/contactus"><Button variant="dark">Contact Us</Button></Link></Col>
      </Row>
    </Container>        
  );
}

export default Navbar;
