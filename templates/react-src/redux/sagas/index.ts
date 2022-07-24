import { all, fork } from 'redux-saga/effects';
import appSagas from './app';
import authSagas from './auth';

const forkList = (sagasList: any) => sagasList.map((saga: any) => fork(saga));

export function * sagas() {
  yield all([
    ...forkList(appSagas),
    ...forkList(authSagas),
  ]);
}
