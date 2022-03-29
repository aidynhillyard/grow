import "./Home.css";
import Container from "react-bootstrap/Container";
import Pots from "../Pots/Pots";
import PlantDescriptions from "../PlantDescriptions/PlantDescriptions";

const Home = ({
  actionPoints,
  setActionPoints,
  plantPot1,
  pot1IsEmpty,
  setPot1IsEmpty,
  pot1Type,
  setPot1Type,
  pot1Age,
  setPot1Age,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  pot1IsFullyGrown,
  setPot1IsFullyGrown,
  plantPot2,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2Type,
  setPot2Type,
  pot2Age,
  setPot2Age,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot2IsFullyGrown,
  setPot2IsFullyGrown,
  plantPot3,
  pot3IsEmpty,
  setPot3IsEmpty,
  pot3Type,
  setPot3Type,
  pot3Age,
  setPot3Age,
  pot3IsCaredFor,
  setPot3IsCaredFor,
  pot3IsFullyGrown,
  setPot3IsFullyGrown,
}) => {
  return (
    <Container>
      <h1>Home</h1>
      <h2>Lovely Potted Plants</h2>
      <Pots
        actionPoints={actionPoints}
        setActionPoints={setActionPoints}
        // Pot #1 Props
        plantPot1={plantPot1}
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
        // Pot #2 Props
        plantPot2={plantPot2}
        pot2IsEmpty={pot2IsEmpty}
        setPot2IsEmpty={setPot2IsEmpty}
        pot2Type={pot2Type}
        setPot2Type={setPot2Type}
        pot2Age={pot2Age}
        setPot2Age={setPot2Age}
        pot2IsCaredFor={pot2IsCaredFor}
        setPot2IsCaredFor={setPot2IsCaredFor}
        pot2IsFullyGrown={pot2IsFullyGrown}
        setPot2IsFullyGrown={setPot2IsFullyGrown}
        // Pot #3 Props
        plantPot3={plantPot3}
        pot3IsEmpty={pot3IsEmpty}
        setPot3IsEmpty={setPot3IsEmpty}
        pot3Type={pot3Type}
        setPot3Type={setPot3Type}
        pot3Age={pot3Age}
        setPot3Age={setPot3Age}
        pot3IsCaredFor={pot3IsCaredFor}
        setPot3IsCaredFor={setPot3IsCaredFor}
        pot3IsFullyGrown={pot3IsFullyGrown}
        setPot3IsFullyGrown={setPot3IsFullyGrown}
      />
      <PlantDescriptions />
    </Container>
  );
};

export default Home;
