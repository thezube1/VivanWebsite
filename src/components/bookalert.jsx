import React, { Component } from "react";
import { Fade } from "react-reveal";
import "../styles/book.css";

class BookAlert extends Component {
  state = { visisble: true };

  render() {
    return (
      <div
        id="book-alert-wrapper"
        style={{
          opacity: this.state.visisble ? 1 : 0,
          visibility: this.state.visisble ? "visible" : "hidden",
        }}
      >
        <button
          id="book-alert-close"
          onClick={() => this.setState({ visisble: false })}
        >
          <div className="book-close-line" id="line-1"></div>
          <div className="book-close-line" id="line-2"></div>
        </button>
        <Fade big>
          <div id="book-alert-content">
            <div id="book-alert-title-wrapper">
              <div className="text" id="book-alert-title">
                What Millenials Want
              </div>
              <div className="seperator" style={{ width: 310 }}></div>
              <div id="book-alert-date" className="text">
                Available August 30th
              </div>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.amazon.in/What-Millennials-Want-Decoding-Generation/dp/0670092851/ref=sr_1_1?crid=1HRHV9I4CNQ7B&dchild=1&keywords=what+millennials+want&qid=1627555657&sprefix=what+mille,aps,-1&sr=8-1"
            >
              <img
                id="book-alert-image"
                src="/book.png"
                alt="What Millenials Want - book"
              />
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default BookAlert;
