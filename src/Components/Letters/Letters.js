import "./Letters.css";
import { useState } from "react";

const Letters = ({
  actionPoints,
  decrementActionPoints,
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
          style={{
            display: actionPoints > 0 ? "inline" : "none",
          }}
          onClick={() => {
            decrementActionPoints();
            setLetter1IsRead(true);
            setShowLetter1(true);
          }}
        >
          Read Letter Given by Alba
        </button>

        <div
          style={{
            display: showLetter1 ? "block" : "none",
          }}
        >
          <p>Dear Future Me,</p>

          <p>
            Well, today was really something. Future Me might not even remember
            today, but let me tell you: Current Me feels awful. I won the 400m
            sprint, so you'd think I'd be happy, right? No. The whole family
            kept talking about scholarships this, and college track that, and
            honestly I just want to scream.
          </p>

          <p>
            I have been trying for months now to make them understand I don't
            even like track. I only joined because I've got friends on the team,
            but really I hate running and Mom won't let me quit half way through
            the season and the whole thing is just really unfair. Dad would've
            let me.
          </p>

          <p>
            Everyone wants to know what I want to be. What my career will be,
            what kind of job I'll have, what I'm planning on DOING with my life.
            They say I don't have to have it all figured out yet, but that's not
            how they act. Everything feels so big, like whatever I do now will
            determine my entire future.
          </p>

          <p>
            Here's the thing, though. I don't know what I want for my future. I
            hope you know by now, or we're probably in big trouble. That's why
            I'm writing to you, I guess. I want to believe that Future Me is
            okay. I want to believe we got it figured out.
          </p>

          <p>- Me</p>
          <button
            onClick={() => {
              setShowLetter1(false);
            }}
          >
            Close
          </button>
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
          style={{
            display: actionPoints > 0 ? "inline" : "none",
          }}
          onClick={() => {
            decrementActionPoints();
            setLetter2IsRead(true);
            setShowLetter2(!showLetter2);
          }}
        >
          Read Letter Given by Ji
        </button>

        <div
          style={{
            display: showLetter2 ? "block" : "none",
          }}
        >
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
          style={{
            display: actionPoints > 0 ? "inline" : "none",
          }}
          onClick={() => {
            decrementActionPoints();
            setLetter3IsRead(true);
            setShowLetter3(!showLetter3);
          }}
        >
          Read Letter Given by Farhana
        </button>

        <div
          style={{
            display: showLetter3 ? "block" : "none",
          }}
        >
          <p>Text of Letter #3 goes here. It's amazing.</p>
        </div>
      </div>
    </div>
  );
};

export default Letters;
