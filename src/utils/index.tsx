import { notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import Cookies from 'js-cookie';

import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { authActions } from '@store/authReducer';
import store from '@store/index';
import { rawDataActions } from '@store/rawDataReducer';

export interface ObjectStr {
  [key: string]: any;
}

export const updateRawData = (data: any) => {
  store.dispatch(rawDataActions.updateRawData(data));
};

export const setTokenInCookes = (token: any) => {
  Cookies.set('token', token);
};

export const logoutUser = (navigate: any) => {
  //  @ts-ignore
  store.dispatch(authActions.setAuth(null));
  Cookies.remove('token');
  navigate('/');
};

export const loginUser = (token: any) => {
  store.dispatch(authActions.setAuth(token));
  Cookies.set('token', token);
};

export const showErrorToast = (params: {
  message: string;
  description: string;
  placement?: NotificationPlacement;
}) => {
  const { message, description } = params;
  notification.error({
    message: (
      <p
        style={{
          color: 'black',
          margin: '0px'
        }}
      >
        {message}
      </p>
    ),

    description: description,
    icon: (
      <ExclamationCircleOutlined
        style={{ color: 'red', background: 'white', borderRadius: '50%' }}
      />
    ),
    duration: 3,
    style: {
      borderColor: 'red',
      color: 'black'
    }
  });
};

export const showToast = (params: {
  message: string;
  description: string;
  placement?: NotificationPlacement;
}) => {
  const { message, description } = params;
  notification.open({
    message: message,
    description: description,
    icon: <CheckCircleFilled style={{ color: '#5FCFA9' }} />,
    duration: 5
  });
};

let timeId: any = 0;
export const debounceCall = (debounceFun: any, value: string, time?: number) => {
  return new Promise(async (res, rej) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(async () => {
      const response = await debounceFun(value);
      res(response);
    }, time || 1000);
  });
};
