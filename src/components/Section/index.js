import React from 'react'

import styles from './section.module.scss'

const Section = ({children, fullWidth}) => {
    return(
        <section className={`${styles.section} ${fullWidth && styles.fullWidth}`}>
            {children}
        </section>
    )
}

export default Section