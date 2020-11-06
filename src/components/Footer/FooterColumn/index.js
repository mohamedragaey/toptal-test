import React from 'react'
import {useStyles} from './Styles'
import {FormattedMessage} from 'react-intl'
import {CopyrightRounded, Facebook, Twitter, LinkedIn} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const FooterColumn = ({title, content, signUpButton}) => {
  const classes = useStyles()

  return (
    <section className={classes.footerColumnWrapper}>
      {!!title && <h2 className={classes.footerColumnTitle}>{title}</h2>}
      {!!content && <div className={classes.footerColumnContent}>
        {content}
      </div>}
      {!!signUpButton && <Button className={classes.signUpButton} color={'primary'} variant={'contained'}>
        <FormattedMessage id='HeaderLinks.Button.signUp'/>
      </Button>}
    </section>
  )
}
export default FooterColumn
