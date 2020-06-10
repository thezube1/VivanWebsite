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
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 600px))",
        justifyContent: "center",
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
