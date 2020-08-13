import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 154px;
  border-radius: 10px;
  background-color: #1e2d69;
  padding: 0 2rem;
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 476px;
  }

  * {
    font-family: 'Raleway', sans-serif;
  }

  p {
    font-size: 14px;
    color: white;
    text-align: center;
  }

  .justify-between {
    width: 100%;
    display: flex;
    color: white;
    justify-content: space-between;
    font-weight: bold;
    font-size: 12px;
  }
`;

const OuterBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #0c122c;
  padding: 3px;
`;
const InnerBar = styled.div`
  width: ${(p) => p.gb / 10}%;
  transition: width 0.5s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2px;
  height: 16px;
  border-radius: 7px;
  background-image: linear-gradient(to right, #ffa197, #ff4a95);
`;
const Circle = styled.div`
  min-width: 11px;
  min-height: 11px;
  border-radius: 100%;
  background-color: white;
`;
const StorageBar = () => {
  const [storage, setStorage] = useState('185');
  return (
    <StyledWrapper>
      <p>
        You've used <b>{storage}GB</b> of your storage
      </p>
      <OuterBar>
        <InnerBar gb={storage}>
          <Circle />
        </InnerBar>
      </OuterBar>
      <div className="justify-between">
        <p>0GB</p>
        <p>1000GB</p>
      </div>
      <Input inputHandler={(e) => setStorage(e.target.value || '185')} />
    </StyledWrapper>
  );
};

export default StorageBar;
