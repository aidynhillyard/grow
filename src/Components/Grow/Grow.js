import "./Grow.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Home from "../Home/Home";
import Town from "../Town/Town";

const Grow = () => {

  // Start of Day / Start of Game

  let actionPoints = 4

  // Psuedo code for default state of pots

  let pot1IsEmpty = true
  let pot1Type = 'empty'
  let pot1Age = null
  let pot1IsCaredFor = null
  let pot1IsFullyGrown = null

  // Psuedo code for "Plant a Seed" button (with type) should:
console.log(pot1IsEmpty)
  const checkIfPot1IsEmptyMarigold = () => {
    if (pot1IsEmpty === true && actionPoints > 0) {
      actionPoints -= 1
      pot1IsEmpty = false
      pot1Type = 'marigold'
      pot1Age = 0
      pot1IsCaredFor = true
      pot1IsFullyGrown = false
      console.log(actionPoints)
    } else if (pot1IsEmpty === true && actionPoints <= 0) {
      console.log("You do not have enough Action Points to plant a seed.")
    } else if (pot1IsEmpty === false) {
      console.log("This pot already has a plant in it!")
    }
  }
  //  run function checkIfPotIsEmpty; function checks for pot1IsEmpty = true
  //  if pot1IsEmpty = true, then variables are set as below
  //  else if pot1IsEmpty = false, then alert: 'This pot already has a plant in it!'
  //    actionPoints -1
  //    pot1IsEmpty = false
  //    pot1Type = type of seed planted (onClick function setPot1Type: let pot1Type = 'marigold')
  //    pot1Age = 0
  //    pot1IsCaredFor = True
  //    potIsFullyGrown = False

  // Psuedo code for Start of a New Day

  //  let actionPoints = 4
  //  if pot1IsEmpty = false, then pot1IsCaredFor = False
  //      Most/all buttons have onClick that runs a function checking for pot1IsCaredFor
  //      if pot1IsCaredFor = False, then launch modal or alert
  //        saying you must go to Examine Pots to care for plant
  //      you can dismiss alert, but if you try to go anywhere except Examine Pots,
  //        alert comes up again
  
  //    Could change mechanic so caring for plants is optional but they don't age without it?

  // Psuedo code for Care for Plant:
  //    Clicking "Care for Plant" button should run a function, careForPlant, that does the folowing:
  //      actionPoints -1
  //      pot1IsCaredFor = True
  //      pot1Age += 1
  //      run function checkIfFullyGrown
  //        if pot1Type = marigold && pot1Age >= 2, then pot1IsFullyGrown = true
  //        if pot1Type = 'snapdragon' && pot1Age >= 3, then pot1IsFullyGrown = true
  //        if pot1Type = 'sunflower' && pot1Age >= 4, then pot1IsFullyGrown = true
  //      pot1IsFullyGrown value should display (maybe even in <span> to be green)

  // Psuedo code for Examine Pots display
  //    if pot1IsEmpty = false, then display "Care for Plant" button
  //      else, display "Plant a Seed" button

  return (
    <Container>
        <div>
            <h1>GROW</h1>
            <h2>Tagline</h2>
        </div>
        <div>
        <Button variant="success">
              Start a New Game
            </Button>{' '}
            <p>Action Points = {actionPoints}</p>
            <p>Is the Pot Empty? = {pot1IsEmpty}</p>
            <p>Plant Type = {pot1Type}</p>
            <p>Plant Age = {pot1Age}</p>
            <p>Is the Plant Cared For? = {pot1IsCaredFor}</p>
            <p>Is the Plant Fully Grown? = {pot1IsFullyGrown}</p>
        </div>
        <Home
          checkIfPot1IsEmptyMarigold={checkIfPot1IsEmptyMarigold}
          actionPoints={actionPoints}
          
          />
        <Town />
    </Container>
  );
};

export default Grow;