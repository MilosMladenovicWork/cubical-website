import React from 'react'

import styles from './contact-form.module.scss'
import TextInputField from '../TextInputField'
import TextareaField from '../TextareaField'
import sendBlueImg from '../../img/sendBlue.svg'
import TiltableContainer from '../TiltableContainer'

const ContactForm = ({children}) => {
    return(
        <TiltableContainer>
            <form className={styles.contactForm}>
                {children}
                <TextInputField placeholder='Surname'/>
                <TextInputField placeholder='E-mail' type='email'/>
                <TextInputField placeholder='Phone' />
                <TextInputField placeholder='Desired call time' />
                <TextareaField placeholder='Your request'/>
                <button className={styles.sendButton}>
                    <img src={sendBlueImg} alt='send'/>
                </button>
            </form>
        </TiltableContainer>
    )
}

export default ContactForm