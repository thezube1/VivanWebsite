import React, { Component } from "react";
import headshot from "../photos/headshotSmaller.png";

class Nameintro extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: 110 }} id="nameIntro">
        <div id="nameText">
          <div
            style={{ fontFamily: "Unna", fontStyle: "italic", fontSize: 120 }}
          >
            vivan &nbsp;
          </div>
          <div
            style={{
              fontFamily: "Unna",
              fontWeight: "bold",
              fontSize: 120,
              position: "relative",
              top: -65,
            }}
          >
            marwaha
          </div>
        </div>
        <div
          id="images"
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              position: "relative",
              fontFamily: "Unna",
              fontStyle: "italic",
            }}
          >
            Writer, philanthropist,
            <br /> and more. The invisible <br />
            social power of technology. <br />
          </span>
          <img
            src={headshot}
            alt="Image of vivan"
            style={{
              position: "relative",
              width: 480,
              height: 400,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Nameintro;
