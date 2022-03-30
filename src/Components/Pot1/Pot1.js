import "./Pot1.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Pot1 = ({
  actionPoints,
  decrementActionPoints,
  pot1Type,
  setPot1Type,
  pot1IsEmpty,
  setPot1IsEmpty,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  pot1Age,
  setPot1Age,
  pot1IsFullyGrown,
  setPot1IsFullyGrown
}) => {

  // useStates
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pot #1 UseStates
  const [pot1IsSeed, setPot1IsSeed] = useState(null)
  const [pot1IsSeedling, setPot1IsSeedling] = useState(null)

  // Plant Pot #1 Function
  const plantPot1 = () => {
    if (pot1IsEmpty === true && actionPoints > 0) {
      setPot1IsEmpty(!pot1IsEmpty); //function
      setPot1IsCaredFor(!pot1IsCaredFor); //function
      setPot1IsSeed(true);
    } else if (pot1IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot1IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

  // Check Plant Status
  const checkPlant1Status = () => {
    if (pot1Type === "Tulip" && pot1Age <2) {
      setPot1IsSeed(true);
      console.log("meow!");
    } else if (pot1Type === "Tulip" && pot1Age < 3) {
        setPot1IsSeed(false);
        setPot1IsSeedling(true);
    } else if (pot1Type === "Tulip" && pot1Age >= 3) {
        setPot1IsSeedling(false);
        setPot1IsFullyGrown(true);
    } else if (pot1Type === "Iris" && pot1Age < 2) {
        setPot1IsSeed(true);
    } else if (pot1Type === "Iris" && pot1Age < 4) {
        setPot1IsSeed(false);
        setPot1IsSeedling(true);
    } else if (pot1Type === "Iris" && pot1Age >= 4) {
        setPot1IsSeedling(false);
        setPot1IsFullyGrown(true);
    } else if (pot1Type === "Forget-Me-Not" && pot1Age < 3) {
        setPot1IsSeed(true);
    } else if (pot1Type === "Forget-Me-Not" && pot1Age < 5) {
        setPot1IsSeed(false);
        setPot1IsSeedling(true);
    } else if (pot1Type === "Forget-Me-Not" && pot1Age >= 5) {
        setPot1IsSeedling(false);
        setPot1IsFullyGrown(true);
    }
  }
  
  // Increment Pot Age
  const incrementPot1Age = () => {
    setPot1Age((prevState) => prevState + 1);
  };

  // Care For Plant
  const careForPlant1 = () => {
    incrementPot1Age();
    decrementActionPoints();
    setPot1IsCaredFor(true);
    checkPlant1Status();
  };

  return (
    <Container>
      {/* Pot #1 */}
      <div>
        <p>
          Plant #1: {pot1Type}
          <span style={{ display: pot1IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot1Age}, Seed: {pot1IsSeed ? "True" : "False"}, Seedling: {pot1IsSeedling ? "True" : "False"} Fully Grown: {pot1IsFullyGrown ? "True" : "False"}
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
      
    </Container>
  );
};

export default Pot1;
