import React from 'react'
import styled from 'styled-components'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let section;
    let firstName = "World";

    if (isLoggedIn) {
      section = <LoggedIn onClick={this.handleLoginClick} firstName={firstName}/>;
    } else {
      section = <LoggedOut onClick={this.handleLoginClick} />
    }

    return (
      <Container>
        {section}
      </Container>
    )
  }
}

const LoggedIn = (props) => (
  <Section>
    <Text>Welcome, {props.firstName}!</Text>
    <Button onClick={props.onClick}>Account</Button>
  </Section>
)

const LoggedOut = (props) => (
  <Section>
    <Text>You are not currently logged in.</Text>
    <Button onClick={props.onClick}>Login</Button>
  </Section>
)

const Container = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;

background: ${props => props.theme.colors.limedSpruce}
padding: .5rem;
`

const Section = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`

const Text = styled.span`
color: ${props => props.theme.colors.ecruWhite};
font-family: ${props => props.theme.fonts.secondary}
font-size: 1.25rem;
font-weight: 300;
`

const Button = styled.button`
background: none;
font-family: ${props => props.theme.fonts.primary}
font-size: 1.75rem;
color: ${props => props.theme.colors.contrast};
border: none;
margin-left: 3rem;
text-transform: uppercase;
`
