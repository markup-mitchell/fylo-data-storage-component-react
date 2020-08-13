import React from 'react';
import styled from 'styled-components';

import BackgroundPatternMobile from './images/bg-mobile.png';
import BackgroundPatternDesktop from './images/bg-desktop.png';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #0c122c;
  background-image: url(${BackgroundPatternMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 927px) {
    background-image: url(${BackgroundPatternDesktop});
    background-size: contain;
    background-position: bottom;
  }
`;

function App() {
  return <Wrapper></Wrapper>;
}

export default App;
