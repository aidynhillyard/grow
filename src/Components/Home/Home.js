import "./Home.css";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const Home = () => {

return (
    <Container>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Examine Pots</Accordion.Header>
    <Accordion.Body>
      <p>(Button: Care for Plant) Pot #1 -- Plant: (plantName), Age: (plantAge), Fully Grown: (fullyGrown)</p>
      <p>(Button: Plant Seed) Pot #2 -- Empty</p>
      <p>(Butotn: Plant Seed) Pot #3 -- Empty</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Travel to Town</Accordion.Header>
    <Accordion.Body>
      <p>To speak with townspeople, you may travel to the town. Would you like to travel now?</p>
      <Button variant="success"><Link to="/town" id="link-to-town">
              Travel to Town
            </Link></Button>{' '}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>End Day</Accordion.Header>
    <Accordion.Body>
      <p>If you have completed everything you would like to do today, or if you have no more Action Points remaining, you may end the day and start a new, fresh day. This replenishes your Action Points. Would you like to end the day now?</p>
      (Button: End the Day)
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
);
};

export default Home;