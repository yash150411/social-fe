import CenterSpiner from '@atom/CenterSpiner';
import { Flex } from '@atom/Flex';
import { authActions } from '@store/authReducer';
import { userActions } from '@store/userProfileReducer';
import { Spin } from 'antd';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import { fetchUserInfo } from './helper';

const RoutesComponent = () => {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state: any) => {
    return state.auth;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (auth?.token) {
        setLoading(true);
        const res = (await fetchUserInfo()) as any;
        if (!res.error) {
          dispatch(authActions.setAuth(res.data.token));
          dispatch(userActions.setUser(res.data));
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    })();
    setLoading(false);
  }, [auth?.token]);

  if (loading) {
    return (
      <>
        <CenterSpiner />
      </>
    );
  }

  return (
    <Suspense fallback={<Spin />}>
      {/* <Flex style={{ height: '100%' }}>{!!auth?.token ? <AppRoutes /> : <AuthRoutes />}</Flex> */}
      <Flex style={{ height: '100%' }}>{ <AppRoutes /> }</Flex>
    </Suspense>
  );
};

export default RoutesComponent;
