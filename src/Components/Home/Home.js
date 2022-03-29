import "./Home.css";
import Container from "react-bootstrap/Container";
import Pots from "../Pots/Pots";
import Pot1 from "../Pot1/Pot1";
import PlantDescriptions from "../PlantDescriptions/PlantDescriptions";

const Home = ({
  actionPoints,
  setActionPoints,
  pot1IsEmpty,
  setPot1IsEmpty,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  
  plantPot2,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2Type,
  setPot2Type,
  pot2Age,
  setPot2Age,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot2IsSeed,
  setPot2IsSeed,
  pot2IsSeedling,
  setPot2IsSeedling,
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
  pot3IsSeed,
  setPot3IsSeed,
  pot3IsSeedling,
  setPot3IsSeedling,
  pot3IsFullyGrown,
  setPot3IsFullyGrown,
}) => {
  return (
    <Container>
      <h1>Home</h1>
      <h2>Lovely Potted Plants</h2>
      <Pot1
      actionPoints={actionPoints}
      setActionPoints={setActionPoints}
      pot1IsEmpty={pot1IsEmpty}
      setPot1IsEmpty={setPot1IsEmpty}
      pot1IsCaredFor={pot1IsCaredFor}
      setPot1IsCaredFor={setPot1IsCaredFor}
      />
      <Pots
        actionPoints={actionPoints}
        setActionPoints={setActionPoints}
        // Pot #1 Props
        
        pot1IsEmpty={pot1IsEmpty}
        
        pot1IsCaredFor={pot1IsCaredFor}
        setPot1IsCaredFor={setPot1IsCaredFor}
        
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
        pot2IsSeed={pot2IsSeed}
        setPot2IsSeed={setPot2IsSeed}
        pot2IsSeedling={pot2IsSeedling}
        setPot2IsSeedling={setPot2IsSeedling}
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
        pot31IsSeed={pot3IsSeed}
        setPot3IsSeed={setPot3IsSeed}
        pot3IsSeedling={pot3IsSeedling}
        setPot3IsSeedling={setPot3IsSeedling}
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
