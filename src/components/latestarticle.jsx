import React, { Component } from "react";

class LatestArticle extends Component {
  state = {};
  render() {
    return (
      <div
        id="latestArticle"
        style={{
          display: "grid",
          gridTemplateRows: "150px 20px 50px",
          gridTemplateColumns: "1fr",
          gridTemplateAreas: ` "box1" "title1" "main1" `,
        }}
      >
        <div
          style={{
            height: 20,
            width: 20,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            gridColumn: "box1",
            alignSelf: "end",
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
            latest
          </div>
        </div>
        <div
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            gridColumn: "title1",
            fontSize: 18,
          }}
        >
          Article Title
        </div>
        <div
          style={{
            display: "grid",
            gridAutoColumns: "450px",
            gridColumn: "main1",
          }}
        >
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
