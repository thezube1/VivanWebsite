import React, { Component } from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import AboutSection from "./components/aboutsection";
import ArticleSpread from "./components/articlespread";
import NavComplete from "./components/navcomplete";
import CreditTab from "./components/credit";
import "./App.css";

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
          <React.Fragment>
            {this.state.Data.articles.map((counter) => (
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
