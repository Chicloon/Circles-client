import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ListHeader = ({ text, active }) => {
  const listHeaderClass = cn('list-group-item h3 text-cente', { active });

  return <li className={listHeaderClass}> {text} </li>;
};

ListHeader.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ListHeader.defaultProps = {
  active: false,
};

export default ListHeader;
