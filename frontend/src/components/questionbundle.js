import React from "react";
import Question from "./question";
import Answers from "./answers";

const QuestionBundle = ({ question }) => {
  return (
    <div>
      <div className="content">
        <Question question={question.question} />
        <Answers answers={question.answers} />
      </div>
    </div>
  );
};

export default QuestionBundle;
