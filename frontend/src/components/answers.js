import Answer from "./answer.js";


export default function Answers({ answers ,onAnswerCheck}) {
  const answerElements = answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        onAnswerCheck = {onAnswerCheck}
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
