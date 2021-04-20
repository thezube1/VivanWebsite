import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import ArticleText from "./articletext";
import DateAuthor from "./dateauthor";

import { initGA, PageView } from "./tracking/index";

class ArticleFull extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    date: this.props.date,
    author: this.props.author,
    alt: this.props.alt,
    link: this.props.link,
  };

  componentDidMount() {
    initGA();
    PageView();
  }
  render() {
    return (
      <div>
        <NavComplete />
        <div
          id="Full"
          style={{
            position: "absolute",
            left: "50%",
            maxWidth: 700,
            width: "90%",
            transform: "translate(-50%)",
          }}
        >
          <div style={{ marginBottom: 20, marginTop: 50 }}>
            <span
              style={{
                fontFamily: "Unna",
                fontWeight: "bold",
                fontSize: 70,
              }}
            >
              {this.state.title}
            </span>
          </div>
          <div style={{ marginBottom: 50 }}>
            <DateAuthor date={this.state.date} author={this.state.author} />
          </div>
          <div>
            <img
              src={this.props.image}
              style={{ maxWidth: 500, width: "100%" }}
              alt={this.state.alt}
            />
          </div>
          <div style={{ marginTop: 40, marginBottom: 50 }}>
            <ArticleText desc={this.state.description} />
          </div>
          <div style={{ marginBottom: 100 }}>
            <span
              style={{
                backgroundColor: "rgba(253, 210, 90, .65)",
                fontSize: 25,
                fontFamily: "Unna",
                fontWeight: "bold",
              }}
            >
              <a
                href={this.state.link}
                target="_target"
                style={{ textDecoration: "None", color: "black" }}
              >
                Read the full piece here
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleFull;
