import React, { Fragment, Component } from "react";
import Navbar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Home" />
      </div>
    );
  }
}

export default App;
