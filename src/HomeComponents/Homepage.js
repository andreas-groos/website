import React from 'react'
import { HomeSplash } from './HomeSplash'
import { HomeDonations } from './HomeDonations'
import { WhatIs } from './WhatIs'
import { HomeAthletes } from './HomeAthletes'
import { HomeNews } from './HomeNews'
import { HomeEvents } from './HomeEvents'
import { SocialIcons } from './SocialIcons'
import { MailingList } from './MailingList'
import Spinner from './Spinner'


const height = {
  height: '200px'
}

export const Homepage = () => (
  <main>
    <h1 style={{ color: '#568f56' }}>Home Components</h1>
    <div style={height}>
      <Spinner loading={true} />
    </div>
    <HomeSplash />
    <HomeDonations />
    <WhatIs />
    <HomeAthletes />
    <HomeNews />
    <HomeEvents />
    <SocialIcons />
    <MailingList />
  </main >
)
