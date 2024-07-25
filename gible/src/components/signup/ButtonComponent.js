import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  box-sizing : border-box;
  padding: 14px 24px;
  min-width : 120px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main-color);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  border: none;
  font-family : pretendard;
  cursor: pointer;

  ${props => props.$customStyles && css`
    ${props.$customStyles}
  `}
`;

const ButtonComponent = ({ text, onClick, customStyles }) => {
  return (
    <Button onClick={onClick} $customStyles={customStyles}>
      {text}
    </Button>
  );
};

export default ButtonComponent;