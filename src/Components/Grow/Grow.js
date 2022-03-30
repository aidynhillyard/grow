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
  const [pot1Type, setPot1Type] = useState("None");
  const [pot1IsCaredFor, setPot1IsCaredFor] = useState(null);
  const [pot1IsFullyGrown, setPot1IsFullyGrown] = useState(false);

  // Pot #2 UseStates
  const [pot2IsEmpty, setPot2IsEmpty] = useState(true);
  const [pot2Type, setPot2Type] = useState("None");
  const [pot2IsCaredFor, setPot2IsCaredFor] = useState(null);
  const [pot2IsFullyGrown, setPot2IsFullyGrown] = useState(false);

  // Pot #3 UseStates
  const [pot3IsEmpty, setPot3IsEmpty] = useState(true);
  const [pot3Type, setPot3Type] = useState("None");
  const [pot3IsCaredFor, setPot3IsCaredFor] = useState(null);
  const [pot3IsFullyGrown, setPot3IsFullyGrown] = useState(false);

  // Town UseStates
  const [talkedToFarhana, setTalkedToFarhana] = useState(false);
  const [dialogueStepFarhana, setDialogueStepFarhana] = useState(1);
  const [tradePlantFarhana, setTradePlantFarhana] = useState(false);
  const [talkedToJi, setTalkedToJi] = useState(false);
  const [dialogueStepJi, setDialogueStepJi] = useState(1);
  const [tradePlantJi, setTradePlantJi] = useState(false);
  const [talkedToAlba, setTalkedToAlba] = useState(false);
  const [dialogueStepAlba, setDialogueStepAlba] = useState(1);
  const [tradePlantAlba, setTradePlantAlba] = useState(false);

  // useEffect Placeholder
  useEffect(() => console.log("Hello world"), [actionPoints]);

  // Decrement Action Points
  const decrementActionPoints = () => {
    setActionPoints((prevState) => prevState - 1);
  };

  // Check Farhana Dialogue
  const checkFarhanaDialogue = () => {
    if (talkedToFarhana === true && dialogueStepFarhana < 3) {
      setDialogueStepFarhana((prevState) => prevState + 1);
    } else if (
      talkedToFarhana === true &&
      dialogueStepFarhana === 3 &&
      ((pot1Type === "Forget-Me-Not" && pot1IsFullyGrown === true) ||
        (pot2Type === "Forget-Me-Not" && pot2IsFullyGrown === true) ||
        (pot3Type === "Forget-Me-Not" && pot3IsFullyGrown === true))
    ) {
      setDialogueStepFarhana((prevState) => prevState + 1);
    } else if (
      talkedToFarhana === true &&
      dialogueStepFarhana === 4 &&
      tradePlantFarhana === true
    ) {
      setDialogueStepFarhana((prevState) => prevState + 1);
    }
  };

  // Check Ji Dialogue
  const checkJiDialogue = () => {
    if (talkedToJi === true && dialogueStepJi < 3) {
      setDialogueStepJi((prevState) => prevState + 1);
    } else if (
      talkedToJi === true &&
      dialogueStepJi === 3 &&
      ((pot1Type === "Tulip" && pot1IsFullyGrown === true) ||
        (pot2Type === "Tulip" && pot2IsFullyGrown === true) ||
        (pot3Type === "Tulip" && pot3IsFullyGrown === true))
    ) {
      setDialogueStepJi((prevState) => prevState + 1);
    } else if (
      talkedToJi === true &&
      dialogueStepJi === 4 &&
      tradePlantJi === true
    ) {
      setDialogueStepJi((prevState) => prevState + 1);
    }
  };

  // Check Alba Dialogue
  const checkAlbaDialogue = () => {
    if (talkedToAlba === true && dialogueStepAlba < 3) {
      setDialogueStepAlba((prevState) => prevState + 1);
    } else if (
      talkedToAlba === true &&
      dialogueStepAlba === 3 &&
      ((pot1Type === "Iris" && pot1IsFullyGrown === true) ||
        (pot2Type === "Iris" && pot2IsFullyGrown === true) ||
        (pot3Type === "Iris" && pot3IsFullyGrown === true))
    ) {
      setDialogueStepAlba((prevState) => prevState + 1);
    } else if (
      talkedToAlba === true &&
      dialogueStepAlba === 4 &&
      tradePlantAlba === true
    ) {
      setDialogueStepAlba((prevState) => prevState + 1);
    }
  };

  // Start of Day
  const startNewDay = () => {
    setActionPoints(4);
    setLocation("home");
    setPot1IsCaredFor(false);
    setPot2IsCaredFor(false);
    setPot3IsCaredFor(false);
    checkFarhanaDialogue();
    checkJiDialogue();
    checkAlbaDialogue();
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
        <p>
          This is where the introduction scene will take place between the
          player and Farhana.
        </p>
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
          decrementActionPoints={decrementActionPoints}
          startNewDay={startNewDay}
          // Pot #1 Props
          pot1IsEmpty={pot1IsEmpty}
          setPot1IsEmpty={setPot1IsEmpty}
          pot1Type={pot1Type}
          setPot1Type={setPot1Type}
          pot1IsCaredFor={pot1IsCaredFor}
          setPot1IsCaredFor={setPot1IsCaredFor}
          pot1IsFullyGrown={pot1IsFullyGrown}
          setPot1IsFullyGrown={setPot1IsFullyGrown}
          // Pot #2 Props
          pot2IsEmpty={pot2IsEmpty}
          setPot2IsEmpty={setPot2IsEmpty}
          pot2Type={pot2Type}
          setPot2Type={setPot2Type}
          pot2IsCaredFor={pot2IsCaredFor}
          setPot2IsCaredFor={setPot2IsCaredFor}
          pot2IsFullyGrown={setPot2IsFullyGrown}
          setPot2IsFullyGrown={setPot2IsFullyGrown}
          // Pot #3 Props
          pot3IsEmpty={pot3IsEmpty}
          setPot3IsEmpty={setPot3IsEmpty}
          pot3Type={pot3Type}
          setPot3Type={setPot3Type}
          pot3IsCaredFor={pot3IsCaredFor}
          setPot3IsCaredFor={setPot3IsCaredFor}
          pot3IsFullyGrown={setPot3IsFullyGrown}
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
          decrementActionPoints={decrementActionPoints}
          // Farhana
          talkedToFarhana={talkedToFarhana}
          setTalkedToFarhana={setTalkedToFarhana}
          dialogueStepFarhana={dialogueStepFarhana}
          setDialogueStepFarhana={setDialogueStepFarhana}
          tradePlantFarhana={tradePlantFarhana}
          setTradePlantFarhana={setTradePlantFarhana}
          // Ji
          talkedToJi={talkedToJi}
          setTalkedToJi={setTalkedToJi}
          dialogueStepJi={dialogueStepJi}
          setDialogueStepJi={setDialogueStepJi}
          tradePlantJi={tradePlantJi}
          setTradePlantJi={setTradePlantJi}
          // Alba
          talkedToAlba={talkedToAlba}
          setTalkedToAlba={setTalkedToAlba}
          dialogueStepAlba={dialogueStepAlba}
          setDialogueStepAlba={setDialogueStepAlba}
          tradePlantAlba={tradePlantAlba}
          setTradePlantAlba={setTradePlantAlba}
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
