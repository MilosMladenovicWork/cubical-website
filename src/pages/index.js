import React from 'react'
import {SwiperSlide} from 'swiper/react'

import styles from './index.module.scss'
import Slider from '../components/Slider'

import imgSlide1 from '../img/background1.jpg'
import imgSlide2 from '../img/background2.jpg'
import BackgroundImage from '../components/BackgroundImage'

const HomePage = () => {
    return(
        <React.Fragment>
            <div className={styles.heroSlider}>
                <Slider>
                    <SwiperSlide>
                        <div style={{height: '100vh'}}>
                            <BackgroundImage image={imgSlide1}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{height: '100vh'}}>
                            <BackgroundImage image={imgSlide2}/>
                        </div>
                    </SwiperSlide>
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default HomePage