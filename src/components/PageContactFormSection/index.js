import React from 'react'

import styles from './page-contact-form-section.module.scss'
import Section from '../Section'
import ContactForm from '../ContactForm'

const PageContactFormSection = ({data}) => {
  return(
    <Section id={(data.primary && data.primary.section_id) ? data.primary.section_id : ''}>
      <div className={styles.contactFormSection}>
        <div className={styles.contactFormContainer}>
            <ContactForm>
                <h1 className={styles.contactHeading}>KONTAKT</h1>
            </ContactForm>
        </div>
        <div className={styles.mobileForm}>
            <ContactForm>
                <h1 className={styles.contactHeading}>KONTAKT</h1>
            </ContactForm>
        </div>
      </div>
    </Section>
  )
}

export default PageContactFormSection