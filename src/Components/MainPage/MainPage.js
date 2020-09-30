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
  },
  {
    image: "2",
  },
  {
    image: "3",
  },
  {
    image: "4",
  },
];
function MainPage() {
  return (
    <>
      <div className="Slider__title">
        <div className="Slider__title-text">Архитектура</div>
        <div className="Slider__title-text">и</div>
        <div className="Slider__title-text">дизайн</div>
      </div>
      <Slider />
      <About />
      <Preview projects={projects} />
    </>
  );
}

export default MainPage;
