import React, { Component } from "react";
import "./Navbar.css";
import "./Photo.css";

const RippleButton = ({ children, onClick }) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className="ripple-button"
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};

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
                <h3>[Photo Name]</h3>
                <br />
                <p>[Photo Details]</p>
              </figcaption>
            </figure>
          </div>
          <div className="post-caption">
            <RippleButton onClick={(e) => console.log(e)}>Like</RippleButton>
            <RippleButton onClick={(e) => console.log(e)}>Unlike</RippleButton>
          </div>
        </div>
      </article>
    );
  }
}
export default Photo;
