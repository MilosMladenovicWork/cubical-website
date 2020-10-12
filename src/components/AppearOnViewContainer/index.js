import React, {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { useSpring, animated} from 'react-spring'


import styles from './appear-on-view-container.module.scss'

const AppearOnViewContainer = ({children}) => {
    
    const [visible, setVisible] = useState(false)

    const {translateY, opacity } = useSpring({
        from: {
          translateY: visible ?  150 : 0,
          opacity: visible ? 0 : 1,
        },
        to: {
          translateY: visible ? 0 : 150,
          opacity: visible ? 1 : 0,
        },
    })

    const handleVisibility = (isVisible) => {
        setVisible(isVisible)
    }
    
    return(
        <VisibilitySensor partialVisibility onChange={handleVisibility}>
            <animated.div 
                style={{
                    transform: translateY.interpolate(
                      (translateY) => `translateY(${translateY}px)`
                    ),
                    opacity: opacity,
                  }}
            >
                {children}
            </animated.div>
        </VisibilitySensor>
    )
}

export default AppearOnViewContainer