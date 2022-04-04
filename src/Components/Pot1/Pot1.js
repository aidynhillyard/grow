import "./Pot1.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import emptypot from "../../images/emptypot.png";
import seedling from "../../images/seedling.png";
import tulip from "../../images/tulip.png";
import iris from "../../images/iris.png";
import forgetmenot from "../../images/forgetmenot.png";

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
  setPot1IsFullyGrown,
}) => {
  // useStates
  const [pot1IsSeed, setPot1IsSeed] = useState(null);
  const [pot1IsSeedling, setPot1IsSeedling] = useState(null);

  // Plant Pot #1 Function
  const plantPot1 = () => {
    if (pot1IsEmpty === true && actionPoints > 0) {
      setPot1IsEmpty(!pot1IsEmpty); //function
      setPot1IsCaredFor(!pot1IsCaredFor); //function
      setPot1Age(0);
      setPot1IsSeed(true);
    }
  };

  // Check Plant Status
  const checkPlant1Status = () => {
    if (pot1Type === "Tulip" && pot1Age === 1) {
      setPot1IsSeed(true);
    } else if (pot1Type === "Tulip" && pot1Age === 2) {
      setPot1IsSeed(false);
      setPot1IsSeedling(true);
    } else if (pot1Type === "Tulip" && pot1Age > 2) {
      setPot1IsSeedling(false);
      setPot1IsFullyGrown(true);
    } else if (pot1Type === "Iris" && pot1Age === 1) {
      setPot1IsSeed(true);
    } else if ((pot1Type === "Iris" && pot1Age === 2) || pot1Age === 3) {
      setPot1IsSeed(false);
      setPot1IsSeedling(true);
    } else if (pot1Type === "Iris" && pot1Age > 3) {
      setPot1IsSeedling(false);
      setPot1IsFullyGrown(true);
    } else if (pot1Type === "Forget-Me-Not" && pot1Age < 2) {
      setPot1IsSeed(true);
    } else if (
      (pot1Type === "Forget-Me-Not" && pot1Age === 3) ||
      pot1Age === 4
    ) {
      setPot1IsSeed(false);
      setPot1IsSeedling(true);
    } else if (pot1Type === "Forget-Me-Not" && pot1Age > 4) {
      setPot1IsSeedling(false);
      setPot1IsFullyGrown(true);
    }
  };

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
        <div style={{ display: pot1IsEmpty || pot1IsSeed ? "inline" : "none" }}>
          <img className="plant-imgs" src={emptypot} alt="A drawing of an empty plant pot"/>
        </div>
        <div style={{ display: pot1IsSeedling === true ? "inline" : "none" }}>
          <img className="plant-imgs" src={seedling} alt="A drawing of a seedling in a plant pot"/>
        </div>
        <div
          style={{
            display:
              pot1Type === "Iris" && pot1IsFullyGrown === true
                ? "inline"
                : "none",
          }}
        >
          <img className="plant-imgs" src={iris} alt="A drawing of a blue iris flower in a plant pot"/>
        </div>
        <div
          style={{
            display:
              pot1Type === "Tulip" && pot1IsFullyGrown === true
                ? "inline"
                : "none",
          }}
        >
          <img className="plant-imgs" src={tulip} alt="A drawing of a pink tulip flower in a plant pot"/>
        </div>
        <div
          style={{
            display:
              pot1Type === "Forget-Me-Not" && pot1IsFullyGrown === true
                ? "inline"
                : "none",
          }}
        >
          <img className="plant-imgs" src={forgetmenot} alt="A drawing of a blue forget-me-not in a plant pot"/>
        </div>
        <p className="plant-name">
          Plant #1: {pot1Type}
          <span style={{ display: pot1IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot1Age}
          </span>
        </p>
        <p style={{ display: pot1IsFullyGrown === true ? "inline" : "none" }}>
          Your {pot1Type} is fully grown!
        </p>
      </div>
      <div
        style={{
          display:
            pot1IsEmpty === true || pot1IsCaredFor === true ? "none" : "block",
        }}
      >
        <button
          onClick={() => {
            careForPlant1();
          }}
        >
          Care for Plant
        </button>
      </div>
      <div
        style={{
          display: pot1IsEmpty === true && actionPoints > 0 ? "block" : "none",
        }}
      >
        <div className="choose-a-seed">
          <DropdownButton id="dropdown-item-button" title="Choose a Seed">
            <Dropdown.Item
              id="flower"
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
              id="flower"
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
              id="flower"
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
      </div>
      <div style={{ display: pot1IsEmpty === false && pot1Age === 1 ? "inline" : "none" }}>
        Your {pot1Type} is planted!
      </div>
      <div style={{ display: pot1IsCaredFor === true && pot1Age > 1 ? "inline" : "none" }}>
        You have cared for your {pot1Type} plant today!
      </div>
    </Container>
  );
};

export default Pot1;
