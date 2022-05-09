import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NasaPostContainer from "./components/NasaPostContainer";
import Planetmoon from "./components/video/planetmoon.mp4";

class App extends Component {
  render() {
    return (
      <>
        <video autoPlay loop muted id="background-video">
          <source src={Planetmoon} type="video/mp4" />
        </video>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <NasaPostContainer />
                </Fragment>
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
