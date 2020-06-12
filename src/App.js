import React from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import AboutSection from "./components/aboutsection";
import "./App.css";

function App() {
  return (
    <div
      id="wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 430px)",
        gridTemplateRows: "700px 700px 700px",
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
    </div>
  );
}

export default App;
