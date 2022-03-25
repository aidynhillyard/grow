import "./Pot3.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Pot3 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <p><Button variant="success" onClick={handleShow}>
      Plant a Seed
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Care for Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've spent one Action Point to plant a seed.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> Pot #2 -- Empty</p>
    </Container>
  );
};

export default Pot3;