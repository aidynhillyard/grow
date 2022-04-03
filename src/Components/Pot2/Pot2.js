import "./Pot2.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import emptypot from "../../images/emptypot.png";
import seedling from "../../images/seedling.png";
import tulip from "../../images/tulip.png";
import iris from "../../images/iris.png";
import forgetmenot from "../../images/forgetmenot.png";

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
  setPot2IsFullyGrown,
}) => {
  // useStates
  const [pot2IsSeed, setPot2IsSeed] = useState(null);
  const [pot2IsSeedling, setPot2IsSeedling] = useState(null);

  // Plant Pot #2 Function
  const plantPot2 = () => {
    if (pot2IsEmpty === true && actionPoints > 0) {
      setPot2IsEmpty(!pot2IsEmpty);
      setPot2IsCaredFor(!pot2IsCaredFor);
      setPot2IsSeed(true);
      setPot2Age(0);
    } else if (pot2IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot2IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

  // Check Plant Status
  const checkPlant2Status = () => {
    if (pot2Type === "Tulip" && pot2Age === 1) {
      setPot2IsSeed(true);
    } else if (pot2Type === "Tulip" && pot2Age === 2) {
      setPot2IsSeed(false);
      setPot2IsSeedling(true);
    } else if (pot2Type === "Tulip" && pot2Age > 2) {
      setPot2IsSeedling(false);
      setPot2IsFullyGrown(true);
    } else if (pot2Type === "Iris" && pot2Age === 1) {
      setPot2IsSeed(true);
    } else if ((pot2Type === "Iris" && pot2Age === 2) || pot2Age === 3) {
      setPot2IsSeed(false);
      setPot2IsSeedling(true);
    } else if (pot2Type === "Iris" && pot2Age > 3) {
      setPot2IsSeedling(false);
      setPot2IsFullyGrown(true);
    } else if (pot2Type === "Forget-Me-Not" && pot2Age < 2) {
      setPot2IsSeed(true);
    } else if (
      (pot2Type === "Forget-Me-Not" && pot2Age === 3) ||
      pot2Age === 4
    ) {
      setPot2IsSeed(false);
      setPot2IsSeedling(true);
    } else if (pot2Type === "Forget-Me-Not" && pot2Age > 4) {
      setPot2IsSeedling(false);
      setPot2IsFullyGrown(true);
    }
  };

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
        <div style={{ display: pot2IsEmpty || pot2IsSeed ? "inline" : "none" }}>
          <img className="plant-imgs" src={emptypot} />
        </div>
        <div style={{ display: pot2IsSeedling === true ? "inline" : "none" }}>
          <img className="plant-imgs" src={seedling} />
        </div>
        <div
          style={{
            display:
              pot2Type === "Iris" && pot2IsFullyGrown === true
                ? "inline"
                : "none",
          }}
        >
          <img className="plant-imgs" src={iris} />
        </div>
        <div
          style={{
            display:
              pot2Type === "Tulip" && pot2IsFullyGrown === true
                ? "inline"
                : "none",
          }}
        >
          <img className="plant-imgs" src={tulip} />
        </div>
        <div
          style={{
            display:
              pot2Type === "Forget-Me-Not" && pot2IsFullyGrown === true
                ? "inline"
                : "none",
          }}
        >
          <img className="plant-imgs" src={forgetmenot} />
        </div>
        <p className="plant-name">
          Plant #2: {pot2Type}
          <span style={{ display: pot2IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot2Age}
          </span>
        </p>
        <p style={{ display: pot2IsFullyGrown === true ? "inline" : "none" }}>
          Your {pot2Type} is fully grown!
        </p>
      </div>
      <div
        style={{
          display:
            pot2IsEmpty === true || pot2IsCaredFor === true ? "none" : "block",
        }}
      >
        <button
          variant="info"
          onClick={() => {
            careForPlant2();
          }}
        >
          Care for Plant
        </button>
      </div>
      <div
        style={{
          display: pot2IsEmpty === true && actionPoints > 0 ? "block" : "none",
        }}
      >
        <div className="choose-a-seed">
          <DropdownButton id="dropdown-item-button" title="Choose a Seed">
            <Dropdown.Item
              id="flower"
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
              id="flower"
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
              id="flower"
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
      </div>
      <div style={{ display: pot2IsEmpty === false && pot2Age === 1 ? "inline" : "none" }}>
        Your {pot2Type} is planted!
      </div>
      <div style={{ display: pot2IsCaredFor === true && pot2Age > 1 ? "inline" : "none" }}>
        You have cared for your {pot2Type} plant today!
      </div>
    </Container>
  );
};

export default Pot2;
