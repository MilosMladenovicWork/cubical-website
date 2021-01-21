import React, {useEffect, useRef} from 'react'
import { animated, useSpring } from 'react-spring'
import {useSelector} from 'react-redux'

const AppearContainer = ({children, getSpring, className, ...rest}) => {

  const container = useRef()

  const pageLoaded = useSelector(state => state.pageLoaded)
  const pageLoadedMinimal = useSelector(state => state.pageLoadedMinimal)

  const props = useSpring({
      from:{
          visibility: 'hidden',
      },
      to:{
          visibility: (pageLoaded && pageLoadedMinimal) ? 'hidden' : 'visible',
      },
      delay:0,
      config:{
        duration:25
      },
      ref: container
  })

  useEffect(() => {
    if(getSpring){
      getSpring(container)
    }
  }, [])

  return (
    <animated.div className={className} {...rest} style={props}>
      {children}
    </animated.div>
  )
}

export default AppearContainer