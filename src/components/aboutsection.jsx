import React, { Component } from "react";

class AboutSection extends Component {
  state = {
    summary: this.props.summary,
  };
  render() {
    let textSplit = this.state.summary.split("\n");
    return (
      <div
        id="aboutWrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "inherit",
          gridTemplateAreas: `"." "desc" "main1"`,
        }}
      >
        <div
          style={{
            height: 20,
            width: 20,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            gridArea: "desc",
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
            About
          </div>
        </div>
        <div
          style={{
            gridAutoColumns: "inherit",
            gridArea: "main1",
          }}
        >
          {textSplit.map((value, index) => {
            return (
              <div
                style={{
                  fontFamily: "Roboto",
                  fontSize: 17,
                  marginTop: 20,
                  lineHeight: "1.3",
                }}
                key={index}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AboutSection;
