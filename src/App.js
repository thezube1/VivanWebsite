import React, { Component } from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import AboutSection from "./components/aboutsection";
import ArticleSpread from "./components/articlespread";
import NavComplete from "./components/navcomplete";
import BookAlert from "./components/bookalert";
import CreditTab from "./components/credit";
import "./styles/App.css";

import { initGA, PageView } from "./components/tracking/index";

class App extends Component {
  state = {
    Data: {
      about: [],
      nametext: [],
      featured: [],
      articles: [],
    },
  };

  componentDidMount = () => {
    initGA();
    PageView();
    fetch("data/mainpagecontent.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data });
      });
  };

  render() {
    const aboutsection = this.state.Data.about.map((check) => (
      <AboutSection summary={check.summary} key={"about"} />
    ));
    const latestarticle = this.state.Data.featured.map((check) => (
      <LatestArticle
        title={check.title}
        description={check.summary}
        link={check.link}
        key={"article"}
      />
    ));
    const nameintro = this.state.Data.nametext.map((check) => (
      <NameIntro summary={check.summary} key="name" />
    ));
    return (
      <div>
        <NavComplete />
        <BookAlert />
        <div
          id="wrapper"
          style={{
            display: "grid",
            gridColumnGap: 200,
          }}
        >
          <div id="name">{nameintro}</div>
          <div>{latestarticle}</div>
          <div id="aboutSection">{aboutsection}</div>
          <div
            style={{
              height: 20,
              width: 20,
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
            }}
            id="ArticlesLabel1"
          >
            <div
              style={{
                fontSize: 30,
                fontFamily: "Unna",
                fontStyle: "italic",
                fontWeight: "bold",
                position: "relative",
                left: "150%",
              }}
            >
              Articles
            </div>
          </div>

          <React.Fragment>
            {this.state.Data.articles.map((counter) => (
              <div key={counter.id} style={{ marginBottom: 40 }}>
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
