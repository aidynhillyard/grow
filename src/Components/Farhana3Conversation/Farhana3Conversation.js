import "./Farhana3Conversation.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const Farhana3Conversation = ({ actionPoints, farhanaConversation }) => {

  // useStates
  const [showF1, setShowF1] = useState(false);
  const [showF2, setShowF2] = useState(false);

  return (
    <div>
        <Alert show={showF1} variant="success">
          <div className="npc-dialogue">
            <p>
              Third time talking to Farhana. This is when she tells you which plant is her favorite, so you know what to trade her later on.
            </p>
          </div>
          <hr />
          <div className="player-dialogue">
            <p>
              Your response to what she says.
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
          <p>More of Farhana's response.</p>
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

export default Farhana3Conversation;