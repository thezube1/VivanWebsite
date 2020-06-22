import React, { Component } from "react";

class AboutPageText extends Component {
  state = {
    description: this.props.desc,
  };
  render() {
    let textSplit = this.state.description.split("\n");
    return (
      <div>
        <div style={{ height: 1, width: 150, backgroundColor: "black" }}></div>
        <div>
          {textSplit.map((value, index) => {
            return (
              <div
                id="aboutText2"
                style={{
                  fontFamily: "Roboto",
                  gridAutoColumns: "inherit",
                  marginTop: 10,
                  lineHeight: 1.5,
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

export default AboutPageText;
