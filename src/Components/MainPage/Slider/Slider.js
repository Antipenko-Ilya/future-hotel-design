import React , {useState, useEffect, useRef, Fragment} from 'react';
import styles from './Slider.module.css';
import testImage from '../../../images/Projects/project-5.JPG'
import {useTransition, animated} from 'react-spring'

const mainSliderData = [
  {
    node: <img className={styles.Slide} src={testImage}></img>,
    timeout: 4000
  },
  {
    node: <img className={styles.Slide} src={testImage}></img>,
    timeout: 4000
  },
  {
    node: <video controls={true} className={styles.Slide} preload='true' autoplay='true'>
            <source src={require('../../../videos/video-1.mp4')}/>
          </video>,
    timeout: 20000
  }
]

function Slider(props) {

    /* state */
    const [tempSlide, setTempSlide] = useState(0);
    const [timeoutId, setTimeoutId] = useState(0)

    /* nextSlide hook */
    useEffect(()=>{
      const nextSlideIndex = (tempSlide+1)%mainSliderData.length
      const timeout = mainSliderData[tempSlide].timeout;
      clearTimeout(timeoutId)
      setTimeoutId(
        setTimeout(()=>setTempSlide(nextSlideIndex), timeout)
      )
    }, [tempSlide])

    /* initial */
    const wrapperRef = useRef()
    useEffect(()=>{
      const width = wrapperRef.current.offsetWidth;
      wrapperRef.current.style.height = `${width * 9/16}px`
    }, [0])

    return(
        <div ref={wrapperRef} className={styles.SliderWrapper}>
          <Slides tempSlide={tempSlide}/>
          <div
            className={styles.SliderController}
            onClick={()=>setTempSlide((tempSlide+1)%3)}
          >&#10094;</div>
          <div 
            className={styles.SliderController}
            onClick={()=>setTempSlide((tempSlide+1)%3)}
          >&#10094;</div>
        </div>
    );
}
export default Slider;

const Slides = ({tempSlide}) => {
  const transitions = useTransition(tempSlide, item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000
    }
  })

  return (
    <>
      {transitions.map(({ item, props, key }) =>
        <animated.div className={styles.SlideWrapper} key={key} style={props}>
          {mainSliderData[item].node}
        </animated.div>
      )}
    </>
  )
}