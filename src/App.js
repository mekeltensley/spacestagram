import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Photo />
      </div>
    );
  }
}

export default App;