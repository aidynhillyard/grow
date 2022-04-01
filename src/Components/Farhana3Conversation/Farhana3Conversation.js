import "./Farhana3Conversation.css";
import { useState } from "react";
import farhana from "../../images/farhanabeta.png";
import player from "../../images/playeravplaceholder.png";

const Farhana3Conversation = ({
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
    <div>
      <button
        onClick={() => {
          setShowFarhana(false);
          setGlobalShow(true);
          setShowAlba(false);
          farhanaConversation();
          setFarhanaDialogue((prevState) => prevState + 1);
        }}
        style={{ display: actionPoints > 0 && !globalShow ? "inline" : "none" }}
      >
        Talk 3
      </button>
      <div style={{ display: farhanaDialogue === 1 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Hey, Friend! How’re you today?
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I’m okay. How about you? And how’s your family?
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
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          They’re good. I was just talking with my sister last night about fate,
          actually.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Fate?</p>
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
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Yeah. It’s been really hard on me, that you don’t remember anything. I
          know it’s not your fault, and I’m not mad at you. And I probably
          should’ve tried to remind you about things before now, but it’s
          just... really painful.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Not remembering things has been pretty hard on me, too. It’s not like
          I want this weird reality where everyone knows me but I don’t know
          them.
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
      <div
        style={{
          display:
            farhanaDialogue > 6 && farhanaDialogue < 11 ? "inline" : "none",
        }}
      >
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <div style={{ display: farhanaDialogue === 7 ? "inline" : "none" }}>
          <p className="fade-in-text npc-dialogue">
            I know. That’s one of the reasons I haven’t said anything until now.
            Because I don’t want to discount or overshadow what it’s like for
            you.
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
          <p className="fade-in-text npc-dialogue">
            I know you don’t remember, but we were actually there together. On
            the trip. It was our very first trip together, and we were supposed
            to have three more days, but then my dad had his stroke, and I
            changed my ticket and flew back early to be with him.
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
          <p className="fade-in-text npc-dialogue">
            You were going to come back with me, but I insisted you stay and
            enjoy yourself, because everything was already paid for anyway. I
            just… I feel so awful about that. I can’t explain.
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
        <div style={{ display: farhanaDialogue === 10 ? "inline" : "none" }}>
          <p className="fade-in-text npc-dialogue">
            The earthquake happened the day before you were supposed to fly
            back. If I had just said yes, and let you come back with me....
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
      </div>
      <div style={{ display: farhanaDialogue === 11 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          You couldn’t have known. It sounds like you just… wanted me to be
          happy. I don’t remember any of this, but I’m starting to get to know
          you again, and you’re a kind person. Please don’t feel bad about this.
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
      <div style={{ display: farhanaDialogue === 12 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          It’s so hard, starting over with you. Like the last several years
          never even happened.
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
      <div style={{ display: farhanaDialogue === 13 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">...I’m sorry.</p>
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
      <div style={{ display: farhanaDialogue === 14 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          No, <em>I’m</em> sorry. I shouldn’t vent to you, and it’s not your
          fault. Anyway. I made this for you. It’s a little box, made of pine,
          and I painted forget-me-nots on the sides. ...Please don’t look at me
          like that. It’s not supposed to be mean; it’s supposed to be sweet.
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
      <div style={{ display: farhanaDialogue === 15 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">I... I need to go.</p>
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

export default Farhana3Conversation;
