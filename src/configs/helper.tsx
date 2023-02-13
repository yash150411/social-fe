import Cookies from 'js-cookie';
import services from '@services/index';

export const fetchUserInfo = async () => {
  try {
    const res = (await services.get(`/user-Info`)) as any;
    return { data: { ...res?.data?.data, token: Cookies.get('token') }, error: null };
  } catch (error: any) {
    return { data: null, error: error?.message };
  }
};
