/** @jsx jsx */
import React from 'react';
import Button from '../Button';
import { jsx } from '@emotion/core';
import { mount } from "enzyme";

describe('Button test', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('check onClick function', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<Button onClick={clickFunc}>Test</Button>);
    expect(clickFunc).not.toHaveBeenCalled();

    wrapper.find('button').simulate('click');
    expect(clickFunc).toHaveBeenCalledTimes(1);
  });
});