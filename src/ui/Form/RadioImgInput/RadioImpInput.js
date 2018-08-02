import React from 'react';
import styled from 'styled-components';
// import womanPic from './woman-with-dress.svg';
import manPic from './man.svg';

const Wrapper = styled.div`
  color: red;
`;

const Img = styled.img`
  width: 128px;
  height: 128px;
`;

const Label = styled.label`
  & > img {
    border: 1px solid blue;
  }
`;

const Input = styled.input`
  display: none;
  border: 1px solid blue;
  &:checked + ${Label} > ${Img} {
    border: 1px solid red;
    background: blue;
  }
`;

class RadioImgInput extends React.Component {
  render() {
    const { ids } = this.props;

    return (
      <div>
        <Wrapper> ... div </Wrapper>

        <Input type="radio" name="emotion" id={ids || 'sad'} />
        <Label
          htmlFor={ids || 'sad'}
          onFocus={() => {
            console.log('focused');
          }}
        >
          <Img src={manPic} alt="I'm sad" />
        </Label>

        <Input type="radio" name="emotion" id="happy" />
        <Label htmlFor="happy">
          <Img src="//placekitten.com/151/151" alt="I'm sad" />
        </Label>

        {/* <input
          type="radio"
          name="emotion"
          id="happy"
          className="input-hidden"
        />
        <label htmlFor="happy">
          <img
            style={{
              width: '128px',
              height: '128px',
              // border: '1px solid red',
            }}
            src={manPic}
            alt="I'm man"
          />
        </label> */}
      </div>
    );
  }
}

export default RadioImgInput;
