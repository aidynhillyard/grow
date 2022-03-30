import "./Pot3.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Pot3 = ({
  actionPoints,
  decrementActionPoints,
  pot3IsEmpty,
  setPot3IsEmpty,
  pot3Type,
  setPot3Type,
  pot3IsCaredFor,
  setPot3IsCaredFor,
  pot3Age,
  setPot3Age,
  pot3IsFullyGrown,
  setPot3IsFullyGrown
}) => {

  // useStates
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pot #3 UseStates

  const [pot3Age, setPot3Age] = useState(0);
  const [pot3IsSeed, setPot3IsSeed] = useState(null)
  const [pot3IsSeedling, setPot3IsSeedling] = useState(null)

  // Plant Pot #3 Function
  const plantPot3 = () => {
    if (pot3IsEmpty === true && actionPoints > 0) {
      setPot3IsEmpty(!pot3IsEmpty); //function
      setPot3IsCaredFor(!pot3IsCaredFor); //function
    } else if (pot3IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot3IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

  // Check Plant Status
  const checkPlant3Status = () => {
    if (pot3Type === "Tulip" && pot3Age <2) {
      setPot3IsSeed(true);
      console.log("meow!");
    } else if (pot3Type === "Tulip" && pot3Age < 3) {
        setPot3IsSeed(false);
        setPot3IsSeedling(true);
    } else if (pot3Type === "Tulip" && pot3Age >= 3) {
        setPot3IsSeedling(false);
        setPot3IsFullyGrown(true);
    } else if (pot3Type === "Iris" && pot3Age < 2) {
        setPot3IsSeed(true);
    } else if (pot3Type === "Iris" && pot3Age < 4) {
        setPot3IsSeed(false);
        setPot3IsSeedling(true);
    } else if (pot3Type === "Iris" && pot3Age >= 4) {
        setPot3IsSeedling(false);
        setPot3IsFullyGrown(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age < 3) {
        setPot3IsSeed(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age < 5) {
        setPot3IsSeed(false);
        setPot3IsSeedling(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age >= 5) {
        setPot3IsSeedling(false);
        setPot3IsFullyGrown(true);
    }
  }

  // Increment Pot Age
  const incrementPot3Age = () => {
    setPot3Age((prevState) => prevState + 1);
  };

  // Care For Plant
  const careForPlant3 = () => {
    incrementPot3Age();
    decrementActionPoints();
    setPot3IsCaredFor(true);
    checkPlant3Status();
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Pot3;
