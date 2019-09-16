import React, { Component } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class App extends Component {
  // constructor() {
  //   super();
  //   this.myRef = React.createRef();
  // }
  // componentDidMount() {
  //   this.effect = window.VANTA.BIRDS({
  //     el: "#dummy",
  //     backgroundColor: 0xdedede,
  //     color1: 0x3703,
  //     color2: 0xf7d597,
  //     colorMode: "variance"
  //   });
  // }
  // componentWillUnmount() {
  //   if (this.effect) this.effect.destroy();
  // }
  render() {
    return (
      // <div
      //   id="dummy"
      //   className="App"
      //   style={{ width: "100%", height: "400px" }}
      // ></div>
      <div className="App">
        <Navbar title="Home" />
      </div>
    );
  }
}

export default App;
