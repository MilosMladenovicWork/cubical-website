import React, {useState, useEffect} from 'react'

import styles from './moto-text.module.scss'
import TiltableContainer from '../TiltableContainer'

const MotoText = ({text}) => {

  const [motoText, setMotoText] = useState('')

  const formatedText = (text) => {
    const letters = text.split('')
    let htmlString = ''
    letters.forEach(letter => htmlString += `<span>${letter}</span>`)
    return htmlString
  }

  useEffect(() => {
    setMotoText(formatedText(text))
  }, [text])

  return (
    <div className={styles.motoTextContainer}>
        <TiltableContainer roundedCorners>
            <h1 className={styles.motoText} dangerouslySetInnerHTML={{__html:motoText}}></h1>
        </TiltableContainer>
    </div>
  )
}

export default MotoText