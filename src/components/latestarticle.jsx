import React, { Component } from "react";
import { motion } from "framer-motion";

const lineExtend = {
  rest: {
    width: 0,
    transition: {
      duration: 1,
    },
  },
  hover: {
    width: 120,
    transition: {
      duration: 1,
    },
  },
};

const textHighlight = {
  rest: {
    transition: {
      duration: 1,
    },
  },
  hover: {
    backgroundImage:
      "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
    transition: {
      duration: 1,
    },
  },
  leave: {
    transition: {
      duration: 1,
    },
  },
};

class LatestArticle extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    link: this.props.link,
  };
  render() {
    return (
      <div
        id="latestArticle"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateAreas: `"." "desc" "latestTopic"`,
        }}
      >
        <div
          style={{
            height: 20,
            width: 20,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            gridArea: "desc",
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontFamily: "Unna",
              fontStyle: "italic",
              fontWeight: "bold",
              position: "relative",
              left: "150%",
            }}
          >
            featured
          </div>
        </div>
        <motion.a
          href={this.state.link}
          target="_blank"
          style={{
            textDecoration: "none",
            gridArea: "latestTopic",
            color: "black",
          }}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <div style={{ width: "250px" }}>
            <motion.span
              variants={textHighlight}
              style={{
                fontFamily: "Unna",
                fontWeight: "bold",
                fontSize: 30,
                position: "relative",
              }}
            >
              {this.state.title}
              <motion.div
                variants={lineExtend}
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  width: 0,
                  height: 1.2,
                  top: 10,
                }}
              ></motion.div>
            </motion.span>
          </div>
          <div
            style={{
              position: "relative",
              top: 30,
              fontFamily: "Roboto, sans-serif",
              fontSize: 17,
              fontWeight: 130,
              lineHeight: 1.36,
            }}
          >
            {this.state.description}
          </div>
        </motion.a>
      </div>
    );
  }
}

export default LatestArticle;
