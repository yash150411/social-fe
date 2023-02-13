import Cookies from 'js-cookie';
import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  token: Cookies.get('token') ? Cookies.get('token') : ''
};

const { Types, Creators } = createActions({
  setAuth: ['token'],
  setSignInFailed: ['message']
});

export const onSignInSucess = (state = INITIAL_STATE, action: { token: string }) => ({
  ...state,
  token: action.token
});

export const onSignInFailed = (state = INITIAL_STATE, action: { message: string }) => ({
  ...state,
  errorMessage: action.message
});

const HANDLERS = {
  [Types.SET_AUTH]: onSignInSucess,
  [Types.SET_SIGN_IN_FAILED]: onSignInFailed
};

const authReducer = createReducer(INITIAL_STATE, HANDLERS);
export const authActions = Creators;

export default authReducer;
