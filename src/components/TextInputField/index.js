import { rest } from 'lodash'
import React from 'react'

import styles from './text-input-field.module.scss'

const TextInputField = ({value, placeholder, onChange, type, ...rest}) => {

    return(
        <input {...rest} className={styles.textInputField} type={type ? type : 'text'} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)}/>
    )
}

export default TextInputField