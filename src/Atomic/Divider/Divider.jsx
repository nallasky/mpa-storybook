import React from "react";
import { css } from '@emotion/react';
import PropTypes from "prop-types";


/**
 * Divider 컴포넌트는 콘텐츠와 콘텐츠 사이를 구분할 때 사용합니다. 
 */
const Divider = ({ color, type, width, height, style }) => {
  return (
    <hr css={[
      { width: width || '100%', borderWidth: height || '1px' },
        colors[color],
        types[type],
        style
      ]}
    />
  );
};

Divider.propTypes = {
  /**
  * Divider의 색상을 설정합니다.
  */
  color: PropTypes.oneOf(['gray', 'black']),
  /** Divider의 스타일을 설정합니다. */
  type: PropTypes.oneOf(['dot', 'dash', 'solid']),
  /** Divider의 너비를 설정합니다. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Divider의 높이를 설정합니다. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Divider에 별도의 스타일을 지정하는 경우에 설정합니다. */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Divider.defaultProps = {
  color: 'gray',
  type: 'dash'
};

const colors = {
  'gray': css`
    border-color: rgba(0,0,0,.1);
  `,
  'black': css`
    border-color: black;
  `
};

const types = {
  'dot': css`
    border-style: dotted
  `,
  'dash': css`
    border-style: dashed
  `,
  'solid': css`
    border-style: solid
  `
};

export default Divider;