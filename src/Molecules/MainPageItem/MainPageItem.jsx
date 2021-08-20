import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import ItemCard from "@ItemCard/ItemCard";
import Button from "@Button/Button";

/**
 * MainPageItem 컴포넌트는 ItemCard, Button 컴포넌트의 조합으로 만들어진 컴포넌트 입니다.
 
 * 이 컴포넌트는 Analysis Tool의 메인 페이지에서 각 기능 별 아이템을 렌더링 하는데 사용하고 있습니다.
 */
const MainPageItem = ({ mainText, subText, buttonText, onClick }) => {
  return (
    <ItemCard>
      <>
        <div css={contentStyle}>
          <p css={mainTextStyle}>{mainText}</p>
          <p css={subTextStyle}>{subText}</p>
        </div>
        <Button width="80%" onClick={onClick}>
          {buttonText}
        </Button>
      </>
    </ItemCard>
  );
};

MainPageItem.propTypes = {
  /**
   * 타이틀을 설정합니다.
   */
  mainText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 타이틀의 부연 설명을 설정합니다.
   */
  subText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 버튼에 표시할 내용을 설정합니다.
   */
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 버튼 클릭 시의 동작을 설정합니다.
   */
  onClick: PropTypes.func,
};

MainPageItem.defaultProps = {
  mainText: "Main text",
  subText: "Sub text",
  buttonText: "Button",
};

const mainTextStyle = css`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #002766;
`;

const subTextStyle = css`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #1890ff;
`;

const contentStyle = css`
  padding: 0 25px;
`;

export default MainPageItem;
