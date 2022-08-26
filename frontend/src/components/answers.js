import Answer from "./answer.js";


export default function Answers({ answers ,onAnswerCheck}) {
  const handleOtherCheckboxes = (key) => {
    console.log('handleOtherCheckboxes')
    for (let index = 0; index < answers.length; index++) {
      const a = answers[index];
      if (a.checked === true || a.id !== key) {
        a.checked = false;
        let element = document.getElementById(a.id);
        console.log(a.id)
        element.isChecked = false;
      }
    }

  } 
  const answerElements = answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        onAnswerCheck = {onAnswerCheck}
        handleOtherCheckboxes = {handleOtherCheckboxes}
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
