import "./Ji1Conversation.css";
import { useState } from "react";
import ji from "../../images/jicircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Ji1Conversation = ({
  actionPoints,
  globalShow,
  setGlobalShow,
  jiConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
}) => {
  // useStates
  const [jiDialogue, setJiDialogue] = useState(0);

  return (
    <div>
      <div
        className="talk-button-img"
        style={{ display: actionPoints > 0 && !globalShow ? "inline" : "none" }}
      >
        <img className="sprig" src={sprig} />
        <button
          onClick={() => {
            setShowFarhana(false);
            setShowAlba(false);
            setGlobalShow(true);
            jiConversation();
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
          Hiya, Friend! Welcome back to town. It's really great to see you
          again.
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
        <p className="fade-in-text player-dialogue">
          Thanks, it's good to be back. You must be… Ji?
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
      <div style={{ display: jiDialogue === 3 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Wow, you really did forget everything, huh?
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
      <div style={{ display: jiDialogue === 4 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Yeah. It's... stressful.</p>
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
      <div style={{ display: jiDialogue === 5 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Yeah, I figured. Hey, I'm headed over to the rec center for some
          hockey practice. Wanna come?
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
      <div style={{ display: jiDialogue === 6 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Come... do hockey practice with you?
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
      <div style={{ display: jiDialogue === 7 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I meant watch, but sure, you could wheel yourself onto the ice. I
          could prolly find some spare gear and a stick and we could have some
          fun.
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
      <div style={{ display: jiDialogue === 8 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Farhana mentioned a lot of the places around town aren't accessible.
          Could I even get to the rink?
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
      <div style={{ display: jiDialogue === 9 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Uh, I'm not sure. Maybe we'll take a rain check, then. Just wait until
          winter, though. There's this sick outdoor pond that ices over, and
          then it's outdoor hockey time. You could join me there.
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
      <div style={{ display: jiDialogue === 10 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I'll think about it. Have fun, though.
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
      <div style={{ display: jiDialogue === 11 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">See you later!</p>
        <button
          className="fade-in-text end"
          onClick={() => {
            setJiDialogue(0);
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

export default Ji1Conversation;
