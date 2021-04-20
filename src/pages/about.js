import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import AboutTitle from "../components/abouttitle";
import AboutPageText from "../components/aboutpagetext";

import { initGA, PageView } from "../components/tracking/index";

class AboutPage extends Component {
  state = {
    Data: {
      content: [],
    },
  };
  componentDidMount = () => {
    initGA();
    PageView();
    fetch("data/aboutpagecontent.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data });
      });
  };
  render() {
    const abouttext = this.state.Data.content.map((check) => (
      <AboutPageText desc={check.summary} key="about" />
    ));
    return (
      <div id="aboutwrapper">
        <NavComplete />
        <div
          id="aboutContent"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 500px))",
            justifyContent: "center",
            gridColumnGap: 90,
            gridRowGap: 30,
            maxWidth: "93%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 70,
          }}
        >
          <div>
            <AboutTitle />
          </div>
          <div id="aboutpagetext">{abouttext}</div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -20,
            justifyContent: "center",
          }}
        ></div>
      </div>
    );
  }
}

export default AboutPage;
