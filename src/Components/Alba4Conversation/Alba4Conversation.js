import "./Alba4Conversation.css";
import { useState } from "react";
import alba from "../../images/albaplaceholder.png";
import player from "../../images/playeravplaceholder.png";
import sprig from "../../images/sprig.png";

const Alba4Conversation = ({
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

  return (
    <div><div className="talk-button-img" style={{
      display:
        actionPoints > 0 &&
        !globalShow &&
        dialogueStepAlba === 4 &&
        ((pot1Type === "Iris" && pot1IsFullyGrown === true) ||
          (pot2Type === "Iris" && pot2IsFullyGrown === true) ||
          (pot3Type === "Iris" && pot3IsFullyGrown === true))
          ? "inline"
          : "none",
    }}><img className="sprig" src={sprig}/>
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
      </button></div>
      <div style={{ display: albaDialogue === 1 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Hello, Alba! I brought you something.
        </p>
        <button
          className="fade-in-text player-dialogue"
          onClick={() => {
            tradeDealAlba();
            setAlbaDialogue((prevState) => prevState + 1);
          }}
        >
          Give Plant
        </button>
      </div>
      <div style={{ display: albaDialogue === 2 ? "inline" : "none" }}>
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">What is... oh, it's lovely!</p>
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
          You've tried really hard to help me feel welcome here again, and I
          just thought... I could finally give you a real iris.
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
        <p className="fade-in-text npc-dialogue">
          Thank you, dear. You know, I feel bad about what I said before. I was
          talking with Farhana, and... I know it wasn't a nice thing to say.
          About your wheelchair, I mean.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Thank you. I know it can be hard to know what to say. And this is new
          for me, too. I'm still adjusting to realizing I'll be using this
          wheelchair forever.
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
          It's hard not to see myself, is all. Back when I was little, I really
          wanted to be a ballerina. For years, I begged my parents to let me
          take lessons, before they finally said yes. But I broke my leg a month
          later, and it never healed right, so I had to drop out.
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
        <p className="fade-in-text player-dialogue">That sounds devastating.</p>
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
          It was. At the time, I thought I'd never get over it. I'm old now,
          though, and I don't spend a lot of time thinking about what could've
          been. But you, you're still young. I just want you to have the future
          you dreamed of.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I'm still trying to figure out my dreams.
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
        <div className="alba-dialogue-label fade-in-text">
          <img src={alba} alt="Alba" id="alba-avatar" />
          <p>Alba (they/them/theirs)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Here, maybe this will help. It's a letter from you, addressed to you.
          You gave it to me some years ago and asked me to keep it safe until
          you were older. I think now is the time you would want yourself to
          have it.
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
      <div style={{ display: albaDialogue === 11 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Thank you, Alba.</p>
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

export default Alba4Conversation;
