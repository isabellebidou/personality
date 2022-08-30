import "../styles/Buttons.css";
import React from "react";

class Buttons extends React.Component {
  state = { started: false, answeredQuestion: 0 , checked: false};
  start = (event) => {
    this.setState({ started: true });
    this.props.onStart(this.state.started);
  };
  next = (event) => {
    this.setState({ answeredQuestion: this.state.answeredQuestion + 1 });
    this.props.onNext(this.state.answeredQuestion);
    console.log(this.state.answeredQuestion);
  };

  render() {
    var myDiv = null;
    if (this.state.started === false) {
      myDiv = (
        <div>
          <button id= 'start-button' started={this.started} onClick={this.start}>
            start
          </button>
        </div>
      );
    } else {
      myDiv = (
        
        <div>
        {this.props.checked &&(
          <button id= 'next-button' answeredquestion={this.answeredQuestion} onClick={this.next}>
            next
          </button>
          )}
        </div>
      );
    }

    return <div className="buttons">{myDiv}</div>;
  }
}
export default Buttons;
