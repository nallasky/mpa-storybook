import React from "react";
import SettingGraph from "./SettingGraph";

export default {
  title: "Molecules/SettingGraph",
  component: SettingGraph
};

const Template = (args) => <SettingGraph {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  graphType: ["bar"],
  x: ["2021-08-10 10:00:00", "2021-08-11 10:00:00", "2021-08-12 10:00:00",],
  y: [5, 10, 15],
  z: undefined,
  title: "Test Graph"
};