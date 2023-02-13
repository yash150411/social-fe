import { Col, Row } from 'antd';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Logo from '@assets/logo.png';
import { Button } from '@atom/Buttons';
import { Flex } from '@atom/Flex';
import { Input } from '@atom/Input';
import { H2Typography, H4Typography } from '@constant/typography/Typography';
import { loginService } from '@services/userServices';

import { loginUser } from '@utils/index';
import { loginSchema } from './helper';
import { LoginCard, LoginContainer } from './styles';
import { PasswordInput } from '@atom/InputPassword';

function LoginPage() {
  const onSignIn = async (values: any) => {
    try {
      const res = (await loginService(values.email, values.password)) as any;
      loginUser(res.data.data.access_token);
    } catch (error) {
      //@ts-ignore
      if (error?.error?.error?.email?.length) {
        //@ts-ignore
        formik.setFieldError('email', error?.error?.error?.email);
        return;
      }
      //@ts-ignore
      if (error?.error?.message) {
        //@ts-ignore
        formik.setFieldError('password', error?.error?.message);
      }
    }
  };
  const formik = useFormik({
    validationSchema: loginSchema,
    onSubmit: onSignIn,
    initialValues: {
      email: '',
      password: ''
    }
  });
  const { handleChange, handleSubmit, values, errors, touched } = formik;
  return (
    <LoginContainer>
      <Row gutter={24} className="centerd">
        <Col span={24}>
          <form
            onSubmit={handleSubmit}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          >
            <LoginCard>
              <Row gutter={12} style={{ marginTop: 10 }}>
                <Flex justifyContent={'center'} flex={1}>
                  <img src={Logo} style={{ width: 128, height: 128 }} />
                </Flex>
              </Row>
              <Row>
                <Flex justifyContent={'center'} flex={1} top={10}>
                  <H2Typography>Login</H2Typography>
                </Flex>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Flex justifyContent={'center'} flex={1}>
                  <Input
                    isLoginView={true}
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && errors.email}
                  />
                </Flex>
              </Row>
              <Row>
                <Flex justifyContent={'center'} flex={1}>
                  <PasswordInput
                    isLoginView={true}
                    type={'password'}
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    error={touched.password && errors.password}
                  />
                </Flex>
              </Row>
              <Row>
                <Link to={'/forgot-password'}>
                  <H4Typography>Forgot your password?</H4Typography>
                </Link>
              </Row>
              <Row>
                <Flex flex={1} top={24} justifyContent={'end'} className="loginBtn">
                  <Button text={'Sign In'} onClick={handleSubmit} isLoading={formik.isSubmitting} />
                </Flex>
              </Row>
            </LoginCard>
          </form>
        </Col>
      </Row>
    </LoginContainer>
  );
}

export default LoginPage;
