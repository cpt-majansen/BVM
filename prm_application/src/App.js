import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
// import Counter from "./components/counter/Counter";
// import FirstComponent from "./components/learning-examples/FirstComponent";
// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
import Main from "./components/todo/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main></Main>
      </div>
    );
  }
}

// class CounterComponents extends Component {
//   render() {
//     return (
//       <div className="Counter">
//         <Counter></Counter>
//       </div>
//     );
//   }
// }

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }

export default App;
