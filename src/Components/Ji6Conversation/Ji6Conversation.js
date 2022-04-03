import "./Ji6Conversation.css";
import { useState } from "react";
import ji from "../../images/jicircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Ji6Conversation = ({
  actionPoints,
  globalShow,
  setGlobalShow,
  jiConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
  tradeDealJi,
  dialogueStepJi,
  pot1Type,
  pot1IsFullyGrown,
  pot2Type,
  pot2IsFullyGrown,
  pot3Type,
  pot3IsFullyGrown,
}) => {
  // useStates
  const [jiDialogue, setJiDialogue] = useState(0);
  const [tradedPlant, setTradedPlant] = useState(false);

  return (
    <div className="dialogue-container">
      <div
        className="talk-button-img"
        style={{
          display:
            actionPoints > 0 &&
            !globalShow &&
            dialogueStepJi > 5 &&
            ((pot1Type === "Tulip" && pot1IsFullyGrown === true) ||
              (pot2Type === "Tulip" && pot2IsFullyGrown === true) ||
              (pot3Type === "Tulip" && pot3IsFullyGrown === true))
              ? "inline"
              : "none",
        }}
      >
        <img className="sprig" src={sprig} />
        <button
          onClick={() => {
            setShowFarhana(false);
            setShowAlba(false);
            jiConversation();
            setGlobalShow(true);
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          Talk
        </button>
      </div>
      <div style={{ display: jiDialogue === 1 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          If you have more tulips you don't need, I'd love to take them home.
          And I'm here for you, you know.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: jiDialogue === 2 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Thank you, Ji.</p>
        <button
          className="fade-in-text player-dialogue"
          style={{ display: !tradedPlant ? "inline" : "none" }}
          onClick={() => {
            tradeDealJi();
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
            setJiDialogue(0);
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

export default Ji6Conversation;
