/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { iconTypes } from '@icon/Icon';

export default {
  component: Icon,
  title: 'atomic|Icon'
};

export const icon = () => <Icon icon="binoculars" />;

icon.story = {
  name: 'Default'
};

export const customSize = () => <Icon icon="binoculars" size="4rem" />;

export const customColor = () => <Icon icon="binoculars" color="#4cb15f" />;

export const customizedWithStyle = () => (
    <Icon icon="binoculars" css={{ color: '#f7e617', width: '5rem' }} />
);

export const listOfIcons = () => {
  return (
      <ul css={iconListStyle}>
        {iconTypes.map(icon => (
            <li key={icon}>
              <Icon icon={icon} />
              {icon}
            </li>
        ))}
      </ul>
  );
};

const iconListStyle = css`
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 600;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;