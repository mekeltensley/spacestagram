import React, { Component } from "react";
import "./Navbar.css";
import "./Photo.css";

class Photo extends Component {
  render() {
    return (
      <article className="post" ref="post">
        <header>
          <div className="post-user">
            <div className="post-user-profilepicture">
              <img
                src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                alt="NASA Profile Picture"
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
                src="https://images.unsplash.com/photo-1616808830150-562e1d55778b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=454&q=80"
                style={{ width: "655px", height: "485px" }}
                alt="The Moon"
              />
              <figcaption>
                <h3>
                  [Photo Name]
                </h3>
                <br/>
                <p>[Photo Details]</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </article>
    );
  }
}
export default Photo;
