import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

export interface State {
  data: {};
}

export const initialState: {} = {
  data: {},
};

const rootReducer = reducerWithInitialState(initialState)
  .case(actions.submitForm, (state, payload) => ({
    ...state,
    data: { ...payload },
  }))
  .case(actions.fetchApi.done, (state, payload) => ({
    ...state,
    data: { ...payload },
  }));

export default rootReducer;
