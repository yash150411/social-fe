import store from '@store/index';
import { ConfigProvider } from 'antd';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './configs/routes';

// @ts-ignore
ConfigProvider.config({
  // @ts-ignore
  theme: {
    primaryColor: '#4E1C95'
  },
  prefixCls: 'ant'
});

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
      <ConfigProvider>
        <Provider store={store}>
          <RoutesComponent />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
