import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const News = ({ data }) => (
  <div className="news-list">
    <h5> Новости</h5>
    <Link to="/smth"> Линка to 404 </Link>
  </div>
);

// News.proptypes = {
//   data: PropTypes.array.isRequired,
// };

export default News;
