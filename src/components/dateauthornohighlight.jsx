import React, { Component } from "react";

class DateAuthorNoHighlight extends Component {
  state = {
    author: this.props.author,
    date: this.props.date,
  };
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            fontFamily: "Unna",
            fontSize: 18,
          }}
        >
          <div>
            <span
              style={{
                marginRight: 10,
                padding: 4,
                fontWeight: "bold",
              }}
            >
              {this.state.date}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: 1,
              height: 23,
              display: "inline-block",
            }}
          ></div>
          <span style={{ marginLeft: 10 }}></span>
        </div>
        <div
          style={{
            marginTop: 10,
            backgroundColor: "black",
            maxWidth: 700,
            height: 1,
          }}
        ></div>
      </div>
    );
  }
}

export default DateAuthorNoHighlight;
