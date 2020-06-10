import React from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import "./App.css";

function App() {
  return (
    <div
      id="wrapper"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div>
        <NameIntro />
      </div>
      <div>
        <LatestArticle />
      </div>
    </div>
  );
}

export default App;
