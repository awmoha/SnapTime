// src/app/reducers.ts

import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../redux/authSlice';

export interface RootState {
  auth: AuthState;
  // Du kan lägga till fler states här
}

const rootReducer = combineReducers({
  auth: authReducer,
  // Lägg till fler reducers här om nödvändigt
});

export default rootReducer;
