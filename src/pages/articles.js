import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import Data from "../data/allarticles.json";
import ArticleSpread from "../components/articlespread";

class AllArticles extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavComplete />
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 400px))",
              justifyContent: "center",
              gridGap: 100,
              marginTop: 100,
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <div
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: "rgba(255, 203, 105, 0)",
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Unna",
                    fontSize: 100,
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "rgb(255, 203, 105)",
                  }}
                >
                  Articles
                </div>
              </div>
            </div>
            <React.Fragment>
              {Data.content.map((counter) => (
                <div>
                  <ArticleSpread
                    key={counter.id}
                    title={counter.title}
                    content={counter.summary}
                    link={counter.link}
                  />
                </div>
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default AllArticles;
