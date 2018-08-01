import React from 'react';
import loader from './loader/circles.svg';
import './spinner.css';
import Image1 from '-!svg-react-loader!./loader/three-dots.svg';

const Spinner = () => (
  <div>
    <p> Spinner </p>
    <Image1 />
    <img src={loader} alt="" className="spinner" />
  </div>
);

export default Spinner;
