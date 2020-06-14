import React, { Component } from "react";

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
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
        style={{
          backgroundColor: "rgba(252, 186, 3, .8)",
          position: "fixed",
          right: 0,
          zIndex: 1,
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          gridRowGap: 20,
        }}
      >
        <div style={{}}>Home</div>
        <div>About</div>
        <div>Articles</div>
        <div>Mailing list</div>
      </div>
    );
  }
}

export default NavMenu;
