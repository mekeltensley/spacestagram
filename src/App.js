import React, { Component, Fragment } from "react";
import Photo from "./components/Photo";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      < Router>
      <div className="App" >
        <Routes>
          <Route path='/'
            element={
              <Fragment>
                  <Navbar/>
                  <Photo/>
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
    );
  }
}

export default App;
