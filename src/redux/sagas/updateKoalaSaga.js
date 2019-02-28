import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateKoala() {
  try {
    yield axios.put('/api/koala', action.payload)
    yield put({type: 'SET_KOALAS'})
  } catch (error) {
    console.log('KOALA put failed', error);
  }
}


function* updateKoalaSaga() {
  yield takeLatest('UPDATE_KOALA', updateKoala);
}

export default updateKoalaSaga;
