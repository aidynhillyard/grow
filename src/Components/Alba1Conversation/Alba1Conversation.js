import "./Alba1Conversation.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const Alba1Conversation = ({ actionPoints, albaConversation }) => {

  // useStates
  const [showA1, setShowA1] = useState(false);
  const [showA2, setShowA2] = useState(false);

  return (
    <div>
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
  );
};

export default Alba1Conversation;