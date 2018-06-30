import React from 'react'
import FaFacebook from 'react-icons/lib/fa/facebook-official'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaVimeo from 'react-icons/lib/fa/vimeo-square'
import FaGithub from 'react-icons/lib/fa/github'
import styled from 'styled-components'
import { theme } from '../utils/theme'

const Title = styled.h2`
  margin-left: 1rem;
  margin-bottom: 0px;
  color: ${theme.colors.contrast};
`
const A = styled.a`
  color: black;
`

const iconStyle = {
  height: '3rem',
  width: '3rem',
  padding: '1rem',
  border: `1px solid black`,
  margin: '1rem'
}

export const SocialIcons = () => (
  <div>
    <Title>CONNECT WITH US</Title>
    <A href="https://www.facebook.com/HighFivesFoundation/">
      <FaFacebook size="3rem" style={iconStyle} />
    </A>
    <A href="https://twitter.com/Hi5sFoundation">
      <FaTwitter size="3rem" style={iconStyle} />
    </A>
    <A href="https://www.instagram.com/hi5sfoundation/">
      <FaInstagram size="3rem" style={iconStyle} />
    </A>
    <A href="https://vimeo.com/hi5sfoundation/">
      <FaVimeo size="3rem" style={iconStyle} />
    </A>
    <A href="https://github.com/HighFivesFoundation">
      <FaGithub size="3rem" style={iconStyle} />
    </A>
  </div>
)
