import React, { Component } from "react";
import NameIntro from "./components/nameintro";
import LatestArticle from "./components/latestarticle";
import AboutSection from "./components/aboutsection";
import ArticleSpread from "./components/articlespread";
import "./App.css";

class App extends Component {
  state = {
    content: [
      {
        id: 1,
        title: "Hope and Anxiety Among Liberalization’s Children",
        summary:
          "In my field work across small-town India, one of the most glaring things that stands out to me is the high rate of unemployment. As I traveled to town after town during the 2018 Madhya Pradesh state elections, one sight had become eerily familiar to me: hordes of young and middle-aged people, mostly men, spending their time at public squares, seemingly unemployed and disengaged from economic activity.",
        link:
          "https://whatmillennialswant.blog/2020/01/02/hope-and-anxiety-among-liberalizations-children/",
      },
      {
        id: 2,
        title: "Books I read in 2019",
        summary:
          "I began the year with Ruchir Sharma’s Democracy on the Road, an incredible diary of his observations from covering nearly three decades of political campaigns in India. Sagarika Ghose’s Why I am a Liberal was another excellent book on liberalism and its history in India. In what seems like an illiberal time, Ghose reminds the reader of liberalism’s rich tradition in India’s founding.",
        link:
          "https://whatmillennialswant.blog/2019/12/31/books-i-read-in-2019/",
      },
      {
        id: 3,
        title: "Demography of a Protest",
        summary:
          "As protests against the Narendra Modi government’s recently passed Citizenship (Amendment) Act (CAA) continue to intensify in cities across India, one of the most notable and unique features of the demonstrations has been the demographics of those protesting.",
        link:
          "https://whatmillennialswant.blog/2019/12/28/demography-of-a-protest/",
      },
      {
        id: 4,
        title: "The secret behind millennial support for Prime Minister Modi",
        summary:
          "As the dust settles on India’s general elections, one thing has become clear: Despite a record-high unemployment rate, a slowing economy and widespread agrarian distress, Indians have overwhelmingly decided to give Prime Minister Narendra Modi and his Bharatiya Janata Party a second chance to put the country back on track.",
        link:
          "https://whatmillennialswant.blog/2019/05/30/the-secret-behind-millennial-support-for-prime-minister-modi/",
      },
    ],
  };
  render() {
    return (
      <div
        id="wrapper"
        style={{
          display: "grid",
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
        <React.Fragment>
          {this.state.content.map((counter) => (
            <div>
              <ArticleSpread
                key={counter.id}
                title={counter.title}
                content={counter.summary}
                link={counter.link}
              />
            </div>
          ))}
        </React.Fragment>
      </div>
    );
  }
}

export default App;
