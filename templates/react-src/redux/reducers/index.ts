import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';
import { userReducer, UserState } from './user';

export interface StoreState {
  app: AppState;
  user: UserState;
}

export const reducers = combineReducers({
  app: appReducer,
  user: userReducer,
});
