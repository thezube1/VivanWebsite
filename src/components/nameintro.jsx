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
          gridTemplateRows: "100px 140px 63px 650px",
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
            fontSize: 187,
            gridArea: "text1",
          }}
        >
          vivan &nbsp;
        </div>
        <div
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            fontSize: 110,
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
            fontSize: 18,
            gridArea: "text3",
            top: 100,
            alignSelf: "start",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "black",
              width: 80,
              height: "1.2px",
              bottom: 10,
            }}
          ></div>
          Writer, philanthropist,
          <br /> and more. The invisible <br />
          social power of technology. <br />
        </div>
        <img
          src={headshot}
          alt="Image of vivan"
          style={{
            position: "relative",
            right: 120,
            width: "170%",
            gridArea: "image1",
          }}
        />
      </div>
    );
  }
}

export default Nameintro;
