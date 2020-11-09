import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Profile from './pages/Profile'

export const NamedRoutes = {
  home: `/`,
  profile: `/talent/:id/profile`
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={NamedRoutes.home} component={Home}/>
      <Route exact path={NamedRoutes.profile} component={Profile}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
