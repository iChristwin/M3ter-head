import React, { Component } from "react";
import M3ter from "./components/M3ter";

class App extends Component {
  state = {
    eyes: 15,
    mouth: 10,
    texture: 5,
  };
  setType = (type) => {
    this.setState(type);
  };
  setColor = (color) => {
    this.setState(color);
  };
  randomizeM3ter = () => {
    this.setState({
      eyes: Math.round(Math.random() * 15),
      mouth: Math.round(Math.random() * 10),
      texture: Math.round(Math.random() * 5),
      color: "#" + Math.random().toString(16).slice(2, 8),
    });
  };
  componentDidMount = () => {
    this.randomizeM3ter();
  };
  render() {
    const { eyes, mouth, texture, color } = this.state;
    return (
      <>
        <svg
          version="1.1"
          id="root"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="-20 0 222 222"
        >
          <M3ter eyes={eyes} mouth={mouth} color={color} texture={texture} />
        </svg>
        <button onClick={this.randomizeM3ter}>Randomize</button>
      </>
    );
  }
}
export default App;
