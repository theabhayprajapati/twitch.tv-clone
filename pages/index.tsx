import Head from 'next/head'
import React from 'react'
import HeaderComponent from '../components/Header'
import Maincomponents from '../components/Maincomponents'

const Index = () => {
  return (
    <div className='font-Montserrat'>
      <Head>
        <title>
          Twitch TV
        </title>
        <link rel="shortcut icon" href="/TwitchGlitchPurple.png" />
      </Head>
      {/* //todo Adding HeaderComponent */}
      <HeaderComponent />
      {/* //todo: MAIN TAG */}
      <Maincomponents />
    </div>
  )
}

export default Index