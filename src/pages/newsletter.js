import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import Data from "../data/newsletterpagecontent.json";
import CreditTab from "../components/credit";

class Newsletter extends Component {
  state = {};
  render() {
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
                  fontSize: 70,
                  fontWeight: "bold",
                  backgroundColor: "rgba(252, 186, 3, .65)",
                }}
              >
                Join my newsletter
              </span>
            </div>
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                marginTop: 40,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              {Data.description}
            </div>
            <a
              href={Data.link}
              style={{
                textDecoration: "none",
                justifySelf: "center",
                marginTop: 80,
              }}
            >
              <div
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  color: "white",
                  padding: 20,
                  fontSize: 40,
                  fontFamily: "Roboto",
                }}
              >
                Join here
              </div>
            </a>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -20,
          }}
        >
          <CreditTab />
        </div>
      </div>
    );
  }
}

export default Newsletter;
