import { all } from 'redux-saga/effects';
import addKoalaSaga from './addKoalaSaga';
import getKoalasSaga from './getKoalasSaga'
import updateKoalaSaga from './updateKoalaSaga'
export default function* rootSaga() {
    yield all([
      addKoalaSaga(),
      getKoalasSaga(),
      updateKoalaSaga(),
    ]);
  }