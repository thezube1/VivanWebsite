import React, { Component } from "react";
import { FaTwitter } from "react-icons/fa";

class TwitterButton extends Component {
  state = {};
  render() {
    return (
      <a
        target="_target"
        href="https://twitter.com/VivanMarwaha?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        style={{ width: 35, height: 35, color: "black" }}
      >
        <FaTwitter style={{ width: 35, height: 35 }} />
      </a>
    );
  }
}

export default TwitterButton;
