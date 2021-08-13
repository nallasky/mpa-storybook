import React from "react";
import Visualization from "./Visualization";
import { createData } from "./DummyData";

export default {
  title: "Organisms/Visualization",
  component: Visualization
};

const optionData = [
  {
    type: "bar",
    z_axis: false
  },
  {
    type: "line",
    z_axis: false
  },
  {
    type: "box plot",
    z_axis: false
  },
  {
    type: "density plot",
    z_axis: true
  },
  {
    type: "bubble chart",
    z_axis: true
  }
];

const Template = (args) => <Visualization {...args} />;

export const Basic = Template.bind({})
Basic.args = {
  option: optionData,
  data: createData(7)
};