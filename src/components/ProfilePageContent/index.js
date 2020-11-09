import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'
import {SearchLoader} from '../Loader/SearchLoader'
import RoomIcon from '@material-ui/icons/Room'
import LazyImage from '../LazyImage'

const ProfilePageContent = ({profileObj, loading}) => {
  const classes = useStyles()

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={2} justify={'space-between'}>
        {!!loading && <SearchLoader/>}
        {!!Object.keys(profileObj).length &&
        <Grid item xs={12}>
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
          </div>
        </Grid>
        }
      </Grid>
    </Container>
  )
}

export default ProfilePageContent
