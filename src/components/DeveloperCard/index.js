import React from 'react'
import {Fade} from 'react-reveal'
import {Button} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {formatRoute} from 'react-router-named-routes'
import {NamedRoutes} from '../../routes'
import LazyImage from '../LazyImage'
import {useStyles} from './Styles'

const DeveloperCard = ({id, first_name, last_name, generalBio, photoUrl, skills}) => {
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
          <Button className={classes.viewProfile} variant={'outlined'} component={NavLink}
                  to={formatRoute(NamedRoutes.profile, {id: id})}>
            <FormattedMessage id='DeveloperCard.Button.viewProfile'/>
          </Button>
        </div>
      </article>
    </Fade>
  )
}

export default DeveloperCard
