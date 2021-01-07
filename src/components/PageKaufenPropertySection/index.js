import React from 'react'
import FilterPropertySection from '../FilterPropertySection'

const PageKaufenPropertySection = ({data}) => {
  return(
    <FilterPropertySection id={(data && data.primary && data.primary.section_id) ? data.primary.section_id : ''} kaufenProperties/>
  )
}

export default PageKaufenPropertySection