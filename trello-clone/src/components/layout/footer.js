import React from 'react'
import styled from 'styled-components'

const FooterContent = styled.footer`
  background-color: rgba(52, 152, 219,1.0);  
  grid-area: footer;
` 

const Footer = (props) => {
    return(
        <FooterContent />
    )
}

export default Footer