import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import AboutTitle from "../components/abouttitle";
import AboutPageText from "../components/aboutpagetext";

class AboutPage extends Component {
  state = {
    desc: `My name is Vivan Marwaha and I am an independent policy consultant based in New Delhi, India. 
    \nI have spent the last two years interviewing more than 800 millennials, educators, business leaders, and policymakers for my book on the economic aspirations, social views, and political attitudes of Indian millennials. 
    \nThrough my extensive field research, which included traveling across more than 30,000 kilometers in 13 Indian states, I narrate an intimate and data-driven biography of India’s most dynamic generation. I have contributed op-eds to The Washington Post, The Times of India, Mint, Firstpost, and The Print. 
    \nI truly believe that young people in India have been left out of the political and social discourse, and I hope to change and challenge that with my writing and research. My book will be published in May 2020 by Penguin Random House.`,
  };
  render() {
    return (
      <div id="aboutwrapper">
        <NavComplete />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 500px))",
            justifyContent: "center",
            marginTop: 40,
            gridGap: 30,
          }}
        >
          <div>
            <AboutTitle />
          </div>
          <div style={{ marginTop: 60 }} id="aboutpagetext">
            <AboutPageText desc={this.state.desc} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
