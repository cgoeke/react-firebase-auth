import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    user.uid ? <Component {...props} /> : 
    <Redirect to={{ 
      pathname : '/', 
      state : {from : props.location} 
    }} />  
  } />
);

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(
  mapStateToProps
)(PrivateRoute));

