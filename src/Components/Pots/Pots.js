import "./Pots.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Planting from "../Planting/Planting";

const Pots = ({ checkIfPot1IsEmptyMarigold, actionPoints }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <p>
        <Button variant="primary" onClick={handleShow}>
          Care for Plant
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Care for Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You've spent one Action Point to care for your plant.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
        Pot #1 -- Plant: (plantName), Age: (plantAge), Fully Grown: (fullyGrown)
      </p>
      <p>
        <Button variant="success">Plant a Seed</Button>
        Pot #2 -- Empty
      </p>
      <p>
        <Button variant="success" onClick={handleShow}>
          Plant a Seed
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Care for Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You've spent one Action Point to plant a seed.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>{" "}
        Pot #3 -- Empty
      </p>
      <Planting
        checkIfPot1IsEmptyMarigold={checkIfPot1IsEmptyMarigold}
        actionPoints={actionPoints}
        />
    </Container>
  );
};

export default Pots;
