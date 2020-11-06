import React from 'react'
import {FormattedMessage} from 'react-intl'
import CssBaseline from '@material-ui/core/CssBaseline'
import CookieConsent from 'react-cookie-consent'
import ScrollToTop from '../../utils/ScrollToTop'
import ScrollTop from '../ScrollTop/ScrollTop'
import {Routes} from '../../routes'
import {useStyles} from './Styles'
import Header from '../Header'

const Layout = () => {
  const classes = useStyles()

  return (
    <div className={classes.pageWrapper}>
      <CssBaseline/>
      <ScrollToTop/>
      <Header/>
      <main className={classes.content}>
        <Routes/>
      </main>
      <ScrollTop scrollStepInPx="50" delayInMs="0"/>
      <CookieConsent
        location="bottom"
        buttonText={<FormattedMessage id='CookiesAcceptButtonText'/>}
        style={{background: '#2B373B'}}
        buttonStyle={{color: '#4e503b', fontSize: '13px'}}
        expires={150}
      > <FormattedMessage id='CookiesMessage'/> </CookieConsent>
    </div>
  )
}

export default Layout
