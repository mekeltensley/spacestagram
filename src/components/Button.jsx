import React, { Component } from "react";
import LikePost from "./LikePost";
import UnlikePost from "./UnlikePost";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleLikesPost = this.handleLikesPost.bind(this);
    this.handleUnlikePost = this.handleUnlikePost.bind(this);
    this.state = {isLikesPost: false};
  }

  handleLikesPost() {
    this.setState({isLikesPost: true});
  }

  handleUnlikePost() {
    this.setState({isLikesPost: false});
  }

  render() {
    const isLikesPost = this.state.isLikesPost;
    let button;
    if (isLikesPost) {
      button = <UnlikePost onClick={this.handleUnlikePost} />;
    } else {
      button = <LikePost onClick={this.handleLikesPost} />;
    }

    return (
      <button className="heart">
      {button}
    </button>
    );
  }
}

export default Button;