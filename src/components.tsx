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
  fetch: (values: FormValues) => void;
}

const UrlForm: React.FC<InjectedFormikProps<FormProps, FormValues>> = ({
  touched,
  errors,
  values,
  isSubmitting,
  handleSubmit,
  handleChange,
  isValid,
  fetch,
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
        onClick={() => fetch(values)}
      >
        fetch api
      </Button>
    </form>
    {JSON.stringify(data)}
  </React.Fragment>
);

export default withFormik<FormProps, FormValues>({
  mapValuesToPayload: ({ ...props }) => ({
    url: props.url,
  }),
  validationSchema: YUP.object().shape({
    url: YUP.string().required(),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      props.submit(values);
      setSubmitting(false);
    }, 1000);
  },
})(UrlForm);
