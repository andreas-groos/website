import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { SocialIcons } from './HomeComponents/SocialIcons'

const links = [
  { href: '/', text: 'About High Fives' },
  { href: '/', text: 'Donate' },
  { href: '/', text: 'Athlete Application' },
  { href: '/', text: 'News' },
  { href: '/', text: 'Events' },
  { href: '/', text: 'Programs' },
  { href: '/', text: 'Shop' },
  { href: '/', text: 'Contact' }
]

const StyledFooter = styled.footer`
  padding: 1rem;
`

const Heading = styled.h4`
  color: ${({ theme }) => theme.colors.burntSienna};
  font-family: ${({ theme }) => theme.fonts.futura};
  text-transform: uppercase;
`

const UnstyledLink = props => <Link {...props} />

const StyledLink = styled(UnstyledLink)`
  // ! Why are you being overridden?
  color: '#000000';
`

const List = styled.ul`
  align-items: ${({ align }) => align};
  display: flex;
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ justify }) => justify};
  list-style: none;
  margin: unset;
  padding: unset;
`

List.defaultProps = {
  align: 'inherit',
  dir: 'row',
  justify: 'inherit'
}

const ListItem = styled.li`
  border: ${({ border }) => border};
  font-size: 0.9rem;
  padding: ${({ pad }) => pad};
`

ListItem.defaultProps = {
  border: '1px solid black',
  pad: '0.5rem'
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`

const Input = styled.input`
  padding: 0.25rem;
  width: 70%;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.pewter};
  border: 1px solid black;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-left: 5px;
  outline: none;
  padding: 0.25rem;
  width: 30%;
`

const Text = styled.p`
  font-size: 0.85rem;
  margin: unset;
`

export const Footer = () => (
  <StyledFooter>
    <SocialIcons />
    <Heading>Join Our Mailing List</Heading>
    <Form>
      <Input />
      <Button>Submit</Button>
    </Form>
    <List dir="column">
      {links.map(link => (
        <ListItem border="unset" pad="0.6rem 0">
          <StyledLink to={link.href}>{link.text}</StyledLink>
        </ListItem>
      ))}
    </List>
    <Text>Copyright 2018 High Fives Foundation.</Text>
    <Text>All Rights Reserved.</Text>
  </StyledFooter>
)
