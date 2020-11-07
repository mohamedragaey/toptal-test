import React from 'react'
import {useStyles} from './Styles'
import LazyImage from '../LazyImage'
import {Fade} from 'react-reveal'
import {FormattedMessage} from 'react-intl'
import {Button} from '@material-ui/core'

const DeveloperCard = ({id, category, bio, city, country, first_name, last_name, generalBio, photoUrl, skills}) => {
  const classes = useStyles()
  return (
    <Fade bottom>
      <article className={classes.developerCardWrapper}>
        <LazyImage src={photoUrl} alt={first_name} width={100} height={100}/>
        <div className={classes.developerCardContentWrapper}>
          <div className={classes.developerCardContent}>
            <h2 className={classes.developerName}>{`${first_name} ${last_name}`}</h2>
            <div className={classes.developerSkills}>
              {skills.map((skill) => (
                <span key={skill.title} className={classes.developerSkill}>{skill.title}</span>
              ))}
            </div>
            <div className={classes.developerBio}>
              <p>{generalBio}</p>
            </div>
          </div>
          <Button className={classes.viewProfile} variant={'outlined'}>
            <FormattedMessage id='DeveloperCard.Button.viewProfile'/>
          </Button>
        </div>
      </article>
    </Fade>
  )
}

export default DeveloperCard
