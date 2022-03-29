import "./Pots.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";

const Pots = ({
  actionPoints,
  setActionPoints,
  plantPot1,
  pot1IsEmpty,
  setPot1IsEmpty,
  pot1Type,
  setPot1Type,
  pot1Age,
  setPot1Age,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  pot1IsFullyGrown,
  setPot1IsFullyGrown,
  plantPot2,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2Type,
  setPot2Type,
  pot2Age,
  setPot2Age,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot2IsFullyGrown,
  setPot2IsFullyGrown,
  plantPot3,
  pot3IsEmpty,
  setPot3IsEmpty,
  pot3Type,
  setPot3Type,
  pot3Age,
  setPot3Age,
  pot3IsCaredFor,
  setPot3IsCaredFor,
  pot3IsFullyGrown,
  setPot3IsFullyGrown,
}) => {
  // useStates
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [planting, setPlanting] = useState(false);

  // useEffect???
  useEffect(() => console.log("Hello world"), [planting]);

  // Check if Fully Grown
  const checkIfFullyGrown = () => {
    if (pot1Type === "Marigold" && pot1Age >= 2) {
      setPot1IsFullyGrown(true);
      console.log("meow!");
    } else if (pot1Type === "Snapdragon" && pot1Age >= 3) {
      setPot1IsFullyGrown(true);
    } else if (pot1Type === "Sunflower" && pot1Age >= 4) {
      setPot1IsFullyGrown(true);
    } else {
      setPot1IsFullyGrown(false);
    }
  };

  // Increment & Decrement functions
  const decrementActionPoints = () => {
    setActionPoints((prevState) => prevState - 1);
  };

  // Increment Pot Age
  const incrementPot1Age = () => {
    setPot1Age((prevState) => prevState + 1);
    checkIfFullyGrown();
  };
  const incrementPot2Age = () => {
    setPot2Age((prevState) => prevState + 1);
    checkIfFullyGrown();
  };
  const incrementPot3Age = () => {
    setPot3Age((prevState) => prevState + 1);
    checkIfFullyGrown();
  };

  // Care For Plant
  // should increment pot age, decrement action points, set iscaredfor to true, and hide button
  return (
    <Container>
      {/* Pot #1 */}
      <div>
        <p>
          Pot #1: {pot1Type}
          <span style={{ display: pot1IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot1Age}, Fully Grown: {pot1IsFullyGrown ? "True" : "False"}
          </span>
        </p>
      </div>
      <div style={{ display: pot1IsEmpty === true ? "none" : "block" }}>
        <Button
          variant="info"
          onClick={() => {
            decrementActionPoints();
            handleShow();
            incrementPot1Age();
          }}
        >
          Care for Plant
        </Button>
      </div>

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

      <div style={{ display: pot1IsEmpty === true ? "block" : "none" }}>
        <DropdownButton id="dropdown-item-button" title="Choose a Seed">
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot1();
              setPlanting(false);
              decrementActionPoints();
              setPot1Type("Marigold");
              incrementPot1Age();
            }}
          >
            Marigold
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot1();
              setPlanting(false);
              decrementActionPoints();
              setPot1Type("Snapdragon");
              incrementPot1Age();
            }}
          >
            Snapdragon
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot1();
              setPlanting(false);
              decrementActionPoints();
              setPot1Type("Sunflower");
              incrementPot1Age();
            }}
          >
            Sunflower
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {/* Pot #2 */}
      <div>
        <p>
          Pot #2: {pot2Type}
          <span style={{ display: pot2IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot2Age}, Fully Grown: {pot2IsFullyGrown ? "True" : "False"}
          </span>
        </p>
      </div>
      <div style={{ display: pot2IsEmpty === true ? "none" : "block" }}>
        <Button variant="info" onClick={handleShow}>
          Care for Plant
        </Button>
      </div>

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

      <div style={{ display: pot2IsEmpty === true ? "block" : "none" }}>
        <DropdownButton id="dropdown-item-button" title="Choose a Seed">
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot2();
              setPlanting(false);
              decrementActionPoints();
              setPot2Type("Marigold");
              incrementPot2Age();
            }}
          >
            Marigold
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot2();
              setPlanting(false);
              decrementActionPoints();
              setPot2Type("Snapdragon");
              incrementPot2Age();
            }}
          >
            Snapdragon
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot2();
              setPlanting(false);
              decrementActionPoints();
              setPot2Type("Sunflower");
              incrementPot2Age();
            }}
          >
            Sunflower
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {/* Pot #3 */}
      <div>
        <p>
          Pot #3: {pot3Type}
          <span style={{ display: pot3IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot3Age}, Fully Grown: {pot3IsFullyGrown ? "True" : "False"}
          </span>
        </p>
      </div>
      <div style={{ display: pot3IsEmpty === true ? "none" : "block" }}>
        <Button variant="info" onClick={handleShow}>
          Care for Plant
        </Button>
      </div>

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

      <div style={{ display: pot3IsEmpty === true ? "block" : "none" }}>
        <DropdownButton id="dropdown-item-button" title="Choose a Seed">
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot3();
              setPlanting(false);
              decrementActionPoints();
              setPot3Type("Marigold");
              incrementPot3Age();
            }}
          >
            Marigold
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot3();
              setPlanting(false);
              decrementActionPoints();
              setPot3Type("Snapdragon");
              incrementPot3Age();
            }}
          >
            Snapdragon
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot3();
              setPlanting(false);
              decrementActionPoints();
              setPot3Type("Sunflower");
              incrementPot3Age();
            }}
          >
            Sunflower
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  );
};

export default Pots;
