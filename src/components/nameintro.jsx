import React, { Component } from "react";
import headshot from "../photos/headshotSmaller.png";

class Nameintro extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: 170, marginTop: 100 }} id="vivanName">
        <div style={{ fontFamily: "Unna", fontStyle: "italic", fontSize: 130 }}>
          vivan &nbsp;
        </div>
        <div
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            fontSize: 130,
            position: "relative",
            top: -60,
          }}
        >
          marwaha
        </div>
        <div>
          <span
            style={{
              position: "relative",
              left: 20,
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
              width: 500,
              height: 420,
              position: "relative",
              top: -215,
              right: -80,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Nameintro;
