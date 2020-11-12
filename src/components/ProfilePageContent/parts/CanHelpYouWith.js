import React from 'react'
import {FormattedMessage} from 'react-intl'
import {useStyles} from '../Styles'

const CanHelpYouWith = ({profileObj}) => {
  const classes = useStyles()

  return (
    <section className={classes.canHelpYouWith}>
      <h3><FormattedMessage id='ProfilePageContent.canHelpYouWith.title' values={{name: profileObj.first_name}}/></h3>
      <ul>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item1'/></li>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item2'/></li>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item3'/></li>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item4'/></li>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item5'/></li>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item6'/></li>
        <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item7'/></li>
      </ul>
    </section>
  )
}

export default CanHelpYouWith
