import React from "react";

export default function Answer({ answer, onAnswerSelect }) {
  return (
    <div>
       {" "}
      <input
        type="radio"
        id={answer}
        name={answer}
        value={answer}
        selected={false}
        onSelect={onAnswerSelect}
      />
        <label htmlFor={answer}>{answer}</label>
    </div>
  );
}
