import "./Town.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Farhana1Conversation from "../Farhana1Conversation/Farhana1Conversation";
import Farhana2Conversation from "../Farhana2Conversation/Farhana2Conversation";
import Farhana3Conversation from "../Farhana3Conversation/Farhana3Conversation";
import Farhana4Conversation from "../Farhana4Conversation/Farhana4Conversation";
import Farhana5Conversation from "../Farhana5Conversation/Farhana5Conversation";
import Ji1Conversation from "../Ji1Conversation/Ji1Conversation";
import Ji2Conversation from "../Ji2Conversation/Ji2Conversation";
import Ji3Conversation from "../Ji3Conversation/Ji3Conversation";
import Ji4Conversation from "../Ji4Conversation/Ji4Conversation";
import Ji5Conversation from "../Ji5Conversation/Ji5Conversation";
import Alba1Conversation from "../Alba1Conversation/Alba1Conversation";
import Alba2Conversation from "../Alba2Conversation/Alba2Conversation";
import Alba3Conversation from "../Alba3Conversation/Alba3Conversation";
import Alba4Conversation from "../Alba4Conversation/Alba4Conversation";
import Alba5Conversation from "../Alba5Conversation/Alba5Conversation";

const Town = ({
  actionPoints,
  decrementActionPoints,
  talkedToFarhana,
  setTalkedToFarhana,
  dialogueStepFarhana,
  tradeDealFarhana,
  talkedToJi,
  setTalkedToJi,
  dialogueStepJi,
  tradeDealJi,
  talkedToAlba,
  setTalkedToAlba,
  dialogueStepAlba,
  tradeDealAlba,
}) => {
  const [showFarhana, setShowFarhana] = useState(true);
  const [showJi, setShowJi] = useState(true);
  const [jiTalk, setJiTalk] = useState(false);
  const [showAlba, setShowAlba] = useState(true);

  console.log("JiTalk is: ", jiTalk)

  // Talk to Farhana Function
  const farhanaConversation = () => {
    if (talkedToFarhana === false) {
      decrementActionPoints();
    }
    setTalkedToFarhana(true);
  };

  // Talk to Ji Function
  const jiConversation = () => {
    if (talkedToJi === false) {
      decrementActionPoints();
    }
    setTalkedToJi(true);
  };

  // Talk to Alba Function
  const albaConversation = () => {
    if (talkedToAlba === false) {
      decrementActionPoints();
    }
    setTalkedToAlba(true);
  };

  // Trade Plant Function

  // dialogue step 5 will only show if tradeplant(true)
  // dialogue step 5 will also have button to trade more plants
  // button runs tradeplantfunction

  return (
    <Container>
      <h1>Town</h1>
      <p>
        This is placeholder text about the town. It also has instructions on
        talking to the townspeople below. One day, there might be a photo.
      </p>
      <div
        className="farhana"
        style={{ display: showFarhana ? "inline" : "none" }}
      >
        <h3>Farhana</h3>
        <p>(she/her/hers)</p>
        <p>
          This is text about Farhana. It says a little bit about who she is and
          her relationship to you. There's probably also a picture of her.
        </p>
      </div>
      {/* Farhana Dialogue #1 */}
      <div
        className="farhana-dialogue1"
        style={{
          display: showFarhana && dialogueStepFarhana === 1 ? "inline" : "none",
        }}
      >
        <Farhana1Conversation
          actionPoints={actionPoints}
          farhanaConversation={farhanaConversation}
          showJi={showJi}
          setShowJi={setShowJi}
          showAlba={showAlba}
          setShowAlba={setShowAlba}
        />
      </div>
      {/* Farhana Dialogue #2 */}
      <div
        className="farhana-dialogue2"
        style={{ display: dialogueStepFarhana === 2 ? "inline" : "none" }}
      >
        <Farhana2Conversation
          actionPoints={actionPoints}
          farhanaConversation={farhanaConversation}
        />
      </div>
      {/* Farhana Dialogue #3 */}
      <div
        className="farhana-dialogue3"
        style={{ display: dialogueStepFarhana === 3 ? "inline" : "none" }}
      >
        <Farhana3Conversation
          actionPoints={actionPoints}
          farhanaConversation={farhanaConversation}
        />
      </div>
      {/* Farhana Dialogue #4 */}
      <div
        className="farhana-dialogue4"
        style={{ display: dialogueStepFarhana === 4 ? "inline" : "none" }}
      >
        <Farhana4Conversation
          actionPoints={actionPoints}
          farhanaConversation={farhanaConversation}
          tradeDealFarhana={tradeDealFarhana}
        />
      </div>
      {/* Farhana Dialogue #5 */}
      <div
        className="farhana-dialogue5"
        style={{ display: dialogueStepFarhana === 5 ? "inline" : "none" }}
      >
        <Farhana5Conversation
          actionPoints={actionPoints}
          farhanaConversation={farhanaConversation}
        />
      </div>
      <div className="ji" style={{ display: (showJi && !jiTalk) ? "inline" : "none" }}>
        <div style={{ display: !jiTalk ? "inline" : "none" }}>
          <h3>Ji</h3>
          <p>(he/him/his)</p>
        </div>
        <p style={{ display: !jiTalk ? "inline" : "none" }}>
          This is text about Ji. It says a little bit about who they are and
          their relationship to you. There's probably also a picture of them.
        </p>
        <button
          onClick={() => {
            setShowFarhana(false);
            setShowAlba(false);
            setJiTalk(true);
            jiConversation();
          }}
          style={{ display: actionPoints > 0 && !jiTalk ? "inline" : "none" }}
        >
          Talk
        </button>
      </div>
      {/* Ji Dialogue #1 */}
      <div
        className="ji-dialogue1"
        style={{ display: jiTalk && dialogueStepJi === 1 ? "inline" : "none" }}
      >
        <Ji1Conversation
          setJiTalk={setJiTalk}
          setShowFarhana={setShowFarhana}
          setShowJi={setShowJi}
          setShowAlba={setShowAlba}
        />
      </div>
      {/* Ji Dialogue #2 */}
      <div
        className="ji-dialogue2"
        style={{ display: jiTalk && dialogueStepJi === 2 ? "inline" : "none" }}
      >
        <Ji2Conversation
          setJiTalk={setJiTalk}
          setShowFarhana={setShowFarhana}
          setShowJi={setShowJi}
          setShowAlba={setShowAlba}
        />
      </div>
      {/* Ji Dialogue #3 */}
      <div
        className="ji-dialogue3"
        style={{ display: jiTalk && dialogueStepJi === 3 ? "inline" : "none" }}
      >
        <Ji3Conversation
          setJiTalk={setJiTalk}
          setShowFarhana={setShowFarhana}
          setShowJi={setShowJi}
          setShowAlba={setShowAlba}
        />
      </div>
      {/* Ji Dialogue #4 */}
      <div
        className="ji-dialogue4"
        style={{ display: jiTalk && dialogueStepJi === 4 ? "inline" : "none" }}
      >
        <Ji4Conversation
          setJiTalk={setJiTalk}
          setShowFarhana={setShowFarhana}
          setShowJi={setShowJi}
          setShowAlba={setShowAlba}
          tradeDealJi={tradeDealJi}
        />
      </div>
      {/* Ji Dialogue #5 */}
      <div
        className="ji-dialogue5"
        style={{ display: jiTalk && dialogueStepJi === 5 ? "inline" : "none" }}
      >
        <Ji5Conversation
          setJiTalk={setJiTalk}
          setShowFarhana={setShowFarhana}
          setShowJi={setShowJi}
          setShowAlba={setShowAlba}
          tradeDealJi={tradeDealJi}
        />
      </div>
      <div className="alba" style={{ display: showAlba ? "inline" : "none" }}>
        <h3>Alba</h3>
        (they/them/theirs)
        <p>
          This is text about Alba. It says a little bit about who they are and
          their relationship to you. There's probably also a picture of them.
        </p>
      </div>
      {/* Alba Dialogue #1 */}
      <div
        className="alba-dialogue1"
        style={{
          display: showAlba && dialogueStepAlba === 1 ? "inline" : "none",
        }}
      >
        <Alba1Conversation
          actionPoints={actionPoints}
          albaConversation={albaConversation}
        />
      </div>
      {/* Alba Dialogue #2 */}
      <div
        className="alba-dialogue2"
        style={{ display: dialogueStepAlba === 2 ? "inline" : "none" }}
      >
        <Alba2Conversation
          actionPoints={actionPoints}
          albaConversation={albaConversation}
        />
      </div>
      {/* Alba Dialogue #3 */}
      <div
        className="alba-dialogue3"
        style={{ display: dialogueStepAlba === 3 ? "inline" : "none" }}
      >
        <Alba3Conversation
          actionPoints={actionPoints}
          albaConversation={albaConversation}
        />
      </div>
      {/* Alba Dialogue #4 */}
      <div
        className="alba-dialogue4"
        style={{ display: dialogueStepAlba === 4 ? "inline" : "none" }}
      >
        <Alba4Conversation
          actionPoints={actionPoints}
          albaConversation={albaConversation}
          tradeDealAlba={tradeDealAlba}
        />
      </div>
      {/* Alba Dialogue #5 */}
      <div
        className="alba-dialogue5"
        style={{ display: dialogueStepAlba === 5 ? "inline" : "none" }}
      >
        <Alba5Conversation
          actionPoints={actionPoints}
          albaConversation={albaConversation}
        />
      </div>
    </Container>
  );
};

export default Town;
