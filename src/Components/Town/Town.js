import "./Town.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Farhana1Conversation from "../Farhana1Conversation/Farhana1Conversation";
import Farhana2Conversation from "../Farhana2Conversation/Farhana2Conversation";

const Town = ({
  actionPoints,
  setActionPoints,
  talkedToFarhana,
  setTalkedToFarhana,
  talkedToJi,
  setTalkedToJi,
  talkedToAlba,
  setTalkedToAlba,
  dialogueStepFarhana,
  dialogueStepJi,
  dialogueStepAlba,
}) => {

  // useStates for Show/Hide Dialogue
  const [showF1, setShowF1] = useState(false);
  const [showF2, setShowF2] = useState(false);
  const [showJ1, setShowJ1] = useState(false);
  const [showJ2, setShowJ2] = useState(false);
  const [showA1, setShowA1] = useState(false);
  const [showA2, setShowA2] = useState(false);

  // Talk to Farhana Function
  const farhanaConversation = () => {
    if (talkedToFarhana === false) {
      decrementActionPoints();
    }
    setTalkedToFarhana(true);
  };

  // Talk to Ji Function
  const jiConversation = () => {
    if (talkedToJi === false) {
      decrementActionPoints();
    }
    setTalkedToJi(true);
  };

  // Talk to Alba Function
  const albaConversation = () => {
    if (talkedToAlba === false) {
      decrementActionPoints();
    }
    setTalkedToAlba(true);
  };
  // Decrement Action Points
  const decrementActionPoints = () => {
    setActionPoints((prevState) => prevState - 1);
  };

  // Thoughts on Town
  // could have photo of town and text about town at top

  // Conditional Logic for talking to a townsperson (e.g., Farhana)
//     Determine which dialogue to show
  //        if dialogueStepFarhana = 1, then display conversation1
  //        else if dialogueStepFarhana = 2, then display conversation2
  //        else if dialogueStepFarhana = 3, then display conversation3
  //        else if dialogueStepFarhana = 4, then display conversation4
  //        else (if dialogueStepFarhana >= 5), then display conversation5

  // On End Day, if talkedToFarhana = true, then dialogueStepFarhana += 1
  // On Start New Day, talkedToFarhana = false, but dialogueStepFarhana does not change

  // Conditional logic for trading plant to townsperson
  // (conversation4)

  // if dialogueStepFarhana === 4 && (pot1Type === 'marigold' || pot2Type === 'marigold' || pot3Type === 'marigold'), then display conversation4, which has dialgoue offering marigold plant to Farhana
  // Button says "Give Plant", onClick runs function to set that pot to Empty


  return (
    <Container>
      <h1>Town</h1>
      <p>
        This is placeholder text about the town. It also has instructions on
        talking to the townspeople below.
      </p>
      {/* Farhana Dialogue #1 */}
      <div className="farhana-dialogue1" style={{ display: dialogueStepFarhana === 1 ? "inline" : "none" }}>
        <Farhana1Conversation 
        actionPoints={actionPoints}
        farhanaConversation={farhanaConversation}
        />
      </div>
      {/* Farhana Dialogue #2 */}
      <div className="farhana-dialogue2" style={{ display: dialogueStepFarhana === 2 ? "inline" : "none" }}>
        <Farhana2Conversation
        actionPoints={actionPoints}
        farhanaConversation={farhanaConversation} />
      </div>
      <div>
        <h3>Ji</h3>
        <p>
          This is text about Ji. It says a little bit about who they are and
          their relationship to you. There's probably also a picture of them.
        </p>
        <Alert show={showJ1} variant="success">
          <div className="npc-dialogue">
            <p>
              This is what Ji is saying. He is talking about the town and
              about other things that we are interested in hearing. This is more
              text to show he is still talking.
            </p>
          </div>
          <hr />
          <div className="player-dialogue">
            <p>
              Player dialogue goes here. Let's start with one dialogue option
              first and not worry about player choices until later.
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowJ2(true);
                setShowJ1(false);
              }}
              variant="outline-success"
            >
              Next
            </Button>
          </div>
        </Alert>
        <Alert show={showJ2} variant="success">
          <p>Ji's response. He says things depending on what you say.</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowJ2(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>

        {!showJ1 && !showJ2 && (
          <Button style={{ display: actionPoints > 0 ? "inline" : "none" }}
            onClick={() => {
              setShowJ1(true);
              jiConversation();
            }}
          >
            Talk
          </Button>
        )}
      </div>
      <div>
        <h3>Alba</h3>
        <p>
          This is text about Alba. It says a little bit about who they are and
          their relationship to you. There's probably also a picture of them.
        </p>
        <Alert show={showA1} variant="success">
          <div className="npc-dialogue">
            <p>
              This is what Alba is saying. They are talking about the town and
              about other things that we are interested in hearing. This is more
              text to show they are still talking.
            </p>
          </div>
          <hr />
          <div className="player-dialogue">
            <p>
              Player dialogue goes here. Let's start with one dialogue option
              first and not worry about player choices until later.
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowA2(true);
                setShowA1(false);
              }}
              variant="outline-success"
            >
              Next
            </Button>
          </div>
        </Alert>
        <Alert show={showA2} variant="success">
          <p>Alba's response. They say things depending on what you say.</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowA2(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>

        {!showA1 && !showA2 && (
          <Button style={{ display: actionPoints > 0 ? "inline" : "none" }}
            onClick={() => {
              setShowA1(true);
              albaConversation();
            }}
          >
            Talk
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Town;
