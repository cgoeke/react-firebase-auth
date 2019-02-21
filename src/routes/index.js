import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/HomePage';
import LandingPage from '../components/LandingPage';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import PasswordReset from '../components/PasswordReset';

const Routes = () => (
  <Switch>
    <PublicRoute exact path="/" component={LandingPage} />
    <PublicRoute path="/signin" component={SignIn} />
    <PublicRoute path="/signup" component={SignUp} />
    <PublicRoute path="/password-reset" component={PasswordReset} />
    <PrivateRoute path="/home" component={HomePage} />
  </Switch>
)

export default Routes;