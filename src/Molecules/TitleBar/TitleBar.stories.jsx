import React from "react";
import PropTypes from "prop-types";
import TitleBar from "./TitleBar";
import { BulbTwoTone } from '@ant-design/icons';

export default {
  title: 'Molecules/TitleBar',
  component: TitleBar
};

const Template = (args) => <TitleBar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  icon: (
    <BulbTwoTone
      style={{ fontSize: '30px', display: 'flex', alignItems: 'center' }}
    />
  ),
  text: 'Title',
};