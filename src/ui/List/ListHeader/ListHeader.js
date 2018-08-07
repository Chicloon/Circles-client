import React from 'react';
import PropTypes from 'prop-types';

const ListHeader = ({ text }) => (
  <li className="list-group-item h3 active text-center"> {text} </li>
);

ListHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListHeader;
