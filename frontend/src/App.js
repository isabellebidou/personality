import "./styles/App.css";
import React from "react";
import QuestionBundle from "./components/questionbundle";
import Buttons from "./components/buttons";
import Result from "./components/result";
import Webimage from "./components/Webimage";

class App extends React.Component {
  state = {
    questions: [],
    answeredQuestion: 0,
    started: false,
    finished: false,
    score: 0,
    selectedAnswers: [],
    messages: [],
    message: "",
    index:0
  };
// fetches the questions and the end messaged when the user clicks on start
  startTest = async () => {
    const data = await fetch("/data");
    const questions = await data.json();
    this.setState({ questions: questions });
    this.setState({ started: true });
    const data2 = await fetch("/results");
    const messages = await data2.json();
    this.setState({ messages: messages });
  };
  getMessage = async () => {
    var message = "";
    switch (true) {
      case this.state.score <= 6:
        message = this.state.messages.find((item) => item.id === 1);
        break;
      case this.state.score > 6 && this.state.score < 10:
        message = this.state.messages.find((item) => item.id === 2);
        break;
      default:
        message = this.state.messages.find((item) => item.id === 3);
        break;
    }
    this.setState({ message: message });
  };

  toNextQuestion = async (index) => {
 

    // make sure only one answer is submitted
    if (this.state.selectedAnswers.length > index + 1) {
      alert(
        "Warning: only one answer is accepted, please deselect one and try again"
      );
    } else {
      this.setState({ answeredQuestion: index + 1 });
      if (this.state.answeredQuestion === this.state.questions.length - 1) {
        this.setState({ finished: true });
        this.getMessage();
      }
    }
  };
  // called each time an answer is selected or deselected
  // a new selected answer is added to the list of selected answers
  // a previously selected answer is removed from the list if uchecked
  onAnswerCheck = (weight, checked, id) => {
    if (checked && !this.state.selectedAnswers.includes(id)) {
      this.state.selectedAnswers.push(id);
      this.setState({ score: this.state.score + weight });
    } else if (!checked && this.state.selectedAnswers.includes(id)) {
      const index = this.state.selectedAnswers.indexOf(id);
      if (index > -1) {
        //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
        this.state.selectedAnswers.splice(index, 1);
      }
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.questions.length > 0 && !this.state.finished && (
          <QuestionBundle
            question={this.state.questions[this.state.answeredQuestion]}
            onAnswerCheck={this.onAnswerCheck}
          />
        )}
        {this.state.finished && (
          <div className="App">
            <Result message={this.state.message} score={this.state.score} />
          </div>
        )}
        {!this.state.started && <Webimage />}
        {!this.state.finished && (
          <Buttons
            onStart={this.startTest}
            onNext={this.toNextQuestion}
            started={this.state.started}
            answeredQuestionIndex = {this.state.answeredQuestion}

          />
        )}
      </div>
    );
  }
}

export default App;
//https://www.youtube.com/watch?v=3isCTSUdXaQ
