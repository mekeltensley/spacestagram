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
          <div class="search">
            <input type="text" placeholder="search" />
            <span class="icon">
              <i class="material-icons">search</i>
            </span>
          </div>
          <div class="navbar-item is-flex-touch">
            <a className="navbar-item" href="/">
              <i class="material-icons">explore</i>
            </a>
            <button class="likes">
              <i class="material-icons">favorite_border</i>
            </button>
            <a class="navbar-item" href="/">
              <i class="material-icons">person_outline</i>
            </a>
          </div>
        </div>
        <hr/>
      </nav>
    );
  }
}

export default Navbar;
