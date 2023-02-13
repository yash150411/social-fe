import { combineReducers, compose, createStore } from 'redux';
import authReducer from './authReducer';
import userProfileReducer from './userProfileReducer';
import rawDataReducer from './rawDataReducer';

const reducer = combineReducers({
  auth: authReducer,
  user: userProfileReducer,
  rawData: rawDataReducer
});
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers());

export default store;
