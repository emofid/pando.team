import React, { Fragment } from "react"
import Header from './header'
import "./layout.css"


export default ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </Fragment>
)
