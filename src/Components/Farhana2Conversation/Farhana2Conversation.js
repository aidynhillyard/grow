import "./Farhana2Conversation.css";
import { useState } from "react";
import { getDialogueLabel } from "../UIElements/UIElements";
import sprig from "../../images/sprig.png";

const Farhana2Conversation = ({
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
    <div className="dialogue-container">
      <div
        className="talk-button-img"
        style={{ display: actionPoints > 0 && !globalShow ? "inline" : "none" }}
      >
        <img className="sprig" src={sprig} alt="" />
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
        </button>
      </div>
      <div style={{ display: farhanaDialogue === 1 ? "inline" : "none" }}>
        {getDialogueLabel("player")}
        <p className="fade-in-text player-dialogue">
          Hi, Farhana! Where are you off to?
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
        {getDialogueLabel("farhana")}
        <p className="fade-in-text npc-dialogue">
          The theater, to say hi to Ji, and then the corner store, to pick up a
          few things for my sister. For our dad, really. After his stroke, he
          moved in with her and her husband, and she has a lot on her plate, so
          I try to help out when I can.
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
        {getDialogueLabel("player")}
        <p className="fade-in-text player-dialogue">That's kind of you.</p>
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
      <div style={{ display: farhanaDialogue === 4 ? "inline" : "none" }}>
        {getDialogueLabel("farhana")}
        <p className="fade-in-text npc-dialogue">
          It's what you do for family. She and her husband have our dad living
          with them, plus four kids, and I honestly don't know how she keeps it
          together with a house that busy.
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
        {getDialogueLabel("player")}
        <p className="fade-in-text player-dialogue">
          I take it you don't live with her, then?
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
      <div style={{ display: farhanaDialogue === 6 ? "inline" : "none" }}>
        {getDialogueLabel("farhana")}
        <p className="fade-in-text npc-dialogue">
          ...No. I...? Nevermind. Anyway, since I'm already headed to the store,
          I'm happy to pick you up something if you want?
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
        {getDialogueLabel("player")}
        <p className="fade-in-text player-dialogue">
          Um, I'm okay, but thanks anyway.
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
        {getDialogueLabel("farhana")}
        <p className="fade-in-text npc-dialogue">
          Alright, see you later! And don't forget to say hi to Alba and Ji.
          They're excited to talk with you!
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

export default Farhana2Conversation;
