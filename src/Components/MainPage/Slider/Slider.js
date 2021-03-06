import React, { useState, useEffect, useRef, Fragment } from "react";
import styles from "./Slider.module.css";
import testImage from "../../../images/Projects/project-5.JPG";
import { useTransition, animated } from "react-spring";
import BlackBG from "../../../images/black.jpg";
import "./style.css";
import video1 from "../../../videos/1.mp4";
import video2 from "../../../videos/2.mp4";
import video3 from "../../../videos/3.mp4";
import img1 from './slideImages/1.jpg'
import img2 from './slideImages/2.JPG'
import img3 from './slideImages/3.jpg'
import img4 from './slideImages/4.jpg'
import img5 from './slideImages/5.JPG'

const isMobile = document.documentElement.offsetWidth < 719
console.log(isMobile)
let mainSliderData = [
  {
    node: (
      <video
        className={styles.Slide}
        autoPlay={true}
        preload="true" muted="true"
        onEnded={() => console.log(12)}
      >
        <source src={video1} />
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
         muted="true"
        onEnded={() => console.log(12)}
      >
        <source src={video2} />
      </video>
    ),
    timeout: 12000,
  },
  {
    node: (
      <video
        poster={BlackBG}
        className={styles.Slide}
        autoPlay={true}
        preload="true" muted="true"
        onEnded={() => console.log(12)}
      >
        <source src={video3} />
      </video>
    ),
    timeout: 10000,
  },
];

if (isMobile) {
  mainSliderData = [
    {
      node: (
          <img src={img1}/>
      ),
      timeout: 10000,
    },
    {
      node: (
          <img src={img2}/>
      ),
      timeout: 10000,
    },
    {
      node: (
          <img src={img3}/>
      ),
      timeout: 10000,
    },
    {
      node: (
          <img src={img4}/>
      ),
      timeout: 3000,
    },
    {
      node: (
          <img src={img5}/>
      ),
      timeout: 3000,
    }
  ]
}

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
