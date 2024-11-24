import alba from "../../images/albacircle.png";
import farhana from "../../images/farhanacircle.png";
import ji from "../../images/jicircle.png";
import player from "../../images/player.png";

export function getDialogueLabel(type) {
  if (type === "player") {
    return (
      <div className="player-dialogue-label fade-in-text">
        <img src={player} alt="Plant avatar" id="player-avatar" />
      </div>
    );
  } else if (type === "farhana") {
    return (
      <div className="farhana-dialogue-label fade-in-text">
        <img src={farhana} alt="Farhana" id="farhana-avatar" />
        <p>Farhana (she/her/hers)</p>
      </div>
    );
  } else if (type === "alba") {
    return (
      <div className="alba-dialogue-label fade-in-text">
        <img src={alba} alt="Alba" id="alba-avatar" />
        <p>Alba (they/them/theirs)</p>
      </div>
    );
  } else if (type === "ji") {
    return (
      <div className="ji-dialogue-label fade-in-text">
        <img src={ji} alt="Ji" id="ji-avatar" />
        <p>Ji (he/him/his)</p>
      </div>
    );
  }
}
