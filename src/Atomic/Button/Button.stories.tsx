/** @jsx jsx */
import React from 'react';
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { jsx, css } from '@emotion/core';

export default {
	title: 'Atomic|Button',
	component: Button,
	decorators: [withKnobs]
};

export const button = () => {
	const label = text('children', 'BUTTON');
	const size = select('size', ['sm', 'md', 'lg'], 'md');
	const theme = select(
			'theme',
			['blue', 'green', 'orange'],
			'blue'
	);
	const disabled = boolean('disabled', false);
	const width = text('width', '');

	return (
			<Button
					size={size}
					theme={theme}
					disabled={disabled}
					width={width}
					onClick={action('onClick')}
			>
				{label}
			</Button>
	);
};

button.story = {
	name: 'Default'
};

export const blueButton = () => {
	return <Button theme="blue">BUTTON</Button>;
};

export const greenButton = () => {
	return <Button theme="green">BUTTON</Button>;
};

export const orangeButton = () => {
	return <Button theme="orange">BUTTON</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
    font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 600;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
	return (
			<div css={buttonWrapper}>
				<div>
					<div className="description">Small</div>
					<Button size="sm">BUTTON</Button>
				</div>
				<div>
					<div className="description">Medium</div>
					<Button size="md">BUTTON</Button>
				</div>
				<div>
					<div className="description">Big</div>
					<Button size="lg">BUTTON</Button>
				</div>
			</div>
	);
};

export const disabled = () => {
	return (
			<div css={buttonWrapper}>
				<div>
					<Button disabled>BUTTON</Button>
				</div>
				<div>
					<Button disabled theme="green">
						BUTTON
					</Button>
				</div>
				<div>
					<Button disabled theme="orange">
						BUTTON
					</Button>
				</div>
			</div>
	);
};

export const customSized = () => {
	return (
			<div css={buttonWrapper}>
				<div>
					<Button width="20rem">CUSTOM WIDTH</Button>
				</div>
				<div>
					<Button width="100%">FULL WIDTH</Button>
				</div>
			</div>
	);
};