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
          <Nav.Link href="/intro">Intro</Nav.Link>
          <Nav.Link href="/org">Org</Nav.Link>
          <Nav.Link href="/joinus">Join Us</Nav.Link>
          <Nav.Link href="/awards">Awards</Nav.Link>
          <Nav.Link href="/report">Report</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/beachcleaning">Beach Cleaning</NavDropdown.Item>
            <NavDropdown.Item href="/healthclinic">Health Clinic</NavDropdown.Item>
            <NavDropdown.Item href="/seniors">Seniors Homes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/education">Education</NavDropdown.Item>
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
