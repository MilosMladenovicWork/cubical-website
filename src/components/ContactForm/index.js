import React from 'react'
import {animated} from 'react-spring' 

import styles from './contact-form.module.scss'
import TextInputField from '../TextInputField'
import TextareaField from '../TextareaField'
import sendBlueImg from '../../img/sendBlue.svg'
import TiltableContainer from '../TiltableContainer'

const TextInputFieldAnimated = animated(TextInputField)
const TextareaFieldAnimated = animated(TextareaField)

const ContactForm = ({children}) => {
    return(
        <TiltableContainer>
            {
                (transformChildren) => {
                    return <form 
                    className={styles.contactForm}
                    >   
                        <animated.div style={{...transformChildren, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)'}} className={styles.childContainer}>
                            {children}
                        </animated.div>
                        <TextInputFieldAnimated style={transformChildren} placeholder='Name'/> 
                        <TextInputFieldAnimated style={transformChildren} placeholder='E-Mail' type='email'/>
                        <TextInputFieldAnimated style={transformChildren} placeholder='Telefonnummer' />
                        <TextInputFieldAnimated style={transformChildren} placeholder='Gewünschte Anrufzeit' />
                        <TextareaFieldAnimated style={transformChildren} placeholder='Ihre Nachricht'/>
                        <animated.button style={{...transformChildren, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)'}} className={styles.sendButton}>
                            <img src={sendBlueImg} alt='send'/>
                        </animated.button>
                    </form>
                }
            }
        </TiltableContainer>
    )
}

export default ContactForm