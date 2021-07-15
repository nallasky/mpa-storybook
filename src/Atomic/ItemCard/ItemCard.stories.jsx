import React from "react";
import ItemCard from './ItemCard';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

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

const ExamChildren = () => {
	return (
		<>
			<p>
				Team Builder
			</p>
			<p>
				Scans our talent network to create the optimal team for your project.
			</p>
			<p>
				<FontAwesomeIcon icon={faUsers} size="4x" />
			</p>
		</>
	);
};

const examStyle = css`
	border-top: 8px solid #8ce99a;
	box-shadow: 0 4px 16px rgb(0,0,0,.25);
	padding: 0 2rem;
	& > p {
		width: 100%;
		&:nth-child(1) {
			font-size: 26px;
			font-weight: 700;
			margin: 1rem 0;
			text-shadow: 2px 2px 3px rgba(0,0,0,.3);
		}
		&:nth-child(2) {
			margin: 0;
			font-size: 14px;
			color: rgba(0,0,0,.6);
		}
		&:nth-child(3) {
			color: #2bb940;
			text-align: right;
		}
	}
`;

export const Basic = Template.bind({});
Basic.args = {
	children: <p>some contents here</p>,
	width: "250px",
	height: "250px",
};

export const Example = Template.bind({});
Example.args = {
	children: <ExamChildren />,
	width: "380px",
	height: "240px",
	style: examStyle
};