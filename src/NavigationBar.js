import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">GGCP Trust</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/org">Org</Nav.Link>
          <Nav.Link href="/joinus">Join Us</Nav.Link>
          <Nav.Link href="/awards">Awards</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/projects">Beach Cleaning</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Health Clinic</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Seniors Homes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/projects">Educational Aid</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Adopt a Village</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Building Compost</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/projects">Feeding Dogs</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Train the trainers</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Tree Plantation</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
