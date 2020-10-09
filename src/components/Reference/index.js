import React, {useState} from 'react'

import styles from './reference.module.scss'
import img from '../../img/background1.jpg'
import playCircle from '../../img/play-circle.svg'
import closeCircle from '../../img/close-circle.svg'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'

const Reference = () => {

    const [showVideo, setShowVideo] = useState(false)

    return(
        <article className={styles.reference}>
            
            <h3><RoofSVG/>Windisch</h3>
            <figure>
                {showVideo &&
                <div className={styles.referenceVideo}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZK9wtYOcChQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button onClick={() => setShowVideo(false)}>
                        <img src={closeCircle} alt=''/>
                    </button>
                </div>
                }
                <div className={styles.referenceInformation}>
                    <img src={img} alt=''/>
                    <figcaption className={styles.textOverlay}>
                        <TiltableContainer roundedCorners>
                            <div className={styles.overlayStyledContainer}>
                                <blockquote>
                                    Es gibt nur eine – und das ist Cristina Cotoia.
                                </blockquote>
                                <button onClick={() => setShowVideo(true)}>
                                    <img src={playCircle} alt=''/>
                                    ZUM VIDEO
                                </button>
                            </div>
                        </TiltableContainer>
                    </figcaption>
                </div>
            </figure>
        </article>
    )
} 

export default Reference