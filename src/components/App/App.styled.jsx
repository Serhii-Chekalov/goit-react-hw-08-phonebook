import styled from '@emotion/styled';

export const PrimaryTitle = styled.h1`
  color: gray;
`;

export const SecondaryTitle = styled.h2`
  color: gray;
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 10px;
  margin-top: 8px;
  font-size: 14px;
  background-color: #0d6efd;
  border: none;
  border-radius: 10px;
  &:hover,
  &:active {
    cursor: pointer;
    background-color: #0b5fdd;
  }
`;
