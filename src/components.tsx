import * as React from 'react';
import * as YUP from 'yup';

import Button from '@material-ui/core/Button';
import { InjectedFormikProps, withFormik } from 'formik';
import { TextField } from '@material-ui/core';

export interface FormValues {
  url: string;
}

interface FormProps {
  data: {};
  submit: (values: FormValues) => void;
  fetchSaga: (values: FormValues) => void;
}

const delay = (ms: number) => new Promise(res => setTimeout(() => res, ms));

const UrlForm: React.FC<InjectedFormikProps<FormProps, FormValues>> = ({
  touched,
  errors,
  values,
  isSubmitting,
  handleSubmit,
  handleChange,
  setSubmitting,
  isValid,
  fetchSaga,
  data,
}) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <TextField name="url" label="url" onChange={handleChange} />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
      >
        Submit
      </Button>
      <br />
      <Button
        type="button"
        variant="contained"
        color="secondary"
        disabled={isSubmitting || !isValid}
        onClick={async () => {
          setSubmitting(true);
          await delay(1000);
          fetchSaga(values);
          setSubmitting(false);
        }}
      >
        fetch SAGA
      </Button>
      <br />
      <Button
        type="button"
        variant="contained"
        color="secondary"
        disabled={isSubmitting || !isValid}
        onClick={async () => {
          setSubmitting(true);
          await delay(1000);
          fetchSaga(values);
          setSubmitting(false);
        }}
      >
        fetch THUNK
      </Button>
    </form>
    {JSON.stringify(data)}
  </React.Fragment>
);

export default withFormik<FormProps, FormValues>({
  validationSchema: YUP.object().shape({
    url: YUP.string().required(),
  }),
  handleSubmit: async (values, { props, setSubmitting }) => {
    await delay(1000);
    props.submit(values);
    setSubmitting(false);
  },
})(UrlForm);
