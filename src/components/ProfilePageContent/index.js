import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'
import {SearchLoader} from '../Loader/SearchLoader'
import RoomIcon from '@material-ui/icons/Room'
import LazyImage from '../LazyImage'
import {FormattedMessage} from 'react-intl'
import FormDialog from './FormDialog'

const ProfilePageContent = ({profileObj, loading}) => {
  const classes = useStyles()

  return (
    <section className={classes.paper}>
      <Container maxWidth={'lg'}>
        {!!loading && <SearchLoader/>}
        {!!Object.keys(profileObj).length &&
        <Grid container spacing={6} justify={'space-between'}>
          <Grid item xs={12} md={10}>
            <div className={classes.profilePageContentWrapper}>
              <h1 className={classes.profilePageContentTitle}>{`${profileObj.first_name} ${profileObj.last_name}`}</h1>
              <div className={classes.profilePageContentSubTitle}>
                {`${profileObj.skills[0].title}, ${profileObj.category}`}
                <RoomIcon/>{`${profileObj.city}, ${profileObj.country}`}
              </div>
              <div className={classes.profilePageContentDescription}>
                <LazyImage src={profileObj.photoUrl} alt={profileObj.first_name} width={100} height={100}/>
                <div className={classes.profilePageContentBio}>
                  <p>{profileObj.bio.replace(/^\s+|\s+$/gm, '')}</p>
                </div>
              </div>
              <Grid container spacing={4} justify={'space-between'}>
                <Grid item xs={12} md={9}>
                  <h2 className={classes.experienceTitle}><FormattedMessage id='ProfilePageContent.experience'/></h2>
                  <div className={classes.experienceItem}>
                    <h2 className={classes.experienceTitle}>
                      <FormattedMessage id='ProfilePageContent.experienceItem1.title'/>
                    </h2>
                    <ul>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem1.item1'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem1.item2'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem1.item3'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem1.item4'/></li>
                      <span><FormattedMessage id='ProfilePageContent.experienceItem1.item5'/></span>
                    </ul>
                  </div>
                  <div className={classes.experienceItem}>
                    <h2 className={classes.experienceTitle}>
                      <FormattedMessage id='ProfilePageContent.experienceItem2.title'/>
                    </h2>
                    <ul>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem2.item1'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem2.item2'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem2.item3'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem2.item4'/></li>
                      <li><FormattedMessage id='ProfilePageContent.experienceItem2.item5'/></li>
                      <span><FormattedMessage id='ProfilePageContent.experienceItem2.item6'/></span>
                    </ul>
                  </div>
                </Grid>
                <Grid item xs={12} md={3} className={classes.canHelpYouWith}>
                  <h3><FormattedMessage id='ProfilePageContent.canHelpYouWith.title'
                                        values={{name: profileObj.first_name}}/></h3>
                  <ul>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item1'/></li>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item2'/></li>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item3'/></li>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item4'/></li>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item5'/></li>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item6'/></li>
                    <li><FormattedMessage id='ProfilePageContent.canHelpYouWith.item7'/></li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={2} className={classes.contactOptionsWrapper}>
            <h2 className={classes.contactOptionsTitle}><FormattedMessage id='ContactOptions.title'/></h2>
            <FormDialog/>
          </Grid>
        </Grid>
        }
      </Container>
    </section>
  )
}

export default ProfilePageContent
