import React from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
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
