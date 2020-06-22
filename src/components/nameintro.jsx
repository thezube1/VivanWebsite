import React, { Component } from "react";
import headshot from "../photos/ColorHeadshot.png";

class Nameintro extends Component {
  state = {
    summary: this.props.summary,
  };
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300 300",
          gridTemplateRows: "0px 140px 63px 650px",
          gridTemplateAreas: ` ". ."
                               "text1 text1" 
                               "text2 text2"
                               "text3 image1" `,
        }}
        id="nameIntro"
      >
        <div
          id="first"
          style={{
            fontFamily: "Unna",
            fontStyle: "italic",
            gridArea: "text1",
          }}
        >
          vivan
        </div>
        <div
          id="last"
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
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
            marginTop: 100,
            alignSelf: "start",
            width: 200,
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
          {this.props.summary}
        </div>
        <img
          src={headshot}
          alt="Vivan"
          style={{
            marginTop: 15,
            right: 50,
            position: "relative",
            width: "140%",
            gridArea: "image1",
          }}
        />
      </div>
    );
  }
}

export default Nameintro;
