import React, { Component } from "react";

class LatestArticle extends Component {
  state = {};
  render() {
    return (
      <div
        id="latestArticle"
        style={{
          display: "grid",
          gridTemplateColumns: "10% 1fr 1fr",
          gridAutoRows: "minmax(200px, auto)",
          alignItems: "end",
        }}
      >
        <div
          style={{
            height: 20,
            width: 20,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontFamily: "Unna",
              fontStyle: "italic",
              fontWeight: "bold",
              position: "relative",
              left: "150%",
            }}
          >
            Latest
          </div>
        </div>
      </div>
    );
  }
}

export default LatestArticle;
