import "./styles/App.css";
import React from "react";
import QuestionBundle from "./components/questionbundle";
import Buttons from "./components/buttons";
import Result from "./components/result";
import Webimage from "./components/Webimage";

class App extends React.Component {
  state = {
    questions: [], //questions retreived from memory
    answeredQuestion: 0, //keeps track of the index of the question currently on display
    started: false, //keeps track if test already started
    finished: false, //keeps track if test already ended
    score: 0, //sum of the weights of aswered questions
    message: "", //portrait result for current test
    readyForNext: false, //true when one and only one checkbox is checked
  };
  // fetches the questions and the end messaged when the user clicks on start
  startTest = async () => {
    const data = await fetch("/data");
    const questions = await data.json();
    this.setState({ questions: questions });
    this.setState({ started: true });
  };
  // called when the user clicks on the next button
  toNextQuestion = async (index) => {
    //remove the next button
    this.setState({ readyForNext: false });
    this.setState({ answeredQuestion: index + 1 });
    const answer = this.checkedAnswer();
    this.setState({ score: this.state.score + parseInt(answer.value)});
    if (this.state.answeredQuestion === this.state.questions.length - 1) {
      this.setState({ finished: true });
      this.getMessage();
    }
  };
  //once all the questions are answered the result message is selected according to the score
  getMessage = async () => {
    var index = Math.ceil(this.state.score / this.state.questions.length);
    const messageData = await fetch("/results/:" + index);
    const messageJson = await messageData.json();
    this.setState({ message: messageJson });
  };
  checkedAnswer = () => {
    var radios = document.getElementsByClassName("answer-checkbox");
    for (let index = 0; index < radios.length; index++) {
      const radio = radios[index];
      if (radio.checked) return radio;
    }
    return null;
  };

  // called each time an answer is selected
  onAnswerSelect = () => {
    this.setState({ readyForNext: true });
  };

  render() {
    return (
      <div className="App">
        {this.state.questions.length > 0 && !this.state.finished && (
          <QuestionBundle
            question={this.state.questions[this.state.answeredQuestion]}
            onAnswerSelect={this.onAnswerSelect}
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
            checked={this.state.readyForNext}
            answeredQuestionIndex={this.state.answeredQuestion}
          />
        )}
      </div>
    );
  }
}

export default App;
//react frontend and node.js backend together
//https://www.youtube.com/watch?v=3isCTSUdXaQ
