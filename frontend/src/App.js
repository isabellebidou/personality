import "./App.css";
import React from "react";
import QuestionBundle from "./components/questionbundle";
import Buttons from "./components/buttons";
import Result from "./components/result";

class App extends React.Component {
  state = {
    items: [],
    answeredQuestion: 0,
    started: false,
    finished: false,
    score: 0,
    selectedAnswers: [],
    messages:[],
    message:''
  };
 

  startTest = async (started) => {
    const data = await fetch("/data");
    const items = await data.json();
    this.setState({ items: items });
    this.setState({ started: started }); 
    const data2 = await fetch("/results");
    const messages = await data2.json();
    this.setState({ messages: messages });
  };
  getMessage = async () => {
    var message = "";
      switch (true) {
        case (this.state.score <= 6):
          message = this.state.messages.find(item => item.id === 1)
          console.log(message);
          break;
        case (this.state.score > 6 && this.state.score < 10):
            message = this.state.messages.find(item => item.id === 2)
            console.log(message);
            break;
        default:
          message = this.state.messages.find(item => item.id === 3);
          console.log(message);
          break;
      }
      console.log(message);
      this.setState({ message: message });
  }

  toNextQuestion = async (index) => {
    this.setState({ answeredQuestion: index });
    console.log(this.state.score);
    if (this.state.answeredQuestion === this.state.items.length - 1) {
      this.setState({ finished: true})
      this.getMessage();
    }
  };
  onAnswerCheck = (weight, checked, id) => {
    if (checked && !this.state.selectedAnswers.includes(id)) {
      this.state.selectedAnswers.push(id);
      this.setState({ score: this.state.score + weight });
    } else if (!checked && this.state.selectedAnswers.includes(id)) {
      const index = this.state.selectedAnswers.indexOf(id);
      if (index > -1) {
        this.state.selectedAnswers.splice(index, 1);
        //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
      }
    }
  };

  render() {
    return (
      <div className="App">
      {(this.state.items.length > 0) && (!this.state.finished) &&
          <QuestionBundle
            question={this.state.items[this.state.answeredQuestion]}
            onAnswerCheck={this.onAnswerCheck}
          />}
          {!this.state.finished &&
          <Buttons 
          onStart={this.startTest} 
          onNext={this.toNextQuestion} 
          started ={this.state.started}
          />}
          {this.state.finished &&
            <div className="App">
            <span>result: {this.state.score}</span>
            <Result message={this.state.message}/>
          </div>
          }
          
        </div>
      
    );
  }
}

export default App;
//https://www.youtube.com/watch?v=3isCTSUdXaQ
