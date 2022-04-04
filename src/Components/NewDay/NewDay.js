import "./NewDay.css";

const NewDay = ({ startNewDay }) => {
  return (
    <div>
      <p>
        You have no more Action Points remaining. Would you like to start a new
        day now?
      </p>
      <button
        onClick={() => {
          startNewDay();
        }}
      >
        Start a New Day
      </button>
    </div>
  );
};

export default NewDay;
