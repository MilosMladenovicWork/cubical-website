import React from 'react'
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper} from 'swiper/react';
import 'swiper/swiper.scss';

import styles from './slider.module.scss'

SwiperCore.use([Autoplay])

const Slider  = ({children, setSwiper, setActiveSlide}) => {
    
    return(
        <div className={styles.slider}>
            <Swiper
                loop={React.Children.toArray(children).length > 1 ? true : false}
                autoplay={{
                    delay:5000
                }}
                onInit={(swiper) => setSwiper && setSwiper(swiper)}
                onSlideChange={(swiper) => {setActiveSlide && setActiveSlide(swiper.realIndex)}}
            >
                {children}
            </Swiper>
        </div>
    )
}

export default Slider