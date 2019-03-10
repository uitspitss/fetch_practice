import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

import { fetchApi, submitForm } from './actions';
import UrlForm, { FormValues } from './components';
import { State } from './reducers';

interface StateProps {
  data: {};
}

interface DispatchProps {
  submit: (values: FormValues) => void;
  fetch: (values: FormValues) => void;
}

const mapStatusToProps = (state: State): StateProps => ({
  data: state.data,
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action<FormValues>>,
): DispatchProps =>
  bindActionCreators(
    {
      submit: values => submitForm(values),
      fetch: values => fetchApi.started(values),
    },
    dispatch,
  );

export default connect<{}, DispatchProps, any>(
  mapStatusToProps,
  mapDispatchToProps,
)(UrlForm);
