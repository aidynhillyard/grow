import "./Pot1.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Pot1 = () => {
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
    </Container>
  );
};

export default Pot1;
