import React, {useState} from 'react'
import RoofSVG from '../RoofSVG'

import styles from './select-heading-content.module.scss'

const SelectHeadingContent = ({column}) => {

    const [activeHeading, setActiveHeading] = useState(0)

    const dummyData = [
        {
            heading:'FOTOS UND FILME',
            content: '<p>Mit profes­sio­nellen Fotos und Film­auf­nahmen bringen wir Leben in die gesamte Vermark­tungs­ko­mu­ni­ka­tion. Bilder sagen mehr als Tausend Worte – und machen das Lebens­ge­fühl in den Räumen sicht- und spürbar. Aus den Film­se­quenzen können zudem moderne Spots entwi­ckelt werden, die wir im Lokal­fern­sehen schalten.</p>'
        },
        {
            heading:'VIRTUELLER RUNDGANG',
            content:'<p>Ein Blick in die Küche, die Treppe hoch ins Kinder­zimmer, ein Abste­cher auf die sonnige Terrasse: Dafür müssen Inter­es­senten jetzt nicht zwin­gend zur Besich­ti­gung kommen. Dank einem virtu­ellen Rund­gang – reali­siert mittels spezi­eller 360°-Kamera – kann man ganz einfach durch die Räume spazieren, während man zuhause am Computer sitzt.</p>'
        }
    ]

    return(
        <article className={`${styles.selectHeadingContent} ${column && styles.columnDirection}`}>
            <div className={styles.headings}>
                {dummyData.map((item, index) => {
                    return <h5 onClick={() => setActiveHeading(index)} class={activeHeading === index && styles.activeHeading}><RoofSVG/>{item.heading}</h5>
                })}
            </div>
            <div className={styles.content}>
                {dummyData.map((item, index) => {
                    return <div style={{display:activeHeading === index ? 'block':'none'}} dangerouslySetInnerHTML={{__html:item.content}}></div>
                })}
            </div>
        </article>
    )
}

export default SelectHeadingContent