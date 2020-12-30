import React from "react";
import Landing from "../src/LandingPageD/Landing";
import AboutBody from "../src/AboutBodyD/AboutBody";
import BurgerListHome from "../src/BurgerListHomeD/BurgerListHome";
import Location from "../src/LocationD/Location";
import YoutubeAPI from "../src/YoutubeApiD/YoutubeAPI";

function LandingPage() {
  return (
    <div>
      <Landing />
      <AboutBody />
      <BurgerListHome />
      <YoutubeAPI />
      <Location />
    </div>
  );
}

export default LandingPage;
