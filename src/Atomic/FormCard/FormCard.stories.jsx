import React from "react";
import FormCard from "./FormCard";
import { css } from '@emotion/react';
import { Form, Input, Select, Radio, Slider, Checkbox, DatePicker, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;

export default {
  title: "Atomic/FormCard",
  component: FormCard
};

const Template = (args) => {
  return (
    <FormCard title={args.title} formStyle={args.formStyle} titleStyle={args.titleStyle}>
      {args.children}
    </FormCard>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  title: "1. Test Input",
  children: <p>some setting here.</p>,
  formStyle: { width: "50%"},
  titleStyle: {}
};

const textStyle = css`
  width: 50%;
  & > .ant-row.ant-form-item:last-child {
    margin-bottom: 0;
  }
`;

export const TextForm = Template.bind({});
TextForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item label="Test" required>
      <Input />
    </Form.Item>,
  formStyle: textStyle,
  titleStyle: {}
};

export const SelectForm = Template.bind({});
SelectForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item label="Test" required>
      <Select placeholder="select option" dropdownStyle={{ fontFamily: "Saira, 'Nunito Sans'" }}>
        <Option value="1">Test 1</Option>
        <Option value="2">Test 2</Option>
        <Option value="3">Test 3</Option>
      </Select>
    </Form.Item>,
  formStyle: textStyle,
  titleStyle: {}
};

const radioStyle = css`
  width: 50%;
  & > .ant-row.ant-form-item {
    &:last-child {
      margin-bottom: 0;
    }
    & .ant-form-item-control-input-content {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const RadioForm = Template.bind({});
RadioForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item label="Test" required>
      <Radio value="1" checked>Test 1</Radio>
      <Radio value="2">Test 2</Radio>
      <Radio value="3">Test 3</Radio>
    </Form.Item>,
  formStyle: radioStyle,
  titleStyle: {}
};

const checkOptions = [
  { label: "Test 1", value: 1 },
  { label: "Test 2", value: 2 },
  { label: "Test 3", value: 3 },
];

const checkStyle = css`
  background: #fffac1;
  width: 50%;
  & > .ant-row.ant-form-item {
    &:last-child {
      margin-bottom: 0;
    }
    & .ant-checkbox-group {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const CheckboxForm = Template.bind({});
CheckboxForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item label="Test" required>
      <Checkbox.Group options={checkOptions} defaultValue={[1]} />
    </Form.Item>,
  formStyle: checkStyle,
  titleStyle: { color: "#ff962a" }
};

const sliderStyle = css`
  width: 50%;
  background: #f6dfff;
  & > .ant-row.ant-form-item:last-child {
    margin-bottom: 0;
  }
`;

export const SliderForm = Template.bind({});
SliderForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item label="Test" required>
      <Slider defaultValue={30} />
    </Form.Item>,
  formStyle: sliderStyle,
  titleStyle: {}
};

const datePickerStyle = css`
  width: 50%;
  & > .ant-row.ant-form-item {
    &:last-child {
      margin-bottom: 0;
    }
    & .ant-picker.ant-picker-range {
      width: 100%;
    }
  }
`;

export const DatepickerForm = Template.bind({});
DatepickerForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item label="Test" required>
      <RangePicker />
    </Form.Item>,
  formStyle: datePickerStyle,
  titleStyle: {}
};

export const UploadForm = Template.bind({});
UploadForm.args = {
  title: "1. Test Input",
  children:
    <Form.Item>
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
    </Form.Item>,
  formStyle: textStyle,
  titleStyle: {}
};
