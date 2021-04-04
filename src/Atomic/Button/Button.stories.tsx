/** @jsx jsx */
import React from 'react';
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { jsx, css } from '@emotion/core';
import Icon from '../../Icon/Icon';

export default {
	title: 'Atomic|Button',
	component: Button,
	decorators: [withKnobs]
};

export const button = () => {
	const label = text('children', 'BUTTON');
	const size = select('size', ['sm', 'md', 'lg'], 'sm');
	const theme = select(
			'theme',
			['blue', 'green', 'orange', 'white'],
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

export const whiteButton = () => {
	return <Button theme="white">BUTTON</Button>;
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
				<div>
					<Button disabled theme="white">
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

export const withIcon = () => {
	return (
			<div css={buttonWrapper}>
				<div>
					<Button>
						<Icon icon="setting" /> BUTTON
					</Button>
				</div>
				<div>
					<Button theme="green">
						<Icon icon="setting" /> BUTTON
					</Button>
				</div>
				<div>
					<Button theme="orange">
						<Icon icon="heart" /> BUTTON
					</Button>
				</div>
				<div>
					<Button theme="white">
						<Icon icon="binoculars" /> BUTTON
					</Button>
				</div>
			</div>
	);
};

export const iconOnly = () => {
	return (
			<div css={buttonWrapper}>
				<div>
					<Button iconOnly>
						<Icon icon="heart" />
					</Button>
				</div>
				<div>
					<Button iconOnly size="md" theme="green">
						<Icon icon="heart" />
					</Button>
				</div>
				<div>
					<Button iconOnly size="lg" theme="orange">
						<Icon icon="heart" />
					</Button>
				</div>
			</div>
	);
};