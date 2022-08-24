import "./App.css";
//import React, { useEffect, useState } from "react";
import React from 'react';
import QuestionBundle from "./components/questionbundle";
import Buttons from "./components/buttons";

class App extends React.Component {
  state = {
    items: [],
    answeredQuestion: 0,
    started: false,
    finished: false,
    score: 0,
  };

  startTest = async () => {
    const data = await fetch("/data");
    const items = await data.json();
    this.setState({ items: items });
  };

  toNextQuestion = async (index) => {
    this.setState({ answeredQuestion: index });
    if (this.state.answeredQuestion === this.state.items.length - 1)
      this.state.finished = true;
  };
  onAnswerSelect = (answer) => {
    this.setState({ score: this.state.score + answer.weight });
    console.log('onAnswerSelect');
    console.log(this.state.score );
  };
  render() {
    var myDiv = null;

    if (this.state.items.length > 0 && !this.state.finished) {
      myDiv = (
        <div className="App">
          <QuestionBundle
            question={this.state.items[this.state.answeredQuestion]}
          />
          <Buttons onStart={this.startTest} onNext={this.toNextQuestion} />
        </div>
      );
    } else if (this.state.items.length === 0 && !this.state.finished) {
      myDiv = (
        <div className="App">
          <Buttons onStart={this.startTest} onNext={this.toNextQuestion} />
        </div>
      );
    } else {
      myDiv = (
        <div className="App">
          <span>result: {this.state.score}</span>
        </div>
      );
    }

    return <div className="App">{myDiv}</div>;
  }
}

export default App;
//https://www.youtube.com/watch?v=3isCTSUdXaQ
