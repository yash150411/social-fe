import LoginPage from '@pages/LoginPage';
import { Route, Routes } from 'react-router';
import { AppContainer } from './styles';

function AuthRoutes() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/forgot-password/reset/:passwordVerifyString"
          element={<ResetPasswordPage />}
        /> */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </AppContainer>
  );
}

export default AuthRoutes;
