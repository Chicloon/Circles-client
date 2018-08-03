import React from 'react';
import PropTypes from 'prop-types';

const RadioImgInput = (props) => {
  const {
    type, title, name, placeholder, onChange, onBlur, value,
  } = props;

  return (
    <React.Fragment>
      <div className="row">
        <label className="col">{title}</label>
      </div>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </React.Fragment>
  );
};

RadioImgInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

RadioImgInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default RadioImgInput;
