import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DateAuthorNoHighlight from "./dateauthornohighlight";

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
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage:
      "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
    transition: {
      duration: 0.8,
    },
  },
  leave: {
    transition: {
      duration: 0.8,
    },
  },
};

class ArticleSpread extends Component {
  state = {
    title: this.props.title,
    desc: this.props.content,
    link: this.props.link,
    route: this.props.route,
    author: this.props.author,
    date: this.props.date,
  };
  render() {
    return (
      <div>
        <Link to={this.props.route} style={{ textDecoration: "none" }}>
          <motion.div
            style={{
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
                marginTop: 20,
                gridAutoColumns: "inherit",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 100,
                lineHeight: 1.36,
              }}
            >
              {this.state.desc}
            </div>
          </motion.div>
        </Link>
        <div style={{ marginTop: 20 }}>
          <DateAuthorNoHighlight
            author={this.state.author}
            date={this.state.date}
          />
        </div>
      </div>
    );
  }
}

export default ArticleSpread;
