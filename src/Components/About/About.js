import "./About.css";
import Container from "react-bootstrap/Container";
import growtitle from "../../images/growtitle.png";

const About = () => {
  return (
    <Container>
      <div className="about-grow">
        <img className="grow-title" src={growtitle} alt="Grow" />
      </div>
      <p className="about">
        GROW was designed to pass the{" "}
        <a
          href="https://capricorn-0mnikorn.tumblr.com/post/633330323882688512/a-bechdel-style-test-for-disabled-characters-you"
          target="_blank"
        >
          1001 Desires Test
        </a>
        :
        <ul>
          <li>There must be a disabled person;</li>
          <li>
            Who wants something besides either A. a cure to their disability, B.
            revenge, or C. to die;
          </li>
          <li>The disabled person does not get cured or die at the end.</li>
        </ul>
      </p>
      <p className="about">
        In GROW, you have recently survived an accident that resulted in
        permanent paralysis and dissociative amnesia. You move back to your
        childhood town, but you don't remember the town, or the people in it.
        You have the opportunity to grow plants and trade them with townspeople
        as you try to understand more about who you were... and who you could
        be.
      </p>
      <p className="about">
        GROW was written, developed, and coded by Aidyn Hillyard (zie/hir/hirs).
        The images of townspeople were created with{" "}
        <a href="https://picrew.me/image_maker/332600" target="_blank">
          Djarn's Picrew
        </a>
        .
      </p>
    </Container>
  );
};

export default About;
