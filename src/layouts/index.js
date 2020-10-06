import React from 'react'
import {useSelector} from 'react-redux'
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
import footerImg from '../img/footer-background.png'

const Layout = ({children}) => {

    return(
        <div className={styles.layout}>
            <NavMenuContainer>
                <ul>
                    <NavLink link={{href:'/immobilien/', text: 'immobilien'}}/>
                    <NavLink link={{href:false, text: 'dienstleistungen'}} subLinks={[
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
                    ]}/>
                </ul>
                <div className={styles.logoContainer}>
                    <Logo/>
                </div>
            </NavMenuContainer>
            <main>
                <div className={styles.mainContent}>
                    {children}
                </div>
                <div className={styles.mainContentNavigation}>
                    <div className={styles.navigationStickyContainer}>
                        <AsideNavContainer>
                            <NavLinkVertical link={{href:'#', text:'Content'}}>
                                Something
                            </NavLinkVertical>
                            <NavLinkVertical link={{href:'#', text:'Content'}}>
                                Something
                            </NavLinkVertical>
                            <NavLinkVertical link={{href:'#', text:'Content'}}>
                                Something
                            </NavLinkVertical>
                        </AsideNavContainer>
                    </div>
                </div>
            </main>
            <FooterContainer>
                <BackgroundImage image={footerImg}/>
                <div className={styles.footerInfoContent}>
                    <img src={flagImg} alt=''/>
                    <h2>NOBIL IMMO GMBH</h2>
                    <p>
                        <span>
                            Baslerstrasse 30, 8048 Zürich
                        </span>
                        <br/>
                        <span>Tel +41 44 202 01 05</span> , <span>info@nobilimmo.ch</span>
                    </p>
                    <p>
                        <span>
                            Baslerstrasse 30, 8048 Zürich
                        </span>
                        <br/>
                        <span>Tel +41 44 202 01 05</span> , <span>info@nobilimmo.ch</span>
                    </p>
                    <h2>NEWSLETTER</h2>
                    <NewsletterForm/>
                </div>
                <div className={styles.footerNavigation}>
                    <AsideNavContainer>
                        <NavLinkVertical link={{href:'#', text:'Content'}}>
                            Something
                        </NavLinkVertical>
                        <NavLinkVertical link={{href:'#', text:'Content'}}>
                            Something
                        </NavLinkVertical>
                        <NavLinkVertical link={{href:'#', text:'Content'}}>
                            Something
                        </NavLinkVertical>
                    </AsideNavContainer>
                </div>
            </FooterContainer>
        </div>
    )
}

export default Layout