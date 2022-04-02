import "./Ji5Conversation.css";
import { useState } from "react";
import ji from "../../images/jicircle.png";
import player from "../../images/player.png";
import sprig from "../../images/sprig.png";

const Ji5Conversation = ({
  actionPoints,
  letter2IsRead,
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
    <div><div className="talk-button-img" style={{
      display:
        actionPoints > 0 && !globalShow && letter2IsRead
          ? "inline"
          : "none",
    }}><img className="sprig" src={sprig}/>
      <button
        onClick={() => {
          setShowFarhana(false);
          setShowAlba(false);
          jiConversation();
          setGlobalShow(true);
          setJiDialogue((prevState) => prevState + 1);
        }}
      >
        Talk
      </button></div>
      <div style={{ display: jiDialogue === 1 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">Heya! How've you been?</p>
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
          I'm doing okay. I read the letter from me, to me, that you gave me.
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
        <p className="fade-in-text npc-dialogue">And...?</p>
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
        <p className="fade-in-text player-dialogue">
          And I wrote it just after your grandma passed away. I... really loved
          her.
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
      <div style={{ display: jiDialogue === 5 ? "inline" : "none" }}>
        <div className="ji-dialogue-label fade-in-text">
          <img src={ji} alt="Ji" id="ji-avatar" />
          <p>Ji (he/him/his)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          I love her, too. Thanks again for the tulip, by the way. Did you know
          that flowers have meanings? Tulips have a lot of different meanings,
          but pink ones are supposed to mean friendship.
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
          That feels accurate. Thank you for being a friend to me, Ji.
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
          You've been through a lot. I have, too. But we don't have to go through it alone.
        </p><button
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

export default Ji5Conversation;
