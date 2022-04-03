import "./Library.css";
import { useState } from 'react';

const Library = ({ actionPoints, decrementActionPoints }) => {
    // useStates
  const [showBook1, setShowBook1] = useState(false);
  const [showBook2, setShowBook2] = useState(false);
  const [showBook3, setShowBook3] = useState(false);

  return (
    <div className="library">
      <p>This is the library.</p>
      <div className="book1">
      <button style={{
            display: actionPoints > 0 && showBook1 === false ? "inline" : "none",
          }} onClick={() => {
            decrementActionPoints();
            setShowBook1(true);
          }}>Book 1</button>
          <div style={{
            display: showBook1 === true ? "inline" : "none",
          }}><p>Book 1 text goes here.</p>
          <button onClick={() => {
            setShowBook1(false);
          }}>Close</button></div></div>
          <div className="book2">
      <button style={{
            display: actionPoints > 0 && showBook2 === false ? "inline" : "none",
          }} onClick={() => {
            decrementActionPoints();
            setShowBook2(true);
          }}>Book 2</button>
          <div style={{
            display: showBook2 === true ? "inline" : "none",
          }}><p>Book 2 text goes here.</p>
          <button onClick={() => {
            setShowBook2(false);
          }}>Close</button></div></div>
          <div className="book3">
      <button style={{
            display: actionPoints > 0 && showBook3 === false ? "inline" : "none",
          }} onClick={() => {
            decrementActionPoints();
            setShowBook3(true);
          }}>Book 3</button>
          <div style={{
            display: showBook3 === true ? "inline" : "none",
          }}><p>Book 3 text goes here.</p>
          <button onClick={() => {
            setShowBook3(false);
          }}>Close</button></div></div>
      <div style={{
            display: actionPoints === 0 ? "inline" : "none",
          }}><p>You do not have any Action Points, so you cannot read any books. Check back tomorrow.</p></div>
    </div>
  );
};

export default Library;