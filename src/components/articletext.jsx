import React, { Component } from "react";

class ArticleTet extends Component {
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
                style={{
                  fontFamily: "Roboto",
                  gridAutoColumns: "inherit",
                  fontSize: 20,
                  marginTop: 20,
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

export default ArticleTet;
