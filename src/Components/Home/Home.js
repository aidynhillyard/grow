import "./Home.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Pot1 from "../Pot1/Pot1";
import Pot2 from "../Pot2/Pot2";
import Pot3 from "../Pot3/Pot3";
import Letters from "../Letters/Letters";
import home from "../../images/home.png";
import sprig from "../../images/sprig.png";

const Home = ({
  actionPoints,
  decrementActionPoints,
  location,
  setLocation,
  dialogueStepFarhana,
  dialogueStepJi,
  dialogueStepAlba,
  letter1,
  letter1IsRead,
  setLetter1IsRead,
  letter2,
  letter2IsRead,
  setLetter2IsRead,
  letter3,
  letter3IsRead,
  setLetter3IsRead,
  pot1IsEmpty,
  setPot1IsEmpty,
  pot1Type,
  setPot1Type,
  pot1IsCaredFor,
  setPot1IsCaredFor,
  pot1Age,
  setPot1Age,
  pot1IsFullyGrown,
  setPot1IsFullyGrown,
  pot2IsEmpty,
  setPot2IsEmpty,
  pot2Type,
  setPot2Type,
  pot2IsCaredFor,
  setPot2IsCaredFor,
  pot2Age,
  setPot2Age,
  pot2IsFullyGrown,
  setPot2IsFullyGrown,
  pot3IsEmpty,
  setPot3IsEmpty,
  pot3Type,
  setPot3Type,
  pot3IsCaredFor,
  setPot3IsCaredFor,
  pot3Age,
  setPot3Age,
  pot3IsFullyGrown,
  setPot3IsFullyGrown,
}) => {
  const [showLetters, setShowLetters] = useState(false);

  return (
    <Container>
      <img className="home-title" src={home} alt="Home" />
      <div
        style={{
          display:
            dialogueStepJi >= 6 &&
            dialogueStepAlba >= 6 &&
            dialogueStepFarhana >= 6
              ? "inline"
              : "none",
        }}
      >
        <p>
          <i>
            "Say not, 'I have found the truth,' but rather, 'I have found a
            truth.'
            <br />
            Say not, 'I have found the path of the soul.' Say rather, 'I have
            met the soul walking upon my path.'
            <br />
            For the soul walks upon all paths.
            <br />
            The soul walks not upon a line, neither does it grow like a reed.
            <br />
            The soul unfolds itself, like a lotus of countless petals."
          </i>
        </p>
        <p>
          ― Kahlil Gibran, <em>The Prophet</em>
        </p>
      </div>
      <Pot1
        actionPoints={actionPoints}
        decrementActionPoints={decrementActionPoints}
        pot1IsEmpty={pot1IsEmpty}
        setPot1IsEmpty={setPot1IsEmpty}
        pot1Type={pot1Type}
        setPot1Type={setPot1Type}
        pot1IsCaredFor={pot1IsCaredFor}
        setPot1IsCaredFor={setPot1IsCaredFor}
        pot1Age={pot1Age}
        setPot1Age={setPot1Age}
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
        pot2Age={pot2Age}
        setPot2Age={setPot2Age}
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
        pot3Age={pot3Age}
        setPot3Age={setPot3Age}
        pot3IsFullyGrown={pot3IsFullyGrown}
        setPot3IsFullyGrown={setPot3IsFullyGrown}
      />
      <div className="bottom-links">
        <div><img className="sprig" src={sprig}/>
          <button
            onClick={() => {
              setShowLetters(!showLetters);
            }}
          >
            Letters
          </button>
        </div>
        <div
          style={{
            display: showLetters ? "inline" : "none",
          }}
        >
          <Letters
            letter1={letter1}
            letter2={letter2}
            letter3={letter3}
            letter1IsRead={letter1IsRead}
            setLetter1IsRead={setLetter1IsRead}
            letter2IsRead={letter2IsRead}
            setLetter2IsRead={setLetter2IsRead}
            letter3IsRead={letter3IsRead}
            setLetter3IsRead={setLetter3IsRead}
          />
        </div>
        {/* Travel to Town Button */}
        <div><img className="sprig" src={sprig}/>
          <button
            variant="success"
            style={{
              display:
                location === "home" &&
                (pot1IsCaredFor === true ||
                  pot1IsCaredFor === null ||
                  pot1IsEmpty === true) &&
                (pot2IsCaredFor === true ||
                  pot2IsCaredFor === null ||
                  pot2IsEmpty === true) &&
                (pot3IsCaredFor === true ||
                  pot3IsCaredFor === null ||
                  pot3IsEmpty === true)
                  ? "inline"
                  : "none",
            }}
            onClick={() => {
              setLocation("town");
            }}
          >
            Travel to Town
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
