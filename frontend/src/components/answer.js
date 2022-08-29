import "../styles/Answer.css";
import React, { useState } from "react";


const Answer = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    props.onAnswerCheck(props.weight, event.target.checked, props.id);
  };

  //https://stackoverflow.com/a/72815049/1731667
  return (
    <div>
      {" "}
      <input 
        className="answer-checkbox"
        type="checkbox"
        key={props.id}
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

