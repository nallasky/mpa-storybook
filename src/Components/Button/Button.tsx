/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ButtonProps = {
	/** 버튼 안의 내용 */
	children: React.ReactNode;
	/** 클릭 시 호출되는 함수 */
	onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

/** Button 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다. */
const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button css={style} onClick={onClick}>
			{children}
		</button>
	);
};

const style = css`
	outline: none;
	border: none;
	box-sizing: border-box;
	font-size: .875rem;
	padding: .5rem 1rem;
	background: #20c997;
	color: white;
	border-radius: .25rem;
	line-height: 1;
	font-weight: 600;
	&:focus {
		box-shadow: 0 0 8px rgba(0,0,0,0.2);
	}
	&:hover {
		background: #38d9a9;
	}
	&:active {
		background: #12b886;
	}
`;

export default Button;