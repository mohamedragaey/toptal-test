import React from 'react'
import {Container} from '@material-ui/core'
import {useStyles} from './Styles'
import CopyRights from './CopyRights'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerWrapper}>
      <Container maxWidth="lg">
        <CopyRights/>
      </Container>
    </footer>
  )
}
export default Footer
