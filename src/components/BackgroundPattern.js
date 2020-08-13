import React from 'react';
import styled from 'styled-components';

import Background from '../images/bg-desktop.png';

const Img = styled.img`
  position: absolute;
  bottom: 0;
`;

const BackgroundPattern = () => {
  return <Img src={Background} alt="" />;
};

export default BackgroundPattern;
