import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
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
      {/* //todo Adding Header */}
      <Header />
      {/* //todo: MAIN TAG */}
      <Maincomponents />
    </div>
  )
}

export default Index