import React from 'react'
import web from '../Img/hero.png'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {

  return (<>
    <HeroSection
    name="Apna Store"
    img={web}
      btn="Shop Now"
    link="/product"/>
    <Services />
    <Trusted />
  </>
  )
}

export default Home
