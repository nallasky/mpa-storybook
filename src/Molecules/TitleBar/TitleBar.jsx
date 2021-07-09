import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import Divider from "@Divider/Divider";
import { BulbTwoTone } from "@ant-design/icons";

/**
 * TitleBar 컴포넌트는 아이콘, 타이틀, Divider 컴포넌트를 조합하여 만들어진 컴포넌트 입니다.
 
 * 이 컴포넌트는 Analysis Tool의 메인 페이지에서 각 기능 별 아이템의 타이틀을 렌더링 하는데 사용하고 있습니다.
 */
const TitleBar = ({ icon, text, bgColor }) => {
  const colorSet = css`
    background: ${bgColor};
  `;

  return (
    <div css={wrapperStyle}>
      <div css={[iconTextStyle, colorSet]}>
        {icon}
        <label css={labelStyle}>{text}</label>
      </div>
      <Divider style={{ height: 0 }} />
    </div>
  );
};

TitleBar.propTypes = {
  /**
   * 표시할 아이콘을 설정합니다.
   */
  icon: PropTypes.element,
  /**
   * 타이틀을 설정합니다.
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 아이콘 및 타이틀의 배경 색상을 설정합니다.
   */
  bgColor: PropTypes.string
};

TitleBar.defaultProps = {
  icon: (
    <BulbTwoTone
      style={{ fontSize: '30px', display: 'flex', alignItems: 'center' }}
    />
  ),
  text: 'Title',
};

const wrapperStyle = css`
  font-family: Saira, 'Nurito Sans';
  display: flex;
  align-items: center;
  position: relative;
  margin: 1rem 0;
`;

const iconTextStyle = css`
  position: absolute;
  background: #f0f2f5;
  display: flex;
`;

const labelStyle = css`
  padding: 0 3.5rem;
  color: #096dd9;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
`;

export default TitleBar;
