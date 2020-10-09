import React from 'react'

import Section from '../../components/Section'
import MarginContainer from '../../components/MarginContainer'
import styles from './impressum.module.scss'

const ImpressumPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <Section>
                <h1>IMPRESSUM</h1>
                <div className={styles.content}>
                    <p>
                        <strong>Heraus­geber</strong><br/>
                        Nobil Immo GmbH<br/>
                        Adresse Haupt­sitz: Basler­strasse 30, 8048 Zürich<br/>
                        Adresse Zweignie­der­las­sung: Bundess­trasse 3, 6300 Zug
                    </p>
                    <p>
                        T: <a href='tel:+41000000000'>+41 00 000 00 00</a><br/>
                        E: <a href='mailto:info@nobilimmo.ch'>info@nobilimmo.ch</a>
                    </p>
                    <p>Handels­re­gister Haupt­sitz: CH-020.4.052.168-3<br/>Handels­re­gister Zweignie­der­las­sung: CH-170.9.001.873-3</p>
                    <p>UID Haupt­sitz: CHE‑322.859.995 <br/>UID Zweignie­der­las­sung: CHE‑161.829.962</p>
                    <p><strong>Geschäfts­füh­rerin</strong><br/>Cris­tina Cotoia</p>
                    <p><strong>Haftungs­be­schrän­kung</strong><br/>Der Inhalt dieser Webseiten wird mit grösst­mög­li­cher Sorg­falt gepflegt. Trotzdem wird für den Inhalt keine Haftung über­nommen. Druck­fehler, Irrtümer und Ände­rungen vorbe­halten. Der Inhalt ist urhe­ber­recht­lich geschützt. Für die Inhalte externer Links über­nehmen wir keine Haftung. Für den Inhalt der verlinkten Seiten sind aussch­liess­lich deren Betreiber verant­wort­lich.</p>
                    <p><strong>Externe Links</strong><br/>Die Webseite enthält sog. „externe Links“ (Verlin­kungen) zu anderen Webseiten, auf deren Inhalt der Anbieter der Webseite keinen Einfluss hat. Aus diesem Grund kann der Anbieter für diese Inhalte auch keine Gewähr über­nehmen.<br/>Für die Inhalte und Rich­tig­keit der bereit­ge­stellten Infor­ma­tionen ist aussch­liess­lich der jewei­lige Anbieter der verlinkten Webseite verant­wort­lich. Zum Zeit­punkt der Verlin­kung waren keine Rechts­ver­stösse erkennbar. Bei Bekannt­werden einer solchen Rechts­ver­let­zung wird der Link umge­hend entfernt.</p>
                    <p><strong>Urheber- und Kenn­zei­chen­recht</strong><br/>Der Betreiber dieser Webseiten ist bestrebt, in allen Publi­ka­tionen die Urhe­ber­rechte der verwen­deten Grafiken, Tondo­ku­mente, Video­se­quenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondo­ku­mente, Video­se­quenzen und Texte zu nutzen oder auf lizenz­freie Grafiken, Tondo­ku­mente, Video­se­quenzen und Texte zurück­zu­greifen. Alle inner­halb des Inter­ne­t­an­ge­botes genannten und ggf. durch Dritte geschützten Marken- und Waren­zei­chen unter­liegen unein­ge­schränkt den Bestim­mungen des jeweils gültigen Kenn­zei­chen­rechts und den Besitz­rechten der jewei­ligen einge­tra­genen Eigen­tümer. Allein aufgrund der blossen Nennung ist nicht der Schluss zu ziehen, dass Marken­zei­chen nicht durch Rechte Dritter geschützt sind!</p>
                    <p>Das Copy­right für veröf­fent­lichte, vom Betreiber selbst erstellte Objekte bleibt allein beim Betreiber der Seiten. Eine Verviel­fäl­ti­gung oder Verwen­dung solcher Grafiken, Tondo­ku­mente, Video­se­quenzen und Texte in anderen elek­tro­ni­schen oder gedruckten Publi­ka­tionen ist ohne ausdrück­liche Zustim­mung des Betrei­bers nicht gestattet.</p>
                    <p><strong>Konzept/Gestal­tung/Program­mie­rung<br/></strong><a href="https://www.stuiq.ch/" target="_blank">STUIQ AG, Zürich</a></p>
                </div>
            </Section>
        </React.Fragment>
    )
}

export default ImpressumPage