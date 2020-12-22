import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import {render} from 'react-snapshot'
import ThemeProvider from './ThemeProvider'
import Layout from './components/Layout'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import {BrowserRouter as Router} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import Configuration from './Services/Api/Configuration'
import {GeneralProvider} from './GeneralContext'
import reportWebVitals from './reportWebVitals'

let {DefaultLocale, DefaultMessage} = Configuration

render(
  <Router>
    <IntlProvider
      key={DefaultLocale}
      locale={DefaultLocale}
      messages={DefaultMessage}
      defaultLocale={DefaultLocale}
    >
      <ThemeProvider>
        <GeneralProvider>
          <Layout/>
        </GeneralProvider>
      </ThemeProvider>
    </IntlProvider>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
