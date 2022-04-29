import React, { Component } from "react";
import "./Navbar.css";
import "./Photo.css";

class Photo extends Component {
  render() {
    return (
      <article className="post" ref="post">
        <header>
          <h3 className="image-title">[Image Name]</h3>
        </header>
        <div className="post-image">
          <div className="post-image-bg">
            <img
              alt="The moon"
              src="https://images.unsplash.com/photo-1616808830150-562e1d55778b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=454&q=80"
              style= {{ width: '655px', height: '485px'}}

            />
          </div>
        </div>
        <div className="post-caption">
          <strong>John D. Veloper </strong>
          <p className="image-description">[Image Description]</p>
        </div>
      </article>
    );
  }
}
export default Photo;
