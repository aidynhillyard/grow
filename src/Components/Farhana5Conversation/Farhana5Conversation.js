import "./Farhana5Conversation.css";
import { useState } from "react";
import farhana from "../../images/farhanabeta.png";
import player from "../../images/playeravplaceholder.png";

const Farhana5Conversation = ({
  actionPoints,
  letter3IsRead,
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
            actionPoints > 0 && !globalShow && letter3IsRead
              ? "inline"
              : "none",
        }}
      >
        Talk 5
      </button>
      <div style={{ display: farhanaDialogue === 1 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Why didn't you tell me we were going to live together? Did we ever
          actually live together?
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
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          No. While we were searching for a place, your Mom passed away, and you
          moved out of your apartment and back into the house. We started
          talking about whether to sell it and get our own place, or whether I
          should move in with you there, but we had a fight.
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
      <div style={{ display: farhanaDialogue === 3 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Funny how there are some things I'm glad I don't remember. What did we
          both want?
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
      <div style={{ display: farhanaDialogue === 4 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          You wanted me to move in with you, and I wanted us to find our own
          place. We agreed to put the, uh, discussion to the side because of our
          trip. We didn't want to fight during it. And then... Dad's stroke, the
          earthquake, and, well, now you barely know me.
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
      <div style={{ display: farhanaDialogue === 5 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          But... I <em>want</em> to know you.
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
      <div style={{ display: farhanaDialogue === 6 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I wanted to remind you about us, and everything I read about
          dissociative amnesia says that's helpful, but I just got scared. What
          if you don't like who I am anymore? After everything you've been
          through, maybe I'm not what you want now.
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
      <div style={{ display: farhanaDialogue === 7 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Farhana, I'm the one in a wheelchair who can't remember the most
          important details of my life. I'm a lot more worried that <em>I'm</em>{" "}
          not going to be what <em>you</em> want now.
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
      <div style={{ display: farhanaDialogue === 8 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          It's not going to be easy. I know there are going to be miserable
          moments, miserable days. Doubts. Regrets. But I'm willing to put in
          the work. We found each other and built something amazing together. We
          could do that again. I <em>want</em> to do that again.
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
      <div style={{ display: farhanaDialogue === 9 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          One boat traveling the ocean....
        </p>
        <button
          className="fade-in-text"
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

export default Farhana5Conversation;
