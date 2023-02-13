import CenterSpiner from '@atom/CenterSpiner';
import UnauthorizedPage from '@pages/UnauthorizedPage/unauthorizedPage';
import React from 'react';

function AuthRoute(props: any) {
  const { isAdmin, element } = props;
  return <>{isAdmin === undefined ? <CenterSpiner /> : isAdmin ? element : <UnauthorizedPage />}</>;
}

export default AuthRoute;
