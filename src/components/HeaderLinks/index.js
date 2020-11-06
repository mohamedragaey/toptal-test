import React from 'react'
import {Button} from '@material-ui/core'
import {useStyles} from './Styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const HeaderLinks = () => {
  const classes = useStyles()

  return (
    <section className={classes.headerLinks}>
      <Button className={classes.loginButton} color={'primary'} variant={'contained'}>
        <ExitToAppIcon/>
        Login
      </Button>
    </section>
  )
}
export default HeaderLinks
