import "./Pot2.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Pot2 = ({
  actionPoints,
  decrementActionPoints,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2Type,
  setPot2Type,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot2Age,
  setPot2Age,
  pot2IsFullyGrown,
  setPot2IsFullyGrown
}) => {

  // useStates
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pot #2 UseStates
  
  const [pot2IsSeed, setPot2IsSeed] = useState(null)
  const [pot2IsSeedling, setPot2IsSeedling] = useState(null)

  // Plant Pot #2 Function
  const plantPot2 = () => {
    if (pot2IsEmpty === true && actionPoints > 0) {
      setPot2IsEmpty(!pot2IsEmpty); //function
      setPot2IsCaredFor(!pot2IsCaredFor); //function
      setPot2Age(0);
    } else if (pot2IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot2IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

  // Check Plant Status
  const checkPlant2Status = () => {
    if (pot2Type === "Tulip" && pot2Age <2) {
      setPot2IsSeed(true);
      console.log("meow!");
    } else if (pot2Type === "Tulip" && pot2Age < 3) {
        setPot2IsSeed(false);
        setPot2IsSeedling(true);
    } else if (pot2Type === "Tulip" && pot2Age >= 3) {
        setPot2IsSeedling(false);
        setPot2IsFullyGrown(true);
    } else if (pot2Type === "Iris" && pot2Age < 2) {
        setPot2IsSeed(true);
    } else if (pot2Type === "Iris" && pot2Age < 4) {
        setPot2IsSeed(false);
        setPot2IsSeedling(true);
    } else if (pot2Type === "Iris" && pot2Age >= 4) {
        setPot2IsSeedling(false);
        setPot2IsFullyGrown(true);
    } else if (pot2Type === "Forget-Me-Not" && pot2Age < 3) {
        setPot2IsSeed(true);
    } else if (pot2Type === "Forget-Me-Not" && pot2Age < 5) {
        setPot2IsSeed(false);
        setPot2IsSeedling(true);
    } else if (pot2Type === "Forget-Me-Not" && pot2Age >= 5) {
        setPot2IsSeedling(false);
        setPot2IsFullyGrown(true);
    }
  }

  // Increment Pot Age
  const incrementPot2Age = () => {
    setPot2Age((prevState) => prevState + 1);
  };

  // Care For Plant
  const careForPlant2 = () => {
    incrementPot2Age();
    decrementActionPoints();
    setPot2IsCaredFor(true);
    checkPlant2Status();
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Pot2;
