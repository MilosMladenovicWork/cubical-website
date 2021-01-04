import React, {useEffect, useRef} from 'react'
import { animated, useSpring } from 'react-spring'
import {useSelector} from 'react-redux'

const AppearContainer = ({children, getSpring}) => {

  const container = useRef()

  const pageLoaded = useSelector(state => state.pageLoaded)
  const pageLoadedMinimal = useSelector(state => state.pageLoadedMinimal)

  const props = useSpring({
      from:{
          opacity: 0,
      },
      to:{
          opacity: (pageLoaded && pageLoadedMinimal) ? 0 : 1,
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
    <animated.div style={props}>
      {children}
    </animated.div>
  )
}

export default AppearContainer