import "./Ji5Conversation.css";
import { useState } from "react";
import ji from "../../images/jiplaceholder.png";
import player from "../../images/playeravplaceholder.png";

const Ji5Conversation = ({
  actionPoints,
  letter2IsRead,
  jiTalk,
  setJiTalk,
  jiConversation,
  setShowFarhana,
  setShowJi,
  setShowAlba,
  tradeDealJi,
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
          setJiTalk(true);
          setJiDialogue((prevState) => prevState + 1);
        }}
        style={{
          display:
            actionPoints > 0 && !jiTalk && letter2IsRead ? "inline" : "none",
        }}
      >
        Talk 5
      </button>
      <div style={{ display: jiDialogue === 1 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">Heya! How’ve you been?</p>
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
          I’m doing okay. I read the letter from me, to me, that you gave me.
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
        <p className="fade-in-text npc-dialogue">And…?</p>
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
          And I wrote it just after your grandma passed away. I… really loved
          her.
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
          I love her, too. Thanks again for the tulip, by the way. Did you know
          that flowers have meanings? Tulips have a lot of different meanings,
          but blue ones are supposed to mean trust.
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
          Hm. That’s funny; the letter talked about trust, too.
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
          It’s all connected. Life, and all that.
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
        <p className="fade-in-text player-dialogue">
          I’m beginning to feel like that's true.
        </p>
        <button
          className="fade-in-text"
          onClick={() => {
            setJiDialogue(0);
            setJiTalk(false);
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

export default Ji5Conversation;
