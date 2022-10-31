import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore as baseConfigureStore } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import apiInterceptors from './interceptor';
import middleware from './middleware';
import combineReducers from './reducer';

const persistConfig = {
  key: 'lab-app-mobile',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

// @ts-ignore
export const configureStore = createStore(persistedReducer, middleware);
apiInterceptors(configureStore);

export const persistor = persistStore(configureStore);
