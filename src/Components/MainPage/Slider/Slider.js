import React, {useState} from 'react';
import styles from './Slider.module.css';
import slides from './SliderData';

const path = './slideImages/slider_1.png';

function Slider() {

  const [tempSlide, setTempSlide] = useState(0);

  function slideNext() {
    setTempSlide(tempSlide+1);
  }

  const Slide = (props) => {
    return (
      <div className={styles.Slide} style={props.style}>
        <img className={styles.SlideImg} src={require(`${props.path}`)}></img>
      </div>
    )
  }

  return (
    <div className={styles.Slider}>

      {slides.map((item, index)=>
        <Slide path={item.src} style={(index==tempSlide) ? {display: 'block'} : {}}/>
      )}

      <div className={styles.SliderController}>

        <div className={styles.slidePrev}>
          <img className={styles.slideControllerImg}></img>
          <div className={styles.slideControllerText}>
            <div>Предыдущий</div>
            <div>{slides[tempSlide].name}</div>
          </div>
        </div>

        <div className={styles.slideInfo}>
          <div>Сейчас</div>
          <div>{slides[tempSlide].name}</div>
        </div>

        <div className={styles.slidePrev} onClick={slideNext}>
          <div className={styles.slideControllerText}>
            <div>Следующий</div>
            <div>{slides[tempSlide+1].name}</div>
          </div>
          <img className={styles.slideControllerImg}></img>
        </div>

      </div>

    </div>
  );
}

export default Slider;
