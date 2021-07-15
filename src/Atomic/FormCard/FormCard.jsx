import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

/**
 * FormCard 컴포넌트는 각종 Input 항목을 렌더링 할 때 백그라운드로 사용합니다.
 */
const FormCard = ({ title, children, formStyle, titleStyle }) => {
  return (
    <div css={[formMainStyle, formStyle]}>
      <p css={[formTitleStyle, titleStyle]}>{title}</p>
      {children}
    </div>
  );
};

FormCard.propTypes = {
  /**
   * FormCard의 타이틀을 설정합니다.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Input 항목을 지정합니다.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]).isRequired,
  /**
   * FormCard의 스타일을 설정합니다.
   */
  formStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * 타이틀의 스타일을 설정합니다.
   */
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
FormCard.defaultProps = {
  title: 'Form Title',
};

const formMainStyle = css`
  padding: 1rem;
  background: #f0f5ff;
  font-family: Saira, "Nunito Sans";
`;

const formTitleStyle = css`
  color: #1890ff;
  font-weight: 600;
`;

export default FormCard;