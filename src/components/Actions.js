import React from 'react';
import styled from 'styled-components';

import document from '../images/icon-document.svg';
import folder from '../images/icon-folder.svg';
import upload from '../images/icon-upload.svg';
import logo from '../images/logo.svg';

import ActionButton from '../components/ActionButton';

const Wrapper = styled.div`
  padding: 40px;
  border-radius: 10px 100px 10px 10px;
  background-color: #1e2d69;

  #logo {
    max-width: 135px;
  }
  .flex {
    display: flex;
  }
  .column {
    flex-direction: column;
  }
  .icon-row {
    margin-top: 2rem;
  }
  .icon-row > * + * {
    margin-left: 1rem;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    padding-right: 134px;
  }
`;

const Actions = () => {
  return (
    <Wrapper>
      <div className="flex column">
        <img id="logo" src={logo} alt="Fylo" />
        <div className="flex icon-row">
          <ActionButton icon={document} />
          <ActionButton icon={folder} />
          <ActionButton icon={upload} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Actions;
