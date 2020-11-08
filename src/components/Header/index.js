import React from 'react'
import {Container, Grid, AppBar, Toolbar} from '@material-ui/core'
import {useStyles} from './Styles'
import Logo from '../Logo'
import HeaderLinks from '../HeaderLinks'
import BottomHeader from './BottomHeader'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.header} id='header'>
      <Toolbar className={classes.headerToolbar}>
        <Container maxWidth={false}>
          <Grid container justify='space-between' alignItems='center'>
            <Logo/>
            <HeaderLinks/>
          </Grid>
        </Container>
      </Toolbar>
      <BottomHeader/>
    </AppBar>
  )
}
export default Header
