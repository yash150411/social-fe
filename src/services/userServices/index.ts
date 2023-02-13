import services from '../index';

export const loginService = async (email: string, password: string) => {
  try {
    const res = await services.post('/login', { email, password });
    return res;
  } catch (error) {
    throw error;
  }
};

export const authService = async () => {
  try {
    const res = (await services.get('/user')) as { data: any };
    return { user: res.data };
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const res = await services.post('/forgot-password/send', { email });
    return res;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (
  new_password: string,
  password_verify_string: string,
  confirm_password: string
) => {
  try {
    const res = await services.post('/forgot-password/update', {
      new_password,
      password_verify_string,
      confirm_password
    });
    return res;
  } catch (error) {
    throw error;
  }
};
