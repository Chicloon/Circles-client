import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Button = ({ children, primary }) => {
  const buttonClass = cn('btn btn-block', { 'btn-primary btn-lg': primary });
  return <button className={buttonClass}> {children} </button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};

export default Button;
