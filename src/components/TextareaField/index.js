import React from 'react'

import styles from './textarea-field.module.scss'

const TextareaField = ({value, placeholder, onChange, ...rest}) => {

    return(
        <textarea {...rest} className={styles.textareaField} value={value} placeholder={placeholder} onChange={onChange}></textarea>
    )
}

export default TextareaField