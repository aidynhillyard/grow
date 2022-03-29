import "./Farhana2Conversation.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const Farhana2Conversation = ({ actionPoints, farhanaConversation }) => {

  // useStates
  const [showF1, setShowF1] = useState(false);
  const [showF2, setShowF2] = useState(false);

  return (
    <div>
        <h3>Farhana</h3>
        <p>
          This is text about Farhana. It says a little bit about who she is and
          her relationship to you. There's probably also a picture of her.
        </p>

        <Alert show={showF1} variant="success">
          <div className="npc-dialogue">
            <p>
              Second part of dialogue with Farhana. She tells you more about the town and who you used to be.
            </p>
          </div>
          <hr />
          <div className="player-dialogue">
            <p>
              You get to respond to what she says.
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowF2(true);
                setShowF1(false);
              }}
              variant="outline-success"
            >
              Next
            </Button>
          </div>
        </Alert>
        <Alert show={showF2} variant="success">
          <p>Here is Farhana's response.</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowF2(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>

        {!showF1 && !showF2 && (
          <Button style={{ display: actionPoints > 0 ? "inline" : "none" }}
            onClick={() => {
              setShowF1(true);
              farhanaConversation();
            }}
          >
            Talk
          </Button>
        )}
    </div>
  );
};

export default Farhana2Conversation;