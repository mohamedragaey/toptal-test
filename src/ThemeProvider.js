import React from 'react'
import {create} from 'jss'
import rtl from 'jss-rtl'
import {BrowserRouter as Router} from 'react-router-dom'
import {createGenerateClassName, createMuiTheme} from '@material-ui/core/styles'
import {StylesProvider, ThemeProvider as MuiThemeProvider, jssPreset} from '@material-ui/styles'
import Configuration from './Services/Api/Configuration'

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]})
const generateClassName = createGenerateClassName()
let {DefaultFont, DefaultDirection} = Configuration

const ThemeProvider = ({children}) => {
  let theme = createMuiTheme({
    direction: DefaultDirection,
    palette: {
      primary: {
        light: '#438fce',
        main: '#3a649e',
        dark: '#00258c',
        contrastText: '#000'
      },
      action: {
        active: '#496ea6',
        hover:'#00258c'
      },
      secondary: {
        light: '#edf6fe',
        main: '#cfe6fc',
        dark: '#adcbe3',
        contrastText: '#000'
      },
      error: {
        light: '#fff2f4',
        main: '#dc3545',
        dark: '#c32130',
        contrastText: '#000'
      },
      success: {
        main: '#28a745',
        light: '#20c997'
      },
      info: {
        main: '#17a2b8',
        light: '#edf7ff'
      },
      warning: {
        light: '#fff9ec',
        main: '#ffc107',
        dark: '#FF8412'
      },
      text: {
        primary: '#4e4e4e',
        secondary: '#92929d',
        hint: '#98a9bc'
      }
    },
    typography: {
      'fontFamily': DefaultFont,
      'htmlFontSize': 16,
      'fontSize': 14,
      'fontWeightLight': 300,
      'fontWeightRegular': 400,
      'fontWeightBold': 700
    }
  })

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <Router>
          {children}
        </Router>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default ThemeProvider
