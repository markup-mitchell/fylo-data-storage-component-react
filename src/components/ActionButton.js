import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 10px;
  background-color: #0c122c;
  background-image: url(${(p) => p.icon});
  background-repeat: no-repeat;
  background-position: 50%;
  width: 48px;
  height: 48px;
`;

const ActionButton = ({ icon }) => {
  return <StyledButton icon={icon}></StyledButton>;
};

export default ActionButton;
