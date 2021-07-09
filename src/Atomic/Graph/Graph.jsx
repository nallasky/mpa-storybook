import React from "react";
import { css } from '@emotion/react';
import Plot from "react-plotly.js"

const graphWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Graph = ({ plotProp, style }) => {
  return (
    <div css={[graphWrapper, style]}>
      <Plot {...plotProp} />
    </div>
  );
};