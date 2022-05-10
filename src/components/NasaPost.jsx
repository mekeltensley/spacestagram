import React, { Component } from "react";
import "./NasaPost.css";
import LazyLoad from "react-lazyload";
import axios from "axios";
import Button from "./Button";
import "./Button.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function Loading() {
  return (
    <div className="flex justify-center items-center space-x-2 z-10">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64" />
    </div>
  );
}

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

      .catch((error) => {
        this.setState({ hasError: true });
        this.setState({ errorMessage: error });
      });
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel("Axios request canceled.");
  }

  likePost(index) {
    const fav = [...this.state.photos];
    fav[index].liked = !fav[index].liked;
  }

  pageLoading() {
    if (!this.state.isLoaded) {
      return Loading();
    }
    
    return (
        <div className="flex flex-row flex-wrap justify-center">
          {this.state.photos.map((results) => {
            return (
              <div key={results.index}>
                <LazyLoad placeholder={<Loading />}>
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
                      <div className="post-caption">
                      <Button />
                      </div>
                    </div>
                  </article>
                </LazyLoad>
              </div>
            );
          })}
        </div>
    );
  }
  render() {
    if (this.state.hasError) {
      <h1>Error Loading</h1>;
    }
    return <div>{this.pageLoading()}</div>;
  }
}

export default NasaPost;
