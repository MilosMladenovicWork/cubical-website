import React from 'react'
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper} from 'swiper/react';
import 'swiper/swiper.scss';

import styles from './slider.module.scss'

SwiperCore.use([Autoplay])

const Slider  = ({children}) => {
    return(
        <div className={styles.slider}>
            <Swiper
                loop={true}
                autoplay={{
                    delay:5000
                }}
            >
                {children}
            </Swiper>
        </div>
    )
}

export default Slider