import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('The email field is required.'),
  password: Yup.string().required('The password field is required.')
});
