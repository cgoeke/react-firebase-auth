import { 
  SIGNED_IN,
  SIGNED_OUT,
  AUTH_ERROR
} from '../actions';

const initialState = {
  isAuthenticated: false,
  error: null,
  isLoading: false
};

const userReducer = (state=initialState, action) => {
  switch(action.type){
    case SIGNED_IN:
      return {
        ...state,
        ...action.user,
        isAuthenticated: true,
        error: null,
        isLoading: false
      }
    case SIGNED_OUT:
      return {
        ...initialState,
        isLoading: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;