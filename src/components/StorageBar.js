import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 154px;
  border-radius: 10px;
  background-color: #1e2d69;
  @media (min-width: 1024px) {
    max-width: 540px;
  }
`;

const StorageBar = () => {
  return <StyledWrapper />;
};

export default StorageBar;
