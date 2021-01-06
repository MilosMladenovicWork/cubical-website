import React from 'react'

import styles from './contact-form.module.scss'
import TextInputField from '../TextInputField'
import TextareaField from '../TextareaField'
import sendBlueImg from '../../img/sendBlue.svg'

const ContactForm = ({children}) => {
    return(
            <form 
            className={styles.contactForm}
            >   
                <div className={styles.childContainer}>
                    {children}
                </div>
                <TextInputField placeholder='Name'/> 
                <TextInputField placeholder='E-Mail' type='email'/>
                <TextInputField placeholder='Telefonnummer' />
                <TextInputField placeholder='Gewünschte Anrufzeit' />
                <TextareaField placeholder='Ihre Nachricht'/>
                <button className={styles.sendButton}>
                    <img src={sendBlueImg} alt='send'/>
                </button>
            </form>
    )
}

export default ContactForm