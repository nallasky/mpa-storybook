import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
	title: 'components|Button',
	component: Button,
	decorators: [withKnobs]
};

export const button = () => {
	const children = text('children', 'BUTTON');
	return <Button onClick={action('onClick')}>{children}</Button>;
};

button.story = {
	name: 'Default'
};

export const primaryButton = () => {
	return <Button>PRIMARY</Button>;
};