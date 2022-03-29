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

  // useEffect???
  useEffect(() => console.log("Hello world"), [actionPoints]);

  // Check if Fully Grown
  const checkIfPot1FullyGrown = () => {
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
  const checkIfPot2FullyGrown = () => {
    if (pot2Type === "Marigold" && pot2Age >= 2) {
      setPot2IsFullyGrown(true);
      console.log("meow!");
    } else if (pot2Type === "Snapdragon" && pot2Age >= 3) {
      setPot2IsFullyGrown(true);
    } else if (pot2Type === "Sunflower" && pot2Age >= 4) {
      setPot2IsFullyGrown(true);
    } else {
      setPot2IsFullyGrown(false);
    }
  };
  const checkIfPot3FullyGrown = () => {
    if (pot3Type === "Marigold" && pot3Age >= 2) {
      setPot3IsFullyGrown(true);
      console.log("meow!");
    } else if (pot3Type === "Snapdragon" && pot3Age >= 3) {
      setPot3IsFullyGrown(true);
    } else if (pot3Type === "Sunflower" && pot3Age >= 4) {
      setPot3IsFullyGrown(true);
    } else {
      setPot3IsFullyGrown(false);
    }
  };

  // Increment & Decrement functions
  const decrementActionPoints = () => {
    setActionPoints((prevState) => prevState - 1);
  };

  // Increment Pot Age
  const incrementPot1Age = () => {
    setPot1Age((prevState) => prevState + 1);
    checkIfPot1FullyGrown();
  };
  const incrementPot2Age = () => {
    setPot2Age((prevState) => prevState + 1);
    checkIfPot2FullyGrown();
  };
  const incrementPot3Age = () => {
    setPot3Age((prevState) => prevState + 1);
    checkIfPot3FullyGrown();
  };

  // Care For Plant
  const careForPlant1 = () => {
    incrementPot1Age()
    decrementActionPoints()
    setPot1IsCaredFor(true)
  }
  const careForPlant2 = () => {
    incrementPot2Age()
    decrementActionPoints()
    setPot2IsCaredFor(true)
  }
  const careForPlant3 = () => {
    incrementPot3Age()
    decrementActionPoints()
    setPot3IsCaredFor(true)
  }
  // should increment pot age, decrement action points, set iscaredfor to true, and hide button
  console.log(pot1IsCaredFor)
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
      <div style={{ display: (pot1IsEmpty === true || pot1IsCaredFor === true) ? "none" : "block" }}>
        <Button
          variant="info"
          onClick={() => {
            careForPlant1();
            handleShow();
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
        <Button variant="info" onClick={() => {
            careForPlant2();
            handleShow();
          }}>
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
        <Button variant="info" onClick={() => {
            careForPlant3();
            handleShow();
          }}>
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
