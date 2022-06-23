import {Route, Redirect} from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({children, ...rest}) => {
  
  const authenticated = false

  return (
    <Route{...rest}>{!authenticated ? <Redirect to="/login"></Redirect> : children}</Route>
  )
}

export default PrivateRoute