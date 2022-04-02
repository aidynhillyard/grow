import "./Town.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Farhana1Conversation from "../Farhana1Conversation/Farhana1Conversation";
import Farhana2Conversation from "../Farhana2Conversation/Farhana2Conversation";
import Farhana3Conversation from "../Farhana3Conversation/Farhana3Conversation";
import Farhana4Conversation from "../Farhana4Conversation/Farhana4Conversation";
import Farhana5Conversation from "../Farhana5Conversation/Farhana5Conversation";
import Farhana6Conversation from "../Farhana6Conversation/Farhana6Conversation";
import Ji1Conversation from "../Ji1Conversation/Ji1Conversation";
import Ji2Conversation from "../Ji2Conversation/Ji2Conversation";
import Ji3Conversation from "../Ji3Conversation/Ji3Conversation";
import Ji4Conversation from "../Ji4Conversation/Ji4Conversation";
import Ji5Conversation from "../Ji5Conversation/Ji5Conversation";
import Ji6Conversation from "../Ji6Conversation/Ji6Conversation";
import Alba1Conversation from "../Alba1Conversation/Alba1Conversation";
import Alba2Conversation from "../Alba2Conversation/Alba2Conversation";
import Alba3Conversation from "../Alba3Conversation/Alba3Conversation";
import Alba4Conversation from "../Alba4Conversation/Alba4Conversation";
import Alba5Conversation from "../Alba5Conversation/Alba5Conversation";
import Alba6Conversation from "../Alba6Conversation/Alba6Conversation";
import town from "../../images/town.png";
import sprig from "../../images/sprig.png";

