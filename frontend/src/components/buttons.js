import "../styles/Buttons.css";
import React from "react";

class Buttons extends React.Component {
  state = { started: false, answeredQuestion: 0 , checked: false};
  start = (event) => {
    this.setState({ started: true });
    this.props.onStart(this.state.started);
  };
  next = (event) => {
    const numberChecked = this.checkCheckedNumber();
    switch (true) {
      case numberChecked < 1:
          alert("please select an option");
        break;
        case numberChecked > 1:
          alert("Only one option allowed");
        break;
      default:
        this.setState({ answeredQuestion: this.state.answeredQuestion + 1 });
        this.props.onNext(this.state.answeredQuestion);
          break;
    }
  };

  checkCheckedNumber = () =>{
    console.log("checkCheckedNumber");
    var checked = [];
    var checkboxes = document.getElementsByClassName("answer-checkbox");
    for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index];
      if (checkbox.checked) checked.push(checkbox);
    }
    console.log(checked.length);
    return checked.length;
  }

 

  render() {
    var myDiv = (
        <div className="buttons-div">
        {this.state.started === false &&
        <button id= 'start-button' started={this.started} onClick={this.start}>
          start
        </button>
        }
        {this.props.checked &&(
          <button id= 'next-button' answeredquestion={this.answeredQuestion} onClick={this.next}>
            next
          </button>
          )}
        </div>
      );
    

    return <div className="buttons">{myDiv}</div>;
  }
}
export default Buttons;
