import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../components/main/childCount'
import animalReducer from '../components/animal/animalType'

import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  counter: counterReducer,
  animal: animalReducer,
})

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});