import "./Pots.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Planting from "../Planting/Planting";
import { useEffect } from 'react'

const Pots = ({ checkIfPot1IsEmptyMarigold, actionPoints, setActionPoints, pot1IsEmpty, setPot1IsEmpty, pot1Type, setPot1Type, pot1Age, setPot1Age, pot1IsCaredFor, setPot1IsCaredFor, pot1IsFullyGrown, setPot1IsFullyGrown }) => {


  // useStates
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [planting, setPlanting] = useState(false)

    // useEffect???
useEffect(() => console.log("Hello world"), [planting]);

// Increment & Decrement functions
const decrementActionPoints = () => {
  setActionPoints(prevState => prevState - 1)
}

const incrementPot1Age = () => {
  setPot1Age(prevState => prevState + 1)
}

  return (
    <Container>
      {/* Pot #1 */}
      <div><p>
      Pot #1 -- Plant: {pot1Type}, Age: {pot1Age}, Fully Grown: {pot1IsFullyGrown ? "true" : "false"}</p>
      </div>
        <div style={{display: pot1IsEmpty === true ? "none" : "block"}}><Button variant="primary" onClick={handleShow}>
          Care for Plant
        </Button>
        </div>
        
      <div style={{display: planting === false ? "none" : "inline"}}></div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Care for Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You've spent one Action Point to care for your plant.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
        
      <div style={{display: pot1IsEmpty === true ? "block" : "none"}}>
      <DropdownButton id="dropdown-item-button" title="Choose a Seed" >
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Marigold"); incrementPot1Age()}}>Marigold</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Snapdragon"); incrementPot1Age()}}>Snapdragon</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Sunflower"); incrementPot1Age()}}>Sunflower</Dropdown.Item>
</DropdownButton>
</div>
{/* Pot #2 */}
<div><p>
      Pot #2 -- Plant: {pot1Type}, Age: {pot1Age}, Fully Grown: {pot1IsFullyGrown ? "true" : "false"}</p>
      </div>
        <div style={{display: pot1IsEmpty === true ? "none" : "block"}}><Button variant="primary" onClick={handleShow}>
          Care for Plant
        </Button>
        </div>
        
      <div style={{display: planting === false ? "none" : "inline"}}></div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Care for Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You've spent one Action Point to care for your plant.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
        
      <div style={{display: pot1IsEmpty === true ? "block" : "none"}}>
      <DropdownButton id="dropdown-item-button" title="Choose a Seed" >
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Marigold"); incrementPot1Age()}}>Marigold</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Snapdragon"); incrementPot1Age()}}>Snapdragon</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Sunflower"); incrementPot1Age()}}>Sunflower</Dropdown.Item>
</DropdownButton>
</div>
{/* Pot #3 */}
<div><p>
      Pot #3 -- Plant: {pot1Type}, Age: {pot1Age}, Fully Grown: {pot1IsFullyGrown ? "true" : "false"}</p>
      </div>
        <div style={{display: pot1IsEmpty === true ? "none" : "block"}}><Button variant="primary" onClick={handleShow}>
          Care for Plant
        </Button>
        </div>
        
      <div style={{display: planting === false ? "none" : "inline"}}></div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Care for Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You've spent one Action Point to care for your plant.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
        
      <div style={{display: pot1IsEmpty === true ? "block" : "none"}}>
      <DropdownButton id="dropdown-item-button" title="Choose a Seed" >
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Marigold"); incrementPot1Age()}}>Marigold</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Snapdragon"); incrementPot1Age()}}>Snapdragon</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {checkIfPot1IsEmptyMarigold(); setPlanting(false); decrementActionPoints(); setPot1Type("Sunflower"); incrementPot1Age()}}>Sunflower</Dropdown.Item>
</DropdownButton>
</div>

      {/* Planting Div */}
      <div style={{display: planting === false ? "none" : "inline"}}>
      <Planting
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
        planting={planting}
        setPlanting={setPlanting}
        />
        </div>
    </Container>
  );
};

export default Pots;
