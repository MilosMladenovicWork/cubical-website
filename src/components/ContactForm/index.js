import React, {useState} from 'react'

import styles from './contact-form.module.scss'
import TextInputField from '../TextInputField'
import TextareaField from '../TextareaField'
import sendBlueImg from '../../img/sendBlue.svg'

const ContactForm = ({children}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [callTime, setCallTime] = useState('')
    const [msg, setMsg] = useState('')

    const [errorMessage, setErrorMessage] = useState(undefined)
    const [successMessage, setSuccessMessage] = useState(undefined)
    const [fetching, setFetching] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')
        if (
          !name ||
          !(
            email &&
            email.match(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
          )
        ) {
          setErrorMessage('Required fields not filled!')
        } else {
          setErrorMessage(undefined)
          setFetching(true)
          fetch(
            `/.netlify/functions/contactForm?name=${name}&email=${email}&tel=${tel}&callTime=${callTime}&msg=${msg}`,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              method: 'POST',
            }
          )
            .then((response) => response.json())
            .then((data) => {
              setFetching(false)
              if (data.status == 'success') {
                return setSuccessMessage(data.message)
              } else if (data.status == 'error') {
                return setErrorMessage(data.message)
              }
            })
            .catch((error) => {
              console.log(error)
              setFetching(false)
              setErrorMessage(
                'There was some error while trying to send your email. Try later!'
              )
            })
        }
      }

    return(
            <form 
            className={styles.contactForm}
            >   
                <div className={styles.childContainer}>
                    {children}
                </div>
                <TextInputField placeholder='Name' name='name' value={name} onChange={setName}/> 
                <TextInputField placeholder='E-Mail' type='email' name='email' value={email} onChange={setEmail}/>
                <TextInputField placeholder='Telefonnummer' name='tel' value={tel} onChange={setTel}/>
                <TextInputField placeholder='Gewünschte Anrufzeit' name='callTime' value={callTime} onChange={setCallTime}/>
                <TextareaField placeholder='Ihre Nachricht' name='msg' value={msg} onChange={setMsg}/>
                <button 
                    className={styles.sendButton} 
                    onClick={(e) => handleSubmit(e)}
                >
                    <img src={sendBlueImg} alt='send'/>
                </button>
                {successMessage && (
                    <p className={styles.successMessage}>{successMessage}</p>
                )}
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {fetching && (
                    <div className={styles.loadingIndicatorContainer}>
                        <div className={styles.loadingIndicator}></div>
                    </div>
                )}
            </form>
    )
}

export default ContactForm