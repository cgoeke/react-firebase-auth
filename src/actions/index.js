import { auth } from '../firebase';

export const SIGNED_IN = 'SIGNED_IN';
export const SIGNED_OUT = 'SIGNED_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';

const signedIn = (user) => ({
  type: SIGNED_IN,
  user
});

const signedOut = () => ({
  type: SIGNED_OUT
});

const authError = (error) => ({
  type: AUTH_ERROR,
  error: error.message
});

// The recommended way to get the current user by setting an observer on the Auth object
export const authListener = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(user => {
      if(user) dispatch(signedIn(user));
      else dispatch(signedOut());
    });
  };
};

export const signUp = (email, password) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => dispatch(authError(error)));
  };
}

export const signIn = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => dispatch(authError(error)));
  };
};

export const signOut = () => {
  return (dispatch) => {
    auth.signOut()
      .catch(error => dispatch(authError(error)));
  };
};



