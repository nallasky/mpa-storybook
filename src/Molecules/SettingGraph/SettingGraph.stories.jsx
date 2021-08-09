import React from "react";
import SettingGraph from "./SettingGraph";

export default {
  title: "Molecules/SettingGraph",
  component: SettingGraph
};

const Template = (args) => <SettingGraph {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  graphType: "box plot",
  x: ["Test 1", "Test 2", "Test 3"],
  y: [5, 10, 15],
  z: undefined,
  title: "Test Graph"
};