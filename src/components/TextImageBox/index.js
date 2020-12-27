import React from 'react'
import Image from 'gatsby-image'

import styles from './text-image-box.module.scss'
import TiltableContainer from '../../components/TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const TextImageBox = ({children, reverse, image, alt}) => {
    return(
        <article className={`${styles.textImageBox} ${reverse && styles.reverseDirection}  ${!image ? styles.fullWidthContent : ''}`}>
            {
                image &&
                <AppearOnViewContainer>
                    <TiltableContainer>
                        {
                            image.src ? 
                            <Image fluid={image} alt={alt} className={styles.image}/>
                            :
                            <img src={image} alt={alt} className={styles.image}/>
                        }
                    </TiltableContainer>
                </AppearOnViewContainer>
            }
            <AppearOnViewContainer>
                <div className={styles.content}>
                    {children}
                </div>
            </AppearOnViewContainer>
        </article>
    )
}

export default TextImageBox