const Town = ({
  actionPoints,
  decrementActionPoints,
  location,
  setLocation,
  globalShow,
  setGlobalShow,
  letter1IsRead,
  setLetter1IsRead,
  letter2IsRead,
  setLetter2IsRead,
  letter3IsRead,
  setLetter3IsRead,
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
  pot1Type,
  pot1IsFullyGrown,
  pot2Type,
  pot2IsFullyGrown,
  pot3Type,
  pot3IsFullyGrown,
}) => {
  // ***************************
  // *** U S E - S T A T E S ***
  // ***************************
  const [showFarhana, setShowFarhana] = useState(true);
  const [showJi, setShowJi] = useState(true);
  const [showAlba, setShowAlba] = useState(true);

  console.log("GlobalShow is: ", globalShow);
  console.log("Dialogue Step Ji: ", dialogueStepJi);
  console.log("Dialogue Step Alba: ", dialogueStepAlba);
  console.log("Dialogue Step Farhana: ", dialogueStepFarhana);
  console.log(
    "Letter1 is read: ",
    letter1IsRead,
    "| Letter2 is read: ",
    letter2IsRead,
    "| Letter3 is read: ",
    letter3IsRead
  );
  console.log("Pot1Type", pot1Type, "| Pot1 Is Fully Grown?", pot1IsFullyGrown);
  console.log("Pot2Type", pot2Type, "| Pot2 Is Fully Grown?", pot2IsFullyGrown);
  console.log("Pot3Type", pot3Type, "| Pot3 Is Fully Grown?", pot3IsFullyGrown);

  // *************************
  // *** F U N C T I O N S ***
  // *************************

  // *******************
  // TALK TO TOWNSPEOPLE
  // *******************

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

  return (
    <Container>
      <img className="town-title" src={town} alt="Town" />
      <div className="townspeople">
        <div className="farhana" >
          {/* *********************** */}
          {/* **** F A R H A N A **** */}
          {/* *********************** */}
          <div
            className="farhana-name-pronouns" style={{ display: showFarhana && !globalShow ? "inline" : "none" }}
          >
            <div>
              <h3>Farhana</h3>
              <p>(she/her/hers)</p>
            </div>
            <p>
              This is text about Farhana. It says a little bit about who they
              are and their relationship to you. There's probably also a picture
              of them.
            </p>
          </div>
          {/* Farhana Dialogue #1 */}
          <div
            className="farhana-dialogue1"
            style={{
              display:
                showFarhana && dialogueStepFarhana === 1 ? "inline" : "none",
            }}
          >
            <Farhana1Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              farhanaConversation={farhanaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Farhana Dialogue #2 */}
          <div
            className="farhana-dialogue2"
            style={{
              display:
                showFarhana && dialogueStepFarhana === 2 ? "inline" : "none",
            }}
          >
            <Farhana2Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              farhanaConversation={farhanaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Farhana Dialogue #3 */}
          <div
            className="farhana-dialogue3"
            style={{
              display:
                showFarhana && dialogueStepFarhana === 3 ? "inline" : "none",
            }}
          >
            <Farhana3Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              farhanaConversation={farhanaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Farhana Dialogue #4 */}
          <div
            className="farhana-dialogue4"
            style={{
              display:
                showFarhana && dialogueStepFarhana === 4 ? "inline" : "none",
            }}
          >
            <Farhana4Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              farhanaConversation={farhanaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              tradeDealFarhana={tradeDealFarhana}
              dialogueStepFarhana={dialogueStepFarhana}
              pot1Type={pot1Type}
              pot1IsFullyGrown={pot1IsFullyGrown}
              pot2Type={pot2Type}
              pot2IsFullyGrown={pot2IsFullyGrown}
              pot3Type={pot3Type}
              pot3IsFullyGrown={pot3IsFullyGrown}
            />
          </div>
          {/* Farhana Dialogue #5 */}
          <div
            className="farhana-dialogue5"
            style={{
              display:
                showFarhana && dialogueStepFarhana === 5 ? "inline" : "none",
            }}
          >
            <Farhana5Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              farhanaConversation={farhanaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              letter3IsRead={letter3IsRead}
            />
          </div>
          {/* Farhana Dialogue #6 */}
          <div
            className="farhana-dialogue6"
            style={{
              display:
                showFarhana && dialogueStepFarhana > 5 ? "inline" : "none",
            }}
          >
            <Farhana6Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              farhanaConversation={farhanaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              tradeDealFarhana={tradeDealFarhana}
              dialogueStepFarhana={dialogueStepFarhana}
              pot1Type={pot1Type}
              pot1IsFullyGrown={pot1IsFullyGrown}
              pot2Type={pot2Type}
              pot2IsFullyGrown={pot2IsFullyGrown}
              pot3Type={pot3Type}
              pot3IsFullyGrown={pot3IsFullyGrown}
            />
          </div>
        </div>
        <div className="ji" style={{ display: showJi && !globalShow ? "inline" : "none" }}>
          {/* *********************** */}
          {/* ********* J I ********* */}
          {/* *********************** */}
          <div
            className="ji-name-pronouns"
          >
            <div>
              <h3>Ji</h3>
              <p>(he/him/his)</p>
            </div>
            <p>
              This is text about Ji. It says a little bit about who they are and
              their relationship to you. There's probably also a picture of
              them.
            </p>
          </div>
          {/* Ji Dialogue #1 */}
          <div
            className="ji-dialogue1"
            style={{
              display: showJi && dialogueStepJi === 1 ? "inline" : "none",
            }}
          >
            <Ji1Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              jiConversation={jiConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Ji Dialogue #2 */}
          <div
            className="ji-dialogue2"
            style={{
              display: showJi && dialogueStepJi === 2 ? "inline" : "none",
            }}
          >
            <Ji2Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              jiConversation={jiConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Ji Dialogue #3 */}
          <div
            className="ji-dialogue3"
            style={{
              display: showJi && dialogueStepJi === 3 ? "inline" : "none",
            }}
          >
            <Ji3Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              jiConversation={jiConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Ji Dialogue #4 */}
          <div
            className="ji-dialogue4"
            style={{
              display: showJi && dialogueStepJi === 4 ? "inline" : "none",
            }}
          >
            <Ji4Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              jiConversation={jiConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              tradeDealJi={tradeDealJi}
              dialogueStepJi={dialogueStepJi}
              pot1Type={pot1Type}
              pot1IsFullyGrown={pot1IsFullyGrown}
              pot2Type={pot2Type}
              pot2IsFullyGrown={pot2IsFullyGrown}
              pot3Type={pot3Type}
              pot3IsFullyGrown={pot3IsFullyGrown}
            />
          </div>
          {/* Ji Dialogue #5 */}
          <div
            className="ji-dialogue5"
            style={{
              display: showJi && dialogueStepJi === 5 ? "inline" : "none",
            }}
          >
            <Ji5Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              jiConversation={jiConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              letter2IsRead={letter2IsRead}
            />
          </div>
          {/* Ji Dialogue #6 */}
          <div
            className="ji-dialogue6"
            style={{
              display: showJi && dialogueStepJi > 5 ? "inline" : "none",
            }}
          >
            <Ji6Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              jiConversation={jiConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              tradeDealJi={tradeDealJi}
              dialogueStepJi={dialogueStepJi}
              pot1Type={pot1Type}
              pot1IsFullyGrown={pot1IsFullyGrown}
              pot2Type={pot2Type}
              pot2IsFullyGrown={pot2IsFullyGrown}
              pot3Type={pot3Type}
              pot3IsFullyGrown={pot3IsFullyGrown}
            />
          </div>
        </div>
        <div className="alba" style={{ display: showAlba && !globalShow ? "inline" : "none" }}>
          {/* *********************** */}
          {/* ******* A L B A ******* */}
          {/* *********************** */}
          <div
            className="alba-name-pronouns"
          >
            <div>
              <h3>Alba</h3>
              <p>(they/them/theirs)</p>
            </div>
            <p>
              This is text about Alba. It says a little bit about who they are
              and their relationship to you. There's probably also a picture of
              them.
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
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              albaConversation={albaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Alba Dialogue #2 */}
          <div
            className="alba-dialogue2"
            style={{
              display: showAlba && dialogueStepAlba === 2 ? "inline" : "none",
            }}
          >
            <Alba2Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              albaConversation={albaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Alba Dialogue #3 */}
          <div
            className="alba-dialogue3"
            style={{
              display: showAlba && dialogueStepAlba === 3 ? "inline" : "none",
            }}
          >
            <Alba3Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              albaConversation={albaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
            />
          </div>
          {/* Alba Dialogue #4 */}
          <div
            className="alba-dialogue4"
            style={{
              display: showAlba && dialogueStepAlba === 4 ? "inline" : "none",
            }}
          >
            <Alba4Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              albaConversation={albaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              tradeDealAlba={tradeDealAlba}
              dialogueStepAlba={dialogueStepAlba}
              pot1Type={pot1Type}
              pot1IsFullyGrown={pot1IsFullyGrown}
              pot2Type={pot2Type}
              pot2IsFullyGrown={pot2IsFullyGrown}
              pot3Type={pot3Type}
              pot3IsFullyGrown={pot3IsFullyGrown}
            />
          </div>
          {/* Alba Dialogue #5 */}
          <div
            className="alba-dialogue5"
            style={{
              display: showAlba && dialogueStepAlba === 5 ? "inline" : "none",
            }}
          >
            <Alba5Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              albaConversation={albaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              letter1IsRead={letter1IsRead}
            />
          </div>
          {/* Alba Dialogue #6 */}
          <div
            className="alba-dialogue6"
            style={{
              display: showAlba && dialogueStepAlba > 5 ? "inline" : "none",
            }}
          >
            <Alba6Conversation
              actionPoints={actionPoints}
              globalShow={globalShow}
              setGlobalShow={setGlobalShow}
              albaConversation={albaConversation}
              setShowFarhana={setShowFarhana}
              setShowJi={setShowJi}
              setShowAlba={setShowAlba}
              tradeDealAlba={tradeDealAlba}
              dialogueStepAlba={dialogueStepAlba}
              pot1Type={pot1Type}
              pot1IsFullyGrown={pot1IsFullyGrown}
              pot2Type={pot2Type}
              pot2IsFullyGrown={pot2IsFullyGrown}
              pot3Type={pot3Type}
              pot3IsFullyGrown={pot3IsFullyGrown}
            />
          </div>
        </div>
      </div>
      {/* Travel to Home Button */}
      <div className="bottom-links bottom-single-link">
        <img className="sprig" src={sprig} />
        <button
          style={{
            display: location === "town" && !globalShow ? "inline" : "none",
          }}
          onClick={() => {
            setLocation("home");
          }}
        >
          Travel to Home
        </button>
      </div>
    </Container>
  );
};

export default Town;
