import React from "react";
import Button from './Button';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBandAid, faBell, faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { withTests } from "@storybook/addon-jest";
import results from '../../.jest-test-results.json';

export default {
  title: 'Atomic/Button',
  component: Button,
  decorators: [withTests({ results })]
};

const Template = (args) => {
	return (
		<Button
			theme={args.theme}
			size={args.size}
			disabled={args.disabled}
			width={args.width}
			iconOnly={args.iconOnly}
			style={args.style}
			onClick={args.onClick}
		>
			{args.children}
		</Button>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	children: "BUTTON",
	theme: "blue",
	size: "sm"
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
    font-family: Saira;
    font-weight: 600;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const Themes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Default(Blue)</div>
        <Button>BUTTON</Button>
      </div>
      <div>
        <div className="description">Green</div>
        <Button theme="green">BUTTON</Button>
      </div>
      <div>
        <div className="description">Orange</div>
        <Button theme="orange">BUTTON</Button>
      </div>
      <div>
          <div className="description">White</div>
        <Button theme="white">BUTTON</Button>
      </div>
    </div>
  );
};

export const Sizes = () => {
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

export const Disabled = () => {
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

export const Width = () => {
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

export const WithIcon = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button>
          <FontAwesomeIcon icon={faAddressCard} /> BUTTON
        </Button>
      </div>
      <div>
        <Button theme="green">
          <FontAwesomeIcon icon={faBandAid} /> BUTTON
        </Button>
      </div>
      <div>
        <Button theme="orange">
          <FontAwesomeIcon icon={faBell} /> BUTTON
        </Button>
      </div>
      <div>
        <Button theme="white">
          <FontAwesomeIcon icon={faBolt} /> BUTTON
        </Button>
      </div>
    </div>
  );
};

export const IconOnly = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button iconOnly>
          <FontAwesomeIcon icon={faClock} />
        </Button>
      </div>
      <div>
        <Button iconOnly size="md" theme="green">
          <FontAwesomeIcon icon={faClock} />
        </Button>
      </div>
      <div>
        <Button iconOnly size="lg" theme="orange">
          <FontAwesomeIcon icon={faClock} />
        </Button>
      </div>
      <div>
        <Button iconOnly size="lg" theme="white">
          <FontAwesomeIcon icon={faClock} />
        </Button>
      </div>
    </div>
  );
};