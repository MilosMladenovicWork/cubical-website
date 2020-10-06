import React from 'react'
import {SwiperSlide} from 'swiper/react'
import {Link} from 'gatsby'

import styles from './referenzen.module.scss'
import Slider from '../../components/Slider'

import imgSlide1 from '../../img/background1.jpg'
import imgSlide2 from '../../img/background2.jpg'
import BackgroundImage from '../../components/BackgroundImage'
import Section from '../../components/Section'
import Reference from '../../components/Reference'
import ButtonBordered from '../../components/ButtonBordered'
import PageIntro from '../../components/PageIntro'

const ReferenzenPage = () => {
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
            <PageIntro title={'REFERENZEN'}>
                <p>
                Jedes unserer verkauften oder vermie­teten Objekte ist eine Erfolgs­ge­schichte, die uns stolz macht. Eine Auswahl dieser Geschichten möchten wir hier mit Ihnen teilen. Viel Vergnügen beim Entde­cken.
                </p>
            </PageIntro>
        </React.Fragment>
    )
}

export default ReferenzenPage