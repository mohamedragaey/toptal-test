import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {useStyles} from './Styles'
import {FormattedMessage} from 'react-intl'

const MainBreadcrumbs = () => {
  const classes = useStyles()
  const handleClick = (event) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          <FormattedMessage id='Breadcrumbs.Link.home'/>
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          <FormattedMessage id='Breadcrumbs.Link.whyThree'/>
        </Link>
        <Typography>
          <FormattedMessage id='Breadcrumbs.Link.findDevelopers'/>
        </Typography>
      </Breadcrumbs>
    </div>
  )
}
export default MainBreadcrumbs
