import React from 'react'
import {SwiperSlide} from 'swiper/react'

import styles from './page-hero-slider.module.scss'
import imgSlide1 from '../../img/home-page.png'
import BackgroundImage from '../../components/BackgroundImage'
import LinkRibbons from '../../components/LinkRibbons'
import ScrollScreenButton from '../../components/ScrollScreenButton'
import downArrowImg from '../../img/chevron-down-outline.svg'
import TiltableContainer from '../../components/TiltableContainer'
import MotoText from '../../components/MotoText'
import Slider from '../../components/Slider'

const PageHeroSlider = () => {
    
  return (
    <div className={styles.heroSlider}>
        <Slider>
            <SwiperSlide>
                <div style={{height: '100vh'}}>
                    <BackgroundImage image={imgSlide1}/>
                </div>
            </SwiperSlide>
        </Slider>
        <MotoText text={'The key to your home'}/>
        <div className={styles.motoTextContainer}>
            <TiltableContainer roundedCorners>
                <h1 className={styles.motoText}><span>T</span><span>h</span><span>e</span> <span>k</span><span>e</span><span>y</span> <span>t</span><span>o</span> <span>y</span><span>o</span><span>u</span><span>r</span> <span>h</span><span>o</span><span>m</span><span>e</span><span>.</span></h1>
            </TiltableContainer>
        </div>
        <LinkRibbons links={[{href:'/aktuelles', text:'Aktuelles'}]}/>
        <ScrollScreenButton>
            <img src={downArrowImg} alt='scroll down'/>
        </ScrollScreenButton>
    </div>
  )
}

export default PageHeroSlider