import "./Grow.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Grow = () => {


  return (
    <Container>
        <div>
            <h1>GROW</h1>
            <h2>Tagline</h2>
        </div>
        <div>
        <Button variant="success"><Link to="/home" id="link-to-home">
              Start a New Game
            </Link></Button>{' '}
        </div>
    </Container>
  );
};

export default Grow;