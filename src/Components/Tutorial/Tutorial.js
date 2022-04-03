import "./Tutorial.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import farhana from "../../images/farhanacircle.png";
import player from "../../images/player.png";
import note from "../../images/note.png";

const Tutorial = ({ setLocation, setNewGame }) => {
  const [dialogue, setDialogue] = useState(0);

  return (
    <Container className="tutorial-container">
      <button
        style={{ display: dialogue === 0 ? "inline" : "none" }}
        onClick={() => {
          setDialogue((prevState) => prevState + 1);
          setNewGame(false);
        }}
      >
        Start a New Game
      </button>{" "}
      <div className="global-dialogue" style={{ display: dialogue === 1 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Hey, Friend! Welcome back to town. When I heard you'd be moving back
          into your old home, but using a wheelchair, I took the liberty of
          installing some... modifications for you. What do you think?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 2 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          Thank you, but are you sure that wooden ramp is stable?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 3 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Absolutely. It's a 4.8 degree grade. And I've been a carpenter for
          over a decade, remember?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 4 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">...</p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 5 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Sorry. I didn't mean anything by that; it's just going to take awhile
          for me to adjust. I know you told me on the phone, but… you really
          don't remember anything?
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 6 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">
          No, I don't. The doctors say my memory will come back in time, but for
          now, they said the best thing I can do is be in familiar surroundings
          and be patient. So, here I am.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 7 ? "inline" : "none" }}>
        <div className="farhana-dialogue-label fade-in-text">
          <img src={farhana} alt="Farhana" id="farhana-avatar" />
          <p>Farhana (she/her/hers)</p>
        </div>
        <p className="fade-in-text npc-dialogue">
          Well, we're all glad to have you back. I'll, um, leave you to it. I'm
          sure you have a lot to unpack. Oh, and I added a few touches inside
          you might like, as well.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 8 ? "inline" : "none" }}>
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
        <p className="fade-in-text player-dialogue">Thank you, Farhana.</p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 9 ? "inline" : "none" }}>
        <p className="fade-in-text meanwhile">
          <em>Inside the house...</em>
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div
        style={{ display: dialogue > 9 && dialogue < 13 ? "inline" : "none" }}
      >
        <div className="player-dialogue-label fade-in-text">
          <img src={player} alt="Plant avatar" id="player-avatar" />
        </div>
      </div>
      <div style={{ display: dialogue === 10 ? "inline" : "none" }}>
        <p className="fade-in-text player-dialogue">
          Wow, Farhana really did think of everything. There's handrails by the
          toilet and the shower stall, and the shower stall even has a bench.
          Now to check out the kitchen....
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 11 ? "inline" : "none" }}>
        <p className="fade-in-text player-dialogue">
          Lowering the counters must've taken a lot of work–and money. I need to
          find a way to thank her.
        </p>
        <p className="fade-in-text player-dialogue">
          What are these empty pots for? Oh, there's a note.
        </p>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      <div style={{ display: dialogue === 12 ? "inline" : "none" }}>
        <p className="fade-in-text">
          <em>
            I was going through my shed and found these piles of seed packets.
            You always did like growing plants, so I thought I'd leave them here
            for you, just in case.
          </em>
        </p>
        <p className="fade-in-text">
          <em>– Farhana</em>
        </p>
        <div>
          <p className="fade-in-text">
            <img
              className="note-plant"
              src={note}
              alt="Line drawing of a leafy plant"
            />
          </p>
        </div>
        <button
          className="fade-in-text"
          aria-label="next"
          onClick={() => {
            setDialogue((prevState) => prevState + 1);
          }}
        >
          &#9660;
        </button>
      </div>
      {/* Tutorial */}
      <div className="tutorial">
        <div style={{ display: dialogue > 12 ? "inline" : "none" }}>
          <h2 className="fade-in-text">How to Play</h2>
        </div>
        <div style={{ display: dialogue === 13 ? "inline" : "none" }}>
          <p className="fade-in-text">
            To plant seeds, you need to be in your Home. You have 3 empty pots,
            and you can plant one seed in each one.
          </p>
          <button
            className="fade-in-text"
            aria-label="next"
            onClick={() => {
              setDialogue((prevState) => prevState + 1);
            }}
          >
            &#9660;
          </button>
        </div>
        <div style={{ display: dialogue === 14 ? "inline" : "none" }}>
          <p className="fade-in-text">
            Every day, you have a limited amount of time to do actions. You have
            4 Action Points each day, meaning you can do 4 actions each day.
            Planting seeds, caring for plants, and talking to townspeople take 1
            Action Point each.
          </p>
          <button
            className="fade-in-text"
            aria-label="next"
            onClick={() => {
              setDialogue((prevState) => prevState + 1);
            }}
          >
            &#9660;
          </button>
        </div>
        <div style={{ display: dialogue === 15 ? "inline" : "none" }}>
          <p className="fade-in-text">
            When you have a seed planted, one of your actions each day will be
            to care for your plant. Each plant needs to be cared for separately,
            so if you have 2 plants, it will take 2 Action Points to care for
            them: 1 for the first plant and 1 for the second plant.
          </p>
          <button
            className="fade-in-text"
            aria-label="next"
            onClick={() => {
              setDialogue((prevState) => prevState + 1);
            }}
          >
            &#9660;
          </button>
        </div>
        <div style={{ display: dialogue === 16 ? "inline" : "none" }}>
          <p className="fade-in-text">
            When your plant is fully grown, you'll see it bloom. Someone in town
            might be interested in it, and <em>you</em> might be interested in
            what they will trade for it. You can visit the town to talk to the
            townspeople.
          </p>
          <p className="fade-in-text">Happy planting!</p>
          <p className="go-home fade-in-text">
            <button
              className="end"
              onClick={() => {
                setLocation("home");
              }}
            >
              Go to Home
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Tutorial;
