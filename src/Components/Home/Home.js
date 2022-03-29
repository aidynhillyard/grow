import "./Home.css";
import Container from "react-bootstrap/Container";
import Pot1 from "../Pot1/Pot1";
import Pot2 from "../Pot2/Pot2";
import Pot3 from "../Pot3/Pot3";
import PlantDescriptions from "../PlantDescriptions/PlantDescriptions";

const Home = ({
  actionPoints,
  decrementActionPoints,
  pot1IsEmpty,
  setPot1IsEmpty,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot3IsEmpty,
  setPot3IsEmpty,
  pot3IsCaredFor,
  setPot3IsCaredFor,
}) => {
  return (
    <Container>
      <h1>Home</h1>
      <h2>Lovely Potted Plants</h2>
      <Pot1
      actionPoints={actionPoints}
      decrementActionPoints={decrementActionPoints}
      pot1IsEmpty={pot1IsEmpty}
      setPot1IsEmpty={setPot1IsEmpty}
      pot1IsCaredFor={pot1IsCaredFor}
      setPot1IsCaredFor={setPot1IsCaredFor}
      />
      <Pot2 
      actionPoints={actionPoints}
      decrementActionPoints={decrementActionPoints}
      pot2IsEmpty={pot2IsEmpty}
      setPot2IsEmpty={setPot2IsEmpty}
      pot2IsCaredFor={pot2IsCaredFor}
      setPot2IsCaredFor={setPot2IsCaredFor}
      />
      <Pot3 
      actionPoints={actionPoints}
      decrementActionPoints={decrementActionPoints}
      pot3IsEmpty={pot3IsEmpty}
      setPot3IsEmpty={setPot3IsEmpty}
      pot3IsCaredFor={pot3IsCaredFor}
      setPot3IsCaredFor={setPot3IsCaredFor}
      />
      <div>
        <p style={{ display: (pot1IsCaredFor === true && pot2IsCaredFor === true && pot3IsCaredFor === true) ? "block" : "none" }}>You have cared for all of your plants. You can check back after a new day.</p>
      </div>
      <PlantDescriptions />
    </Container>
  );
};

export default Home;
