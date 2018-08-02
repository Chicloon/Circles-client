import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { SexInput, RadioImgInput } from '../../ui/Form';

const RegisterFormOne = (props) => {
  const {
    values,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
  } = props;

  return (
    <form className="" onSubmit={handleSubmit}>
      {/* <RadioImgInput key="oone" /> */}
      <RadioImgInput
        ids={['three', 'two']}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.testing}
        // error={!!errors.testing}
        name="testing"
      />
      {errors.testing && <div style={{ color: 'red' }}> {errors.testing}</div>}

      <SexInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.sex}
        // error={!!errors.sex}
        id="sex"
        name="sex"
      />
      {errors.sex && <div style={{ color: 'red' }}> {errors.sex}</div>}
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
          name="username"
          className="form-control"
          placeholder="Введите полные имя и фамилию"
        />
        {errors.username &&
          touched.username && (
            <div style={{ color: 'red' }}> {errors.username}</div>
          )}
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
          className="form-control"
        />
        {errors.birthday &&
          touched.birthday && (
            <div style={{ color: 'red' }}> {errors.birthday}</div>
          )}
      </div>
      <button
        disabled={!dirty || isSubmitting}
        className="btn btn-primary btn-block btn-lg"
        type="submit"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({
    username: '',
    birthday: '',
    sex: '',
    testing: '',
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Введите имя'),
    sex: Yup.string().required('Выберете пол'),
    birthday: Yup.date().required('Укажите дату рождения'),
  }),
  handleSubmit: async (values, { setSubmitting, props: { nextStep } }) => {
    setSubmitting(false);
    nextStep(values);
    // console.log('values are... ', values);
  },
  displayName: 'RegisterForm',
});

export default formikEnhancer(RegisterFormOne);
// export default RegisterForm
