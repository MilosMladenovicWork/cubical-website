import React, {useRef, useState} from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {useSpring, animated, useChain} from 'react-spring'
import {useSelector} from 'react-redux'


import styles from './logo.module.scss'
import logo from '../../img/logo.png'
import logoMoto from '../../img/logo-moto.png'
import AppearContainer from '../AppearContainer'


const Logo = ({afterLogoAnimations = []}) => {

    const data = useStaticQuery(graphql`
    query LogoQuery {
        prismicLayout {
          data {
            logo_primary_image {
              alt
              localFile {
                url
              }
            }
            logo_text
          }
        }
      }
      `)
      
    const pageLoaded = useSelector(state => state.pageLoaded)
    const pageLoadedMinimal = useSelector(state => state.pageLoadedMinimal)
    const [letterSprings, setLetterSprings] = useState([])
      
    const motoRef = useRef()
    const motoProps = useSpring({
        from:{
            opacity: 0,
            transform:'scale(0.5) translate(-50%, 0%)'
        },
        to:{
            opacity: (pageLoaded && pageLoadedMinimal) ? 0 : 1,
            transform: (pageLoaded && pageLoadedMinimal) ? 'scale(1) translate(-50%, 0%)' : 'scale(1) translate(-50%, 0%)' 
        },
        delay:(pageLoaded && pageLoadedMinimal) ? 0 : 500,
        ref: motoRef
    })


    const logoRef = useRef()
    const wholeLogo = useRef()

    const logoProps = useSpring({
        from:{
            transform:'scale(0.5)'
        },
        to:{
            transform: (pageLoaded && pageLoadedMinimal) ? 'scale(1)' : 'scale(1.75)',
        },
        delay: (pageLoaded && pageLoadedMinimal) ? 0 : 300,
        ref: logoRef
    })

    const paddingAnimation = useSpring({
        from:{
            paddingBottom:'1.5rem'
        },
        to:{
          paddingBottom:(pageLoaded && pageLoadedMinimal) ? '0rem' : '1.5rem'
        },
        delay: (pageLoaded && pageLoadedMinimal) ? 0 : 300,
        ref: wholeLogo
    })

    
    function getSpring(reference){
      setLetterSprings(prevState => [...prevState, reference])
    }
    
    const formatedText = (text) => {
      const letters = text.split('')
      // let elements = letters.map(letter => <AppearContainer getSpring={getSpring} className={letter == ' ' && styles.emptyMotoLetter}>{letter}</AppearContainer>)
      let elements = letters.map(letter => {
        return <AppearContainer tspan getSpring={getSpring}>
            <tspan fill="url(#gradient)">{letter}</tspan>
          </AppearContainer>
      }
        )
      return elements
    }
    
    useChain([logoRef, ...letterSprings, wholeLogo, ...afterLogoAnimations])

    return(
        <animated.div className={styles.logo} style={paddingAnimation}>
            <Link to={'/'}>
                {
                  data.prismicLayout.data.logo_primary_image &&
                  <animated.div style={logoProps}>
                    {
                      data.prismicLayout.data.logo_primary_image.localFile && 
                      <img className={styles.logoImage} src={data.prismicLayout.data.logo_primary_image.localFile.url} alt='cubical.ag - the keys to your home'/>
                    }
                    {
                      data.prismicLayout.data.logo_text &&
                      <h1 className={styles.logoText}>
                        <svg
                          style={{
                            width: 'auto',
                            overflow:'visible',
                            height:'1rem'
                          }}>
                          <defs>
                            <linearGradient id="gradient" x1="0" x2="100%" y1="0" y2="0%">
                              <stop stopColor="#26baff" offset="0%" />
                              <stop stopColor="#004d80" offset="100%" />
                            </linearGradient>
                          </defs>
                          <text
                            x="50%" y="50%"
                            fontSize='1rem'
                            dominantBaseline="middle"
                            textAnchor="middle">
                              {formatedText(data.prismicLayout.data.logo_text)}
                          </text>
                        </svg>
                      </h1>
                    }
                  </animated.div>
                }
            </Link>
        </animated.div>
    )
}

export default Logo