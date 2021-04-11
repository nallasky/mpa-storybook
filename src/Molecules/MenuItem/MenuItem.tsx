/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Button from '@button/Button';

const MenuItem = () => {
  return (
    <div css={wrapperStyle}>
      <div>
        <p css={titleStyle}>AFC</p>
        <p css={contentStyle}>Plate Auto Focus Compensation Data</p>
      </div>
      <Button theme="blue" width={"80%"}>BUTTON</Button>
    </div>
  );
};

const wrapperStyle = css`
  font-family: Saira, "Nurito Sans";
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
  border-radius: .5rem;
`;

const titleStyle = css`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #002766;
`;

const contentStyle = css`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #1890ff;
`;

export default MenuItem;