import React from 'react';
import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Status = styled.div`
  margin: 30px;
  font-style: italic;
  font-size: xx-large;
  color: red;
`;

export const Button = styled.div`
  width: fit-content;
  border: 1px solid grey;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: grey;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;
