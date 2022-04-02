import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import About from "../About/About";

const Header = () => {
  const [aboutShow, setAboutShow] = useState(false);

  return (
    <Container className="header">
      <Navbar bg="light" expand="lg">
        <Container className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-bar-link" to="/">
                Grow
              </Link>
              <button onClick={() => setAboutShow(true)}>About</button>
              <Modal
                size="lg"
                show={aboutShow}
                onHide={() => setAboutShow(false)}
                aria-label="about"
              >
                <Modal.Body>
                  <About />
                  <button
                    className="close-about"
                    onClick={() => setAboutShow(false)}
                  >
                    Close
                  </button>
                </Modal.Body>
              </Modal>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="brand">
            <p id="brand-text">Grow</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
