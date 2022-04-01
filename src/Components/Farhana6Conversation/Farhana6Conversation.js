import "./Farhana6Conversation.css";
import { useState } from "react";
import farhana from "../../images/farhanabeta.png";
import player from "../../images/playeravplaceholder.png";

const Farhana6Conversation = ({
  actionPoints,
  globalShow,
  setGlobalShow,
  farhanaConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
  tradeDealFarhana,
  dialogueStepFarhana,
  pot1Type,
  pot1IsFullyGrown,
  pot2Type,
  pot2IsFullyGrown,
  pot3Type,
  pot3IsFullyGrown,
}) => {
  // useStates
  const [farhanaDialogue, setFarhanaDialogue] = useState(0);
  const [tradedPlant, setTradedPlant] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowJi(false);
          setShowAlba(false);
          farhanaConversation();
          setGlobalShow(true);
          setFarhanaDialogue((prevState) => prevState + 1);
        }}
        style={{
          display:
            actionPoints > 0 &&
            !globalShow &&
            dialogueStepFarhana > 5 &&
            ((pot1Type === "Forget-Me-Not" && pot1IsFullyGrown === true) ||
              (pot2Type === "Forget-Me-Not" && pot2IsFullyGrown === true) ||
              (pot3Type === "Forget-Me-Not" && pot3IsFullyGrown === true))
              ? "inline"
              : "none",
        }}
      >
        Talk 6
      </button>
      <div style={{ display: farhanaDialogue === 1 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          <em>Ya hayati</em>, we'll figure this out. Traveling the ocean
          together in one boat, as you say. Oh, and if you have any, I'll always
          want forget-me-nots from you.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 2 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Thank you, Farhana.</p>
        <button
          className="fade-in-text player-dialogue"
          style={{ display: !tradedPlant ? "inline" : "none" }}
          onClick={() => {
            tradeDealFarhana();
            setTradedPlant(true);
          }}
        >
          Give Plant
        </button>
        <button
          style={{ display: tradedPlant ? "inline" : "none" }}
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue(0);
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

export default Farhana6Conversation;