import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import ArticleSpread from "../components/articlespread";

import { initGA, PageView } from "../components/tracking/index";

class AllArticles extends Component {
  state = {
    Data: { content: [] },
  };

  componentDidMount = () => {
    initGA();
    PageView();
    fetch("data/allarticles.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data });
      });
  };
  render() {
    return (
      <div>
        <NavComplete />
        <div>
          <div
            id="articlesWrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 400px))",
              justifyContent: "center",
              gridGap: 45,
              marginTop: 100,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 70,
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
                    marginLeft: 20,
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
              {this.state.Data.content.map((content) => (
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
