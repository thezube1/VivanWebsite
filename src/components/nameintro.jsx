import React, { Component } from "react";

class Nameintro extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: 200, marginTop: 100 }} id="vivanName">
        <div style={{ fontFamily: "Unna", fontStyle: "italic", fontSize: 100 }}>
          Vivan &nbsp;
        </div>
        <div
          style={{
            fontFamily: "Unna",
            fontStyle: "Bold 700",
            fontSize: 100,
            position: "relative",
            top: -30,
          }}
        >
          Marwaha
        </div>
      </div>
    );
  }
}

export default Nameintro;
