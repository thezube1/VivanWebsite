import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavMenu extends Component {
  state = {};

  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div
        id="flyoutMenu"
        className={visibility}
        style={{
          backgroundColor: "rgb(255, 203, 105)",
          position: "fixed",
          right: 0,
          zIndex: 1,
        }}
      >
        <div
          style={{
            marginTop: 150,
            marginRight: 40,
            display: "grid",
            justifyContent: "center",
            gridGap: 70,
            fontSize: 40,
            fontFamily: "Unna",
            fontWeight: "bold",
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                padding: 10,
                outline: "1px solid",
                color: "black",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/book"
              style={{
                padding: 10,
                outline: "1px solid",
                color: "black",
                textDecoration: "none",
              }}
            >
              Book
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              style={{
                padding: 10,
                outline: "1px solid",
                color: "black",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/articles"
              style={{
                padding: 10,
                outline: "1px solid",
                color: "black",
                textDecoration: "none",
              }}
            >
              Articles
            </Link>
          </div>
          <div>
            <Link
              to="/newsletter"
              style={{
                padding: 10,
                outline: "1px solid",
                color: "black",
                textDecoration: "none",
              }}
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;
