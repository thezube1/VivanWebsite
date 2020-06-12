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

class ArticleSpread extends Component {
  state = {};
  render() {
    return (
      <motion.a
        href="https://www.livemint.com/news/india/hope-and-anxiety-among-liberalization-s-children-11577803916064.html"
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
        <motion.span
          variants={textHighlight}
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            fontSize: 30,
            position: "relative",
            bottom: 40,
          }}
        >
          Why millenials <br /> are eating more <br /> fast food
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
        <div
          style={{
            display: "grid",
            gridAutoColumns: "inherit",
            gridColumn: "main1",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 100,
            lineHeight: 1.36,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          explicabo quisquam architecto minima, necessitatibus dolores odit quod
          modi excepturi ducimus suscipit, ullam eaque sunt. Perspiciatis
          laborum explicabo officia vel laudantium reiciendis dolore, doloribus,
          dignissimos vero possimus saepe veniam facilis odit. Voluptatem, eius
          laborum ea amet dolore voluptatum fuga corrupti error.
        </div>
      </motion.a>
    );
  }
}

export default ArticleSpread;
