import "./Farhana4Conversation.css";
import { useState } from "react";
import farhana from "../../images/farhanacircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Farhana4Conversation = ({
  actionPoints,
  globalShow,
  setGlobalShow,
  farhanaConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
  tradeDealFarhana,
  dialogueStepFarhana,
  pot1Type,
  pot1IsFullyGrown,
  pot2Type,
  pot2IsFullyGrown,
  pot3Type,
  pot3IsFullyGrown,
}) => {
  // useStates
  const [farhanaDialogue, setFarhanaDialogue] = useState(0);

  return (
    <div><div className="talk-button-img" style={{
      display:
        actionPoints > 0 &&
        !globalShow &&
        dialogueStepFarhana === 4 &&
        ((pot1Type === "Forget-Me-Not" && pot1IsFullyGrown === true) ||
          (pot2Type === "Forget-Me-Not" && pot2IsFullyGrown === true) ||
          (pot3Type === "Forget-Me-Not" && pot3IsFullyGrown === true))
          ? "inline"
          : "none",
    }}><img className="sprig" src={sprig}/>
      <button
        onClick={() => {
          setShowJi(false);
          setShowAlba(false);
          farhanaConversation();
          setGlobalShow(true);
          setFarhanaDialogue((prevState) => prevState + 1);
        }}
      >
        Talk
      </button></div>
      <div style={{ display: farhanaDialogue === 1 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Hi, Farhana. I'm sorry about leaving suddenly the other day. I'm
          trying really hard to handle all of this, but some days are harder
          than others.
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
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          It's okay, really. You don't need to apologize to me. But is that...?
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          It's a forget-me-not plant, for you. To, um, apologize. And to say
          thank you for how kind you've been. Fixing up the house, advocating
          about accessibility in the town, being patient with me when I freak
          out.
        </p>
        <button
          className="fade-in-text player-dialogue"
          onClick={() => {
            tradeDealFarhana();
            setFarhanaDialogue((prevState) => prevState + 1);
          }}
        >
          Give Plant
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 4 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Thank you, truly. It's beautiful. ...When I found out about the
          earthquake, I tried to fly back right away, but the airport there was
          in shambles, so I flew to the next closest one and drove through the
          night to get to you.
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
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I... don't remember that.
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
      <div
        style={{
          display:
            farhanaDialogue > 5 && farhanaDialogue < 9 ? "inline" : "none",
        }}
      >
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <div style={{ display: farhanaDialogue === 6 ? "inline" : "none" }}>
          <p className="fade-in-text npc-dialogue">
            That's because they wouldn't let me see you. You were in the ICU for
            such a long time, and they wouldn't let me in, and finally I had to
            come back here and help with my dad. I don't even know what happened
            to your phone in the earthquake, but I couldn't reach you.
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
          <p className="fade-in-text npc-dialogue">
            After they finally let you out of the ICU, I thought maybe you'd do
            your physical therapy here, but you stayed there to work with the
            specialists. And then I got that call from you.... You said you
            called because I was listed in your phone as your emergency contact.
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
          <p className="fade-in-text npc-dialogue">
            ...It's been such a long time, <em>ya hayati</em>. I should've said
            something sooner. But here... maybe this will help. It's a letter
            you wrote, and asked me to keep for you. I know you wanted me to
            give it back years from now, but.... I haven't read it, but I think
            maybe you should read it now.
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
      </div>
      <div style={{ display: farhanaDialogue === 9 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          I... thank you, Farhana. I'm... going to go read this now.
        </p>
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

export default Farhana4Conversation;
