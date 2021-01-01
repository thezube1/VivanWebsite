import React, { Component } from "react";
import { motion } from "framer-motion";

const hovered = {
  rest: { scale: 1, margin: 4, rotate: 0 },
  tap: { rotate: 180, transition: { duration: 0.1 } },
  hover: {
    scale: 1.5,
    margin: 10,
    transition: {
      duration: 0.4,
    },
  },
};

class HamburgerNav extends Component {
  state = {};
  render() {
    return (
      <motion.div
        onMouseDown={this.props.handleMouseDown}
        style={{
          flexDirection: "row",
          position: "fixed",
          right: 20,
          top: 20,
          background: "none",
          border: "none",
          zIndex: 2,
          outline: "none",
          cursor: "pointer",
        }}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        animate="rest"
      >
        <div>
          <motion.div
            style={{
              height: 4,
              width: 28,
              backgroundColor: "black",
            }}
            variants={hovered}
          ></motion.div>
          <motion.div
            style={{
              height: 4,
              backgroundColor: "black",
              width: 28,
            }}
            variants={hovered}
          ></motion.div>
          <motion.div
            style={{
              height: 4,
              width: 28,

              backgroundColor: "black",
            }}
            variants={hovered}
          ></motion.div>
        </div>
      </motion.div>
    );
  }
}

export default HamburgerNav;
