/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Divider from "@divider/Divider";
import Icon from '@icon/Icon';

const TitleBar = () => {
  return (
      <div css={wrapperStyle}>
        <div css={iconTextStyle}>
          <Icon icon={'bulb'} color={'#096dd9'} size={'40px'} />
          <label css={labelStyle}>Title</label>
        </div>
        <Divider style={{ height: 0 }}/>
      </div>
  );
};

const wrapperStyle = css`
  font-family: Saira, "Nurito Sans";
  display: flex;
  align-items: center;
  position: relative;
`;

const iconTextStyle = css`
  position: absolute;
  background: white;
  display: flex;
  left: 0;
`;

const labelStyle = css`
  padding: 0 3.5rem;
  color: #096dd9;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 0 3px 2px rgba(0,0,0,.2);
`;

export default TitleBar;