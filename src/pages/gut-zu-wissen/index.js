import React from 'react'

import MarginContainer from '../../components/MarginContainer'
import RoofSVG from '../../components/RoofSVG'
import Section from '../../components/Section'
import SquareContainer from '../../components/SquareContainer'
import ItemAppearOverlay from '../../components/ItemAppearOverlay'
import styles from './gut-zu-wissen.module.scss'

const GutZuWissenPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <Section>
                <h1>DOKUMENTE UND INFORMATIONEN</h1>
            </Section>
            <Section>
                <h5><RoofSVG/> FÜR VERMIETER</h5>
                <SquareContainer lessChildren={true}>
                    <ItemAppearOverlay/>
                </SquareContainer>
            </Section>
            <Section>
                <h5><RoofSVG/> FÜR VERMIETER</h5>
                <SquareContainer lessChildren={true}>
                    <ItemAppearOverlay/>
                    <ItemAppearOverlay/>
                    <ItemAppearOverlay/>
                    <ItemAppearOverlay/>
                </SquareContainer>
            </Section>
            <Section>
                <h5><RoofSVG/> FÜR VERMIETER</h5>
                <SquareContainer lessChildren={true}>
                    <ItemAppearOverlay/>
                    <ItemAppearOverlay/>
                    <ItemAppearOverlay/>
                </SquareContainer>
            </Section>
        </React.Fragment>
    )
}

export default GutZuWissenPage