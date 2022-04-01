import "./Ji4Conversation.css";
import { useState } from "react";
import ji from "../../images/jiplaceholder.png";
import player from "../../images/playeravplaceholder.png";

const Ji4Conversation = ({
  actionPoints,
  jiTalk,
  setJiTalk,
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
  pot3IsFullyGrown
}) => {
  // useStates
  const [jiDialogue, setJiDialogue] = useState(0);
  const [tradedPlant, setTradedPlant] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowFarhana(false);
          setShowAlba(false);
          jiConversation();
          setJiTalk(true);
          setJiDialogue((prevState) => prevState + 1);
        }}
        style={{ display: actionPoints > 0 && !jiTalk && (dialogueStepJi === 4 &&
          ((pot1Type === "Tulip" && pot1IsFullyGrown === true) ||
            (pot2Type === "Tulip" && pot2IsFullyGrown === true) ||
            (pot3Type === "Tulip" && pot3IsFullyGrown === true))) ? "inline" : "none" }}
      >
        Talk 4
      </button>
      <div style={{ display: jiDialogue === 1 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Hey, Ji. I, uh, grew this for you.
        </p>
        <button
          className="fade-in-text player-dialogue" style={{ display: !tradedPlant ? "inline" : "none" }}
          onClick={() => {
            tradeDealJi();
            setTradedPlant(true);
          }}
        >
          Give Plant
        </button>
        <button style={{ display: tradedPlant ? "inline" : "none" }}
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
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Is that…? It’s a tulip! Thank you!
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I was going through some of the photos in the house, and I found one
          of you and me in your kitchen with your grandma, I think. And I just…
          wanted to give this to you.
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
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          You know… growing up in a Korean family, we’re not usually big on
          therapy. Don’t want anyone to think anything's <em>wrong</em>. But,
          after I lost my grandma, and things were pretty bad, I
          finally decided to see someone. I drove two towns over just in case
          word got back.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Did… it help?</p>
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
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Kinda. It’s not like it made everything better. But it helped me feel
          like I could handle things better. …I saw footage of the earthquake on
          TV, you know. It looked really intense. And I can’t imagine being
          crushed under something like that.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">…</p>
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
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I guess what I’m saying is that you’ve been through a lot, and, you
          know, talking to someone is a thing. Oh, and this is for you.
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
      <div style={{ display: jiDialogue === 9 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">A letter?</p>
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
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Yeah, you gave it to me a long time ago, and said to give it back to
          you when you were older. Well, you’re older. We both are. So here it
          is. And if you want, I can give you the name of my therapist.
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
      <div style={{ display: jiDialogue === 11 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I’ll think about it. Really. And thank you for the letter.
        </p>
        <button
          className="fade-in-text"
          onClick={() => {
            setJiDialogue(0);
            setJiTalk(false);
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

export default Ji4Conversation;
