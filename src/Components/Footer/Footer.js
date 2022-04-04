import "./Footer.css";
import github from "../../images/icongithub.png";
import email from "../../images/iconenvelope.png";
import linkedin from "../../images/iconlinkedin.png";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="social-media-container">
        <a
          href="https://github.com/aidynhillyard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub icon" className="social-media-icon" />
        </a>
        <a href="mailto:aidyn.hillyard@gmail.com?subject=Grow&body=Message">
          <img src={email} alt="Envelope icon" className="social-media-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/aidynhillyard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="social-media-icon"
          />
        </a>
      </div>
      <p className="footer-text">Designed and coded by Aidyn Hillyard, 2022</p>
    </div>
  );
};

export default Footer;
