import React from "react";
import Graph from "./Graph";

export default {
  title: 'Atomic/Graph',
  component: Graph,
};

const Template = (args) => <Graph {...args} />

export const Basic = Template.bind({});
Basic.args = {
  plotProp: {
    data: [
      {
        x: ["Test 1", "Test 2", "Test 3"],
        y: [5, 10, 15],
        type: "bar"
      }
    ],
    layout: {
      title: "Test Graph",
      font: {
        family: "Saira, 'Nunito Sans'"
      }
    }
  },
  style: {}
};