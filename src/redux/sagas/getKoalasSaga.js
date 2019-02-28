import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getKoala() {
  try {
    const serverResponse = yield axios.get('/api/koala',)
    yield put({type: 'SET_KOALAS', payload: serverResponse.data})
  } catch (error) {
    console.log('KOALA GET failed', error);
  }
}


function* getKoalaSaga() {
  yield takeLatest('FETCH_KOALAS', getKoala);
}

export default getKoalaSaga;