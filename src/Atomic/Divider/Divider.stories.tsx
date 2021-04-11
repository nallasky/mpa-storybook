/** @jsx jsx */
import React from 'react';
import { withKnobs  } from '@storybook/addon-knobs';
import { jsx, css } from '@emotion/core';
import Divider from '@divider/Divider';

export default {
  title: 'Atomic|Divider',
  component: Divider,
  decorators: [withKnobs]
};

export const divider = () => <Divider />;

divider.story = {
  name: 'Default'
};

const dividerWrapper = css`
  text-align: left;
  & > div + div {
    margin-top: 2rem;
  }
`;

export const colors = () => {
  return (
    <div css={dividerWrapper}>
      <div>
        <Divider color={'gray'} />
      </div>
      <div>
        <Divider color={'black'} />
      </div>
    </div>
  )
};

export const types = () => {
  return (
      <div css={dividerWrapper}>
        <div>
          <Divider type={'dot'} />
        </div>
        <div>
          <Divider type={'dash'} />
        </div>
        <div>
          <Divider type={'solid'} />
        </div>
      </div>
  )
};

export const width = () => {
  return (
      <div css={dividerWrapper}>
        <div>
          <Divider width={"200px"} style={{ margin: 0 }} />
        </div>
        <div>
          <Divider width={'50%'} style={{ margin: 0 }} />
        </div>
        <div>
          <Divider width={'70%'} style={{ margin: 0 }} />
        </div>
        <div>
          <Divider width={'50rem'} style={{ margin: 0 }} />
        </div>
        <div>
          <Divider width={'100%'} style={{ margin: 0 }} />
        </div>
      </div>
  )
};

export const height = () => {
  return (
      <div css={dividerWrapper}>
        <div>
          <Divider />
        </div>
        <div>
          <Divider height={"3px"} />
        </div>
        <div>
          <Divider height={'0.5rem'} />
        </div>
        <div>
          <Divider height={'10px'} />
        </div>
      </div>
  );
};