import React, { Component } from "react";

class LatestArticle extends Component {
  state = {};
  render() {
    return (
      <div id="latestArticle" style={{ marginTop: 110 }}>
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
        <div>Article Title</div>
        <div style={{ display: "grid", gridAutoColumns: "600px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          explicabo quisquam architecto minima, necessitatibus dolores odit quod
          modi excepturi ducimus suscipit, ullam eaque sunt. Perspiciatis
          laborum explicabo officia vel laudantium reiciendis dolore, doloribus,
          dignissimos vero possimus saepe veniam facilis odit. Voluptatem, eius
          laborum ea amet dolore voluptatum fuga corrupti error.
        </div>
      </div>
    );
  }
}

export default LatestArticle;
