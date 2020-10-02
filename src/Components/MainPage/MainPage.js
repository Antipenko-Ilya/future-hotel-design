import React from "react";
// import Slider from './SliderOld/Slider';
import Slider from "./Slider/Slider";
import About from "./About/About";
import Preview from "./Preview/Preview";
import Contacts from "./Contacts/Contacts";

import Partners from "./Partners/Partners";

const projects = [
  {
    image: "1",
    name: "Семейный отель - вилла «7 Кипарисов»",
    url: "project/?4",
  },
  {
    image: "2",
    name: "Парк - отель «Доброград» II очередь",
    url: "project/?5",
  },
  {
    image: "3",
    name: "Апарт – отель Citadines City Centre Tbilisi",
    url: "project/?0",
  },
  {
    image: "4",
    name: "Hampton by Hilton Tyumen",
    url: "project/?6",
  },
];
function MainPage() {
  return (
    <>
      <div className="Slider__title">
        <div className="Slider__title-text">FUTURE HOTEL DESIGN</div>
      </div>
      <Slider />
      <About />
      <Preview projects={projects} />
    </>
  );
}

export default MainPage;
