import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

export const NamedRoutes = {
  home: `/`,
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={NamedRoutes.home} component={Home}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
