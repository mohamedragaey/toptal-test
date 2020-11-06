import React from 'react'
import {Button} from '@material-ui/core'
import {useStyles} from './Styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {FormattedMessage} from 'react-intl'

const HeaderLinks = () => {
  const classes = useStyles()

  return (
    <section className={classes.headerLinks}>
      <a href='https://google.com' className={classes.headerLink}>
        <FormattedMessage id='HeaderLinks.link.findDevelopers'/>
      </a>
      <a href='https://google.com' className={classes.headerLink}>
        <FormattedMessage id='HeaderLinks.link.Resources'/>
      </a>
      <Button className={classes.signUpButton} variant={'outlined'}>
        <FormattedMessage id='HeaderLinks.Button.signUp'/>
      </Button>
      <Button className={classes.loginButton} color={'primary'} variant={'contained'}>
        <ExitToAppIcon/>
        <FormattedMessage id='HeaderLinks.Button.login'/>
      </Button>
    </section>
  )
}
export default HeaderLinks
