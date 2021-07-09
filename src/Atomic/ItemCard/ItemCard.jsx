import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

/**
 * ItemCard 컴포넌트는 박스를 렌더링합니다.
 
 * Analysis Tool에서는 MainPageItem 컴포넌트에서 다른 컴포넌트와 함께 조합하여 사용하고 있습니다.
 */
const ItemCard = ({ children, width, height, style }) => {
  return <div css={[wrapperStyle, { width, height}, style]}>{children}</div>;
};

ItemCard.propTypes = {
  /**
   * ItemCard 안에 표시할 내용을 설정합니다.
   */
  children: PropTypes.node.isRequired,
  /**
   * ItemCard의 너비를 설정합니다.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * ItemCard의 높이를 설정합니다.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * ItemCard에 커스텀 스타일을 적용할 때 설정합니다.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

ItemCard.defaultProps = {
  width: '250px',
  height: '250px',
};

const wrapperStyle = css`
  font-family: Saira, 'Nurito Sans';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  background: white;
  padding: 2rem 0;
`;

export default ItemCard;