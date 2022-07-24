import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { ActionTypes, setAppInitialized, setUserData } from '../../actions';
import { StoreState } from '../../index';
import { User } from '../../../types';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(ActionTypes.ON_APP_LOAD, appLoadHandler);
}

interface AppLoad {
  type: ActionTypes.ON_APP_LOAD;
  payload: {
    navigate(str: string): void;
    path?: string;
  }
}

function * appLoadHandler({ payload }: AppLoad) {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) throw new Error('no token');

    const fn = () => api.service('security/session').find();
    
    const userData: User = yield call(fn);

    yield put(setUserData(userData));

    payload.navigate('/');

  } catch(e) {
    payload.navigate('/')
  }

  yield put(setAppInitialized(true));
}
