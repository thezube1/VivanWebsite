import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages import
import AboutPage from "./pages/about";
import Newsletter from "./pages/newsletter";
import AllArticles from "./pages/articles";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/articles" component={AllArticles} />
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
