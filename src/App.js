import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NasaPost from "./components/NasaPost";
import Navbar from "./components/Navbar";
import Planetmoon from "./components/video/planetmoon.mp4";

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
        <video autoPlay loop muted id="background-video">
          <source src={Planetmoon} type="video/mp4" />
        </video>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                  <NasaPost />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
