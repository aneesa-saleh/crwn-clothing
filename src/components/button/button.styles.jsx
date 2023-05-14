import styled from 'styled-components';
import Button from './button.component';

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

export const CartButton = styled(BaseButton)`
    min-width: 0;
    width: min-content;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0;
    font-size: 15px;
    background-color: transparent;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: block;
    justify-content: center;
    color: black;

    &:hover {
      border: none;
    }
`;
  