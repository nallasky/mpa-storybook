import React from "react";
import MainPageItem from "./MainPageItem";

export default {
  title: 'Molecules/MainPageItem',
  component: MainPageItem
};

const Template = (args) => <MainPageItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	mainText: "TEST",
	subText: "Testing MainPageItem component",
	buttonText: "Testing now",
	onClick: undefined
};