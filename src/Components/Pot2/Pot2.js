import "./Pot2.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Pot2 = () => {
  return (
    <Container>
      <p>
        <Button variant="success">
          <Link to="/planting" id="link-to-planting">
            Plant a Seed
          </Link>
        </Button>
        Pot #2 -- Empty
      </p>
    </Container>
  );
};

export default Pot2;
