import React from 'react'
import {Link} from 'gatsby'

import Section from '../../components/Section'
import TextImageBox from '../../components/TextImageBox'
import boxImage from '../../img/text-image-box-image-1.png'
import ButtonBordered from '../../components/ButtonBordered'
import SelectHeadingContent from '../../components/SelectHeadingContent'

import styles from './page-order-section.module.scss'

const PageOrderSection = ({data}) => {

  return(
    <Section>
      <TextImageBox image={data.primary.image && data.primary.image.localFile.childImageSharp.fluid} alt={data.primary.image && data.primary.image.alt}>
          <h3>
            {
              data.primary.order_number &&
              <span className={styles.bigNumber}>{data.primary.order_number}</span>
            }
            {
              data.primary.cardHeading &&
              data.primary.cardHeading
            }
          </h3>
          {
            data.primary.body1 &&
            <div dangerouslySetInnerHTML={{__html:data.primary.body1.html}}></div>
          }
          {
            data.items &&
            <SelectHeadingContent column data={data.items}/>
          }
          {
            data.primary.button_link &&
            <Link to={data.primary.button_link.url}>
              {
                data.primary.button_text &&
                <ButtonBordered>
                  {data.primary.button_text}
                </ButtonBordered>
              }
            </Link>
          }
      </TextImageBox>
    </Section>
  )
}

export default PageOrderSection
