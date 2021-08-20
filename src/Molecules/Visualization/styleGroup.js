import { css } from "@emotion/react";

export const mainWrapper = css`
  display: grid;
  grid-template-rows: auto;
  row-gap: 2rem;
  min-width: 1440px;
  background: white;
`;

export const settingWrapper = css`
  position: relative;
`;

export const titleStyle = css`
  position: absolute;
  top: -5px;
  left: 24px;
  background: white;
  font-weight: bold;
  font-size: 14px;
  font-family: saira;
`;

export const hrStyle = css`
  border-color: #f1f1f1;
  border-style: solid;
  border-width: 1px 0 0 0;
  margin-bottom: 1.5rem;
`;

export const settingStyle = css`
  display: flex;
  justify-content: space-between;
  font-family: saira;
  & > div:nth-of-type(3) > div {
    margin-right: .5rem;
  }
`;

export const spanStyle = css`
  margin-right: .5rem;
`;

export const graphWrapper = css`
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  font-family: saira;
  width: 100%;
  & > div {
    padding: 1rem;
  }
`;

export const graphTitleStyle = css`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
  border-bottom: 1px solid #f1f1f1;
`;

export const graphBodyStyle = css`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
`;

export const emptyWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;