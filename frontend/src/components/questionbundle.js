import React from "react";
import Question from "./question";
import Answers from "./answers";

const QuestionBundle = ({ question, onAnswerSelect }) => {
  return (
    <div>
      <div className="content">
        <Question question={question.question}/>
        <Answers onAnswerSelect = {onAnswerSelect} answers={question.answers} />
      </div>
    </div>
  );
};

export default QuestionBundle;
