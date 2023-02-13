import { USER_TYPE_ENUM } from '@constants/userConstants';
import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {};

export interface ActionType {
  type: string;
  payload: object;
}

const { Types, Creators } = createActions({
  setUser: ['userResponse']
});

export const onUserResponseSucess = (state = INITIAL_STATE, action: { userResponse: {} }) => {
  const userInfo: any = { ...action.userResponse };
  return {
    ...userInfo,
    isAdmin: userInfo.user_type === USER_TYPE_ENUM.ADMIN,
    isManager: userInfo.user_type === USER_TYPE_ENUM.MANAGER,
    isEmployee: userInfo.user_type === USER_TYPE_ENUM.EMPLOYEE
  };
};

const HANDLERS = {
  [Types.SET_USER]: onUserResponseSucess
};

const userProfileReducer = createReducer(INITIAL_STATE, HANDLERS);
export const userActions = Creators;

export default userProfileReducer;
