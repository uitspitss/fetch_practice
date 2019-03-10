import actionCreatorFactory from 'typescript-fsa';

import { FormValues } from './components';

const actionCreator = actionCreatorFactory();

export const submitForm = actionCreator<FormValues>('SUBMIT_FORM');

export const fetchApi = actionCreator.async<FormValues, { data: {} }>(
  'FETCH_API',
);
