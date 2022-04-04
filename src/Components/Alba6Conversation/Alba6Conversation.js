import "./Alba6Conversation.css";
import { useState } from "react";
import alba from "../../images/albacircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Alba6Conversation = ({
  actionPoints,
  globalShow,
  setGlobalShow,
  albaConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
  tradeDealAlba,
  dialogueStepAlba,
  pot1Type,
  pot1IsFullyGrown,
  pot2Type,
  pot2IsFullyGrown,
  pot3Type,
  pot3IsFullyGrown,
}) => {
  // useStates
  const [albaDialogue, setAlbaDialogue] = useState(0);
  const [tradedPlant, setTradedPlant] = useState(false);

  return (
    <div>
      <div
        className="talk-button-img"
        style={{
          display:
            actionPoints > 0 &&
            !globalShow &&
            dialogueStepAlba > 5 &&
            ((pot1Type === "Iris" && pot1IsFullyGrown === true) ||
              (pot2Type === "Iris" && pot2IsFullyGrown === true) ||
              (pot3Type === "Iris" && pot3IsFullyGrown === true))
              ? "inline"
              : "none",
        }}
      >
        <img className="sprig" src={sprig} alt="" />
        <button
          onClick={() => {
            setShowFarhana(false);
            setShowJi(false);
            albaConversation();
            setGlobalShow(true);
            setAlbaDialogue((prevState) => prevState + 1);
          }}
        >
          Talk
        </button>
      </div>
      <div style={{ display: albaDialogue === 1 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I'm always happy to take more irises off your hands if you have them.
          And remember, dear, you have your whole life to decide who you want to
          be.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setAlbaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: albaDialogue === 2 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Thank you, Alba.</p>
        <button
          className="fade-in-text player-dialogue"
          style={{ display: !tradedPlant ? "inline" : "none" }}
          onClick={() => {
            tradeDealAlba();
            setTradedPlant(true);
          }}
        >
          Give Plant
        </button>
        <button
          style={{ display: tradedPlant ? "inline" : "none" }}
          className="fade-in-text end"
          aria-label="next"
          onClick={() => {
            setAlbaDialogue(0);
            setGlobalShow(false);
            setTradedPlant(false);
            setShowFarhana(true);
            setShowJi(true);
            setShowAlba(true);
          }}
        >
          End
        </button>
      </div>
    </div>
  );
};

export default Alba6Conversation;
