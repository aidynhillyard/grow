import "./Alba5Conversation.css";
import { useState } from "react";
import alba from "../../images/albacircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Alba5Conversation = ({
  actionPoints,
  letter1IsRead,
  globalShow,
  setGlobalShow,
  albaConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
}) => {
  // useStates
  const [albaDialogue, setAlbaDialogue] = useState(0);

  return (
    <div className="dialogue-container">
      <div
        className="talk-button-img"
        style={{
          display:
            actionPoints > 0 && !globalShow && letter1IsRead
              ? "inline"
              : "none",
        }}
      >
        <img className="sprig" src={sprig} />
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Hi, Alba. How are you doing today?
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
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Eh, I'm okay, can't complain. It's supposed to rain, and that always
          makes these old bones a bit more creaky, but what can you do?
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
      <div style={{ display: albaDialogue === 3 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I can relate; ever since the accident, I feel extra stiff in certain
          weather. Oh, but I wanted to tell you... I read the letter you gave
          me.
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
      <div style={{ display: albaDialogue === 4 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">Oh?</p>
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
      <div style={{ display: albaDialogue === 5 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Yes, apparently I hated track and field! Here I was, thinking I had
          all these dreams, like maybe even the Olympics, but come to find out I
          really did hate it. I guess it was my mom's idea.
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
      <div style={{ display: albaDialogue === 6 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Well, parents have a way of taking their own dreams and shifting them
          to their children. She loved you a lot, though.
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
      <div style={{ display: albaDialogue === 7 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I can tell from everything left in the house. It's comforting. And so
          is the letter. I'm starting to figure out who I can be, but more
          importantly, who I want to be.
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
      <div style={{ display: albaDialogue === 8 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          And you have your whole life to decide, dear.
        </p>
        <button
          className="fade-in-text end"
          onClick={() => {
            setAlbaDialogue(0);
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

export default Alba5Conversation;
