import React from "react";
import "./NasaPost.css";
import Navbar from "./Navbar";
import Like from "./Like";
import "./Like.css";

const NasaPost = (props) => {
  const { title, explanation, date, url } = props.data;

  return (
    <>
      <Navbar />
      <article className="post">
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
              <video style={{ width: "655px", height: "485px" }}>
                <source src={url} type="video/mp4" />
              </video>
              {/* <img
                src={url}
                
                alt={title}
              /> */}
              <figcaption>
                <h3>{title}</h3>
                <br />
                <p id="explanation">{explanation}</p>
                <span id="info">{date}</span>
              </figcaption>
            </figure>
          </div>
          <div className="post-caption">
            <Like />
          </div>
        </div>
      </article>
    </>
  );
};

export default NasaPost;
