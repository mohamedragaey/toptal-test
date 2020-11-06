import React from 'react'
import {useStyles} from '../Styles'
import {FormattedMessage} from 'react-intl'
import {CopyrightRounded, Facebook, Twitter, LinkedIn} from '@material-ui/icons'

const CopyRights = () => {
  const classes = useStyles()

  return (
    <section className={classes.copyRightsWrapper}>
      <div className={classes.copyRightsText}>
        <CopyrightRounded/>
        <FormattedMessage id='Footer.copyRights.text'/>
      </div>
      <div className={classes.socialIcons}>
        <a href='https://twitter.com'><Twitter/></a>
        <a href='https://facebook.com'><Facebook/></a>
        <a href='https://facebook.com'><Facebook/></a>
        <a href='https://facebook.com'><LinkedIn/></a>
      </div>
    </section>
  )
}
export default CopyRights
