import "./Ji1Conversation.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const Ji1Conversation = ({ actionPoints, jiConversation }) => {

  // useStates
  const [showJ1, setShowJ1] = useState(false);
  const [showJ2, setShowJ2] = useState(false);

  return (
    <div>
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
  );
};

export default Ji1Conversation;