import React, { Component } from "react";
import headshot from "../photos/headshotSmaller.png";

class Nameintro extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: "11vw", marginTop: "4vw" }} id="vivanName">
        <div
          style={{ fontFamily: "Unna", fontStyle: "italic", fontSize: "9vw" }}
        >
          vivan &nbsp;
        </div>
        <div
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            fontSize: "9vw",
            position: "relative",
            top: "-5vw",
          }}
        >
          marwaha
        </div>
        <div>
          <span
            style={{
              position: "relative",
              left: "1vw",
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
              display: "block",
              maxWidth: "100%",
              width: "400",
              height: "350",
              position: "relative",
              top: "-15.5vw",
              right: -80,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Nameintro;
