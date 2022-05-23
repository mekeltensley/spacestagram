import React, { Component } from "react";
import "./NasaPost.css";
import axios from "axios";
import Button from "./Button";
import "./Button.css";
import Loader from "./Loader";
import LazyLoad from "react-lazyload";

const API_KEY = process.env.REACT_APP_API_KEY;

class NasaPost extends Component {
  constructor() {
    super();
    this.state = {
      photos: null,
      isLoaded: false,
      hasError: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.axiosCancelSource = axios.CancelToken.source();
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=100`,
       { cancelToken: this.axiosCancelSource.token })
      .then((response) => {
        const { data } = response;
        for (let i = 0; i <= data.length - 1; i += 1) {
          data[i].liked = false;
          data[i].index = 1;
          this.setState({ photos: data });
        }
        this.setState({ isLoaded: true });
      })
  }
  pageLoading() {
    if (!this.state.isLoaded) {
      return Loader();
    }

    return (
        <>
          {this.state.photos.map((results, index) => {
            return (
              <div key={index}>
                 <LazyLoad placeholder={<Loader />}>
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
                          <img src={results.url} alt={results.title} />
                          <figcaption>
                            <h3>{results.title}</h3>
                            <br />
                            <p id="explanation">{results.explanation}</p>
                            <span id="info">Date Captured: {results.date}</span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="post-caption">
                    <Button itemId={results.index}/>
                    </div>
                  </article>
                  </LazyLoad>
              </div>
            );
          })}
        </>
    );
  }
  render() {
    if (this.state.hasError) {
        <h1>Error Occurred</h1>;
    }
    return <div>{this.pageLoading()}</div>;
}
}

export default NasaPost;
