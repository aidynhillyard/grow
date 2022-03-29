import "./Grow.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Home from "../Home/Home";
import Town from "../Town/Town";
import NewDay from "../NewDay/NewDay";
import { useState } from "react";

const Grow = () => {
  // *** USE STATES ***

  // Location will show/hide Home and Town
  const [location, setLocation] = useState("tutorial");

  // Action Points start at 4 each day
  const [actionPoints, setActionPoints] = useState(4);

  // Pot #1 UseStates
  const [pot1IsEmpty, setPot1IsEmpty] = useState(true);
  const [pot1Type, setPot1Type] = useState("None");
  const [pot1Age, setPot1Age] = useState(0);
  const [pot1IsCaredFor, setPot1IsCaredFor] = useState(null);
  const [pot1IsFullyGrown, setPot1IsFullyGrown] = useState(false);

  // Pot #2 UseStates
  const [pot2IsEmpty, setPot2IsEmpty] = useState(true);
  const [pot2Type, setPot2Type] = useState("None");
  const [pot2Age, setPot2Age] = useState(0);
  const [pot2IsCaredFor, setPot2IsCaredFor] = useState(null);
  const [pot2IsFullyGrown, setPot2IsFullyGrown] = useState(false);

  // Pot #3 UseStates
  const [pot3IsEmpty, setPot3IsEmpty] = useState(true);
  const [pot3Type, setPot3Type] = useState("None");
  const [pot3Age, setPot3Age] = useState(0);
  const [pot3IsCaredFor, setPot3IsCaredFor] = useState(null);
  const [pot3IsFullyGrown, setPot3IsFullyGrown] = useState(false);

  // Town UseStates
  const [talkedToFarhana, setTalkedToFarhana] = useState(false)
  const [dialogueStepFarhana, setDialogueStepFarhana] = useState(1)
  const [talkedToJi, setTalkedToJi] = useState(false)
  const [dialogueStepJi, setDialogueStepJi] = useState(1)
  const [talkedToAlba, setTalkedToAlba] = useState(false)
  const [dialogueStepAlba, setDialogueStepAlba] = useState(1)

  // Start of Day
  const startNewDay = () => {
    setActionPoints(4);
    setLocation("home")
    setPot1IsCaredFor(false);
    setPot2IsCaredFor(false);
    setPot3IsCaredFor(false);
    if (talkedToFarhana === true) {
      setDialogueStepFarhana((prevState) => prevState + 1)
    }
    if (talkedToJi === true) {
      setDialogueStepJi((prevState) => prevState + 1)
    }
    if (talkedToAlba === true) {
      setDialogueStepAlba((prevState) => prevState + 1)
    }
    setTalkedToFarhana(false);
    setTalkedToJi(false);
    setTalkedToAlba(false);
  };
console.log(talkedToFarhana)
console.log(dialogueStepFarhana)


  // Plant Pot #1 Function
  const plantPot1 = () => {
    if (pot1IsEmpty === true && actionPoints > 0) {
      setPot1IsEmpty(!pot1IsEmpty); //function
      setPot1IsCaredFor(!pot1IsCaredFor); //function
    } else if (pot1IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot1IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

  // Plant Pot #2 Function
  const plantPot2 = () => {
    if (pot2IsEmpty === true && actionPoints > 0) {
      setPot2IsEmpty(!pot2IsEmpty); //function
      setPot2IsCaredFor(!pot2IsCaredFor); //function
    } else if (pot2IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.");
    } else if (pot2IsEmpty === false) {
      console.log("This pot already has a plant in it!");
    }
  };

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

 
  
  return (
    <Container>
      <div>
        <h1>GROW</h1>
        <h2>Tagline</h2>
      </div>
      <div>
        <Button
          variant="success"
          onClick={() => {
            setLocation("tutorial");
          }}
        >
          Start a New Game
        </Button>{" "}
        <p>Action Points = {actionPoints}</p>
      </div>
      <div style={{ display: actionPoints === 0 ? "inline" : "none" }}>
        <NewDay startNewDay={startNewDay} />
      </div>
      {/* ********
        Tutorial
        ******** */}
      <div style={{ display: location === "tutorial" ? "inline" : "none" }}>
        <h1>This is the Tutorial</h1>
        <p>It has text under it.</p>
        <Button
          variant="success"
          onClick={() => {
            setLocation("home");
          }}
        >
          Go to Home
        </Button>
      </div>
      {/* ********
        Home
        ******** */}
      <div style={{ display: location === "home" ? "inline" : "none" }}>
        <Home
          actionPoints={actionPoints}
          setActionPoints={setActionPoints}
          startNewDay={startNewDay}
          // Pot #1 Props
          plantPot1={plantPot1}
          pot1IsEmpty={pot1IsEmpty}
          setPot1IsEmpty={setPot1IsEmpty}
          pot1Type={pot1Type}
          setPot1Type={setPot1Type}
          pot1Age={pot1Age}
          setPot1Age={setPot1Age}
          pot1IsCaredFor={pot1IsCaredFor}
          setPot1IsCaredFor={setPot1IsCaredFor}
          pot1IsFullyGrown={pot1IsFullyGrown}
          setPot1IsFullyGrown={setPot1IsFullyGrown}
          // Pot #2 Props
          plantPot2={plantPot2}
          pot2IsEmpty={pot2IsEmpty}
          setPot2IsEmpty={setPot2IsEmpty}
          pot2Type={pot2Type}
          setPot2Type={setPot2Type}
          pot2Age={pot2Age}
          setPot2Age={setPot2Age}
          pot2IsCaredFor={pot2IsCaredFor}
          setPot2IsCaredFor={setPot2IsCaredFor}
          pot2IsFullyGrown={pot2IsFullyGrown}
          setPot2IsFullyGrown={setPot2IsFullyGrown}
          // Pot #3 Props
          plantPot3={plantPot3}
          pot3IsEmpty={pot3IsEmpty}
          setPot3IsEmpty={setPot3IsEmpty}
          pot3Type={pot3Type}
          setPot3Type={setPot3Type}
          pot3Age={pot3Age}
          setPot3Age={setPot3Age}
          pot3IsCaredFor={pot3IsCaredFor}
          setPot3IsCaredFor={setPot3IsCaredFor}
          pot3IsFullyGrown={pot3IsFullyGrown}
          setPot3IsFullyGrown={setPot3IsFullyGrown}
        />
      </div>

      {/* ********
        Town
        ******** */}
      <div style={{ display: location === "town" ? "inline" : "none" }}>
        <Town
        actionPoints={actionPoints}
        setActionPoints={setActionPoints}
        talkedToFarhana={talkedToFarhana}
        setTalkedToFarhana={setTalkedToFarhana}
        talkedToJi={talkedToJi}
        setTalkedToJi={setTalkedToJi}
        talkedToAlba={talkedToAlba}
        setTalkedToAlba={setTalkedToAlba}
        dialogueStepFarhana={dialogueStepFarhana}
        setDialogueStepFarhana={setDialogueStepFarhana}
        dialogueStepJi={dialogueStepJi}
        setDialogueStepJi={setDialogueStepJi}
        dialogueStepAlba={dialogueStepAlba}
        setDialogueStepAlba={setDialogueStepAlba}
        />
      </div>
      <div>
        <Button
          variant="success"
          style={{ display: location === "town" ? "inline" : "none" }}
          onClick={() => {
            setLocation("home");
          }}
        >
          Travel to Home
        </Button>
      </div>
      <div>
        <Button
          variant="success"
          style={{
            display:
              location === "home" &&
              (pot1IsCaredFor === true ||
                pot1IsCaredFor === null ||
                pot1IsEmpty === true) &&
              (pot2IsCaredFor === true ||
                pot2IsCaredFor === null ||
                pot2IsEmpty === true) &&
              (pot3IsCaredFor === true ||
                pot3IsCaredFor === null ||
                pot3IsEmpty === true)
                ? "inline"
                : "none",
          }}
          onClick={() => {
            setLocation("town");
          }}
        >
          Travel to Town
        </Button>
      </div>
    </Container>
  );
};

export default Grow;
