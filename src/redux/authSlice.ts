import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  email: string;
  password: string;
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: '',
  password: '',
  user: JSON.parse(sessionStorage.getItem('user') || 'null'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.loading = false;
      state.email = '';
      state.password = '';
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.email = '';
      state.password = '';
      state.loading = false;
      state.error = null;
      sessionStorage.removeItem('user');
    },
  },
});

export const { updateEmail, updatePassword, loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
