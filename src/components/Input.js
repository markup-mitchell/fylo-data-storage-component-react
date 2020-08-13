import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .left {
    color: #0c122c;
    font-weight: bold;
    white-space: nowrap;
    margin-left: -85px;
    opacity: 0.5;
  }
`;

const StyledInput = styled.input`
  width: 150px;
  height: 72px;
  border-radius: 10px;
  padding: 1.25rem;
  font-size: 40px;
  color: #0c122c;
  font-weight: bold;
  border: 0;
  &::placeholder {
    color: #0c122c;
  }
`;

const Input = ({ inputHandler }) => {
  return (
    <Wrapper>
      <StyledInput placeholder="185" onChange={inputHandler}></StyledInput>;
      <p className="left">GB LEFT</p>
    </Wrapper>
  );
};

export default Input;
