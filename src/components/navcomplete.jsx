import React, { Component } from "react";
import HamburgerNav from "./hamburgernav";
import NavMenu from "./navmenu";

class NavComplete extends Component {
  state = {};
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div>
        <HamburgerNav handleMouseDown={this.handleMouseDown} />
        <NavMenu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}

export default NavComplete;
