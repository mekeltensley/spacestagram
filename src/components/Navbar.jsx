import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="container-one">
        <div className="title">Spacestagram</div>
        <div class="navbar">
        <div class="navbar-item is-flex-touch">
            <a class="navbar-item">
              <i class="material-icons">explore</i>
            </a>
            <a class="navbar-item">
              <i class="material-icons">favorite_border</i>
            </a>
            <a class="navbar-item">
              <i class="material-icons">person_outline</i>
            </a>
          </div>
              <div class="search">
                <input
                  class="input is-small has-text-centered"
                  type="text"
                  placeholder="search"
                />
                <span class="icon is-left is-small">
                  <i class="material-icons">search</i>
                </span>
              </div>
          </div>
        </div>
    );
  }
}

export default Navbar;
