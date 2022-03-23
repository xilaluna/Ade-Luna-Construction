import React from "react"

import Hero from "../components/Hero/Hero"
import Benefits from "../components/Benefits/Benefits"
import SocialProof from "../components/SocialProof/SocialProof"
import CallToAction from "../components/CallToAction/CallToAction"

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Benefits />
      <SocialProof />
      <CallToAction />
    </React.Fragment>
  )
}

export default Home
