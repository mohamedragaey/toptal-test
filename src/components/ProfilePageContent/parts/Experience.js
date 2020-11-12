import React from 'react'
import {FormattedMessage} from 'react-intl'
import {useStyles} from '../Styles'

const Experience = () => {
  const classes = useStyles()

  return (
    <section>
      <h2 className={classes.experienceTitle}><FormattedMessage id='ProfilePageContent.experience'/></h2>
      <div className={classes.experienceItem}>
        <h2 className={classes.experienceTitle}><FormattedMessage id='ProfilePageContent.experienceItem1.title'/></h2>
        <ul>
          <li><FormattedMessage id='ProfilePageContent.experienceItem1.item1'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem1.item2'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem1.item3'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem1.item4'/></li>
          <span><FormattedMessage id='ProfilePageContent.experienceItem1.item5'/></span>
        </ul>
      </div>
      <div className={classes.experienceItem}>
        <h2 className={classes.experienceTitle}><FormattedMessage id='ProfilePageContent.experienceItem2.title'/></h2>
        <ul>
          <li><FormattedMessage id='ProfilePageContent.experienceItem2.item1'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem2.item2'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem2.item3'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem2.item4'/></li>
          <li><FormattedMessage id='ProfilePageContent.experienceItem2.item5'/></li>
          <span><FormattedMessage id='ProfilePageContent.experienceItem2.item6'/></span>
        </ul>
      </div>
    </section>
  )
}

export default Experience
