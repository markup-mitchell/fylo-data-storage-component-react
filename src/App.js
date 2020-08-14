import React from 'react';
import styled from 'styled-components';

import BackgroundPatternMobile from './images/bg-mobile.png';
import BackgroundPatternDesktop from './images/bg-desktop.png';
import Actions from './components/Actions';
import StorageBar from './components/StorageBar';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c122c;
  background-image: url(${BackgroundPatternMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 927px) {
    background-image: url(${BackgroundPatternDesktop});
    background-size: 100% 52%;
    background-position: 0 100%;
  }
  .standard-padding {
    padding: 1.5rem;
    width: 100%;
  }
  .attribution {
    font-size: 11px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    color: white;
  }
  .attribution a {
    color: #ffa197;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  > * + * {
    margin: 1rem 0 0 0;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    > * + * {
      margin: 0 0 0 2rem;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <div className="standard-padding">
        <Row>
          <Actions></Actions>
          <StorageBar></StorageBar>
        </Row>
      </div>
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.markupmitchell.com">Mark Mitchell</a>.
      </div>
    </Wrapper>
  );
}

export default App;
