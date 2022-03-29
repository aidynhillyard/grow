import "./NewDay.css";
import Button from 'react-bootstrap/Button'

const NewDay = ({ startNewDay }) => {
  return (
    <div>
        <p>
              You have no more Action Points remaining. Would
              you like to start a new day now?
            </p>
            <Button variant="danger" onClick={() => {
            startNewDay();
          }}>Start a New Day</Button>
    </div>
  );
};

export default NewDay;