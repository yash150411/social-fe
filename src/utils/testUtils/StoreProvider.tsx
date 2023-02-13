import store from '@store/index';
import React from 'react';
import { Provider } from 'react-redux';

function StoreProvider(props: any) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default StoreProvider;
