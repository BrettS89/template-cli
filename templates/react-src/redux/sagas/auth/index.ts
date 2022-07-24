import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { ActionTypes } from '../../actions';
import { StoreState } from '../../index';

export default [
  loginWatcher,
];

function * loginWatcher() {
  yield takeLatest(ActionTypes.ON_LOGIN, loginHandler);
}

function * loginHandler() {
}
