import "./Home.css";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
    <Container>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Examine Pots</Accordion.Header>
    <Accordion.Body>
      <p><Button variant="primary" onClick={handleShow}>
      Care for Plant
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Care for Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've spent one Action Point to care for your plant.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> Pot #1 -- Plant: (plantName), Age: (plantAge), Fully Grown: (fullyGrown)</p>
      <p><Button variant="success">Plant a Seed</Button> Pot #2 -- Empty</p>
      <p><Button variant="success">Plant a Seed</Button> Pot #3 -- Empty</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Travel to Town</Accordion.Header>
    <Accordion.Body>
      <p>To speak with townspeople, you may travel to the town. Would you like to travel now?</p>
      <Button variant="success"><Link to="/town" id="link-to-town">
              Travel to Town
            </Link></Button>{' '}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>End Day</Accordion.Header>
    <Accordion.Body>
      <p>If you have completed everything you would like to do today, or if you have no more Action Points remaining, you may end the day and start a new, fresh day. This replenishes your Action Points. Would you like to end the day now?</p>
      <Button variant="danger">End the Day</Button>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
);
};

export default Home;