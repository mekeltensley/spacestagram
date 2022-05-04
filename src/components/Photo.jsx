import React, { Component } from "react";
import Like from "./Like";
import "./Navbar.css";
import "./Photo.css";
import "./Like.css";


class Photo extends Component {
  render() {
    return (
      <article className="post" ref="post">
        <header>
          <div className="post-user">
            <div className="post-user-profilepicture">
              <img
                src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                alt="NASA Astronaut"
              />
            </div>
            <div className="post-user-username">
              <span>@NASA</span>
            </div>
          </div>
        </header>
        <div className="post-image">
          <div className="post-image-bg">
            <figure class="hover-img">
              <img
                src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                style={{ width: "655px", height: "485px" }}
                alt="The Galaxy"
              />
              <figcaption>
                <h3>[Title]</h3>
                <br />
                <p>[Details]</p>
              </figcaption>
            </figure>
          </div>
          <div className="post-caption">
            <Like />
          </div>
        </div>
      </article>
    );
  }
}
export default Photo;
