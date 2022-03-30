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
  pot1Type,
  setPot1Type,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  pot1IsFullyGrown,
  setPot1IsFullyGrown,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2Type,
  setPot2Type,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot2IsFullyGrown,
  setPot2IsFullyGrown,
  pot3IsEmpty,
  setPot3IsEmpty,
  pot3Type,
  setPot3Type,
  pot3IsCaredFor,
  setPot3IsCaredFor,
  pot3IsFullyGrown,
  setPot3IsFullyGrown
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
      pot1Type={pot1Type}
      setPot1Type={setPot1Type}
      pot1IsCaredFor={pot1IsCaredFor}
      setPot1IsCaredFor={setPot1IsCaredFor}
      pot1IsFullyGrown={pot1IsFullyGrown}
      setPot1IsFullyGrown={setPot1IsFullyGrown}
      />
      <Pot2 
      actionPoints={actionPoints}
      decrementActionPoints={decrementActionPoints}
      pot2IsEmpty={pot2IsEmpty}
      setPot2IsEmpty={setPot2IsEmpty}
      pot2Type={pot2Type}
      setPot2Type={setPot2Type}
      pot2IsCaredFor={pot2IsCaredFor}
      setPot2IsCaredFor={setPot2IsCaredFor}
      pot2IsFullyGrown={pot2IsFullyGrown}
      setPot2IsFullyGrown={setPot2IsFullyGrown}
      />
      <Pot3 
      actionPoints={actionPoints}
      decrementActionPoints={decrementActionPoints}
      pot3IsEmpty={pot3IsEmpty}
      setPot3IsEmpty={setPot3IsEmpty}
      pot3Type={pot3Type}
      setPot3Type={setPot3Type}
      pot3IsCaredFor={pot3IsCaredFor}
      setPot3IsCaredFor={setPot3IsCaredFor}
      pot3IsFullyGrown={pot3IsFullyGrown}
      setPot3IsFullyGrown={setPot3IsFullyGrown}
      />
      <div>
        <p style={{ display: (pot1IsCaredFor === true && pot2IsCaredFor === true && pot3IsCaredFor === true) ? "block" : "none" }}>You have cared for all of your plants. You can check back after a new day.</p>
      </div>
      <PlantDescriptions />
    </Container>
  );
};

export default Home;
