import React, { useState } from "react";
/*class Answer extends React.Component (props){
  state = {
    isChecked: false
  };
  handleCheck = (event) => {
    this.setState({ isChecked: event.target.checked })
    console.log('on change answer')
    console.log(props.weight)
    if (event.target.checked === true) {
      props.onAnswerCheck(props.weight); 
    }
          props.handleOtherCheckboxes(props.id);
  }
  render () {
    <div>
    {" "}
   <input
     type="checkbox"
     key= {props.id}
     id={props.id}
     name={props.answer}
     value={props.weight}
     onChange={(event) => {
       handleCheck(event)
       
     }}
     checked={isChecked}
   />
     <label htmlFor={props.answer}>{props.answer}</label>
 </div>
    

  }
  

}*/

const Answer = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    console.log("on change answer");
    console.log(props.weight);
    props.onAnswerCheck(props.weight, event.target.checked, props.id);
    props.handleOtherCheckboxes(props.id);
  };

  //https://stackoverflow.com/a/72815049/1731667
  return (
    <div>
      {" "}
      <input
        type="checkbox"
        key={props.id}
        id={props.id}
        name={props.answer}
        value={props.weight}
        onChange={(event) => {
          handleCheck(event);
        }}
        checked={isChecked}
      />
      <label htmlFor={props.answer}>{props.answer}</label>
    </div>
  );
};
export default Answer;
/*export default function Answer({ answer, onAnswerSelect }) {


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
}*/

/*class Answer extends React.Component {
  state = { weight: 0 };
  handleQuestionSelected = (event) => {
    event.preventDefault();
    this.setState({ weight: event.value});
    console.log("event");
    console.log(event.target);
    this.props.onQuestionSelected(this.state.weight);
  };
  render(answer, key, weight) {
    return (
      <div>
  
        <input
          type="checkbox"
          key = {key}
          id={answer}
          name={answer}
          value={weight}
          weight={weight}
          selected={false}
          onClick= {this.handleQuestionSelected}
          onSelect={this.handleQuestionSelected}
        />
  
          <label htmlFor={answer}>{answer}</label>
      
    
    </div>
  );
    }
  

}*/
//export default Answer;
