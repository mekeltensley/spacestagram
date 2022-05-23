import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-menus">
          <div className="nav-brand">
            <h1>
              <a className="web-title" href="/">
                Spacestagram
              </a>
            </h1>
          </div>
          <div className="search">
            <input type="text" placeholder="search" />
            <span className="icon">
              <i class="material-icons">search</i>
            </span>
          </div>
          <div className="navbar-item is-flex-touch">
            <a className="navbar-item" href="/">
              <i className="material-icons">explore</i>
            </a>
            <button className="likes">
              <i className="material-icons">favorite_border</i>
            </button>
            <a className="navbar-item" href="/">
              <i className="material-icons">person_outline</i>
            </a>
          </div>
        </div>
        <hr/>
      </nav>
    );
  }
}

export default Navbar;
