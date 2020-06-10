import React from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import "./App.css";

function App() {
  return (
    <div
      id="wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 600px)",
        gridTemplateRows: "600px 600px",
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
