// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga/authSaga';

// Skapa Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Konfigurera Redux Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Deaktivera redux-thunk om du inte vill använda den
    }).concat(sagaMiddleware),
});

// Kör rootSaga med saga middleware
sagaMiddleware.run(rootSaga);

// Typer för RootState och AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
