import React, { Component, Fragment } from "react";
import Photo from "./components/Photo";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Planetmoon from "./components/video/planetmoon.mp4";


class App extends Component {
  render() {
    return (
      < Router>
      <div className="App" >
        <video autoPlay loop muted id="background-video">
          <source src={Planetmoon} type="video/mp4"/>
        </video>
        <Routes>
          <Route path='/'
            element={
              <Fragment>
                  <Navbar/>
                  <Photo/>
                  <Footer />
              </Fragment>
            }
          />
        </Routes>
        <video loop autoPlay>
        <source
          src="https://github.com/mekeltensley/spacestagram/blob/main/Planet%20Moon.mp4"
          type="video/mp4"
        />
      </video>
      </div>
    </Router>
    );
  }
}

export default App;
