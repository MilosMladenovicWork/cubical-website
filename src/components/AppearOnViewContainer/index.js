import React, {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { useSpring, animated} from 'react-spring'


import styles from './appear-on-view-container.module.scss'

const AppearOnViewContainer = ({children}) => {
    
    const [visible, setVisible] = useState(false)
    const [seen, setSeen] = useState(false)


    const {translateY, opacity } = useSpring({
        from: {
          translateY: (visible || seen) ?  150 : 0,
          opacity: (visible || seen) ? 0 : 1,
        },
        to: {
          translateY: (visible || seen) ? 0 : 150,
          opacity: (visible || seen) ? 1 : 0,
        },
    })

    const handleVisibility = (isVisible) => {
        setVisible(isVisible)
        if(isVisible){
          if(!seen){
            setSeen(true)
          }
        }
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