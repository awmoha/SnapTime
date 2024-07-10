import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../Slice/authSlice';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { RootState } from '../store/store'; 

function* loginSaga() {
  try {
    const { email, password } = yield select((state: RootState) => state.auth);
    const userCredential: UserCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    yield put(loginSuccess(userCredential.user));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLoginRequest() {
  yield takeLatest(loginRequest.type, loginSaga);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
  ]);
}
