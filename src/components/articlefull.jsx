import React, { Component } from "react";
import NavComplete from "../components/navcomplete";

class ArticleFull extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
  };
  render() {
    return (
      <div>
        <NavComplete />
        <div>{this.state.title}</div>
        <div>{this.state.description}</div>
        <div>This is text</div>
      </div>
    );
  }
}

export default ArticleFull;
