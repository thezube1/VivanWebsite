import React, { Component } from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import AboutSection from "./components/aboutsection";
import ArticleSpread from "./components/articlespread";
import NavComplete from "./components/navcomplete";
import Data from "./data/spreadscontent.json";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavComplete />
        <div
          id="wrapper"
          style={{
            display: "grid",
            gridColumnGap: 200,
          }}
        >
          <div>
            <NameIntro />
          </div>
          <div>
            <LatestArticle />
          </div>
          <div id="aboutSection">
            <AboutSection />
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
    );
  }
}

export default App;
