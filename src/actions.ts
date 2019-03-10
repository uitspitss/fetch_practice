import actionCreatorFactory from 'typescript-fsa';

import { FormValues } from './components';

const actionCreator = actionCreatorFactory();

export const submitForm = actionCreator<FormValues>('SUBMIT_FORM');

export const fetchApiSaga = actionCreator.async<FormValues, { data: {} }>(
  'FETCH_API_SAGA',
);

export const fetchApiThunk = actionCreator.async<FormValues, { data: {} }>(
  'FETCH_API_THUNK',
);
