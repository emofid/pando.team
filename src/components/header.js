import React from "react"

import PandoLogo from '../images/pando.png'
import Navigation from './navigation'

const Header = () => (
  <header>
    <img src={PandoLogo} alt="Pando Team"/>
    <Navigation />
  </header>
)

export default Header
