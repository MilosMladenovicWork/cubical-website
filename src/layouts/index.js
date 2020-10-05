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
                    <NavLink link={{href:'#', text: 'dienstleistungen'}} subLinks={[
                        {href:'#', text: 'verkaufen'},
                        {href:'#', text: 'vermieten'},
                        {href:'#', text: 'investieren & begleiten'}
                    ]}/>
                    <NavLink link={{href:'#', text: 'dienstleistungen'}} subLinks={[
                        {href:'#', text: 'verkaufen'},
                        {href:'#', text: 'vermieten'},
                        {href:'#', text: 'investieren & begleiten'}
                    ]}/>
                    <NavLink link={{href:'#', text: 'dienstleistungen'}} subLinks={[
                        {href:'#', text: 'verkaufen'},
                        {href:'#', text: 'vermieten'},
                        {href:'#', text: 'investieren & begleiten'}
                    ]}/>
                    <NavLink link={{href:'#', text: 'dienstleistungen'}} subLinks={[
                        {href:'#', text: 'verkaufen'},
                        {href:'#', text: 'vermieten'},
                        {href:'#', text: 'investieren & begleiten'}
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