/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import FooterColumn from './FooterColumn'
import CopyRights from './CopyRights'
import {useStyles} from './Styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerWrapper}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justify={'space-between'} className={classes.footerContent}>
          <Grid item xs={12} sm={12} md={3}>
            <FooterColumn
              title={<FormattedMessage id='Footer.FooterColumn.title.highestDemandTalents'/>}
              content={<>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.iosDeveloper'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.frontEndDeveloper'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.UXDesigner'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.UIDesigner'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.financialModelingConsultants'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.interimCFOs'/>
                </a>
              </>}
              signUpButton={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <FooterColumn
              title={<FormattedMessage id='Footer.FooterColumn.title.about'/>}
              content={<>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.contactUs'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.pressCenter'/>
                </a>
                <a href='#' className={classes.footerLink}>
                  <FormattedMessage id='footerLinks.link.careers'/>
                </a>
              </>}
              signUpButton={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <FooterColumn
              title={<FormattedMessage id='Footer.FooterColumn.title.hire'/>}
              signUpButton={true}
            />
          </Grid>
        </Grid>
        <CopyRights/>
      </Container>
    </footer>
  )
}
export default Footer
