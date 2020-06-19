import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import Data from "../data/allarticles.json";
import ArticleSpread from "../components/articlespread";
import CreditTab from "../components/credit";

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
                    marginLeft: 40,
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
              {Data.content.map((content) => (
                <div key={content.id}>
                  <ArticleSpread
                    key={content.id}
                    title={content.title}
                    content={content.summary}
                    link={content.link}
                    route={content.route}
                    author={content.author}
                    date={content.date}
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
