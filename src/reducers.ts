import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

export interface State {
  data: {};
}

export const initialState: {} = {};

const rootReducer = reducerWithInitialState(initialState)
  .case(actions.submitForm, (state, payload) => ({
    ...state,
    data: payload,
  }))
  .case(actions.fetchApiSaga.done, (state, payload) => ({
    ...state,
    data: payload,
  }))
  .case(actions.fetchApiThunk.done, (state, payload) => ({
    ...state,
    data: payload,
  }));

export default rootReducer;
