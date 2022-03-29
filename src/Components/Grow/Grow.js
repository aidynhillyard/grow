import "./Grow.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Home from "../Home/Home";
import Town from "../Town/Town";
import NewDay from "../NewDay/NewDay";
import { useState, useEffect } from "react";

const Grow = () => {
  // *** USE STATES ***

  // Location will show/hide Home and Town
  const [location, setLocation] = useState("tutorial");

  // Action Points start at 4 each day
  const [actionPoints, setActionPoints] = useState(4);

  // Pot #1 UseStates
  const [pot1IsEmpty, setPot1IsEmpty] = useState(true);
  const [pot1IsCaredFor, setPot1IsCaredFor] = useState(null);

  // Pot #2 UseStates
  const [pot2IsEmpty, setPot2IsEmpty] = useState(true);
  const [pot2IsCaredFor, setPot2IsCaredFor] = useState(null);

  // Pot #3 UseStates
  const [pot3IsEmpty, setPot3IsEmpty] = useState(true);
  const [pot3IsCaredFor, setPot3IsCaredFor] = useState(null);

  // Town UseStates
  const [talkedToFarhana, setTalkedToFarhana] = useState(false);
  const [dialogueStepFarhana, setDialogueStepFarhana] = useState(1);
  const [talkedToJi, setTalkedToJi] = useState(false);
  const [dialogueStepJi, setDialogueStepJi] = useState(1);
  const [talkedToAlba, setTalkedToAlba] = useState(false);
  const [dialogueStepAlba, setDialogueStepAlba] = useState(1);

  // useEffect Placeholder
  useEffect(() => console.log("Hello world"), [actionPoints]);

  // Start of Day
  const startNewDay = () => {
    setActionPoints(4);
    setLocation("home");
    setPot1IsCaredFor(false);
    setPot2IsCaredFor(false);
    setPot3IsCaredFor(false);
    if (talkedToFarhana === true) {
      setDialogueStepFarhana((prevState) => prevState + 1);
    }
    if (talkedToJi === true) {
      setDialogueStepJi((prevState) => prevState + 1);
    }
    if (talkedToAlba === true) {
      setDialogueStepAlba((prevState) => prevState + 1);
    }
    setTalkedToFarhana(false);
    setTalkedToJi(false);
    setTalkedToAlba(false);
  };
  console.log(talkedToFarhana);
  console.log(dialogueStepFarhana);

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
        <p>This is where the introduction scene will take place between the player and Farhana.</p>
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
          pot1IsEmpty={pot1IsEmpty}
          setPot1IsEmpty={setPot1IsEmpty}
          pot1IsCaredFor={pot1IsCaredFor}
          setPot1IsCaredFor={setPot1IsCaredFor}
          // Pot #2 Props
          pot2IsEmpty={pot2IsEmpty}
          setPot2IsEmpty={setPot2IsEmpty}
          pot2IsCaredFor={pot2IsCaredFor}
          setPot2IsCaredFor={setPot2IsCaredFor}
          // Pot #3 Props
          pot3IsEmpty={pot3IsEmpty}
          setPot3IsEmpty={setPot3IsEmpty}
          pot3IsCaredFor={pot3IsCaredFor}
          setPot3IsCaredFor={setPot3IsCaredFor}
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
