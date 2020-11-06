import React from 'react'
import {Link} from 'react-router-dom'
import logoImage from './../../images/logo.svg'
import {NamedRoutes} from '../../routes'
import {useStyles} from './Styles'

const Logo = () => {
  const classes = useStyles()
  return (<div className={classes.logo}><Link to={NamedRoutes.home}> <img alt='logo' src={logoImage}/> </Link></div>)
}

export default Logo
