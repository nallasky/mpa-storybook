import React from "react";
import TitleBar from "./TitleBar";
import { BulbTwoTone } from '@ant-design/icons';

export default {
  title: 'Molecules/TitleBar',
  component: TitleBar,
  argTypes: {
    bgColor: {
      control: { type: "color" }
    }
  }
};

const Template = (args) => <TitleBar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  icon: (
    <BulbTwoTone
      style={{ fontSize: "30px", display: "flex", alignItems: "center" }}
    />
  ),
  text: "Title",
  bgColor: "white"
};