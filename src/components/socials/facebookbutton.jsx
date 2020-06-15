import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";

class FacebookButton extends Component {
  state = {};
  render() {
    return (
      <a
        href="https://www.facebook.com/UnderstandingIndianMilllennials/"
        target="_target"
        style={{ width: 35, height: 35, color: "black" }}
      >
        <FaFacebookSquare style={{ width: 35, height: 35 }} />
      </a>
    );
  }
}

export default FacebookButton;
