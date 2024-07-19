import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import React from 'react';

const ReduxProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
