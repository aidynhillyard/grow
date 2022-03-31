import "./Ji3Conversation.css";
import { useState } from "react";
import ji from "../../images/jiplaceholder.png";
import player from "../../images/playeravplaceholder.png";

const Ji3Conversation = ({
  actionPoints,
  jiTalk,
  setJiTalk,
  jiConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
}) => {
  // useStates
  const [jiDialogue, setJiDialogue] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setShowFarhana(false);
          setShowAlba(false);
          jiConversation();
          setJiDialogue((prevState) => prevState + 1);
        }}
        style={{ display: actionPoints > 0 && !jiTalk ? "inline" : "none" }}
      >
        Talk 3
      </button>
      <div style={{ display: jiDialogue === 1 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">Oh hey, how’s it going?</p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 2 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Not too bad. What are you eating?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 3 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          <em>Gyeongdan</em>. They're like… rice balls with sesame seeds on the
          outside, and they're filled with red bean paste. Want one?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 4 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Sure, I’ll try it. ...Wow, this is delicious!
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 5 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Thanks, I made it myself. I started teaching myself how to cook after
          my <em>halmeoni</em>, my grandma, passed away. Mom had been gone for
          awhile, and Dad just kind of… checked out. So I figured someone should
          make sure we were eating.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 6 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          That sounds like a lot for you to have to do. How old were you?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 7 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          It was only about four years ago. Wow, this memory stuff is so weird.
          You sang at my grandma’s funeral, actually.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 8 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">I… what?</p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 9 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Yeah. Well, at the memorial service afterward. The actual funeral was
          a really formal family thing and all, but afterward, I had put
          together a sort of “share memories” thing, and you sang this really
          pretty song. You’ve got a great voice.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 10 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Um, thanks.</p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 11 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          You brought her tulips. They were her favorite flower, and I guess
          they’re mine now, too. …You should start singing again.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setJiDialogue((prevState) => prevState + 1);
          }}
        >
          &or;
        </button>
      </div>
      <div style={{ display: jiDialogue === 12 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Maybe...</p>
        <button
          className="fade-in-text"
          onClick={() => {
            setJiDialogue(0);
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

export default Ji3Conversation;
