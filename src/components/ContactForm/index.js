import React from 'react'

import styles from './contact-form.module.scss'
import TextInputField from '../TextInputField'
import TextareaField from '../TextareaField'
import sendWhiteImg from '../../img/sendWhite.svg'

const ContactForm = ({children}) => {
    return(
        <form className={styles.contactForm}>
            {children}
            <TextInputField placeholder='Surname' value=''/>
            <TextInputField placeholder='E-mail' value='' type='email'/>
            <TextInputField placeholder='Phone' value=''/>
            <TextInputField placeholder='Desired call time' value=''/>
            <TextareaField placeholder='Your request' value=''/>
            <button className={styles.sendButton}>
                <img src={sendWhiteImg} alt='send'/>
            </button>
        </form>
    )
}

export default ContactForm