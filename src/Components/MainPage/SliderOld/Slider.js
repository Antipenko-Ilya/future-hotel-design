import React, {useState, useEffect} from 'react';
import styles from './Slider.module.css';
import slides from './SliderData';



function Slider() {

  const [tempSlide, setTempSlide] = useState(0);

  function slideNext() {
    let newSlideIndex = (tempSlide+1)%slides.length;
    setTempSlide(newSlideIndex);
  }

  function slidePrev() {
    let newSlideIndex = (tempSlide == 0) ? slides.length-1 : tempSlide-1;
    setTempSlide(newSlideIndex);
  }


  function renderNextSlideName() {
    let nextSlideIndex = (tempSlide+1)%slides.length;
    return slides[nextSlideIndex].name
  }

  function renderPrevSlideName() {
    let nextSlideIndex = (tempSlide == 0) ? slides.length-1 : tempSlide-1;
    return slides[nextSlideIndex].name
  }
  

  const Slide = (props) => {
    return (
      <div className={styles.Slide} style={props.tempSlide==props.index ? {display: 'block'} : {}} >
        <img className={styles.SlideImg} src={require(`${props.path}`)}></img>
      </div>
    )
  }

  return (
    <div className={styles.Slider}>

      {slides.map((item, index)=>
        <Slide key={item.name} path={item.src} tempSlide={tempSlide} index={index}/>
      )}

      <div className={styles.SliderController}>

        <div className={styles.slidePrev} onClick={slidePrev}>
          <img style={{transform: "rotateZ(180deg)"}} className={styles.slideControllerImg} src={require('../../../images/btn.png')}></img>
          <div className={styles.slideControllerTextPrev}>
            <div>Предыдущий</div>
            <div className={styles.slidePrevNextText}>{renderPrevSlideName()}</div>
          </div>
        </div>

        <div className={styles.slideInfo}>
          <div>Сейчас</div>
          <div className={styles.slideTempText}>{slides[tempSlide].name}</div>
        </div>

        <div className={styles.slidePrev} onClick={slideNext}>
          <div className={styles.slideControllerTextNext}>
            <div>Следующий</div>
            <div className={styles.slidePrevNextText}>{renderNextSlideName()}</div>
          </div>
          <img className={styles.slideControllerImg} src={require('../../../images/btn.png')}></img>
        </div>

      </div>

    </div>
  );
}

export default Slider;
