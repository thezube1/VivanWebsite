import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link, Router } from "react-router-dom";

class HamburgerNav extends Component {
  state = {};
  render() {
    return (
      <motion.a
        href="#"
        style={{
          color: "black",
          textDecoration: "none",
          position: "relative",
          top: 20,
        }}
      >
        <div style={{ height: 4, width: 28, backgroundColor: "black" }}></div>
        <div
          style={{
            height: 4,
            width: 28,
            backgroundColor: "black",
            position: "relative",
            top: 10,
          }}
        ></div>
        <div
          style={{
            height: 4,
            width: 28,
            backgroundColor: "black",
            position: "relative",
            bottom: 1,
          }}
        ></div>
      </motion.a>
    );
  }
}

export default HamburgerNav;
