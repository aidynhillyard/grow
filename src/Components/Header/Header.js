import "./Header.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import About from "../About/About";
import sprig from "../../images/sprig.png"

const Header = () => {
  const [aboutShow, setAboutShow] = useState(false);

  return (
    <Container>
            <Nav className="me-auto">
            <img className="header-sprig" src={sprig} alt=""/><button className="about-button" onClick={() => setAboutShow(true)}>About</button>
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
    </Container>
  );
};

export default Header;
