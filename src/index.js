import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from './ThemeProvider'
import Layout from './components/Layout'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
