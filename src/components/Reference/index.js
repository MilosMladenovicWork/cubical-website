import React, {useState} from 'react'

import styles from './reference.module.scss'
import playCircle from '../../img/play-circle.svg'
import closeCircle from '../../img/close-circle.svg'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'

const Reference = ({videoLink, image, quote}) => {

    const [showVideo, setShowVideo] = useState(false)

    return(
        <article className={styles.reference}>
            
            <h3><RoofSVG/>Windisch</h3>
            <figure>
                {showVideo &&
                <div className={styles.referenceVideo}>
                    <iframe width="100%" height="100%" src={videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button onClick={() => setShowVideo(false)}>
                        <img src={closeCircle} alt='close'/>
                    </button>
                </div>
                }
                <div className={styles.referenceInformation}>
                    <img src={image} alt=''/>
                    <figcaption className={styles.textOverlay}>
                        <TiltableContainer roundedCorners>
                            <div className={styles.overlayStyledContainer}>
                                <blockquote>
                                    {quote}
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