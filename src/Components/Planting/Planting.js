import "./Planting.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

const Planting = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Plant a Marigold</Accordion.Header>
          <Accordion.Body>
            This is text about marigolds. It has information about what they are
            and how they grow. There might even be a picture of a marigold at
            some point.
            <p>
              <Button variant="success" onClick={handleShow}>
                Plant a Seed
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Plant a Seed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  You've spent one Action Point to plant a seed. Check back
                  tomorrow to care for your plant!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    <Link to="/home" id="link-to-home">
                      Okay
                    </Link>
                  </Button>
                </Modal.Footer>
              </Modal>{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Plant a Snapdragon</Accordion.Header>
          <Accordion.Body>
            This has text about snapdragons. It has information about what they
            are and how they grow. There might even be a picture of snapdragons
            at some point.
            <p>
              <Button variant="success" onClick={handleShow}>
                Plant a Seed
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Plant a Seed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  You've spent one Action Point to plant a seed. Check back
                  tomorrow to care for your plant!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    <Link to="/home" id="link-to-home">
                      Okay
                    </Link>
                  </Button>
                </Modal.Footer>
              </Modal>{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Plant a Sunflower</Accordion.Header>
          <Accordion.Body>
            This has text about sunflowers. It has information about what they
            are and how they grow. There might even be a picture of sunflowers
            at some point.
            <p>
              <Button variant="success" onClick={handleShow}>
                Plant a Seed
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Plant a Seed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  You've spent one Action Point to plant a seed. Check back
                  tomorrow to care for your plant!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    <Link to="/home" id="link-to-home">
                      Okay
                    </Link>
                  </Button>
                </Modal.Footer>
              </Modal>{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Return to Previous Menu</Accordion.Header>
          <Accordion.Body>
            <Button variant="success">
              <Link to="/home" id="link-to-home">
                Previous Menu
              </Link>
            </Button>{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Planting;
