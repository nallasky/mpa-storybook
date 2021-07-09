import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

/**
 * Button 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.
 */
const Button = ({ children, onClick, theme, size, disabled, width, iconOnly, style }) => {
	return (
		<button
			css={[
				defStyle,
				themes[theme],
				sizes[size],
				{ width },
				iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
				style
			]}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
  /**
   * 버튼 안에 표시할 내용을 설정합니다.
   */
  children: PropTypes.node.isRequired,
  /**
   * 버튼 클릭 시 호출되는 함수를 설정합니다.
   */
  onClick: PropTypes.func,
  /**
   * 버튼의 테마를 설정합니다.
   */
  theme: PropTypes.oneOf(['blue', 'green', 'orange', 'white']),
  /**
   * 버튼의 크기를 설정합니다.
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * 버튼의 활성화 여부를 설정합니다.
   */
  disabled: PropTypes.bool,
  /**
   * 버튼의 너비를 설정합니다.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 버튼 안에 아이콘만 표시할 때 설정합니다.
   */
  iconOnly: PropTypes.bool,
  /**
   * 버튼에 커스텀 스타일을 적용할 때 설정합니다.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Button.defaultProps = {
	theme: 'blue',
	size: 'sm'
};

const defStyle = css`
	outline: none;
	border: none;
	color: white;
	box-sizing: border-box;
	border-radius: .5rem;
	height: 2rem;
	font-family: Saira, "Nunito Sans";
	font-size: 0.875rem;
	padding: 0 1rem;
	font-weight: 600;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 3px 3px rgba(0,0,0,0.25);
	&:active:enabled {
    transform: translateY(2px);
    box-shadow: none;
	}
  &:hover:not(:disabled) {
    cursor: pointer;
  }
	&:disabled {
    cursor: not-allowed;
	}
  svg {
    fill: currentColor;
    width: 1em;
    margin-right: 1em;
  }
`;

const themes = {
  blue: css`
    background: rgb(24, 144, 255);
    &:hover:not(:disabled) {
      background: rgba(24, 144, 255, 0.8);
    }
    &:disabled {
      background: rgba(24, 144, 255, 0.4);
    }
  `,
  green: css`
    background: rgb(60, 191, 100);
    &:hover:not(:disabled) {
      background: rgba(60, 191, 100, 0.8);
    }
    &:disabled {
      background: rgba(60, 191, 100, 0.4);
    }
  `,
  orange: css`
    background: rgb(232, 92, 25);
    &:hover:not(:disabled) {
      background: rgba(232, 92, 25, 0.8);
    }
    &:disabled {
      background: rgba(232, 92, 25, 0.4);
    }
  `,
  white: css`
    background: white;
    color: rgba(0, 0, 0, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
    &:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.05);
    }
    &:disabled {
      color: rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.04);
    }
  `
};

const sizes = {
  sm: css`
	  height: 1.75rem;
	  font-size: 0.75rem;
	  padding: 0 0.875rem;
  `,
  md: css`
	  height: 2.5rem;
	  font-size: 1rem;
	  padding: 0 1rem;
  `,
  lg: css`
	  height: 3rem;
	  font-size: 1.125rem;
	  padding: 0 1.5rem;
  `
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  sm: css`
    width: 1.75rem;
  `,
  md: css`
    width: 2.5rem;
  `,
  lg: css`
    width: 3rem;
  `
};

export default Button;