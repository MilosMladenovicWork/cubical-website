import React, {useState} from 'react'
import Image from 'gatsby-image'

import styles from './reference.module.scss'
import playCircle from '../../img/play-circle.svg'
import closeCircle from '../../img/close-circle.svg'
import seeMoreIcon from '../../img/eye-outline.svg'
import seeLessIcon from '../../img/eye-off-outline.svg'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const Reference = ({videoLink, image, quote, text, alt}) => {

    const [showVideo, setShowVideo] = useState(false)
    const [seeMore, setSeeMore] = useState(false)

    return(
        <article className={styles.reference}>
            <AppearOnViewContainer>
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
                        <div className={`${styles.referenceImage} ${seeMore ? styles.shrinked : ''}`} >
                            <Image fluid={image} alt={alt}/>
                            {/* {showVideo &&
                                <div className={styles.referenceVideo}>
                                    <iframe width="100%" height="100%" src={videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <button onClick={() => setShowVideo(false)}>
                                        <img src={closeCircle} alt='close'/>
                                    </button>
                                </div>
                            } */}
                        </div>
                        <figcaption className={`${styles.textOverlay} ${seeMore ? styles.expanded : ''}`}>
                            <TiltableContainer roundedCorners>
                                <div className={styles.overlayStyledContainer}>
                                    <blockquote>
                                        {quote}
                                    </blockquote>
                                    <div className={`${styles.description} ${seeMore ? styles.visibleDescription : ''}`}>
                                        {text}
                                    </div>
                                    <button onClick={() => setSeeMore(prevState => !prevState)}>
                                        <img src={seeMore ? seeLessIcon : seeMoreIcon} alt=''/>
                                        {
                                            seeMore ? 'WENIGER SEHEN' : 'MEHR SEHEN'
                                        }
                                    </button>
                                    {/* <button onClick={() => setShowVideo(true)}>
                                        <img src={playCircle} alt=''/>
                                        ZUM VIDEO
                                    </button> */}
                                </div>
                            </TiltableContainer>
                        </figcaption>
                    </div>
                </figure>
            </AppearOnViewContainer>
        </article>
    )
} 

export default Reference