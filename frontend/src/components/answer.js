import "../styles/Answer.css";
import React from "react";


const Answer = (props) => {
  const handleCheck = (event) => {
    props.onAnswerCheck(props.weight, event.target.checked, props.id);
  };

  return (
    <div className="answer-div">
      <input 
        className="answer-checkbox"
        type="checkbox"
        id={props.id}
        name={props.answer}
        value={props.weight}
        onChange={(event) => {
          handleCheck(event);
        }}
      />
      <label className = "answer-label" htmlFor={props.answer}>{props.answer}</label>
    </div>
  );
};
export default Answer;

