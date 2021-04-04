/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ButtonProps = {
	/** 버튼 안의 내용 */
	children: React.ReactNode;
	/** 클릭 시 호출되는 함수 */
	onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
	/** 버튼의 테마를 설정합니다. */
	theme: 'blue' | 'green' | 'orange';
	/** 버튼의 크기를 설정합니다. */
	size: 'sm' | 'md' | 'lg';
	/** 버튼을 비활성화 시킵니다. */
	disabled?: boolean;
	/** 버튼의 너비를 설정합니다. */
	width?: string | number;
};

/** Button 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다. */
const Button = ({ children, onClick, theme, size, disabled, width }: ButtonProps) => {
	return (
		<button
				css={[style, themes[theme], sizes[size], { width }]}
				onClick={onClick}
				disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	theme: 'blue',
	size: 'sm'
};

const style = css`
	outline: none;
	border: none;
	color: white;
	box-sizing: border-box;
	border-radius: .25rem;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
	transition: transform .15s, box-shadow .15s;
	box-shadow: 0px 3px 3px rgba(0,0,0,0.25);
	&:active:enabled {
		transform: translateY(2px);
		box-shadow: none;
	}
	&:disabled {
		cursor: not-allowed;
	}
`;

const themes = {
	blue: css`
    background: rgb(24, 144, 255);
    &:hover:enabled {
      background: rgba(24, 144, 255, .8);
    }
		&:disabled {
			background: rgba(24, 144, 255, .4);
		}
  `,
	green: css`
    background: rgb(60, 191, 100);
    &:hover:enabled {
      background: rgba(60, 191, 100, .8);
    }
		&:disabled {
			background: rgba(60, 191, 100, .4);
		}
	`,
	orange: css`
		background: rgb(232, 92, 25);
    &:hover:enabled {
      background: rgba(232, 92, 25, .8);
    }
		&:disabled {
			background: rgba(232, 92, 25, .4);
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

export default Button;