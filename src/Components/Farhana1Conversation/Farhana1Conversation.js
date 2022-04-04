import "./Farhana1Conversation.css";
import { useState } from "react";
import farhana from "../../images/farhanacircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Farhana1Conversation = ({
  actionPoints,
  globalShow,
  setGlobalShow,
  farhanaConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
}) => {
  // useStates
  const [farhanaDialogue, setFarhanaDialogue] = useState(0);

  return (
    <div className="dialogue-container">
      <div
        className="talk-button-img"
        style={{ display: actionPoints > 0 && !globalShow ? "inline" : "none" }}
      >
        <img className="sprig" src={sprig} alt=""/>
        <button
          onClick={() => {
            setShowJi(false);
            setShowAlba(false);
            setGlobalShow(true);
            farhanaConversation();
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          Talk
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 1 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Hey, Friend! I'm glad you decided to come to town. I know it's a lot,
          trying to adjust to being back here.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 2 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Yeah, it is. How are you?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 3 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Hopeful, actually. The city council is talking about renovating the
          rec center, and I'm hoping my company would get the contract. There's
          a lot of places around town that need renovating, really, but I know
          that's expensive and they're trying to prioritize.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 4 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          You sound really excited when you talk about your work. You must like
          it a lot, being in construction?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 5 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I love it! Making things with my hands is just so nice. Tangible. You
          can reach out and touch it and know you did a good job.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 6 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          That reminds me: thanks again for building that ramp for me, and for
          making the adjustments to the house. That had to have taken a lot of
          time and money. I know you said we're really close, but it's hard
          feeling like I owe you so much.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 7 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Eh, worth it. <em>You're</em> worth it.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 8 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Um, thanks.</p>
        <button
          className="fade-in-text end"
          onClick={() => {
            setFarhanaDialogue(0);
            setGlobalShow(false);
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

export default Farhana1Conversation;
