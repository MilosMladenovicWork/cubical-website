import React from 'react'

import styles from './text-input-field.module.scss'

const TextInputField = ({value, placeholder, onChange}) => {

    return(
        <input className={styles.textInputField} type='text' value={value} placeholder={placeholder} onChange={onChange}/>
    )
}

export default TextInputField