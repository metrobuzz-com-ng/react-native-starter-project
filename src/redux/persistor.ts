import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import rootReducer from './root';

const getPersisterReducer = () => {
  const rootConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  return persistReducer(rootConfig, rootReducer);
};

export default getPersisterReducer;
