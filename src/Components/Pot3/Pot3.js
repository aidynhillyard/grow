import "./Pot3.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import emptypot from "../../images/emptypot.png";
import seedling from "../../images/seedling.png"
import tulip from "../../images/tulip.png";
import iris from "../../images/iris.png";
import forgetmenot from "../../images/forgetmenot.png";

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
  setPot3IsFullyGrown,
}) => {
  // useStates
  const [pot3IsSeed, setPot3IsSeed] = useState(null);
  const [pot3IsSeedling, setPot3IsSeedling] = useState(null);

  // Plant Pot #3 Function
  const plantPot3 = () => {
    if (pot3IsEmpty === true && actionPoints > 0) {
      setPot3IsEmpty(!pot3IsEmpty);
      setPot3IsCaredFor(!pot3IsCaredFor);
      setPot3Age(0);
      setPot3IsSeed(true);
    } else if (pot3IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot3IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

  // Check Plant Status
  const checkPlant3Status = () => {
    if (pot3Type === "Tulip" && pot3Age === 1) {
      setPot3IsSeed(true);
    } else if (pot3Type === "Tulip" && pot3Age === 2) {
      setPot3IsSeed(false);
      setPot3IsSeedling(true);
    } else if (pot3Type === "Tulip" && pot3Age > 2) {
      setPot3IsSeedling(false);
      setPot3IsFullyGrown(true);
    } else if (pot3Type === "Iris" && pot3Age < 2) {
      setPot3IsSeed(true);
    } else if (pot3Type === "Iris" && pot3Age === 3) {
      setPot3IsSeed(false);
      setPot3IsSeedling(true);
    } else if (pot3Type === "Iris" && pot3Age > 3) {
      setPot3IsSeedling(false);
      setPot3IsFullyGrown(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age < 3) {
      setPot3IsSeed(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age === 4) {
      setPot3IsSeed(false);
      setPot3IsSeedling(true);
    } else if (pot3Type === "Forget-Me-Not" && pot3Age > 4) {
      setPot3IsSeedling(false);
      setPot3IsFullyGrown(true);
    }
  };

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
        <div style={{ display: pot3IsEmpty || pot3IsSeed ? "inline" : "none" }}><img className="plant-imgs" src={emptypot}/></div>
        <div style={{ display: pot3IsSeedling === true ? "inline" : "none" }}><img className="plant-imgs" src={seedling}/></div>
        <div style={{ display: pot3Type === "Iris" && pot3IsFullyGrown === true ? "inline" : "none" }}><img className="plant-imgs" src={iris}/></div>
        <div style={{ display: pot3Type === "Tulip" && pot3IsFullyGrown === true ? "inline" : "none" }}><img className="plant-imgs" src={tulip}/></div>
        <div style={{ display: pot3Type === "Forget-Me-Not" && pot3IsFullyGrown === true ? "inline" : "none" }}><img className="plant-imgs" src={forgetmenot}/></div>
        <p className="plant-name">
          Plant #3: {pot3Type}
          <span style={{ display: pot3IsEmpty === true ? "none" : "inline" }}>
            , Age: {pot3Age}
          </span>
          <span style={{ display: pot3IsFullyGrown === true ? "inline" : "none"}}>Your {pot3Type} is fully grown!</span>
        </p>
      </div>
      <div
        style={{
          display:
            pot3IsEmpty === true || pot3IsCaredFor === true ? "none" : "block",
        }}
      >
        <button
          onClick={() => {
            careForPlant3();
          }}
        >
          Care for Plant
        </button>
      </div>
      <div
        style={{
          display: pot3IsEmpty === true && actionPoints > 0 ? "block" : "none",
        }}
      >
        <div className="choose-a-seed">
          <DropdownButton id="dropdown-item-button" title="Choose a Seed">
            <Dropdown.Item id="flower"
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
            <Dropdown.Item id="flower"
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
            <Dropdown.Item id="flower"
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
      </div>
      <div style={{ display: pot3IsCaredFor === true ? "inline" : "none" }}>
        You have cared for your {pot3Type} plant today!
      </div>
    </Container>
  );
};

export default Pot3;
