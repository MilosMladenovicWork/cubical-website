import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {animated, useSpring, useTransition} from 'react-spring'
import {useStaticQuery, graphql} from 'gatsby'

import NavMenuContainer from '../components/NavMenuContainer'
import NavLink from '../components/NavLink'
import styles from './layout.module.scss'
import Logo from '../components/Logo'
import FooterContainer from '../components/FooterContainer'
import BackgroundImage from '../components/BackgroundImage'
import flagImg from '../img/flag.svg'
import NewsletterForm from '../components/NewsletterForm'
import AsideNavContainer from '../components/AsideNavContainer'
import NavLinkVertical from '../components/NavLinkVertical'
import footerImg from '../img/footer-background.jpg'
import ContactForm from '../components/ContactForm'
import closeWhite from '../img/close-white.svg'
import close from '../img/close.svg'
import closeBlue from '../img/closeBlue.svg'
import facebookLogo from '../img/logo-facebook.svg'
import instagramLogo from '../img/logo-instagram.svg'
import ButtonBordered from '../components/ButtonBordered'
import RoofSVG from '../components/RoofSVG'
import MobileMenuLink from '../components/MobileMenuLink'
import phoneIcon from '../img/phone-icon-transparent.png'
import emailIcon from '../img/email-icon-transparent.png'
import homeIcon from '../img/home-icon-transparent.png'

