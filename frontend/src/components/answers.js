import Answer from "./answer.js";


export default function Answers({ answers ,onAnswerCheck}) {
  const answerElements = answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        key = {answer.id}//https://stackoverflow.com/a/43892905/1731667
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
