import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import womanPic from './woman-with-dress.svg';
import manPic from './man.svg';

const Wrapper = props => (
  <div className="btn-group btn-group-toggle btn-group-lg pb-2 align-items-center justify-content-center">
    {props.children}
  </div>
);

const InputsWrapper = styled.div.attrs({
  className: props =>
    (props.image
      ? 'btn-group btn-group-toggle btn-group-lg pb-2 align-items-center justify-content-center'
      : 'btn-group btn-group-toggle full-width'),
})`
  width: 100%;
`;

const Img = styled.img`
  margin: 0;
`;

const Label = styled.label.attrs({
  className: 'btn btn-lg btn-outline-primary',
})`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 96px;
  width: 128px;
  height: 128px;
`;

const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  display: none;
  &:checked + ${Label} {
    color: #fff;
    background-color: #12bbad;
    border-color: #12bbad;
  }
`;

class RadioImgInput extends React.Component {
  render() {
    console.log('props', this.props);
    const { items, ids, title } = this.props;

    console.log(items, ids);

    return (
      <InputsWrapper image>
        {/* <div> {title} </div> */}
        <RadioInput name="emotion" id="happy" />
        <Label htmlFor="happy">
          <Img src={manPic} alt="I'm sad" />
        </Label>
        <RadioInput name="emotion" id="happy" />
        <Label htmlFor="happy">
          <Img src="//placekitten.com/151/151" alt="I'm sad" />
        </Label>
      </InputsWrapper>
    );
  }
}

RadioImgInput.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

RadioImgInput.defaultProps = {
  items: [{ imgage: 'man', value: 'male' }, { value: 'bob' }],
  title: 'title',
};

export default RadioImgInput;
