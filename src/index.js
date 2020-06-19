import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data/allarticles.json";

//pages import
import AboutPage from "./pages/about";
import Newsletter from "./pages/newsletter";
import AllArticles from "./pages/articles";
import ArticleFull from "./components/articlefull";

let routes = [];

for (let i = 0; i < Data.content.length; i++) {
  routes.push(
    <Route
      exact
      path={Data.content[i].route}
      key={Data.content[i].id}
      render={(props) => (
        <ArticleFull
          title={Data.content[i].title}
          description={Data.content[i].full}
          image={Data.content[i].img}
          date={Data.content[i].date}
          author={Data.content[i].author}
          alt={Data.content[i].alt}
          link={Data.content[i].link}
        />
      )}
    />
  );
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/articles" component={AllArticles} />
      {routes}
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
