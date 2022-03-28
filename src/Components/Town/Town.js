import "./Town.css";
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

const Town = () => {

  // Thoughts on Town
  // could have photo of town and text about town at top

  // How to simulate dialogue

  // Talk button could bring up an alert/modal
  // Could chain alerts/modals with Next button at bottom
  // Alert 1 -> Next button leads to Alert 2 -> Close button ends all alerts
  
  // Pros and Cons of Modals vs. Alerts
  // Modals could have static backdrop to avoid player clicking out of conversation
  // Modals aren't positioned as nicely as Alerts


  // Conditional Logic for talking to a townsperson (e.g., Farhana)
  
  // let talkedToFarhana = false
  // let dialogueStepFarhana = 1

  // Clicking the "talk" button runs the talkToFarhana function
  //    if talkedToFarhana = true, then modal: "You have already talked to Farhana today."
  //    else:
  //      actionPoints -1
  //      Determine which dialogue to show
  //        if dialogueStepFarhana = 1, then display conversation1
  //        else if dialogueStepFarhana = 2, then display conversation2
  //        else if dialogueStepFarhana = 3, then display conversation3
  //        else if dialogueStepFarhana = 4, then display conversation4
  //        else (if dialogueStepFarhana >= 5), then display conversation5
  //  Close button onClick sets talkedToFarhana = true

  // On End Day, if talkedToFarhana = true, then dialogueStepFarhana += 1
  // On Start New Day, talkedToFarhana = false, but dialogueStepFarhana does not change

  // Conditional logic for trading plant to townsperson
  // (conversation4)

  // if dialogueStepFarhana === 4 && (pot1Type === 'marigold' || pot2Type === 'marigold' || pot3Type === 'marigold'), then display conversation4, which has dialgoue offering marigold plant to Farhana
  // Button says "Give Plant", onClick runs function to set that pot to Empty


  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Container>
      <h1>Town</h1>
      <p>This is placeholder text about the town. It also has instructions on talking to the townspeople below.</p>
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Farhana (TownspersonA/BestFriend)</Accordion.Header>
    <Accordion.Body>
      <p>This is text about Farhana. It says a little bit about who she is and her relationship to you. There's probably also a picture of her.</p>
      <Alert show={show1} variant="success">
        <p>
          This is what Farhana is saying. She is talking about the town and about other things that we are interested in hearing. This is more text to show she is still talking.
        </p>
        <hr />
        <div className="player-dialogue"><p>
          Player dialogue goes here. Let's start with one dialogue option first and not worry about player choices until later.
        </p></div>
        <div className="d-flex justify-content-end">
          <Button onClick={() => {setShow2(true); setShow1(false)}} variant="outline-success">
            Next
          </Button>
        </div>
      </Alert>
      <Alert show={show2} variant="success">
        <p>
          Farhana's response. She says things depending on what you say.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow2(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

      {(!show1 && !show2) && <Button onClick={() => setShow1(true)}>Talk</Button>}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>TownspersonB</Accordion.Header>
    <Accordion.Body>
      <p>This is text about TownspersonB. It says a little bit about who they are and their relationship to you. There's probably also a picture of them.</p>
      <Button variant="primary">Talk</Button>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>TownspersonC</Accordion.Header>
    <Accordion.Body>
    <p>This is text about TownspersonC. It says a little bit about who they are and their relationship to you. There's probably also a picture of them.</p>
      <Button variant="primary">Talk</Button>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Travel Back Home</Accordion.Header>
    <Accordion.Body>
      <p>To check on your plants or end the day, you need to travel back home. Would you like to travel back home now?</p>
      <Button variant="success"><Link to="/home" id="link-to-home">
              Travel Back Home
            </Link></Button>{' '}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Container>
  );
};

export default Town;