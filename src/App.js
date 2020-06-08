import React from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";

function App() {
  return (
    <React.Fragment>
      <div style={{ display: "inline-block" }}>
        <NameIntro />
      </div>
      <div style={{ display: "inline-block" }}>
        <LatestArticle />
      </div>
    </React.Fragment>
  );
}

export default App;
