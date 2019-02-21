import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PublicRoute = ({ user, component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    !user.uid ? <Component {...props} /> : 
    <Redirect to={{ 
      pathname : '/home', 
      state : {from : props.location} 
    }} />  
  } />
);

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(
  mapStateToProps
)(PublicRoute));