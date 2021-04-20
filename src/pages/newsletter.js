import React, { Component } from "react";
import NavComplete from "../components/navcomplete";

import { initGA, PageView } from "../components/tracking/index";

class Newsletter extends Component {
  state = {
    Data: {
      content: [],
    },
  };

  componentDidMount = () => {
    initGA();
    PageView();
    fetch("data/newsletterpagecontent.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data });
      });
  };

  render() {
    const desc = this.state.Data.content.map((check, index) => (
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginTop: 40,
          fontFamily: "Roboto",
          fontSize: 20,
        }}
        key={index}
      >
        {check.description}
      </div>
    ));
    const link = this.state.Data.content.map((check, index) => (
      <a
        href={check.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          justifySelf: "center",
          marginTop: 40,
        }}
        key={index}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "black",
            color: "white",
            padding: 20,
            fontSize: 30,
            fontFamily: "Roboto",
          }}
        >
          Join here
        </div>
      </a>
    ));
    return (
      <div>
        <NavComplete />
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(100px, 800px)",
            }}
          >
            <div style={{ justifySelf: "center" }}>
              <span
                style={{
                  fontFamily: "Unna",
                  fontSize: 60,
                  fontWeight: "bold",
                  backgroundColor: "rgba(252, 186, 3, .65)",
                }}
              >
                Join my newsletter
              </span>
            </div>
            {desc}
            {link}
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
