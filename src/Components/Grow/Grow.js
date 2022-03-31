import "./Grow.css";
import Container from "react-bootstrap/Container";
import Tutorial from "../Tutorial/Tutorial";
import Home from "../Home/Home";
import Town from "../Town/Town";
import NewDay from "../NewDay/NewDay";
import { useState, useEffect } from "react";

const Grow = () => {
  // *** USE STATES ***

  // Location useState
  const [location, setLocation] = useState("tutorial");

  // Action Points and Day useStates
  const [actionPoints, setActionPoints] = useState(2);
  const [day, setDay] = useState(1);

  // Letter UseStates
  const [letter1, setLetter1] = useState(false);
  const [letter2, setLetter2] = useState(false);
  const [letter3, setLetter3] = useState(false);

  // Pot #1 UseStates
  const [pot1IsEmpty, setPot1IsEmpty] = useState(true);
  const [pot1Type, setPot1Type] = useState("None");
  const [pot1IsCaredFor, setPot1IsCaredFor] = useState(null);
  const [pot1IsFullyGrown, setPot1IsFullyGrown] = useState(false);
  const [pot1Age, setPot1Age] = useState(null);

  // Pot #2 UseStates
  const [pot2IsEmpty, setPot2IsEmpty] = useState(true);
  const [pot2Type, setPot2Type] = useState("None");
  const [pot2IsCaredFor, setPot2IsCaredFor] = useState(null);
  const [pot2IsFullyGrown, setPot2IsFullyGrown] = useState(false);
  const [pot2Age, setPot2Age] = useState(null);

  // Pot #3 UseStates
  const [pot3IsEmpty, setPot3IsEmpty] = useState(true);
  const [pot3Type, setPot3Type] = useState("None");
  const [pot3IsCaredFor, setPot3IsCaredFor] = useState(null);
  const [pot3IsFullyGrown, setPot3IsFullyGrown] = useState(false);
  const [pot3Age, setPot3Age] = useState(null);

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

  // *** FUNCTIONS ***

  // useEffect Placeholder
  useEffect(() => console.log("Hello world"), [actionPoints]);

  // Decrement Action Points
  const decrementActionPoints = () => {
    setActionPoints((prevState) => prevState - 1);
  };

  // Reset Pot #1
  const resetPot1 = () => {
    setPot1IsEmpty(true);
    setPot1Type("None");
    setPot1IsCaredFor(null);
    setPot1IsFullyGrown(false);
    setPot1Age(null);
  };

  // Reset Pot #2
  const resetPot2 = () => {
    setPot2IsEmpty(true);
    setPot2Type("None");
    setPot2IsCaredFor(null);
    setPot2IsFullyGrown(false);
    setPot2Age(null);
  };

  // Reset Pot #3
  const resetPot3 = () => {
    setPot3IsEmpty(true);
    setPot3Type("None");
    setPot3IsCaredFor(null);
    setPot3IsFullyGrown(false);
    setPot3Age(null);
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
    if (talkedToJi === true) {
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

  // Trade Deal Farhana
  const tradeDealFarhana = () => {
    setTradePlantFarhana(true);
    setLetter3(true);
    if (pot1Type === "Forget-Me-Not" && pot1IsFullyGrown === true) {
      resetPot1();
    } else if (pot2Type === "Forget-Me-Not" && pot2IsFullyGrown === true) {
      resetPot2();
    } else {
      resetPot3();
    }
  };

  // Trade Deal Ji
  const tradeDealJi = () => {
    setTradePlantJi(true);
    setLetter2(true);
    if (pot1Type === "Tulip" && pot1IsFullyGrown === true) {
      resetPot1();
    } else if (pot2Type === "Tulip" && pot2IsFullyGrown === true) {
      resetPot2();
    } else {
      resetPot3();
    }
  };

  // Trade Deal Alba
  const tradeDealAlba = () => {
    setTradePlantAlba(true);
    setLetter1(true);
    if (pot1Type === "Iris" && pot1IsFullyGrown === true) {
      resetPot1();
    } else if (pot2Type === "Iris" && pot2IsFullyGrown === true) {
      resetPot2();
    } else {
      resetPot3();
    }
  };

  // Start of Day
  const startNewDay = () => {
    setActionPoints(2);
    setLocation("home");
    setDay((prevState) => prevState + 1);
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
      <button onClick={() => {
            setLocation("home");}}>*** go home ***</button>
      <div style={{ display: location === "tutorial" ? "none" : "inline" }}>
        <p>Action Points: {actionPoints}</p>
        <p>Day: {day}</p>
      </div>
      <div style={{ display: actionPoints === 0 ? "inline" : "none" }}>
        <NewDay startNewDay={startNewDay} />
      </div>
      {/* ********
        Tutorial
        ******** */}
      <div style={{ display: location === "tutorial" ? "inline" : "none" }}>
        <Tutorial setLocation={setLocation} />
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
          letter1={letter1}
          letter2={letter2}
          letter3={letter3}
          // Pot #1 Props
          pot1IsEmpty={pot1IsEmpty}
          setPot1IsEmpty={setPot1IsEmpty}
          pot1Type={pot1Type}
          setPot1Type={setPot1Type}
          pot1IsCaredFor={pot1IsCaredFor}
          setPot1IsCaredFor={setPot1IsCaredFor}
          pot1Age={pot1Age}
          setPot1Age={setPot1Age}
          pot1IsFullyGrown={pot1IsFullyGrown}
          setPot1IsFullyGrown={setPot1IsFullyGrown}
          // Pot #2 Props
          pot2IsEmpty={pot2IsEmpty}
          setPot2IsEmpty={setPot2IsEmpty}
          pot2Type={pot2Type}
          setPot2Type={setPot2Type}
          pot2IsCaredFor={pot2IsCaredFor}
          setPot2IsCaredFor={setPot2IsCaredFor}
          pot2Age={pot2Age}
          setPot2Age={setPot2Age}
          pot2IsFullyGrown={setPot2IsFullyGrown}
          setPot2IsFullyGrown={setPot2IsFullyGrown}
          // Pot #3 Props
          pot3IsEmpty={pot3IsEmpty}
          setPot3IsEmpty={setPot3IsEmpty}
          pot3Type={pot3Type}
          setPot3Type={setPot3Type}
          pot3IsCaredFor={pot3IsCaredFor}
          setPot3IsCaredFor={setPot3IsCaredFor}
          pot3Age={pot3Age}
          setPot3Age={setPot3Age}
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
          location={location}
          setLocation={setLocation}
          decrementActionPoints={decrementActionPoints}
          // Pots
          pot1Type={pot1Type}
          pot1IsFullyGrown={pot1IsFullyGrown}
          pot2Type={pot2Type}
          pot2IsFullyGrown={pot2IsFullyGrown}
          pot3Type={pot3Type}
          pot3IsFullyGrown={pot3IsFullyGrown}
          // Farhana
          talkedToFarhana={talkedToFarhana}
          setTalkedToFarhana={setTalkedToFarhana}
          dialogueStepFarhana={dialogueStepFarhana}
          setDialogueStepFarhana={setDialogueStepFarhana}
          tradeDealFarhana={tradeDealFarhana}
          // Ji
          talkedToJi={talkedToJi}
          setTalkedToJi={setTalkedToJi}
          dialogueStepJi={dialogueStepJi}
          setDialogueStepJi={setDialogueStepJi}
          tradeDealJi={tradeDealJi}
          // Alba
          talkedToAlba={talkedToAlba}
          setTalkedToAlba={setTalkedToAlba}
          dialogueStepAlba={dialogueStepAlba}
          setDialogueStepAlba={setDialogueStepAlba}
          tradeDealAlba={tradeDealAlba}
        />
      </div>
      <div>
        
      </div>
      <div>
        <button
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
        </button>
      </div>
    </Container>
  );
};

export default Grow;
