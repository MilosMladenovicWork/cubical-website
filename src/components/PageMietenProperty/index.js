import React from 'react'
import FilterPropertySection from '../FilterPropertySection'

const PageMietenProperty = ({data}) => {
  return(
    <FilterPropertySection id={(data && data.primary && data.primary.section_id) ? data.primary.section_id : ''} mietenProperties/>
  )
}

export default PageMietenProperty