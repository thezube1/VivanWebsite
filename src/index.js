import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop";

//pages import
import AboutPage from "./pages/about";
import Newsletter from "./pages/newsletter";
import AllArticles from "./pages/articles";
import ArticleFull from "./components/articlefull";

let routes = [];

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
}

fetchJSONFile("data/allarticles.json", function (data) {
  for (let i = 0; i < data.content.length; i++) {
    routes.push(
      <Route
        exact
        path={data.content[i].route}
        key={data.content[i].id}
        render={(props) => (
          <ArticleFull
            title={data.content[i].title}
            description={data.content[i].full}
            image={data.content[i].img}
            date={data.content[i].date}
            author={data.content[i].author}
            alt={data.content[i].alt}
            link={data.content[i].link}
          />
        )}
      />
    );
  }
});

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={App} />
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
