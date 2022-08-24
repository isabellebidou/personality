import React from "react";

class Buttons extends React.Component {
  state = { started: false, answeredQuestion: 0 };
  start = (event) => {
    event.preventDefault();
    this.setState({ started: true });
    this.props.onStart(this.state.answeredQuestion);
  };
  next = (event) => {
    event.preventDefault();
    this.setState({ answeredQuestion: this.state.answeredQuestion + 1 });
    this.props.onNext(this.state.answeredQuestion);
  };

  render() {
    return (
      <div className="buttons">
        <button started={this.started} onClick={this.start}>
          start
        </button>
        <button answeredQuestion={this.answeredQuestion} onClick={this.next}>
          next
        </button>
      </div>
    );
  }
}

export default Buttons;
