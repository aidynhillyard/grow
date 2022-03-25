import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
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
              <Link className="nav-bar-link" to="/about">
                About
              </Link>
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
