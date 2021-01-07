import React from 'react'

import styles from './section.module.scss'

const Section = ({children, fullWidth, ...rest}) => {
    return(
        <section {...rest} className={`${styles.section} ${fullWidth && styles.fullWidth}`}>
            {children}
        </section>
    )
}

export default Section