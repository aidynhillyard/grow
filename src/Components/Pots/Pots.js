import "./Pots.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect } from 'react'

const Pots = ({ actionPoints, setActionPoints, plantPot1, pot1IsEmpty, setPot1IsEmpty, pot1Type, setPot1Type, pot1Age, setPot1Age, pot1IsCaredFor, setPot1IsCaredFor, pot1IsFullyGrown, setPot1IsFullyGrown, plantPot2, pot2IsEmpty, setPot2IsEmpty, pot2Type, setPot2Type, pot2Age, setPot2Age, pot2IsCaredFor, setPot2IsCaredFor, pot2IsFullyGrown, setPot2IsFullyGrown }) => {


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

// Increment Pot Age
const incrementPot1Age = () => {
  setPot1Age(prevState => prevState + 1)
}
const incrementPot2Age = () => {
  setPot2Age(prevState => prevState + 1)
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
  <Dropdown.Item as="button" onClick={() => {plantPot1(); setPlanting(false); decrementActionPoints(); setPot1Type("Marigold"); incrementPot1Age()}}>Marigold</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {plantPot1(); setPlanting(false); decrementActionPoints(); setPot1Type("Snapdragon"); incrementPot1Age()}}>Snapdragon</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {plantPot1(); setPlanting(false); decrementActionPoints(); setPot1Type("Sunflower"); incrementPot1Age()}}>Sunflower</Dropdown.Item>
</DropdownButton>
</div>
{/* Pot #2 */}
<div><p>
      Pot #2 -- Plant: {pot2Type}, Age: {pot2Age}, Fully Grown: {pot2IsFullyGrown ? "true" : "false"}</p>
      </div>
        <div style={{display: pot2IsEmpty === true ? "none" : "block"}}><Button variant="info" onClick={handleShow}>
          Care for Plant
        </Button>
        </div>
        
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
        
      <div style={{display: pot2IsEmpty === true ? "block" : "none"}}>
      <DropdownButton id="dropdown-item-button" title="Choose a Seed" >
  <Dropdown.Item as="button" onClick={() => {plantPot2(); setPlanting(false); decrementActionPoints(); setPot2Type("Marigold"); incrementPot2Age()}}>Marigold</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {plantPot2(); setPlanting(false); decrementActionPoints(); setPot2Type("Snapdragon"); incrementPot2Age()}}>Snapdragon</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {plantPot2(); setPlanting(false); decrementActionPoints(); setPot2Type("Sunflower"); incrementPot2Age()}}>Sunflower</Dropdown.Item>
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
  <Dropdown.Item as="button" onClick={() => {plantPot1(); setPlanting(false); decrementActionPoints(); setPot1Type("Marigold"); incrementPot1Age()}}>Marigold</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {plantPot1(); setPlanting(false); decrementActionPoints(); setPot1Type("Snapdragon"); incrementPot1Age()}}>Snapdragon</Dropdown.Item>
  <Dropdown.Item as="button" onClick={() => {plantPot1(); setPlanting(false); decrementActionPoints(); setPot1Type("Sunflower"); incrementPot1Age()}}>Sunflower</Dropdown.Item>
</DropdownButton>
</div>
    </Container>
  );
};

export default Pots;
