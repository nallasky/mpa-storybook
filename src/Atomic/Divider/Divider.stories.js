import React from "react";
import { css } from '@emotion/react';
import Divider from './Divider';
import { withTests } from "@storybook/addon-jest";
import results from '../../.jest-test-results.json';

export default {
  title: 'Atomic/Divider',
  component: Divider,
  decorators: [withTests({ results })]
};

const Template = (args) => <Divider {...args} />

export const Basic = Template.bind({});
Basic.args = {
  color: 'gray',
  type: 'dash'
};

const dividerWrapper = css`
  text-align: left;
  & > div + div {
    margin-top: 2rem;
  }
`;

export const Colors = () => {
  return (
    <div css={dividerWrapper}>
      <div>
        <Divider color="gray" />
      </div>
      <div>
        <Divider color="black" />
      </div>
    </div>
  )
};

export const Types = () => {
  return (
    <div css={dividerWrapper}>
      <div>
        <Divider type="dot" />
      </div>
      <div>
        <Divider type="dash" />
      </div>
      <div>
        <Divider type="solid" />
      </div>
    </div>
  )
};

export const Width = () => {
  return (
    <div css={dividerWrapper}>
      <div>
        <Divider width="200px" style={{ margin: 0 }} />
      </div>
      <div>
        <Divider width="50%" style={{ margin: 0 }} />
      </div>
      <div>
        <Divider width="70%" style={{ margin: 0 }} />
      </div>
      <div>
        <Divider width="50rem" style={{ margin: 0 }} />
      </div>
      <div>
        <Divider width="100%" style={{ margin: 0 }} />
      </div>
    </div>
  )
};

export const Height = () => {
  return (
    <div css={dividerWrapper}>
      <div>
        <Divider />
      </div>
      <div>
        <Divider height="3px" />
      </div>
      <div>
        <Divider height="0.5rem" />
      </div>
      <div>
        <Divider height="10px" />
      </div>
    </div>
  );
};