const Layout = ({children, location}) => {

    const data = useStaticQuery(graphql`
    query LayoutQuery {
        prismicLayout {
          data {
            background_image {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
            footer_content {
              html
            }
            footer_links {
              link {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
              link_text
            }
            left_side_links {
              link {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
              image {
                localFile {
                  url
                }
                alt
              }
            }
            link_hover_icons {
              image {
                alt
                localFile{
                    url
                }
              }
              link {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
              parent_link
            }
            links {
              link {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
              link_text
            }
            logo_primary_image {
              alt
              localFile {
                absolutePath
              }
            }
            logo_secondary_image {
              alt
              localFile {
                absolutePath
              }
            }
            right_side_link_hover_icons {
              image {
                alt
                localFile{
                    url
                }
              }
              link {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
              parent_link
            }
            right_side_links {
              link {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
              link_text
            }
            sublinks {
              parent_link
              sublink_text
              sublink {
                url
                document {
                    data {
                      page_path
                    }
                }
              }
            }
          }
        }
      }
    `)

    const dispatch = useDispatch()

    let contactButtonClicked = useSelector(state => state.contactFormOpened)

    const [showNavIcons, setShowNavIcons] = useState(false)

    const vhToPixel = value => `${typeof window != 'undefined' && (window.innerHeight * value) / 100}`

    useEffect(() => {
        dispatch({type:'PAGE_LOADED'})
          
        setTimeout(() => {
            dispatch({type:'PAGE_LOADED_MINIMAL'})
        }, 1500)
    }, [])

    const navIconsTransition = useTransition(showNavIcons, null, {
        from: {transform:'translate(-100%, -50%)'},
        enter: {transform: 'translate(0%, -50%)'},
        leave: {transform: 'translate(-100%, -50%)'}
    })

    const contactFormTransition = useTransition(contactButtonClicked, null, {
        from: {opacity: '0'},
        enter: {opacity: '1'},
        leave: {opacity: '0'}
    })

    useEffect(() => {
        if(typeof window != 'undefined'){
            window.addEventListener('scroll', () => {
                let scrolledPixels = vhToPixel(75)
                if(window.scrollY > Number(scrolledPixels)){
                    setShowNavIcons(true)
                }else{
                    setShowNavIcons(false)
                }
            })
        }
    })

    const pageLoaded = useSelector(state => state.pageLoaded)
    const pageLoadedMinimal = useSelector(state => state.pageLoadedMinimal)

    const linkListProps = useSpring({
        opacity: (pageLoaded && pageLoadedMinimal) ? 1 : 0
    })

    const logoProps = useSpring({
        position:'absolute',
        top: (pageLoaded && pageLoadedMinimal) ? '0%' : '-50%',
        right: (pageLoaded && pageLoadedMinimal) ? '0%' : '50%',
        transform: (pageLoaded && pageLoadedMinimal) ? 'translateX(0%)' :'translateX(50%)'
    })

    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    return(
        <div className={styles.layout}>
            <NavMenuContainer>
                <animated.ul style={linkListProps}>
                    {
                        data.prismicLayout.data.links &&
                        data.prismicLayout.data.links.length > 0 &&
                        data.prismicLayout.data.links.map((link, index) => {

                            let sublinks = data.prismicLayout.data.sublinks && data.prismicLayout.data.sublinks.length > 0 && (
                                data.prismicLayout.data.sublinks.filter(sublink => sublink.parent_link == index + 1).map(sublink => ({href:(sublink.sublink) && ((sublink.sublink.document && sublink.sublink.document[0].data.page_path) ? sublink.sublink.document[0].data.page_path : sublink.sublink.url), text: sublink.sublink_text}))
                            )
                            console.log(link)
                            return <NavLink link={{href:(link.link) && ((link.link.document && link.link.document[0].data.page_path) ? link.link.document[0].data.page_path : link.link.url), text: link.link_text}} subLinks={sublinks}/>
                        })
                    }
                    <NavLink link={{href:'/kontakt/', text: 'kontakt'}} deactivated onClick={() => dispatch({type:'toggle_contact_form'})}/>
                    {/* <NavLink link={{href:'/immobilien/', text: 'immobilien'}} subLinks={[
                        {href:'/immobilien/kaufen/', text: 'kaufen'},
                        {href:'/immobilien/mieten/', text: 'mieten'},
                    ]}/>
                    <NavLink link={{href:'/dienstleistungen/', text: 'dienstleistungen'}} subLinks={[
                        {href:'/dienstleistungen/verkaufen/', text: 'verkaufen'},
                        {href:'/dienstleistungen/finanzierungsberatung/', text: 'finanzierungsberatung'},
                    ]}/>
                    <NavLink link={{href:'/uber-uns/', text: 'ÜBER UNS'}}/> */}
                    {/* <NavLink link={{href:'/immobilien/', text: 'immobilien'}}/>
                    <NavLink link={{href:'/blog/', text: 'blog'}}/>
                    <NavLink deactivated link={{href:'/dienstleistungen/', text: 'dienstleistungen'}} subLinks={[
                        {href:'/dienstleistungen/verkaufen/', text: 'verkaufen'},
                        {href:'/dienstleistungen/vermieten/', text: 'vermieten'},
                        {href:'/dienstleistungen/investieren-begleiten/', text: 'investieren & begleiten'}
                    ]}/>
                    <NavLink link={{href:'/gut-zu-wissen/', text: 'gut zu wissen'}}/>
                    <NavLink link={{href:'/referenzen/', text: 'referenzen'}}/>
                    <NavLink link={{href:'/ueber-uns/', text: 'über uns'}} subLinks={[
                        {href:'/ueber-uns/team/', text: 'team'},
                        {href:'/ueber-uns/medien/', text: 'medien'},
                        {href:'/ueber-uns/soziales-engagement/', text: 'soziales engagement'},
                        {href:'/ueber-uns/partner/', text: 'partner'},
                        {href:'/ueber-uns/stellen/', text: 'stellen'},
                    ]}/> */}
                </animated.ul>
                <animated.div style={linkListProps} className={styles.mobile}>
                    <h5 onClick={() => setMobileMenuActive(true)}><RoofSVG/>Menü</h5>
                    <div className={`${styles.mobileMenu} ${mobileMenuActive && styles.mobileMenuActive}`}>
                        <img className={styles.closeMobileMenuButton} style={{alignSelf:'flex-start', width:40, marginBottom:15, cursor:'pointer'}} src={close} alt='close' onClick={() => setMobileMenuActive(false)}/>
                        {/* <MobileMenuLink link={{href:'/kaufen/', text: 'kaufen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/dienstleistungen/mieten/', text: 'mieten'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/dienstleistungen/verkaufen/', text: 'verkaufen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/referenzen/', text: 'referenzen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/kontakt/', text: 'kontakt'}} button deactivated onClick={() => {setMobileMenuActive(false); dispatch({type:'toggle_contact_form'})}}/> */}
                        {
                            data.prismicLayout.data.links &&
                            data.prismicLayout.data.links.length > 0 &&
                            data.prismicLayout.data.links.map((link, index) => {

                                let sublinks = data.prismicLayout.data.sublinks && data.prismicLayout.data.sublinks.length > 0 && (
                                    data.prismicLayout.data.sublinks.filter(sublink => sublink.parent_link == index + 1).map(sublink => ({href:(sublink.sublink) && ((sublink.sublink.document && sublink.sublink.document[0].data.page_path) ? sublink.sublink.document[0].data.page_path : sublink.sublink.url), text: sublink.sublink_text}))
                                )
                                
                                return <MobileMenuLink link={{href:(link.link) && ((link.link.document && link.link.document[0].data.page_path) ? link.link.document[0].data.page_path : link.link.url), text: link.link_text}} subLinks={sublinks} onClick={()=> setMobileMenuActive(false)}/>
                            })
                        }
                        <MobileMenuLink link={{href:'/kontakt/', text: 'kontakt'}} button onClick={() => {dispatch({type:'toggle_contact_form'});setMobileMenuActive(false); console.log('activated')}}/>
                        {/* <MobileMenuLink link={{href:'/immobilien/', text: 'immobilien'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/blog/', text: 'blog'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink deactivated link={{href:'/dienstleistungen/', text: 'dienstleistungen'}} subLinks={[
                            {href:'/dienstleistungen/verkaufen/', text: 'verkaufen'},
                            {href:'/dienstleistungen/vermieten/', text: 'vermieten'},
                            {href:'/dienstleistungen/investieren-begleiten/', text: 'investieren & begleiten'}
                        ]}
                        onClick={() => setMobileMenuActive(false)}
                        />
                        <MobileMenuLink link={{href:'/gut-zu-wissen/', text: 'gut zu wissen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/referenzen/', text: 'referenzen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/ueber-uns/', text: 'über uns'}} subLinks={[
                            {href:'/ueber-uns/team/', text: 'team'},
                            {href:'/ueber-uns/medien/', text: 'medien'},
                            {href:'/ueber-uns/soziales-engagement/', text: 'soziales engagement'},
                            {href:'/ueber-uns/partner/', text: 'partner'},
                            {href:'/ueber-uns/stellen/', text: 'stellen'},
                        ]}
                        onClick={() => setMobileMenuActive(false)}
                        /> */}
                    </div>
                </animated.div>
                <animated.div style={logoProps} className={styles.logoContainer}>
                    <Logo/>
                </animated.div>
                <div style={{
                    visibility:'hidden'
                }} className={styles.logoContainer}>
                    <Logo/>
                </div>
            </NavMenuContainer>
            <main>
                <div className={`${styles.mainContentNavigation}`}>
                    {
                        navIconsTransition.map(({item, key, props}) => 
                            item && 
                            <animated.div key={key} style={props} className={`${styles.navigationStickyContainer} ${styles.navigationStickyContainerLeft}`}>
                                    {
                                        data.prismicLayout.data.left_side_links &&
                                        data.prismicLayout.data.left_side_links.length > 0 &&
                                        <AsideNavContainer>
                                            {
                                                data.prismicLayout.data.left_side_links.map(link => {
                                                    return <a href={(link.link) && ((link.link.document && link.link.document[0].data.page_path) ? link.link.document[0].data.page_path : link.link.url)}>
                                                        {
                                                            link.image && 
                                                            <img src={link.image.localFile.url} alt={link.image.alt}/>
                                                        }
                                                    </a>
                                                })
                                            }
                                        </AsideNavContainer>
                                    }
                            </animated.div>
                        )
                    }
                </div>
                <div className={styles.mainContent}>
                    {children}
                </div>
                <div className={styles.mainContentNavigation}>
                    <div className={styles.navigationStickyContainer}>
                        <AsideNavContainer rotated>
                            {
                                data.prismicLayout.data.right_side_links &&
                                data.prismicLayout.data.right_side_links.length > 0 &&
                                data.prismicLayout.data.right_side_links.map((link, index) => {
                                    return <NavLinkVertical link={{href:(link.link) && ((link.link.document && link.link.document[0].data.page_path) ? link.link.document[0].data.page_path : link.link.url), text:link.link_text}}>
                                        <div className={styles.socialIcons}>
                                        {   
                                            data.prismicLayout.data.right_side_link_hover_icons &&
                                            data.prismicLayout.data.right_side_link_hover_icons.length > 0 &&
                                            data.prismicLayout.data.right_side_link_hover_icons.filter(link => link.parent_link == index + 1).map(sublink => {
                                                return <a href={(sublink.link) && ((sublink.link.document && sublink.link.document[0].data.page_path) ? sublink.link.document[0].data.page_path : sublink.link.url)}>
                                                        {
                                                            sublink.image && 
                                                            <img src={sublink.image.localFile.url} alt={sublink.image.alt}/>
                                                        }
                                                    </a>
                                            })
                                        }
                                        </div>
                                    </NavLinkVertical>
                                })
                            }
                        </AsideNavContainer>
                    </div>
                </div>
            </main>
            <FooterContainer>
                {
                    data.prismicLayout.data.background_image &&
                    <BackgroundImage image={data.prismicLayout.data.background_image.localFile.childImageSharp.fluid}/>
                }
                <div className={styles.footerInfoContent}>
                    <img src={flagImg} alt=''/>
                    {
                        data.prismicLayout.data.footer_content &&
                        <div dangerouslySetInnerHTML={{__html:data.prismicLayout.data.footer_content.html}}>
                        </div>
                    }
                </div>
                <div className={styles.horizontallyCentered} onClick={() => {dispatch({type:'toggle_contact_form'});window.scrollBy(0, -Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))}}>
                    <ButtonBordered>
                        Kontakt
                    </ButtonBordered>
                </div>
                <div className={styles.footerNavigation}>
                    <AsideNavContainer rotated>
                        {
                            data.prismicLayout.data.footer_links &&
                            data.prismicLayout.data.footer_links.length > 0 &&
                            data.prismicLayout.data.footer_links.map((link, index) => {
                                return <NavLinkVertical link={{href:(link.link) && ((link.link.document && link.link.document[0].data.page_path) ? link.link.document[0].data.page_path : link.link.url), text:link.link_text}}>
                                    <div className={styles.socialIcons}>
                                    {   
                                        data.prismicLayout.data.link_hover_icons &&
                                        data.prismicLayout.data.link_hover_icons.length > 0 &&
                                        data.prismicLayout.data.link_hover_icons.filter(link => link.parent_link == index + 1).map(sublink => {
                                            return <a href={(sublink.link) && ((sublink.link.document && sublink.link.document[0].data.page_path) ? sublink.link.document[0].data.page_path : sublink.link.url)}>
                                                    {
                                                        sublink.image && 
                                                        <img src={sublink.image.localFile.url} alt={sublink.image.alt}/>
                                                    }
                                                </a>
                                        })
                                    }
                                    </div>
                                </NavLinkVertical>
                            })
                        }
                        {/* <NavLinkVertical link={{href:'/impressum/', text:'IMPRESSUM'}}>
                            
                        </NavLinkVertical>
                        <NavLinkVertical link={{href:false, text:'Folge uns'}}>
                            <div className={styles.socialIcons}>
                                <a href='https://facebook.com'>
                                    <img src={facebookLogo} alt='facebook'/>
                                </a>
                                <a href='https://instagram.com'>
                                    <img src={instagramLogo} alt='instagram'/>
                                </a>
                            </div>
                        </NavLinkVertical> */}
                    </AsideNavContainer>
                </div>
            </FooterContainer>
            {
                contactFormTransition.map(({item, key, props}) => 
                    item && 
                    <animated.div key={key} style={props} className={styles.contactFormContainer}>
                        <ContactForm>
                            <img style={{alignSelf:'flex-start', width:40, marginBottom:15, cursor:'pointer'}} src={closeBlue} alt='close' onClick={() => dispatch({type:'toggle_contact_form'})}/>
                        </ContactForm>
                    </animated.div> 

                )
            }
            { contactFormTransition.map(({item, key, props}) => 
                item &&
                <animated.div style={props} key={key} className={styles.mobileForm}>
                        <ContactForm>
                            <img style={{alignSelf:'flex-start', width:40, marginBottom:15, cursor:'pointer'}} src={closeBlue} alt='close' onClick={() => dispatch({type:'toggle_contact_form'})}/>
                        </ContactForm>
                </animated.div>
            ) 
            }
        </div>
    )
}

export default Layout