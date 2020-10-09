import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'

import styles from './tiltable-container.module.scss'

const TiltableContainer = ({children, roundedCorners}) => {
    const [transform, set, stop] = useSpring(()=>(
        {
        transform:`scale(1) rotateX(0deg) rotateY(0deg)`,
        boxShadow:`4px 4px 10px rgba(0, 0, 0, 0.3)`,
         config: { mass: 1, tension: 250, friction: 40 }
        }
    ))

    return(
        <animated.div 
            className={`${styles.tiltableContainer} ${roundedCorners && styles.roundedCorners}`}
            style={transform}
            onPointerOut={() => set({
                transform:`scale(1) rotateX(0deg) rotateY(0deg)`,
                boxShadow:`4px 4px 10px rgba(0, 0, 0, 0.3)`
            })}
            onMouseMove={
                function(e){
                    set(
                        {
                            transform:`scale(1.05) rotateX(${(e.pageY - e.currentTarget.getBoundingClientRect().top - window.pageYOffset - e.currentTarget.offsetHeight/2)/7}deg) rotateY(${(e.currentTarget.getBoundingClientRect().left - e.pageX + e.currentTarget.offsetWidth / 2) / 7}deg)`,
                            boxShadow: `${(e.currentTarget.getBoundingClientRect().left - e.pageX + e.currentTarget.offsetWidth / 2) / 7}px ${(e.pageY - e.currentTarget.getBoundingClientRect().top - window.pageYOffset - e.currentTarget.offsetHeight/2)/7}px 10px rgba(0, 0, 0, 0.3)`
                        }
                    );
            }}
        >
            {children}
        </animated.div>
    )
}

export default TiltableContainer