import { CHANGE_FORM } from '../constants/AppConstants';

const assign = Object.assign || require('object.assign');

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: ''
  },
  currentlySending: false,
  loggedIn: "", //TODO: have to fix: auth.loggedIn()
  isLogged: false,
  errorMessage: ''
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState
      });      
    default:
      return state;
  }
}