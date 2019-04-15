import React, { Fragment } from "react"
import Header from './header'
import Footer from './footer'
import "../assets/css/flexboxgrid.css"
import "../assets/css/custom.css"


export default ({ children }) => (
  <Fragment>
    <div className="row">
      <Header />
    </div>
    <main>{children}</main>
    <Footer />
  </Fragment>
)
