import "./Town.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

const Town = () => {

  return (
    <Container>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Talk to Townspeople</Accordion.Header>
    <Accordion.Body>
      <p>(Button: Talk to TownspersonA)</p>
      <p>(Button: Talk to TownspersonB)</p>
      <p>(Butotn: Talk to TownspersonC)</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Travel Back Home</Accordion.Header>
    <Accordion.Body>
      <p>To check on your plants or end the day, you need to travel back home. Would you like to travel back home now?</p>
      <Button variant="success"><Link to="/home" id="link-to-home">
              Travel Back Home
            </Link></Button>{' '}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Container>
  );
};

export default Town;