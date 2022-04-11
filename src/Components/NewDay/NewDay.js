import "./NewDay.css";

const NewDay = ({ startNewDay, actionPoints, globalShow }) => {
  return (
    <div>
      <div>
      <p style={{
          display: actionPoints === 0 && !globalShow ? "inline" : "none",
        }}>
        You have no more Action Points remaining. Would you like to start a new
        day now?
      </p>
      <p style={{
          display: actionPoints > 0 && !globalShow ? "inline" : "none",
        }}>You may start a new day when you are ready.</p>
        </div>
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
