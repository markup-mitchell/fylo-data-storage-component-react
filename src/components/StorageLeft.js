import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-radius: 10px;
  background: white;
  padding: 1rem 1.5rem;
  font-size: 40px;
  color: #0c122c;
  font-weight: bold;
  .left {
    color: #0c122c;
    font-weight: bold;
    white-space: nowrap;
    opacity: 0.5;
    margin: 0.5rem 0 0 0.5rem;
  }
`;

const StorageLeft = ({ storage }) => {
  return (
    <StyledDiv>
      {1000 - storage}
      <p className="left">GB LEFT</p>
    </StyledDiv>
  );
};

export default StorageLeft;
