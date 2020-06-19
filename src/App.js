import React, { Component } from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import AboutSection from "./components/aboutsection";
import ArticleSpread from "./components/articlespread";
import NavComplete from "./components/navcomplete";
import Data from "./data/mainpagecontent.json";
import CreditTab from "./components/credit";
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
          <div id="name">
            <NameIntro summary={Data.nametext.summary} />
          </div>
          <div>
            <LatestArticle
              title={Data.featured.title}
              description={Data.featured.summary}
              link={Data.featured.link}
            />
          </div>
          <div id="aboutSection">
            <AboutSection summary={Data.about.summary} />
          </div>
          <React.Fragment>
            {Data.articles.map((counter) => (
              <div key={counter.id}>
                <ArticleSpread
                  title={counter.title}
                  content={counter.summary}
                  link={counter.link}
                  route={counter.route}
                  author={counter.author}
                  date={counter.date}
                />
              </div>
            ))}
          </React.Fragment>
          <CreditTab />
        </div>
      </div>
    );
  }
}

export default App;
