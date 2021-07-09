import React from "react";
import ItemCard from './ItemCard';
import { css } from '@emotion/react';
import { Form, Input, Button, Checkbox } from 'antd';

export default {
  title: 'Atomic/ItemCard',
  component: ItemCard,
};

const Template = (args) => {
	return (
		<ItemCard
			height={args.height}
			width={args.width}
			style={args.style}
		>
			{args.children}
		</ItemCard>
	);
};

const AntdForm = () => {
	return (
		<Form
		  name="basic"
		  initialValues={{ remember: true }}
		>
		  <Form.Item
			label="Username"
			name="username"
			rules={[{ required: true, message: 'Please input your username!' }]}
		  >
			<Input />
		  </Form.Item>
		  <Form.Item
			label="Password"
			name="password"
			rules={[{ required: true, message: 'Please input your password!' }]}
		  >
			<Input.Password />
		  </Form.Item>
		  <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
			<Checkbox>Remember me</Checkbox>
		  </Form.Item>
		  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
			<Button type="primary" htmlType="submit">
			  Submit
			</Button>
		  </Form.Item>
		</Form>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	children: <p>some contents here</p>,
	width: "250px",
	height: "250px",
};

export const Examples = Template.bind({});
Examples.args = {
	children: <AntdForm />,
	width: "400px",
	height: "400px",
	style: { backgroundColor: "#f7f3f3"}
};