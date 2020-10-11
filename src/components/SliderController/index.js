import React from 'react'

import styles from './slider-controller.module.scss'
import changeSlideArrow from '../../img/chevron-forward.svg'


const SliderController = ({swiper, numberOfSlides, activeSlide}) => {

    return(
        <div className={styles.sliderController}>
            <button className={styles.prevSlideButton} onClick={() => swiper.slidePrev()}>
                <img src={changeSlideArrow} alt='previous slide' />
            </button>
            {swiper &&
                <p>{activeSlide + 1} / {numberOfSlides}</p>
            }
            <button className={styles.nextSlideButton} onClick={() => swiper.slideNext()}> 
                <img src={changeSlideArrow} alt='next slide' />
            </button>
        </div>
    )
}

export default SliderController