import "./Pot2.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Pot2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <p>
      <Button variant="success">
              <Link to="/planting" id="link-to-planting">
                Plant a Seed
              </Link>
      </Button>
        Pot #2 -- Empty
      </p>
    </Container>
  );
};

export default Pot2;
