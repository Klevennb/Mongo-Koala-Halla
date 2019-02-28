import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addKoala(action) {
  try {
    console.log(action.payload);
    
    yield axios.post('/api/koala', action.payload)
    yield put({type: 'FETCH_KOALAS'})
  } catch (error) {
    console.log('KOALA post failec', error);
  }
}


function* addKoalaSaga() {
  yield takeLatest('POST_KOALA', addKoala);
}

export default addKoalaSaga;
