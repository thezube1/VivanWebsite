import React, { Component } from "react";

class DateAuthor extends Component {
  state = {
    author: this.props.author,
    date: this.props.date,
  };
  render() {
    return (
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
              backgroundColor: "rgba(252, 186, 3, .65)",
              padding: 4,
              fontWeight: "bold",
            }}
          >
            {this.state.author}
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
        <span style={{ marginLeft: 10 }}>{this.state.date}</span>
      </div>
    );
  }
}

export default DateAuthor;
