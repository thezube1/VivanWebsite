import React, { Component } from "react";
import headshot from "../photos/headshotSmaller.png";

class Nameintro extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300 300",
          gridTemplateRows: "100px 70px 80px 650px",
          gridTemplateAreas: ` ". ."
                               "text1 text1" 
                               "text2 text2"
                               "text3 image1" `,
        }}
        id="nameIntro"
      >
        <div
          style={{
            fontFamily: "Unna",
            fontStyle: "italic",
            fontSize: 120,
            gridArea: "text1",
          }}
        >
          vivan &nbsp;
        </div>
        <div
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            fontSize: 120,
            gridArea: "text2",
          }}
        >
          marwaha
        </div>
        <div
          style={{
            position: "relative",
            fontFamily: "Unna",
            fontStyle: "italic",
            gridArea: "text3",
            top: 100,
            left: 50,
            alignSelf: "start",
          }}
        >
          Writer, philanthropist,
          <br /> and more. The invisible <br />
          social power of technology. <br />
        </div>
        <img
          src={headshot}
          alt="Image of vivan"
          style={{
            position: "relative",
            right: 60,
            width: "100%",
            gridArea: "image1",
          }}
        />
      </div>
    );
  }
}

export default Nameintro;
