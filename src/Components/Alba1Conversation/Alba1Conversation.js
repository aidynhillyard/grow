import "./Alba1Conversation.css";
import { useState } from "react";
import alba from "../../images/albacircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Alba1Conversation = ({
  actionPoints,
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
        style={{ display: actionPoints > 0 && !globalShow ? "inline" : "none" }}
      >
        <img className="sprig" src={sprig} alt="" />
        <button
          onClick={() => {
            setShowFarhana(false);
            setShowJi(false);
            setGlobalShow(true);
            albaConversation();
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
          Hello, neighbor! I wondered when you'd decide to come out to the town.
          They told me you don't really remember anything.
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
        <p className="fade-in-text player-dialogue">
          It's true. Coming back is like coming here for the first time. I know
          I should know your name, but....
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
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          It's okay. I'm Alba. I know you don't remember, but I used to go to
          your track meets. You were amazing, doing all those races.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Thanks.</p>
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
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          You were such an athlete and always so active. Oh, that earthquake,
          and you crushed under all that heavy stuff for so long. I feel so bad
          that you're trapped in that wheelchair now.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          It's... I'm... um, I'll see you around.
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

export default Alba1Conversation;
