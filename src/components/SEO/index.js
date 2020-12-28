import React from 'react'
import {Helmet} from 'react-helmet'

const SEO = ({children}) => {
  return(
    <Helmet>
      {children}
    </Helmet>
  )
}

export default SEO