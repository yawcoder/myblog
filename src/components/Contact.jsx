import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
const Contact = () => {
  return (
    <HelmetProvider>
      <div>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      Contact
    </div>
    </HelmetProvider>
  )
}

export default Contact