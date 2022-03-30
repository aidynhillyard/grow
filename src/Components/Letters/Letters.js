import "./Letters.css";

const Letters = ({ letter1, letter2, letter3 }) => {
  return (
    <div>
        <div style={{
          display: !letter1 && !letter2 && !letter3 ? "block" : "none",
        }}><p>You have not received any letters yet.</p></div>
        <div className="letter" style={{
          display: letter1 ? "block" : "none",
        }}><h2>Letter #1</h2>
        <p>Text of Letter #1 goes here. It's amazing.</p></div>
        <div className="letter" style={{
          display: letter2 ? "block" : "none",
        }}><h2>Letter #2</h2>
        <p>This is for Letter #2. It's also amazing.</p></div>
        <div className="letter" style={{
          display: letter3 ? "block" : "none",
        }}><h2>Letter #3</h2>
        <p>Letter #3 text here. Such an amazing letter!</p></div>
    </div>
  );
};

export default Letters;