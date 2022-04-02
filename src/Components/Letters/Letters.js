import "./Letters.css";
import { useState } from "react";
import sprig from "../../images/sprig.png";

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
  // useStates
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
      ><img className="sprig" src={sprig} />
        <button
          onClick={() => {
            setLetter1IsRead(true);
            setShowLetter1(!showLetter1);
          }}
        >
          Read Letter Given by Alba
        </button>

        <div className="full-letter"
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
              setShowLetter1(!showLetter1);
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
      ><img className="sprig" src={sprig} />
        <button
          onClick={() => {
            setLetter2IsRead(true);
            setShowLetter2(!showLetter2);
          }}
        >
          Read Letter Given by Ji
        </button>
        <div className="full-letter"
          style={{
            display: showLetter2 ? "block" : "none",
          }}
        >
          <p>Dear Future Me,</p>

          <p>
            The memorial service for Ji's grandma was last week. Ji has been
            really busy with family, and he hasn't been working of course, so we
            haven't talked much. But I wish I could do something. I'm covering
            his shifts at the theater but I want to do more.
          </p>

          <p>
            I was really nervous singing at the service but Ji had asked me to
            and I kinda just had to trust that it would be okay. I really wanted
            to do something to honor her. She was always so kind to me when Ji
            and I would stop by his house after work. Always cooking stuff and
            asking how I was doing in school.
          </p>

          <p>
            There were so many stories about his grandma at the memorial
            service. It feels like everyone in the whole town had something to
            say about her. How she always wished them good morning, or how she
            would share her cooking. Or like that one time when she stopped that
            bully from hurting that kid down the street.
          </p>

          <p>
            It sounds nice to be remembered for touching so many people's lives
            and making people's days brighter. Singing can do that. Ji told me
            how much it meant to him. So a song is like a gift, then. Maybe
            people would say that about me one day, when I'm gone: that I gave
            them songs, and they felt things, and it meant something.
          </p>

          <p>- Me</p>
          <button
            onClick={() => {
              setShowLetter2(!showLetter2);
            }}
          >
            Close
          </button>
        </div>
      </div>

      {/* Letter #3 */}
      <div
        className="letter"
        style={{
          display: letter3 ? "block" : "none",
        }}
      ><img className="sprig" src={sprig} />
        <button
          onClick={() => {
            setLetter3IsRead(true);
            setShowLetter3(!showLetter3);
          }}
        >
          Read Letter Given by Farhana
        </button>

        <div className="full-letter"
          style={{
            display: showLetter3 ? "block" : "none",
          }}
        >
          <p>Dear Future Me,</p>

          <p>
            Today, Farhana and I decided to move in together. I don't think her
            family is exactly thrilled, but she promised me she would handle
            that. It's going to be very difficult to explain to them that we're
            not together, but we're like… together. See, I can't even explain it
            to Future Me.
          </p>

          <p>
            Mom was like, “So you're going to be roommates with your best
            friend?” and it's not exactly that, either. Like, yes, but also no.
            It's like saying a lake is an ocean. So of course Ji was like, “Oh,
            so you're dating.” But it's not that at all. That's like saying an
            ocean is a mountain.
          </p>

          <p>
            A mountain is a mountain, and an ocean is an ocean. An ocean is not
            a lesser version of a mountain, and a mountain is not more than an
            ocean. Farhana and I just know we want to travel the ocean together,
            in one boat. Okay, I don't even know if this metaphor is working.
            Whatever.
          </p>

          <p>
            Anyway, we're going to start looking at places next week. I told her
            I'm not picky, as long as there's room for some sort of garden, even
            if we have to keep it inside with potted plants. I just think
            growing things is like magic. Today is like magic. Planting this
            seed with Farhana, to see what will grow.
          </p>

          <p>- Me</p>
          <button
            onClick={() => {
              setShowLetter3(!showLetter3);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letters;
