import { css } from "@emotion/react";

export const mainWrapper = css`
  position: relative;
  font-family: saira;
  & > div + div {
    margin-top: 1rem; 
  }
  & table {
    font-size: 12px;
  }
  & > div:first-of-type {
    & > span {
      font-weight: bold;
    }
    & > div {
      &.ant-picker {
        margin-left: 0.5rem;
        margin-right: 1rem;
      }
      &:last-of-type {
        position: relative;
        display: inline-block;
        & > button:hover + div:first-of-type {
          display: block;
        }
        & > div:first-of-type {
          position: absolute;
          display: none;
          font-size: 12px;
          color: white;
          top: 3px;
          right: -90px;
          padding: 4px;
          border-radius: 2px;
          background: rgba(0,0,0,0.65);
          &::after {
            position: absolute;
            content: "";
            border-style: solid;
            border-color: transparent rgba(0,0,0,0.65) transparent transparent;
            border-width: 4px;
            top: 9px;
            left: -8px;
          }
        }
      }
    }
  }
`;

export const popupStyle = css`
  position: absolute;
  display: none;
  left: -10px;
  top: 46px;
  z-index: 100;
  width: 400px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05);
  font-family: saira;
  &::before {
    position: absolute;
    transform: rotate(-45deg);
    top: -4px;
    left: 21px;
    width: 10px;
    height: 10px;
    content: "";
    border: 5px solid #f0f0f0;
    border-color: #fff #fff transparent transparent;
    box-shadow: 2px -2px 6px rgba(0,0,0,0.06);
  }
  & > div {
    padding: 0.5rem 1rem;
    &:first-of-type {
      font-weight: bold;
      border-bottom: 1px solid #f0f0f0;
    }
    &:nth-of-type(2) {
      & > div + div {
        margin-top: 0.5rem;
      }
    }
    &:last-of-type {
      padding-top: 0.3rem;
      float: right;
      & > button + button {
        margin-left: 1rem;
      }
    }
  }
`;

export const selectWrapper = css`
  display: flex;
  align-items: center;
  & > label {
    font-size: 12px;
    margin-left: 0.5rem;
  }
`;

export const aggregationWrapper = css`
  display: flex;
`;

export const emptyWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;
