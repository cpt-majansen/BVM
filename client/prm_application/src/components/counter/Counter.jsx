import { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="Counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment() {
    //console.log("increment");
    this.state.counter++;
    this.setState({
      state: this.state.counter + 1,
    });
  }
}
