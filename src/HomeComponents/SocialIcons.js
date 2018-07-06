import React from 'react'
import FaFacebook from 'react-icons/lib/fa/facebook-official'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaVimeo from 'react-icons/lib/fa/vimeo-square'
import FaGithub from 'react-icons/lib/fa/github'
import styled from 'styled-components'
import { theme } from '../utils/theme'

const Title = styled.h2`
  color: ${theme.colors.contrast};
`
const Wrapper = styled.div`
> a:first-child {
  margin-left: 0;
  padding-left: 0;
}
`
const A = styled.a`
  color: black;
  padding: 0.5rem;
  margin: 0.5rem;
`

export const SocialIcons = () => (
  <div>
    <Title>CONNECT WITH US</Title>
    <Wrapper>
      <A href='https://www.facebook.com/HighFivesFoundation/'>
        <FaFacebook size='3rem' />
      </A>
      <A href='https://twitter.com/Hi5sFoundation'>
        <FaTwitter size='3rem' />
      </A>
      <A href='https://www.instagram.com/hi5sfoundation/'>
        <FaInstagram size='3rem' />
      </A>
      <A href='https://vimeo.com/hi5sfoundation/'>
        <FaVimeo size='3rem' />
      </A>
      <A href='https://github.com/HighFivesFoundation'>
        <FaGithub size='3rem' />
      </A>
    </Wrapper>
  </div>
)
