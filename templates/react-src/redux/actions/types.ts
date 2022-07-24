export enum ActionTypes {
  ON_APP_LOAD = 'ON_APP_LOAD',
  ON_LOGIN = 'ON_LOGIN',
  SET_APP_INITIALIZED = 'APP_INITIALIZED',
  SET_APP_LOADING = 'SET_APP_LOADING',
  SET_APP_ERROR = 'SET_APP_ERROR',
  SET_APP_INFO = 'SET_APP_INFO',
  CLOSE_SNACKBAR = 'CLOSE_SNACKBAR',
  SET_USER_DATA = 'SET_USER_DATA',
};

interface ActionReturn<T> {
  type: string;
  payload: T;
}

export type Action<T> = (payload: T) => ActionReturn<T>;
export type ActionNoPayload = () => { type: string }
