import React from 'react'

import styles from './text-input-field.module.scss'

const TextInputField = ({value, placeholder, onChange, type}) => {

    return(
        <input className={styles.textInputField} type={type ? type : 'text'} value={value} placeholder={placeholder} onChange={onChange}/>
    )
}

export default TextInputField