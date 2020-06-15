import React, { Component } from "react";
import { FaInstagram } from "react-icons/fa";

class InstagramButton extends Component {
  state = {};
  render() {
    return (
      <a
        href="https://www.instagram.com/vivanmarwaha/"
        target="_target"
        style={{ color: "black", width: 35, height: 35 }}
      >
        <span>
          <FaInstagram style={{ width: 35, height: 35 }} />
        </span>
      </a>
    );
  }
}

export default InstagramButton;
