import React from "react";
import AnalysisTable from "./AnalysisTable";
import { createData } from "./DummyData";
import PropTypes from "prop-types";

export default {
  title: "Molecules/AnalysisTable",
  component: AnalysisTable
};

const Template = (args) => <AnalysisTable {...args} />;
const dummyData = createData(20);

export const Basic = Template.bind({});
Basic.args = {
  period: dummyData.period,
  filter: dummyData.filter,
  aggregation: dummyData.aggregation,
  tableOrder: dummyData.data.disp_order,
  tableData: dummyData.data.analysis
};