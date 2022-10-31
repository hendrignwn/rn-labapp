import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import apiInterceptors from './interceptor';
import middleware from './middleware';
import reducers from './reducer';

const persistConfig = {
  key: 'lab-app-mobile',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// @ts-ignore
export const store = configureStore(persistedReducer, middleware);
apiInterceptors(store);

export const persistor = persistStore(store);
