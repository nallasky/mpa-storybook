import { css } from "@emotion/react";

export const buttonWrapper = css`
  position: relative;
  font-family: saira;
`;

export const popupStyle = css`
  position: absolute;
  display: none;
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
    left: 19px;
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
  & > div + div {
    margin-left: .5rem;
  }
`;

export const inputWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  & label {
    height: 0;
  }
  & .ant-form-item {
    margin-bottom: 0;
  }
  & .ant-form-item-explain {
    min-height: 0;
    display: none;
    &.ant-form-item-explain-error {
      display: block;
    }
  }
`;