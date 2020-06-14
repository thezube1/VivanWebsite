import React, { Component } from "react";
import headshot from "../photos/ColorHeadshot.png";

class AboutTitle extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: 200,
            width: "auto",
            backgroundColor: "rgb(255, 203, 105)",
            fontFamily: "Unna",
            fontSize: 70,
            fontWeight: "bold",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div style={{}}>
            <div style={{ alignContent: "center" }}>Vivan</div>
            <div style={{ alignContent: "center" }}>Marwaha</div>
          </div>
        </div>
        <img
          src={headshot}
          alt="Vivan"
          style={{
            maxWidth: "100%",
            width: "auto",
          }}
        />
      </div>
    );
  }
}

export default AboutTitle;
