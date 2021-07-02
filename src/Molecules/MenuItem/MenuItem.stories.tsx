/** @jsx jsx */
import React from 'react';
import { withKnobs  } from '@storybook/addon-knobs';
import { jsx, css } from '@emotion/core';
import MenuItem from "./MenuItem";

export default {
  title: 'Molecules|Menu item',
  component: MenuItem,
  decorators: [withKnobs]
};

export const menuItem = () => {
  return (
    <div css={style}>
      <MenuItem />
    </div>
  );
};

menuItem.story = {
  name: 'Default'
};

const style = css`
  margin: 2rem;
`;