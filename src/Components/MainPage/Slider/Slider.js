import React, { useState, useEffect, useRef, Fragment } from "react";
import styles from "./Slider.module.css";
import testImage from "../../../images/Projects/project-5.JPG";
import { useTransition, animated } from "react-spring";
import BlackBG from "../../../images/black.jpg";
import "./style.css";
import video1 from "../../../videos/1.mp4";
import video2 from "../../../videos/2.mp4";
import video3 from "../../../videos/3.mp4";

const mainSliderData = [
  {
    node: (
      <video
        className={styles.Slide}
        autoPlay={true}
        onEnded={() => console.log(12)}
      >
        <source src={video1} />
      </video>
    ),
    timeout: 10000,
  },
  {
    node: (
      <video
        poster={BlackBG}
        className={styles.Slide}
        autoPlay={true}
        onEnded={() => console.log(12)}
      >
        <source src={video2} />
      </video>
    ),
    timeout: 22000,
  },
  {
    node: (
      <video
        poster={BlackBG}
        className={styles.Slide}
        autoPlay={true}
        onEnded={() => console.log(12)}
      >
        <source src={video3} />
      </video>
    ),
    timeout: 10000,
  },
];

function Slider(props) {
  /* state */
  const [tempSlide, setTempSlide] = useState(0);
  const [timeoutId, setTimeoutId] = useState(0);

  /* nextSlide hook */
  useEffect(() => {
    const nextSlideIndex = (tempSlide + 1) % mainSliderData.length;
    const timeout = mainSliderData[tempSlide].timeout;
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setTempSlide(nextSlideIndex), timeout));
  }, [tempSlide]);

  /* initial */
  const wrapperRef = useRef();
  useEffect(() => {
    const width = wrapperRef.current.offsetWidth;
    wrapperRef.current.style.height = `${(width * 9) / 16}px`;
  }, [0]);

  return (
    <div ref={wrapperRef} className={styles.SliderWrapper}>
      <Slides tempSlide={tempSlide} />
      <div
        className={styles.SliderController}
        onClick={() => setTempSlide((tempSlide + 1) % mainSliderData.length)}
      >
        &#10094;
      </div>
      <div
        className={styles.SliderController}
        onClick={() => setTempSlide((tempSlide + 1) % mainSliderData.length)}
      >
        &#10094;
      </div>
    </div>
  );
}
export default Slider;

const Slides = ({ tempSlide }) => {
  const transitions = useTransition(tempSlide, (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000,
    },
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div className={styles.SlideWrapper} key={key} style={props}>
          {mainSliderData[item].node}
        </animated.div>
      ))}
    </>
  );
};
