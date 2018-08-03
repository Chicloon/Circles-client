import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { RadioImgInput, BasicInput } from '../../ui/Form';

const RegisterFormTwo = (props) => {
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
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <RadioImgInput
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
              title="Статус"
              name="status"
              items={[
                { value: 'search', text: 'В поиске' },
                { value: 'married', text: 'В браке' },
                { value: 'complicated', text: 'Все сложно' },
              ]}
            />
            {errors.status &&
              touched.status && (
                <div style={{ color: 'red' }}>
                  {console.log(touched, dirty)} {errors.status}
                </div>
              )}
          </div>
          <div className="form-group">
            <RadioImgInput
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.aim}
              title="Цель"
              name="aim"
              items={[
                { value: 'couple', text: 'Найти пару' },
                { value: 'chat', text: 'Поболтать' },
              ]}
            />
            {errors.aim &&
              touched.aim && <div style={{ color: 'red' }}> {errors.aim}</div>}
          </div>
          <div className="form-group">
            <RadioImgInput
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.education}
              title="Образование"
              name="education "
              items={[
                { value: 'base', text: 'Начальное' },
                { value: 'middle', text: 'Среднее' },
                { value: 'high', text: 'Высщее' },
              ]}
            />
            {errors.education &&
              touched.education && (
                <div style={{ color: 'red' }}> {errors.education}</div>
              )}
          </div>
          <div className="form-group">
            <BasicInput
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              type="text"
              name="phone"
              title="Телефон для связи"
            />
            {errors.phone &&
              touched.phone && (
                <div style={{ color: 'red' }}> {errors.phone}</div>
              )}
          </div>
        </div>
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
    status: '',
    aim: '',
    username: '',
    education: '',
    phone: '',
  }),
  validationSchema: Yup.object().shape({
    status: Yup.string().required('Укажите статус'),
    aim: Yup.string().required('Укажите цель'),
  }),
  handleSubmit: async (
    values,
    { setTouched, setSubmitting, props: { nextStep } },
  ) => {
    setSubmitting(false);
    setTouched(true);
    nextStep(values);
  },
  displayName: 'RegisterForm',
});

export default formikEnhancer(RegisterFormTwo);
