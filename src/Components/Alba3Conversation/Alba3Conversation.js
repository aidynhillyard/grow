import "./Alba3Conversation.css";
import { useState } from "react";
import alba from "../../images/albacircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Alba3Conversation = ({
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
    <div><div className="talk-button-img" style={{ display: actionPoints > 0 && !globalShow ? "inline" : "none" }}><img className="sprig" src={sprig}/>
      <button
        onClick={() => {
          setShowFarhana(false);
          setGlobalShow(true);
          setShowJi(false);
          albaConversation();
          setAlbaDialogue((prevState) => prevState + 1);
        }}
      >
        Talk
      </button></div>
      <div style={{ display: albaDialogue === 1 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Hello, neighbor! I'm glad you came to town today; I wanted to show you
          something.
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
        <p className="fade-in-text player-dialogue">What is it?</p>
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
        <p className="fade-in-text npc-dialogue">Here – it's a drawing.</p>
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
        <p className="fade-in-text player-dialogue">
          It looks like a child made it.
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
      <div style={{ display: albaDialogue === 5 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          A child did make it. <em>You</em> made it, back when I used to babysit
          you. I didn't want any kids or grandkids of my own, but I loved
          babysitting you.
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
          You used to babysit me? And I drew this? What is it supposed to be?
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
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          It's you, giving me a bouquet of flowers. Irises. I told you they were
          my favorite, and you wanted to give me some, but you didn't have any.
          So you drew yourself giving me some, instead.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          And you kept it all these years?
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
      <div style={{ display: albaDialogue === 9 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Of course! I actually keep it on my fridge. Next to the photo of you
          at the first track meet you won.
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
      <div style={{ display: albaDialogue === 10 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">...</p>
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
      <div style={{ display: albaDialogue === 11 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I used to babysit a lot of kids, but you were always my favorite.
          Don't tell anyone.
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
      <div style={{ display: albaDialogue === 12 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">I won't, I promise.</p>
        <button
          className="fade-in-text"
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

export default Alba3Conversation;
