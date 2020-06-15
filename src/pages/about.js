import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import AboutTitle from "../components/abouttitle";
import AboutPageText from "../components/aboutpagetext";
import Data from "../data/aboutpagecontent.json";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div id="aboutwrapper">
        <NavComplete />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 500px))",
            justifyContent: "center",
            marginTop: 150,
            gridGap: 90,
          }}
        >
          <div>
            <AboutTitle />
          </div>
          <div id="aboutpagetext">
            <AboutPageText desc={Data.content} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
