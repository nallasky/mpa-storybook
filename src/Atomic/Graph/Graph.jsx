import React from "react";
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Plot from "react-plotly.js"

/**
 * Graph 컴포넌트는 plotly 라이브러리를 사용하여 그래프를 렌더링합니다.
 */
const Graph = ({ plotProp, style }) => {
  return (
    <div css={[graphWrapper, style]}>
      <Plot {...plotProp} />
    </div>
  );
};

Graph.propTypes = {
  /**
   * 그래프를 렌더링 하는데 필요한 데이터를 설정합니다. (Plotly 공식 reference 사이트 참고.)
   */
  plotProp: PropTypes.object.isRequired,
  /**
   * 백그라운드의 스타일을 설정합니다.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const graphWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Graph;