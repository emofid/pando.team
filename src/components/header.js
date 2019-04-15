import React from "react"
import { Link } from "gatsby"

import PandoLogo from "../images/pando.png"
import Navigation from "./navigation"

const Header = () => (
  <header className="col-xs-12">
    <div className="center-xs center-sm center-md center-lg">
      <Link to="/">
        <img src={PandoLogo} alt="Pando Team" id="pando-logo" />
      </Link>
      <Navigation />
    </div>
  </header>
)

export default Header
