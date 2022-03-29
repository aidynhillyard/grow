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
  pot1IsSeed,
  setPot1IsSeed,
  pot1IsSeedling,
  setPot1IsSeedling,
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
  pot2IsSeed,
  setPot2IsSeed,
  pot2IsSeedling,
  setPot2IsSeedling,
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
  pot3IsSeed,
  setPot3IsSeed,
  pot3IsSeedling,
  setPot3IsSeedling,
  pot3IsFullyGrown,
  setPot3IsFullyGrown,
}) => {
  // useStates
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect???
  useEffect(() => console.log("Hello world"), [actionPoints]);

  // Check Plant Status
  const checkPlant1Status = () => {
    if (pot1Type === "Tulip" && pot1Age >= 2) {
      setPot1IsFullyGrown(true);
      console.log("meow!");
    } else if (pot1Type === "Iris" && pot1Age >= 3) {
      setPot1IsFullyGrown(true);
    } else if (pot1Type === "Forget-Me-Not" && pot1Age >= 4) {
      setPot1IsFullyGrown(true);
    } else {
      setPot1IsFullyGrown(false);
    }
  };
  const checkPlant2Status = () => {
    if (pot2Type === "Tulip" && pot2Age >= 2) {
      setPot2IsFullyGrown(true);
      console.log("meow!");
    } else if (pot2Type === "Iris" && pot2Age >= 3) {
      setPot2IsFullyGrown(true);
    } else if (pot2Type === "Forget-Me-Not" && pot2Age >= 4) {
      setPot2IsFullyGrown(true);
    } else {
      setPot2IsFullyGrown(false);
    }
  };
  const checkPlant3Status = () => {
    if (pot3Type === "Tulip" && pot3Age >= 2) {
      setPot3IsFullyGrown(true);
      console.log("meow!");
    } else if (pot3Type === "Iris" && pot3Age >= 3) {
      setPot3IsFullyGrown(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age >= 4) {
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
  };
  const incrementPot2Age = () => {
    setPot2Age((prevState) => prevState + 1);
  };
  const incrementPot3Age = () => {
    setPot3Age((prevState) => prevState + 1);
  };

  // Care For Plant
  const careForPlant1 = () => {
    incrementPot1Age();
    decrementActionPoints();
    setPot1IsCaredFor(true);
    checkPlant1Status();
  };
  const careForPlant2 = () => {
    incrementPot2Age();
    decrementActionPoints();
    setPot2IsCaredFor(true);
    checkPlant2Status();
  };
  const careForPlant3 = () => {
    incrementPot3Age();
    decrementActionPoints();
    setPot3IsCaredFor(true);
    checkPlant3Status();
  };

  return (
    <Container>
      {/* Pot #1 */}
      <div>
        <p>
          Plant #1: {pot1Type}
          <span style={{ display: pot1IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot1Age}, Fully Grown: {pot1IsFullyGrown ? "True" : "False"}
          </span>
        </p>
      </div>
      <div
        style={{
          display:
            pot1IsEmpty === true || pot1IsCaredFor === true ? "none" : "block",
        }}
      >
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

      <div style={{ display: pot1IsEmpty === true && actionPoints > 0 ? "block" : "none" }}>
        <DropdownButton id="dropdown-item-button" title="Choose a Seed">
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot1();
              decrementActionPoints();
              setPot1Type("Tulip");
              incrementPot1Age();
            }}
          >
            Tulip
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot1();
              decrementActionPoints();
              setPot1Type("Iris");
              incrementPot1Age();
            }}
          >
            Iris
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot1();
              decrementActionPoints();
              setPot1Type("Forget-Me-Not");
              incrementPot1Age();
            }}
          >
            Forget-Me-Not
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {/* Pot #2 */}
      <div>
        <p>
          Plant #2: {pot2Type}
          <span style={{ display: pot2IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot2Age}, Fully Grown: {pot2IsFullyGrown ? "True" : "False"}
          </span>
        </p>
      </div>
      <div style={{
          display:
            pot2IsEmpty === true || pot2IsCaredFor === true ? "none" : "block",
        }}>
        <Button
          variant="info"
          onClick={() => {
            careForPlant2();
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

      <div style={{ display: pot2IsEmpty === true && actionPoints > 0 ? "block" : "none" }}>
        <DropdownButton id="dropdown-item-button" title="Choose a Seed">
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot2();
              decrementActionPoints();
              setPot2Type("Tulip");
              incrementPot2Age();
            }}
          >
            Tulip
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot2();
              decrementActionPoints();
              setPot2Type("Iris");
              incrementPot2Age();
            }}
          >
            Iris
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot2();
              decrementActionPoints();
              setPot2Type("Forget-Me-Not");
              incrementPot2Age();
            }}
          >
            Forget-Me-Not
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {/* Pot #3 */}
      <div>
        <p>
          Plant #3: {pot3Type}
          <span style={{ display: pot3IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot3Age}, Fully Grown: {pot3IsFullyGrown ? "True" : "False"}
          </span>
        </p>
      </div>
      <div style={{
          display:
            pot3IsEmpty === true || pot3IsCaredFor === true ? "none" : "block",
        }}>
        <Button
          variant="info"
          onClick={() => {
            careForPlant3();
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

      <div style={{ display: pot3IsEmpty === true && actionPoints > 0 ? "block" : "none" }}>
        <DropdownButton id="dropdown-item-button" title="Choose a Seed">
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot3();
              decrementActionPoints();
              setPot3Type("Tulip");
              incrementPot3Age();
            }}
          >
            Tulip
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot3();
              decrementActionPoints();
              setPot3Type("Iris");
              incrementPot3Age();
            }}
          >
            Iris
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              plantPot3();
              decrementActionPoints();
              setPot3Type("Forget-Me-Not");
              incrementPot3Age();
            }}
          >
            Forget-Me-Not
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <p style={{ display: (pot1IsCaredFor === true && pot2IsCaredFor === true && pot3IsCaredFor === true) ? "block" : "none" }}>You have cared for all of your plants. You can check back after a new day.</p>
      </div>
    </Container>
  );
};

export default Pots;
