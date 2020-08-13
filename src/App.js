import React from 'react';
import styled from 'styled-components';

import BackgroundPatternMobile from './images/bg-mobile.png';
import BackgroundPatternDesktop from './images/bg-desktop.png';
import Actions from './components/Actions';
import StorageBar from './components/StorageBar';

const Wrapper = styled.div`
  width: 100vw;
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
    background-size: 100% 50%;
    background-position: 0 100%;
  }
  .standard-padding {
    padding: 1.5rem;
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
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
    </Wrapper>
  );
}

export default App;
