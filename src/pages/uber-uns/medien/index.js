import React from 'react'
import {Link} from 'gatsby'
import MarginContainer from '../../../components/MarginContainer'
import OffsetItemContainer from '../../../components/OffsetItemContainer'
import PageIntro from '../../../components/PageIntro'
import Section from '../../../components/Section'
import RealEstateItem from '../../../components/SlidingOverlayItem'

import styles from './medien.module.scss'
import BigImageSection from '../../../components/BigImageSection'
import background from '../../../img/background3.png'
import LinkRibbons from '../../../components/LinkRibbons'
import ButtonBordered from '../../../components/ButtonBordered'
import realEstateItemImage from '../../../img/itemImage1.png'

const MedienPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <PageIntro title={'MEDIEN'}>
                <p>Es gibt immer wieder Neues. Von uns, von unseren Projekten und Ihren Immo­bi­lien. Schauen Sie also ruhig regel­mässig vorbei – und klicken Sie sich durch unsere News.</p>
            </PageIntro>
            <Section>
                <OffsetItemContainer>
                    <RealEstateItem
                        title={'An der richtigen Adresse'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <p>An sechs Tagen pro Woche arbeitet Cris­tina Cotoia am Traum der Selbst­stän­dig­keit – an der Women’s Expo wird die Immo­bi­li­en­ver­mitt­lerin auf gleich­ge­sinnte treffen.</p>
                    </RealEstateItem>
                    <RealEstateItem
                        title={'An der richtigen Adresse'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <p>An sechs Tagen pro Woche arbeitet Cris­tina Cotoia am Traum der Selbst­stän­dig­keit – an der Women’s Expo wird die Immo­bi­li­en­ver­mitt­lerin auf gleich­ge­sinnte treffen.</p>
                    </RealEstateItem>
                    <RealEstateItem
                        title={'An der richtigen Adresse'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <p>An sechs Tagen pro Woche arbeitet Cris­tina Cotoia am Traum der Selbst­stän­dig­keit – an der Women’s Expo wird die Immo­bi­li­en­ver­mitt­lerin auf gleich­ge­sinnte treffen.</p>
                    </RealEstateItem>
                    <RealEstateItem
                        title={'An der richtigen Adresse'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <p>An sechs Tagen pro Woche arbeitet Cris­tina Cotoia am Traum der Selbst­stän­dig­keit – an der Women’s Expo wird die Immo­bi­li­en­ver­mitt­lerin auf gleich­ge­sinnte treffen.</p>
                    </RealEstateItem>
                    <RealEstateItem
                        title={'An der richtigen Adresse'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <p>An sechs Tagen pro Woche arbeitet Cris­tina Cotoia am Traum der Selbst­stän­dig­keit – an der Women’s Expo wird die Immo­bi­li­en­ver­mitt­lerin auf gleich­ge­sinnte treffen.</p>
                    </RealEstateItem>
                    <RealEstateItem
                        title={'An der richtigen Adresse'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <p>An sechs Tagen pro Woche arbeitet Cris­tina Cotoia am Traum der Selbst­stän­dig­keit – an der Women’s Expo wird die Immo­bi­li­en­ver­mitt­lerin auf gleich­ge­sinnte treffen.</p>
                    </RealEstateItem>
                </OffsetItemContainer>
            </Section>
            <BigImageSection title={'NUR BELEBTE RÄUME MACHEN GLÜCKLICH.'} image={background}>
                <LinkRibbons links={[{href:'/referenzen/', text:'Unsere Referenzen'}]}/>
            </BigImageSection>
            <Section>
                <h2>AKTUELLE IMMOBILIEN</h2>
                <OffsetItemContainer>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                </OffsetItemContainer>
                <div className={styles.seeAllObjectsButton}>
                    <ButtonBordered>
                        <Link to='/immobilien/'>
                            Alle Objekte ansehen
                        </Link>
                    </ButtonBordered>
                </div>
            </Section>
        </React.Fragment>
    )
}

export default MedienPage