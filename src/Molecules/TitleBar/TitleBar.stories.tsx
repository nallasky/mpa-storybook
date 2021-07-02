/** @jsx jsx */
import React from 'react';
import { withKnobs  } from '@storybook/addon-knobs';
import { jsx, css } from '@emotion/core';
import TitleBar from "./TitleBar";


export default {
  title: 'Molecules|Title bar',
  component: TitleBar,
  decorators: [withKnobs]
};

export const titleBar = () => {
  return (
    <div css={style}>
      <TitleBar/>
    </div>
  );
};

titleBar.story = {
  name: 'Default'
};

const style = css`
  margin: 2rem;
`;