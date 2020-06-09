import React, { Component } from "react";

class LatestArticle extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            height: 20,
            width: 20,
            backgroundColor: "black",
            position: "relative",
            bottom: -150,
            right: -100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 30,
              fontFamily: "Unna",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 35,
            }}
          >
            latest
          </div>
        </div>
        <div id="article name" style={{ position: "relative" }}>
          Article Title
        </div>
      </div>
    );
  }
}

export default LatestArticle;
