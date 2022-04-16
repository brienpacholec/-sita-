import React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "@mui/system"
import theme from "../themes/theme"
import Nav from "./nav"
import SitaAlert from "./alert"

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.src}</title>
          <html lang="en" />
          <meta name="Healht & Wealth" />
          <meta charSet="utf-8" />
          <meta property="og:title" content="SITA" />
          <meta property="og:url" content="https://www.sitasite.com/" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <Nav />
          <SitaAlert severe={false} message="Test lol" />
          <main>{this.props.children}</main>
        </ThemeProvider>
      </>
    )
  }
}
