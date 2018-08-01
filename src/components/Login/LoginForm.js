import React from 'react';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import Yup from 'yup';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import Spinner from '../helpers/Spinner';

const LoginForm = (props) => {
  const {
    values, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit,
  } = props;

  const errorsValues = Object.values(errors);

  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              id="email"
              name="email"
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={!!errors.email}
            />

            <Form.Input
              fluid
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={!!errors.password}
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button
              disabled={!dirty || errorsValues.length !== 0}
              color="teal"
              fluid
              size="large"
              type="submit"
            >
              Login
            </Button>
          </Segment>
        </Form>
        {isSubmitting && <Spinner />}
        {errorsValues.length !== 0 && (
          <ul style={{ listStyle: 'none', color: 'red' }}>
            {errorsValues.map(error => <li key={error}>{error}</li>)}
          </ul>
        )}
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Неверный email!')
      .required('Email обязателен!'),
    password: Yup.string()
      // eslint-disable-next-line no-template-curly-in-string
      .min(3, 'Пароль должен содежать минимум ${min} символа')
      .required('Пароль обязателен!'),
  }),
  handleSubmit: async (values, { setErrors, setSubmitting, props: { login, authorize } }) => {
    const response = await login(values);

    if (response.userId) {
      setSubmitting(false);
      authorize(response.userId);
    } else {
      // eslint-disable-next-line no-param-reassign
      values.password = '';
      setErrors({ email: response.error });
      setSubmitting(false);
    }
  },
  displayName: 'Login',
});

export default formikEnhancer(LoginForm);
