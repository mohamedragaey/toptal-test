import React from 'react'
import {useStyles} from './Styles'
import {FormattedMessage} from 'react-intl'
import {CopyrightRounded} from '@material-ui/icons'

const CopyRights = () => {
  const classes = useStyles()

  return (
    <section className={classes.copyRightsWrapper}>
      <div className={classes.copyRightsText}>
        <CopyrightRounded/>
        <FormattedMessage id='Footer.copyRights.text'/>
      </div>
      <div className={classes.socialIcons}>
        <a href='https://twitter.com'><i className='icon-twitter'/></a>
        <a href='https://facebook.com'><i className='icon-facebook'/></a>
        <a href='https://facebook.com'><i className='icon-gplus'/></a>
        <a href='https://facebook.com'><i className='icon-linkedin'/></a>
      </div>
    </section>
  )
}
export default CopyRights
