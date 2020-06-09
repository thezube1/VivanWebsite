import React, { Component } from "react";
import headshot from "../photos/headshotSmaller.png";

class Nameintro extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: 110, marginRight: 120 }} id="vivanName">
        <div style={{ fontFamily: "Unna", fontStyle: "italic", fontSize: 120 }}>
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
        <div>
          <span
            style={{
              position: "relative",
              left: 10,
              top: -30,
              fontFamily: "Unna",
              fontStyle: "italic",
            }}
          >
            <hr
              style={{
                width: 140,
                marginLeft: 0,
                color: "Black",
                borderWidth: 1,
              }}
            />
            Writer, philanthropist,
            <br /> and more. The invisible <br />
            social power of technology. <br />
          </span>
          <img
            src={headshot}
            alt="Vivan headshot"
            style={{
              width: 480,
              height: 400,
              position: "relative",
              top: -215,
              right: -60,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Nameintro;
