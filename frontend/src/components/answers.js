import Answer from "./answer.js";

export default function Answers({ answers }) {
  const answerElements = answers.map((answer) => {
    return (
      <Answer
        //onAnswerSelect={onAnswerSelect}
        answer={answer}
        key={answer.id}
        {...answer}
      />
    );
  });
  return (
    <div className="">
      {answerElements}
    </div>
  );
}
