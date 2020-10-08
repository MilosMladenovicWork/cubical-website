import React from 'react'
import ButtonBordered from '../../../components/ButtonBordered'
import MarginContainer from '../../../components/MarginContainer'
import PageIntro from '../../../components/PageIntro'
import SquareContainer from '../../../components/SquareContainer'
import Section from '../../../components/Section'
import RoofSVG from '../../../components/RoofSVG'

import styles from './partner.module.scss'
import partnerImg from '../../../img/partner.png'

const PartnerPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <PageIntro title={'ERFOLGREICH MIT DEN BESTEN PARTNERN.'}>
                <p>Ob mit den Fach­s­pe­zia­listen unseres bewährten Netz­werks oder mit Ihnen als Privat­person: Wir legen Wert auf gute, nach­hal­tige Part­ner­schaften. Denn gemeinsam errei­chen wir mehr.</p>
                <p>Kennen Sie jemanden, der ein Objekt oder Grund­stück verkaufen möchte? Sind Sie gut vernetzt? Kennen Sie viele Besitzer von Immo­bi­lien? Dann freuen wir uns, wenn Sie uns unter­stützen, uns mit diesen Personen bekannt machen und uns als Immo­bi­li­en­ver­markter empfehlen. Ist die Part­ner­schaft mit Ihnen erfolg­reich, profi­tieren auch Sie davon – denn wir zahlen Ihnen eine Provi­sion als herz­li­ches Danke­schön.</p>
                <ButtonBordered>
                    Immobilie empfehlen
                </ButtonBordered>
            </PageIntro>
            <Section>
                <h3>MAKLERKAMMER</h3>
                <p>Für uns spre­chen viele Gründe. Aber was zählt, sind allein Sie, Ihre Immo­bilie und Ihr Vertrauen in uns. Anstatt auf Quan­tität setzen wir auf Qualität, damit wir jedem Objekt die Aufmerk­sam­keit schenken können, die es verdient. Eine klare Kommu­ni­ka­tion, Trans­pa­renz und direkte Wege liegen uns sehr am Herzen. Nur so können wir flexibel und ganz gezielt reagieren – auf Ihre Wünsche und Bedürf­nisse indi­vi­duell eingehen. Wir sind optimal vernetzt und begleiten Sie auf dem Weg zum erfolg­rei­chen Immo­bi­li­en­ver­kauf, und zwar mit starken Part­nern, viel Gespür für den Markt und einer Menge Leiden­schaft. Lernen Sie uns persön­lich kennen. Wir freuen uns auf Sie.</p>
            </Section>
            <Section>
                <h5><RoofSVG/>NETZWERK</h5>
                <SquareContainer>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                    <li>
                        <img src={partnerImg} alt=''/>
                    </li>
                </SquareContainer>
            </Section>
        </React.Fragment>
    )
}

export default PartnerPage