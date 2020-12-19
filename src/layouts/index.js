import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {animated, useSpring} from 'react-spring'

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
import facebookLogo from '../img/logo-facebook.svg'
import instagramLogo from '../img/logo-instagram.svg'
import ButtonBordered from '../components/ButtonBordered'
import RoofSVG from '../components/RoofSVG'
import MobileMenuLink from '../components/MobileMenuLink'
import phoneIcon from '../img/phone-icon-transparent.png'
import emailIcon from '../img/email-icon-transparent.png'
import homeIcon from '../img/home-icon-transparent.png'

const Layout = ({children, location}) => {

    const dispatch = useDispatch()

    let contactButtonClicked = useSelector(state => state.contactFormOpened)

    console.log(contactButtonClicked)

    const toggleChat = () => {
        tidioChatApi.open();
    }

    useEffect(() => {
        dispatch({type:'PAGE_LOADED'})
          
        setTimeout(() => {
            dispatch({type:'PAGE_LOADED_MINIMAL'})
        }, 1500)
    }, [])

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
                    <NavLink link={{href:'/immobilien/', text: 'immobilien'}} subLinks={[
                        {href:'/dienstleistungen/kaufen/', text: 'kaufen'},
                        {href:'/dienstleistungen/mieten/', text: 'mieten'},
                    ]}/>
                    <NavLink link={{href:'/dienstleistungen/', text: 'dienstleistungen'}} subLinks={[
                        {href:'/verkaufen/', text: 'verkaufen'},
                        {href:'/finanzierungsberatung/', text: 'finanzierungsberatung'},
                    ]}/>
                    <NavLink link={{href:'/uber-uns/', text: 'ÜBER UNS'}}/>
                    <NavLink link={{href:'/kontakt/', text: 'kontakt'}} deactivated onClick={() => dispatch({type:'toggle_contact_form'})}/>
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
                        <MobileMenuLink link={{href:'/kaufen/', text: 'kaufen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/dienstleistungen/mieten/', text: 'mieten'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/dienstleistungen/verkaufen/', text: 'verkaufen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/referenzen/', text: 'referenzen'}} onClick={() => setMobileMenuActive(false)}/>
                        <MobileMenuLink link={{href:'/kontakt/', text: 'kontakt'}} button deactivated onClick={() => {setMobileMenuActive(false); dispatch({type:'toggle_contact_form'})}}/>
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
                    <div className={`${styles.navigationStickyContainer} ${styles.navigationStickyContainerLeft}`}>
                        <AsideNavContainer>
                            <a href='tel:+111111111'>
                                <img src={phoneIcon} alt='call us'/>
                            </a>
                            <a href='mailto:test@email.com'>
                                <img src={emailIcon} alt='send mail to us'/>
                            </a>
                            <a href='/'>
                                <img src={homeIcon} alt='home page'/>
                            </a>
                        </AsideNavContainer>
                    </div>
                </div>
                <div className={styles.mainContent}>
                    {children}
                </div>
                <div className={styles.mainContentNavigation}>
                    <div className={styles.navigationStickyContainer}>
                        <AsideNavContainer>
                            <NavLinkVertical link={{href:false, text:'Folge uns'}}>
                                <div className={styles.socialIcons}>
                                    <a href='https://facebook.com'>
                                        <img src={facebookLogo} alt='facebook'/>
                                    </a>
                                    <a href='https://instagram.com'>
                                        <img src={instagramLogo} alt='instagram'/>
                                    </a>
                                </div>
                            </NavLinkVertical>
                            <NavLinkVertical link={{href:false, text:'Chat'}} onClick={() => toggleChat()}>
                            </NavLinkVertical>
                            <NavLinkVertical active={contactButtonClicked} link={{href:false, text:'Kontakt'}} invisible onClick={() => dispatch({type:'toggle_contact_form'})} showChildren={true}>
                                <div style={{display: contactButtonClicked ? 'flex' : 'none'}} className={styles.contactFormContainer}>
                                    <ContactForm>
                                        <img style={{alignSelf:'flex-start', width:40, marginBottom:15, cursor:'pointer'}} src={closeWhite} alt='close' onClick={() => dispatch({type:'toggle_contact_form'})}/>
                                    </ContactForm>
                                </div>
                            </NavLinkVertical>
                        </AsideNavContainer>
                    </div>
                </div>
            </main>
            <FooterContainer>
                <BackgroundImage image={footerImg}/>
                <div className={styles.footerInfoContent}>
                    <img src={flagImg} alt=''/>
                    <h2>cubical AG</h2>
                    <p>
                        Heimstrasse 12, 8953
                    </p>
                    <p>
                        Tel: <a href={'tel:+41447421818'}>+41 44 742 18 18</a>
                    </p>
                    <p>
                        Email: <a href={'mailto:info@cubical.ag'}>info@cubical.ag</a>
                    </p>
                </div>
                <div className={styles.horizontallyCentered} onClick={() => {dispatch({type:'toggle_contact_form'});window.scrollBy(0, -Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))}}>
                    <ButtonBordered>
                        Kontakt
                    </ButtonBordered>
                </div>
                <div className={styles.footerNavigation}>
                    <AsideNavContainer>
                        <NavLinkVertical link={{href:'/datenschutz/', text:'DATENSCHUTZ'}}>
                            
                        </NavLinkVertical>
                        <NavLinkVertical link={{href:'/impressum/', text:'IMPRESSUM'}}>
                            
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
                        </NavLinkVertical>
                    </AsideNavContainer>
                </div>
            </FooterContainer>
            {contactButtonClicked &&
            <div className={styles.mobileForm}>
                    <ContactForm>
                        <img style={{alignSelf:'flex-start', width:40, marginBottom:15, cursor:'pointer'}} src={closeWhite} alt='close' onClick={() => dispatch({type:'toggle_contact_form'})}/>
                    </ContactForm>
            </div>
            }
        </div>
    )
}

export default Layout