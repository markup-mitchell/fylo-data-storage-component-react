import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
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
  @media (min-width: 1024px) {
    position: absolute;
    right: 40px;
    top: -3.5rem;
  }
  svg {
    display: none;
    position: absolute;
    bottom: -15px;
    right: 0.5px;
    fill: white;
    transform: rotate(180deg); /* polygon plotting is off ?!? */
    transform-origin: center; /* no idea why, but this is the workaround for now! */
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

const StorageLeft = ({ storage }) => {
  return (
    <StyledDiv>
      {1000 - storage}
      <p className="left">GB LEFT</p>
      <svg height="23" width="23" viewBox="0 0 24 24">
        <polygon points="23,23 0,23 0,0" />
      </svg>
    </StyledDiv>
  );
};

export default StorageLeft;
