import "./Library.css";
import { useState } from "react";

const Library = ({ actionPoints, decrementActionPoints }) => {
  // useStates
  const [showBook1, setShowBook1] = useState(false);
  const [showBook2, setShowBook2] = useState(false);
  const [showBook3, setShowBook3] = useState(false);

  return (
    <div className="library">
      <p>
        There are several books in the library. Reading them takes an Action
        Point.
      </p>
      <div className="book1">
        <button
          style={{
            display:
              actionPoints > 0 && showBook1 === false ? "inline" : "none",
          }}
          onClick={() => {
            decrementActionPoints();
            setShowBook1(true);
          }}
        >
          <p>
            <em>99: Stories of the Game</em> by Wayne Gretsky
          </p>
        </button>
        <div
          style={{
            display: showBook1 === true ? "inline" : "none",
          }}
        >
          <p className="book-container book-title">
            <em>99: Stories of the Game</em> by Wayne Gretsky
          </p>
          <p className="book-container">Oh, there's a scrap of paper...? It's a recipe for Hotteok. I wonder where it came from.</p>
          <p className="book-container response">
            Hm, I might try making this.
          </p>
          <button
            onClick={() => {
              setShowBook1(false);
            }}
          >
            <p className="close">Close</p>
          </button>
        </div>
      </div>
      <div className="book2">
        <button
          style={{
            display:
              actionPoints > 0 && showBook2 === false ? "inline" : "none",
          }}
          onClick={() => {
            decrementActionPoints();
            setShowBook2(true);
          }}
        >
          <p>
            <em>The Essential Rumi</em>
          </p>
        </button>
        <div
          style={{
            display: showBook2 === true ? "inline" : "none",
          }}
        >
          <p className="book-container book-title">
            <em>The Essential Rumi</em>
          </p>
          <p className="book-container">
            <i>
              "Sorrow prepares you for joy. It violently sweeps everything out
              of your house, so that new joy can find space to enter. It shakes
              the yellow leaves from the bough of your heart, so that fresh,
              green leaves can grow in their place. It pulls up the rotten
              roots, so that new roots hidden beneath have room to grow.
              Whatever sorrow shakes from your heart, far better things will
              take their place."
            </i>
          </p>
          <p className="book-container response">
            ...I must be really prepared for joy right about now.
          </p>
          <button
            onClick={() => {
              setShowBook2(false);
            }}
          >
            <p className="close">Close</p>
          </button>
        </div>
      </div>
      <div className="book3">
        <button
          style={{
            display:
              actionPoints > 0 && showBook3 === false ? "inline" : "none",
          }}
          onClick={() => {
            decrementActionPoints();
            setShowBook3(true);
          }}
        >
          <p>
            <em>Stolen Love</em> by Celestia Rochambeau
          </p>
        </button>
        <div
          style={{
            display: showBook3 === true ? "inline" : "none",
          }}
        >
          <p className="book-container book-title">
            <em>Stolen Love</em> by Celestia Rochambeau
          </p>
          <p className="book-container">
            <i>
              He wrapped her in his strong arms as the rain lashed against the
              windows. The low rumble of thunder echoed the thunder in her
              heart.
            </i>
          </p>
          <p className="book-container">
            <i>"I've... never felt like this before."</i>
          </p>
          <p className="book-container">
            <i>"It's okay to let go, Vanessa. There's only us."</i>
          </p>
          <p className="book-container">
            <i>"But... what will everyone say?"</i>
          </p>
          <p className="book-container">
            <i>
              "What's more important? What they might say? Or what you want,
              right now, with me?"
            </i>
          </p>
          <p className="book-container response">
            Oh, Mom. You always did love your romance novels.
          </p>
          <button
            onClick={() => {
              setShowBook3(false);
            }}
          >
            <p className="close">Close</p>
          </button>
        </div>
      </div>
      <div
        style={{
          display: actionPoints === 0 ? "inline" : "none",
        }}
      >
        <p>
          You do not have any Action Points, so you cannot read any books. Check
          back tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Library;
