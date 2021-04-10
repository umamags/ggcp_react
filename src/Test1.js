import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Test1 = () => {

  return (
    <div className="home">
		<>
		  <Button variant="primary">Primary</Button>{' '}
		  <Button variant="secondary">Secondary</Button>{' '}
		  <Button variant="success">Success</Button>{' '}
		  <Button variant="warning">Warning</Button>{' '}
		  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
		  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
		  <Button variant="link">Link</Button>
		</>
		<Accordion defaultActiveKey="0">
		  <Card>
		    <Card.Header>
		      <Accordion.Toggle as={Button} variant="link" eventKey="0">
		        Click me!
		      </Accordion.Toggle>
		    </Card.Header>
		    <Accordion.Collapse eventKey="0">
		      <Card.Body>Hello! I'm the body</Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Card.Header>
		      <Accordion.Toggle as={Button} variant="link" eventKey="1">
		        Click me!
		      </Accordion.Toggle>
		    </Card.Header>
		    <Accordion.Collapse eventKey="1">
		      <Card.Body>Hello! I'm another body</Card.Body>
		    </Accordion.Collapse>
		  </Card>
		</Accordion>		
    </div>
  );
}

export default Test1;
