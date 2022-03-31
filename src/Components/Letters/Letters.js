import "./Letters.css";
import { useState } from "react";

const Letters = ({
  letter1,
  letter1IsRead,
  setLetter1IsRead,
  letter2,
  letter2IsRead,
  setLetter2IsRead,
  letter3,
  letter3IsRead,
  setLetter3IsRead,
}) => {
  const [showLetter1, setShowLetter1] = useState(false);
  const [showLetter2, setShowLetter2] = useState(false);
  const [showLetter3, setShowLetter3] = useState(false);

  return (
    <div>
      <div
        style={{
          display: !letter1 && !letter2 && !letter3 ? "block" : "none",
        }}
      >
        <p>You have not received any letters yet.</p>
      </div>

      {/* Letter #1 */}
      <div
        className="letter"
        style={{
          display: letter1 ? "block" : "none",
        }}
      >
        <button
          onClick={() => {
            setLetter1IsRead(true);
            setShowLetter1(true);
          }}
        >
          Read Letter #1
        </button>

        <div
          style={{
            display: showLetter1 ? "block" : "none",
          }}
        >
          <h2>Letter #1</h2>
          <p>Text of Letter #1 goes here. It's amazing.</p>
        </div>
      </div>

      {/* Letter #2 */}

      <div
        className="letter"
        style={{
          display: letter2 ? "block" : "none",
        }}
      >
        <button
          onClick={() => {
            setLetter2IsRead(true);
            setShowLetter2(true);
          }}
        >
          Read Letter #2
        </button>

        <div
          style={{
            display: showLetter2 ? "block" : "none",
          }}
        >
          <h2>Letter #2</h2>
          <p>Text of Letter #2 goes here. It's amazing.</p>
        </div>
      </div>

      {/* Letter #3 */}
      <div
        className="letter"
        style={{
          display: letter3 ? "block" : "none",
        }}
      >
        <button
          onClick={() => {
            setLetter3IsRead(true);
            setShowLetter3(true);
          }}
        >
          Read Letter #3
        </button>

        <div
          style={{
            display: showLetter3 ? "block" : "none",
          }}
        >
          <h2>Letter #3</h2>
          <p>Text of Letter #3 goes here. It's amazing.</p>
        </div>
      </div>
    </div>
  );
};

export default Letters;
