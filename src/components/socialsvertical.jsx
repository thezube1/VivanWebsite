import React, { Component } from "react";
import InstagramButton from "./socials/instagrambutton";
import TwitterButton from "./socials/twitterbutton";
import FacebookButton from "./socials/facebookbutton";

class SocialsVertical extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "grid", gridRowGap: 15 }}>
        <InstagramButton />
        <TwitterButton />
        <FacebookButton />
      </div>
    );
  }
}

export default SocialsVertical;
