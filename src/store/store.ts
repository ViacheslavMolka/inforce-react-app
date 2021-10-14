import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import reducer from '../reducer/reducer';
import { watchLoadData } from '../saga/loadBeer';


const saga = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
}) 

export type RootState = ReturnType<typeof store.getState>;

saga.run(watchLoadData);