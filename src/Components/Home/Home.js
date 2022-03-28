import "./Home.css";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Pots from "../Pots/Pots";
import { useState } from 'react'

const Home = ({ checkIfPot1IsEmptyMarigold, actionPoints, setActionPoints, pot1IsEmpty, setPot1IsEmpty, pot1Type, setPot1Type, pot1Age, setPot1Age, pot1IsCaredFor, setPot1IsCaredFor, pot1IsFullyGrown, setPot1IsFullyGrown }) => {


  
  return (
    <Container>
      <h1>Home</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Examine Pots</Accordion.Header>
          <Accordion.Body>
            <Pots
              checkIfPot1IsEmptyMarigold={checkIfPot1IsEmptyMarigold}
              actionPoints={actionPoints}
              setActionPoints={setActionPoints}
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
              />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>End Day</Accordion.Header>
          <Accordion.Body>
            <p>
              If you have completed everything you would like to do today, or if
              you have no more Action Points remaining, you may end the day and
              start a new, fresh day. This replenishes your Action Points. Would
              you like to end the day now?
            </p>
            <Button variant="danger">End the Day</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Home;
