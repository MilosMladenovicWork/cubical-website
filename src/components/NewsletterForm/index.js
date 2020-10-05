import React, {useState} from 'react'

import styles from './newsletter-form.module.scss'
import TextInputField from '../TextInputField'

import sendImg from '../../img/send.svg'

const NewsletterForm = () => {

    return(
        <form className={styles.newsletterForm}>
            <TextInputField placeholder='Name'/>
            <TextInputField placeholder='E-Mail'/>
            <button>
                <img src={sendImg} alt='send'/>
            </button>
        </form>
    )
}

export default NewsletterForm