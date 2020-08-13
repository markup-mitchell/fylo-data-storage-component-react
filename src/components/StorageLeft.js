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
    margin-left: 0.5rem;
  }
`;

const StorageLeft = ({ storageLeft }) => {
  return (
    <StyledDiv>
      {storageLeft}
      <p className="left">GB LEFT</p>
    </StyledDiv>
  );
};

export default StorageLeft;
