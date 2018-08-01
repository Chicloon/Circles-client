import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { SexInput } from '../../ui/SexInput';

const RegisterForm = (props) => {
  const {
    values,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const errorsValues = Object.values(errors);

  return (
    <form className="" onSubmit={handleSubmit}>
      <SexInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.sex}
        error={!!errors.sex}
        id="sex"
        name="sex"
      />
      <div className="form-group">
        <div className="row">
          <label className="col">Имя</label>
        </div>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          // error={!!errors.username}
          type="text"
          id="username"
          name="username"
          className="form-control"
          placeholder="Введите полные имя и фамилию"
        />
      </div>
      <div className="form-group">
        <label className="">Дата рождения</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.birthday}
          // error={!!errors.birthday}
          type="date"
          name="birthday"
          id="birthday"
          className="form-control"
        />
      </div>
      <button
        // disabled={!dirty || errorsValues.length !== 0}
        className="btn btn-primary btn-block btn-lg"
        type="submit"
      >
        Зарегистрироваться
      </button>
      {errorsValues.length !== 0 &&
        !dirty && (
          <ul style={{ listStyle: 'none', color: 'red' }}>
            {errorsValues.map(error => <li key={error}>{error}</li>)}
          </ul>
        )}
    </form>
  );
};

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ username: '', birthday: '', sex: '' }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Введите имя'),
    sex: Yup.string().required('Выберете пол'),
    // birthdate: Yup.string().required('Укажите дату рождения'),
  }),
  handleSubmit: async (
    values,
    { setErrors, setSubmitting, props: { login, authorize } },
  ) => {
    console.log('values are... ', values);
    setSubmitting(false);
  },
  displayName: 'RegisterForm',
});

export default formikEnhancer(RegisterForm);
// export default RegisterForm
