import React from 'react'
import {useStyles} from '../Styles'
import RoomIcon from '@material-ui/icons/Room'
import LazyImage from '../../LazyImage'

const PersonalInfo = ({profileObj}) => {
  const classes = useStyles()

  return (
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
  )
}

export default PersonalInfo
