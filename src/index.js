import React from "react";
import ReactDOM from "react-dom";

import { BoxContainer, WritingsBox, DevBox, SocialBox, MiscBox } from "./Boxes";

import "./styles/styles.scss";

/*
@todo
* Add Header (with my name)
* ✅ Add "close" button on clicked/open box
* ✅ Prevent click on Link click.
* ✅ Make boxes unclickable for mobile
    ✅ If already clicked, then unclick before turning into a mobile mode.
* ✅ Update titles
  * ✅ Blog -> Writings
  * ✅ Social Networking Sites -> Social
  * ✅ Creations: same
  * ✅ Miscellaneous -> Misc.

* ✅ Add details
  * ️✅ Writings
    * ✅ SlightEdgeCoder
    * ✅ Dev.to
    * ✅ Medium
  * ✅ Social
    * ✅ Twitter
    * ✅ Instagram
  * ✅ Dev
    * ✅ GitHub & ✅ Sourcerer.io
    * ✅ StackOverflow
    * ✅ CodeSandBox
  * ✅‍ Misc.
    * ✅Twitch
    * ✅ Youtube Live
*/

function App() {
  return (
    <section className="layout">
      <head>
        <h1 className="title">Hi, I am Sung</h1>
      </head>
      <BoxContainer>
        <WritingsBox />
        <DevBox />
        <SocialBox />
        <MiscBox />
      </BoxContainer>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
