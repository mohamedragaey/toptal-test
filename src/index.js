import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from './ThemeProvider'
import Layout from './components/Layout'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import Configuration from './Services/Api/Configuration'
import {GeneralProvider} from './GeneralContext'

let {DefaultLocale, DefaultMessage} = Configuration

ReactDOM.render(
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

serviceWorker.register()
