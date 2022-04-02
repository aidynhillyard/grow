import "./Header.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import About from "../About/About";
import logo from "../../images/favicon192.png"

const Header = () => {
  const [aboutShow, setAboutShow] = useState(false);

  return (
    <Container className="header">
      <Navbar bg="light" expand="lg">
        <Container className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button onClick={() => setAboutShow(true)}>About</button>
              <Modal
                size="lg"
                show={aboutShow}
                onHide={() => setAboutShow(false)}
                aria-label="about"
              >
                <Modal.Body>
                  <div className="header-about"><About /></div>
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
            <img className="logo" src={logo}/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
